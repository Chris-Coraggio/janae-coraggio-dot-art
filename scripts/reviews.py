#!/usr/bin/env python3
"""
Amazon Review Scraper — Janae L. Dueck / Janae Dueck Coraggio
--------------------------------------------------------------
Scrapes all reviews for books by this author from Amazon and saves them as
Jekyll-compatible Markdown front-matter files.

It does two things automatically:
  1. Tries to discover books by scraping the Amazon author page (B01A3X7VSM).
  2. Falls back to a hardcoded catalog (found via search) if the page is blocked.

Usage:
    pip install requests beautifulsoup4
    python scrape_amazon_reviews.py

NOTE: For personal/non-commercial use only. Amazon's ToS prohibits scraping.
      Use respectfully — don't run repeatedly or at high frequency.
"""

import re
import time
import random
from datetime import datetime
from pathlib import Path

import requests
from bs4 import BeautifulSoup

# ── Configuration ─────────────────────────────────────────────────────────────

AUTHOR_ID  = "B01A3X7VSM"          # Amazon author page ID
OUTPUT_DIR = Path("../_reviews")    # folder where .md files are saved
DELAY_MIN  = 3.0                    # min seconds between requests (be polite)
DELAY_MAX  = 7.0                    # max seconds between requests

# Hardcoded fallback catalog — pre-populated from your known books.
# ASINs are the dp/ portion of the Amazon product URL.
# Add any new books here if auto-discovery misses them.
FALLBACK_BOOKS = {
    "1400236347": "Coloring God's Love for Me: 100 Devotions to Inspire Young Hearts",
    "0692604693": "To My Falling Leaves: The Story of Autumn",
    "057854055X": "Sitting with My Lions: Being Brave Like Daniel in the Lion's Den",
    "0578670291": "The Happy Field",
    "0578920557": "Walking with My Elephant",
    "1069460605": "The Space Between Us",
    "1952721172": "Whispers of the Heart",
}

USER_AGENTS = [
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
]

# ── Cookie auth (optional but recommended) ────────────────────────────────────
# Amazon often hides reviews from unauthenticated requests.
# To pass your session cookies:
#   1. Log into amazon.com in Chrome/Firefox
#   2. Install the "Cookie-Editor" browser extension
#   3. Export cookies as "Header String" and paste below
# Leave as empty string to scrape without auth (may miss reviews).
COOKIE_STRING = ""
# Example: COOKIE_STRING = "session-id=123; ubid-main=456; ..."

# ── Helpers ───────────────────────────────────────────────────────────────────

def get_headers(cookie: str = "", referer: str = "https://www.amazon.com/") -> dict:
    headers = {
        "User-Agent": random.choice(USER_AGENTS),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": referer,
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Sec-CH-UA": '"Chromium";v="147", "Google Chrome";v="147", "Not=A?Brand";v="24"',
        "Sec-CH-UA-Mobile": "?0",
        "Sec-CH-UA-Platform": '"macOS"',
        "Upgrade-Insecure-Requests": "1",
        "Connection": "keep-alive",
    }
    if cookie:
        headers["Cookie"] = cookie
    return headers


def is_blocked(html: str) -> bool:
    return (
        "api-services-support@amazon.com" in html
        or "captcha" in html.lower()
        or "Robot Check" in html
        or "Enter the characters you see below" in html
    )


def reviews_url(asin: str, page: int = 1) -> str:
    return (
        f"https://www.amazon.com/product-reviews/{asin}"
        f"?ie=UTF8&reviewerType=all_reviews&pageNumber={page}&sortBy=recent&filterByStar=all_stars"
    )


def author_page_url(author_id: str) -> str:
    return f"https://www.amazon.com/Janae-L.-Dueck/e/{author_id}"


def parse_rating(star_text: str) -> int:
    match = re.search(r"(\d+\.?\d*)\s+out of", star_text or "")
    return int(float(match.group(1))) if match else 0


def parse_date(date_text: str) -> str:
    match = re.search(r"on (.+)$", date_text or "")
    if match:
        try:
            return datetime.strptime(match.group(1).strip(), "%B %d, %Y").strftime("%Y-%m-%d")
        except ValueError:
            pass
    return datetime.today().strftime("%Y-%m-%d")


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_-]+", "-", text)
    return text.strip("-")


def yaml_escape(value: str) -> str:
    return '"' + value.replace('"', '\\"') + '"'


def to_markdown(review: dict) -> str:
    return "\n".join([
        "---",
        "layout: none",
        f"reviewer_name: {yaml_escape(review['reviewer_name'])}",
        f"rating: {review['rating']}",
        f"review_title: {yaml_escape(review['review_title'])}",
        f"book_title: {yaml_escape(review['book_title'])}",
        f"date: {review['date']}",
        f"verified_purchase: {str(review['verified_purchase']).lower()}",
        f"helpful_count: {review['helpful_count']}",
        "---",
        "",
        review["body"],
        "",
    ])


# ── Author page discovery ─────────────────────────────────────────────────────

def discover_books(session: requests.Session, cookie: str = "") -> dict[str, str]:
    """
    Try to scrape the author page for book ASINs + titles.
    Returns a dict of {asin: title}, or empty dict if blocked.
    """
    url = author_page_url(AUTHOR_ID)
    print(f"🔍 Attempting to discover books from author page: {url}")

    try:
        resp = session.get(url, headers=get_headers(cookie), timeout=15)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"  ⚠ Author page request failed: {e}")
        return {}

    if is_blocked(resp.text):
        print("  ⚠ Author page is blocked (CAPTCHA/robot check).")
        return {}

    soup = BeautifulSoup(resp.text, "html.parser")
    books = {}

    # Amazon author pages list books in <li> or <div> elements with /dp/ links
    for a_tag in soup.find_all("a", href=re.compile(r"/dp/([A-Z0-9]{10})")):
        href = a_tag.get("href", "")
        m = re.search(r"/dp/([A-Z0-9]{10})", href)
        if not m:
            continue
        asin = m.group(1)

        # Try to get a title from the link text or a nearby element
        title = a_tag.get_text(strip=True)
        if not title or len(title) < 3:
            # Look at parent or sibling for title text
            parent = a_tag.find_parent()
            title = parent.get_text(strip=True) if parent else ""

        if asin and title:
            books[asin] = title[:120]  # cap length

    if books:
        print(f"  ✓ Discovered {len(books)} book(s) from author page.")
    else:
        print("  ℹ No books found on author page (page structure may have changed).")

    return books


# ── Review scraping ───────────────────────────────────────────────────────────

DEBUG = False   # set True to save raw HTML for selector debugging


def scrape_page(session: requests.Session, asin: str, page: int, cookie: str = "") -> list[dict]:
    url = reviews_url(asin, page)
    print(f"  Fetching page {page}: {url}")

    # Use the product page as referer so it looks like natural navigation
    product_referer = f"https://www.amazon.com/dp/{asin}"
    try:
        resp = session.get(url, headers=get_headers(cookie, referer=product_referer), timeout=15)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"  ⚠ Request failed: {e}")
        return [], False

    if is_blocked(resp.text):
        print("  ⚠ Amazon served a CAPTCHA. Wait a while then try again.")
        return [], False

    if DEBUG:
        debug_path = Path(f"debug_{asin}_p{page}.html")
        debug_path.write_text(resp.text, encoding="utf-8")
        print(f"  🐛 HTML saved to {debug_path} — open it and search for a reviewer name to find the right selectors.")

    soup = BeautifulSoup(resp.text, "html.parser")

    # Try multiple known selector patterns — Amazon changes these periodically
    review_divs = (
        soup.select("div[data-hook='review']") or
        soup.select("div[id^='customer_review-']") or
        soup.select("div[id^='review-']") or
        soup.select(".review")
    )

    # Detect whether a "next page" link exists
    has_next = bool(
        soup.select_one("li.a-last:not(.a-disabled) a") or
        soup.select_one("[data-hook='pagination-bar'] .a-last:not(.a-disabled)")
    )

    if not review_divs:
        hooks = sorted({el.get("data-hook") for el in soup.find_all(attrs={"data-hook": True}) if el.get("data-hook")})
        print(f"  ℹ Final URL: {resp.url}  |  Status: {resp.status_code}")
        if hooks:
            print(f"  ℹ data-hook values on page: {hooks}")
            print(f"  ℹ None matched review containers. Run with DEBUG=True and inspect the HTML.")
        elif "ap/signin" in resp.url or "ap/signin" in resp.text[:3000]:
            print(f"  ⚠ Sign-in detected. Final URL: {resp.url}")
            print(f"  ℹ Response status: {resp.status_code}")
            print(f"  ℹ First 500 chars of body: {resp.text[:500]!r}")
            print("  Try passing cookies (see below).")
        else:
            print("  ℹ No review elements or data-hooks found. Run with DEBUG=True to inspect.")
        print("  No reviews found on this page.")
        return [], False

    reviews = []
    for div in review_divs:
        name_el = div.select_one("span.a-profile-name")
        reviewer_name = name_el.get_text(strip=True) if name_el else "Anonymous"

        rating_el = div.select_one(
            "i[data-hook='review-star-rating'] span, "
            "i[data-hook='cmps-review-star-rating'] span"
        )
        rating = parse_rating(rating_el.get_text(strip=True) if rating_el else "")

        title_el = div.select_one(
            "a[data-hook='review-title'] span:not(.a-color-secondary), "
            "span[data-hook='review-title']"
        )
        review_title = title_el.get_text(strip=True) if title_el else ""
        review_title = re.sub(r"^\d+\.\d+ out of \d+ stars\s*", "", review_title)

        date_el = div.select_one("span[data-hook='review-date']")
        date_str = parse_date(date_el.get_text(strip=True) if date_el else "")

        verified_el = div.select_one("span[data-hook='avp-badge']")
        verified = verified_el is not None

        helpful_el = div.select_one("span[data-hook='helpful-vote-statement']")
        helpful_count = 0
        if helpful_el:
            m = re.search(r"(\d+)", helpful_el.get_text())
            helpful_count = int(m.group(1)) if m else 1

        body_el = (
            div.select_one("span[data-hook='review-body'] span") or
            div.select_one("span[data-hook='review-body']") or
            div.select_one(".review-text-content span") or
            div.select_one(".review-text")
        )
        body = body_el.get_text(strip=True) if body_el else ""
        if DEBUG and not body:
            print(f"  🐛 No body found for review by '{reviewer_name}'. div HTML snippet: {str(div)[:300]}")

        reviews.append({
            "reviewer_name": reviewer_name,
            "rating": rating,
            "review_title": review_title,
            "date": date_str,
            "verified_purchase": verified,
            "helpful_count": helpful_count,
            "body": body,
        })

    return reviews, has_next


def scrape_book(session: requests.Session, asin: str, book_title: str,
                output_dir: Path, cookie: str = "", max_pages: int = 50) -> int:
    print(f"\n📖 {book_title} (ASIN: {asin})")
    book_slug = slugify(book_title)
    output_dir.mkdir(parents=True, exist_ok=True)

    # Visit the product page first to establish a natural referer chain
    product_url = f"https://www.amazon.com/dp/{asin}"
    try:
        session.get(product_url, headers=get_headers(cookie, referer="https://www.amazon.com/"), timeout=15)
        time.sleep(random.uniform(1.5, 3.0))
    except requests.RequestException:
        pass  # non-fatal, continue anyway

    saved = 0
    for page in range(1, max_pages + 1):
        reviews, has_next = scrape_page(session, asin, page, cookie)
        if not reviews:
            break

        for r in reviews:
            r["book_title"] = book_title
            filename = f"{book_slug}-{r['date']}-{slugify(r['reviewer_name'])[:30]}-p{page}.md"
            filepath = output_dir / filename
            if not filepath.exists():
                filepath.write_text(to_markdown(r), encoding="utf-8")
                saved += 1

        print(f"  ✓ Page {page}: {len(reviews)} reviews (total saved so far: {saved})")

        if not has_next:
            print(f"  ℹ No next-page link found — reached last page.")
            break

        time.sleep(random.uniform(DELAY_MIN, DELAY_MAX))

    return saved


# ── Entry point ───────────────────────────────────────────────────────────────

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    cookie = ""
    cookie_file = Path("amazon_cookie.txt")

    if cookie_file.exists():
        cookie = cookie_file.read_text(encoding="utf-8").strip().strip("'").strip('"')
        print(f"🍪 Loaded cookie from {cookie_file} ({len(cookie)} chars)")
    else:
        print("Paste your Amazon Cookie header string and press Enter.")
        print("(DevTools → Network → any amazon.com request → Request Headers → Cookie)")
        print("Tip: to avoid paste issues, save it to amazon_cookie.txt instead.")
        print("Leave blank to try without auth (may not work):\n")
        cookie = input("Cookie: ").strip().strip("'").strip('"')
    print()

    session = requests.Session()

    # 1. Try to auto-discover books from the author page
    books = discover_books(session, cookie)

    # 2. Merge with fallback catalog — fallback fills gaps, discovered titles win
    #    (in case author page has cleaner/shorter titles)
    merged = dict(FALLBACK_BOOKS)   # start with fallback
    merged.update(books)            # discovered titles overwrite where ASIN matches

    if not merged:
        print("⚠  No books found. Check your internet connection or AUTHOR_ID.")
        return

    print(f"\n📚 Scraping reviews for {len(merged)} book(s):\n")
    for asin, title in merged.items():
        print(f"  • {title} ({asin})")

    print()
    time.sleep(random.uniform(DELAY_MIN, DELAY_MAX))

    total = 0
    for asin, title in merged.items():
        count = scrape_book(session, asin, title, OUTPUT_DIR, cookie)
        total += count
        time.sleep(random.uniform(DELAY_MIN, DELAY_MAX))

    print(f"\n✅ Done! {total} review(s) saved to ./{OUTPUT_DIR}/")


if __name__ == "__main__":
    main()