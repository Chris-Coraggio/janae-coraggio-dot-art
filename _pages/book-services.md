---
layout: page
title: Book Services
permalink: /book-services/
nav: true
nav_order: 8
_styles: |
  .book-service-card,
  .book-service-card .card-body {
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .book-service-card {
    border: none !important;
  }
  .book-service-card .card-body {
    border-radius: 0.65rem;
    border: 2px dashed var(--global-divider-color);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--global-text-color) 8%, transparent);
  }
  .book-service-icon {
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
    border-radius: 0.65rem;
    border: 2px solid var(--global-theme-color);
    color: var(--global-theme-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    line-height: 1;
    margin-right: 1rem;
  }
  .book-service-card-heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.5rem 1rem;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }
  .book-service-card-heading .book-service-card-title {
    margin-bottom: 0;
    flex: 1 1 auto;
    min-width: 8rem;
  }
  .book-service-price {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--global-text-color);
    white-space: nowrap;
    flex-shrink: 0;
    text-align: right;
  }
  .book-service-subheading-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.5rem 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 0.35rem;
  }
  .book-service-subheading-row .book-service-subtitle {
    margin-top: 0;
    margin-bottom: 0;
    flex: 1 1 auto;
    min-width: 6rem;
  }
  .book-service-card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--global-text-color);
  }
  .book-service-card .book-service-subtitle {
    font-size: 0.95rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.35rem;
    color: var(--global-text-color);
  }
  .book-service-two-col .book-service-subtitle {
    margin-top: 0;
  }
  .book-service-card ul {
    margin-bottom: 0;
    padding-left: 1.15rem;
  }
  .book-service-card ul li {
    margin-bottom: 0.35rem;
  }
  .book-service-faq-heading {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--global-text-color);
  }
---

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-message-2"></i></div>
    <div class="flex-grow-1">
      <div class="book-service-card-heading">
        <h2 class="book-service-card-title">15-minute intake chat</h2>
        <span class="book-service-price">Free</span>
      </div>
      <ul>
        <li>Discuss your idea, receive a quote</li>
      </ul>
    </div>
  </div>
</div>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-book-2"></i></div>
    <div class="flex-grow-1">
      <div class="book-service-card-heading">
        <h2 class="book-service-card-title">1-hour book consultation</h2>
        <span class="book-service-price">$75</span>
      </div>
      <ul>
        <li>Discussion of story in depth, target audience, commercial viability, character development, visual style, marketing, book sizing, and publishing goals</li>
        <li>Immediate feedback</li>
        <li>Workflow advice</li>
        <li>Summarized action steps</li>
      </ul>
    </div>
  </div>
</div>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-file-description"></i></div>
    <div class="flex-grow-1">
      <h2 class="book-service-card-title">Material review</h2>
      <div class="row book-service-two-col">
        <div class="col-md-6 mb-3 mb-md-0">
          <div class="book-service-subheading-row">
            <h3 class="book-service-subtitle">Light / Partial Manuscripts</h3>
            <span class="book-service-price">$90</span>
          </div>
          <ul>
            <li>Reading and analysis</li>
            <li>1 page written feedback</li>
            <li>Roadmap</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="book-service-subheading-row">
            <h3 class="book-service-subtitle">Standard / Full Manuscript</h3>
            <span class="book-service-price">$175</span>
          </div>
          <p class="mb-2">Includes everything in Light, plus:</p>
          <ul>
            <li>Structural editing</li>
            <li>Formatting advice</li>
            <li>Art direction guidance</li>
            <li>Roadmap of next steps</li>
            <li>30-min follow-up call</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-layout"></i></div>
    <div class="flex-grow-1">
      <div class="book-service-card-heading">
        <h2 class="book-service-card-title">Book Design and Formatting</h2>
        <span class="book-service-price">$550</span>
      </div>
      <p>Professional layout + typography for print-ready publishing to platforms like KDP and IngramSpark</p>
      <h3 class="book-service-subtitle">Standard Layout Package (Picture Book up to 32 pages, additional pages adds $75)</h3>
      <ul>
        <li>Custom interior layout designed in Adobe InDesign</li>
        <li>Technical formatting and layout</li>
        <li>Page size, margins, and bleed set to industry standards</li>
        <li>Thoughtful text placement that works with your illustrations</li>
        <li>Typography selection (fonts, sizing, readability)</li>
        <li>Attention to visual flow</li>
        <li>Print-ready PDF export formatted for KDP or IngramSpark</li>
        <li>Up to 2 rounds of revisions (Extra revision rounds adds $75 each)</li>
      </ul>
    </div>
  </div>
</div>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-palette"></i></div>
    <div class="flex-grow-1">
      <div class="book-service-card-heading">
        <h2 class="book-service-card-title">Full Illustrated Book</h2>
        <span class="book-service-price">$4–6k</span>
      </div>
      <ul>
        <li>Payments are made in 3 parts (33% deposit at contract, 33% upon approval of draft, 33% upon delivery)</li>
        <li>Up to 2 rounds of revisions each for both draft and color versions</li>
        <li>Up to 2 30-minute follow-up calls and a 1 hour final review call</li>
        <li>All artwork received in digital format (PDF, JPEG, or PNG) and in 300 DPI with correct color profile (CMYK, RGB, or Both)</li>
      </ul>
    </div>
  </div>
</div>

<h2 class="book-service-faq-heading">Frequently Asked Questions</h2>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-refresh"></i></div>
    <div class="flex-grow-1">
      <h2 class="book-service-card-title">What is a revision?</h2>
      <p class="mb-0">After reviewing your complete book, you’ll provide a single, consolidated list of requested changes, which I’ll incorporate into the next draft. The type of revisions you can request will depend on the current stage of the project—draft, color, or final layout and formatting. During the draft phase, you may request changes to layout and subject matter. In the color phase, revisions are typically limited to color adjustments. In the final formatting stage, you can request refinements such as text placement or sizing, font changes, minor layout improvements for better flow, and small adjustments to illustration placement.</p>
    </div>
  </div>
</div>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-ban"></i></div>
    <div class="flex-grow-1">
      <h2 class="book-service-card-title">What do revisions not include?</h2>
      <p class="mb-0">New or significantly reworked layouts for multiple spreads, new illustrations or replacing artwork after layout has begun, ongoing/piecemeal edits sent across multiple emails or texts.</p>
    </div>
  </div>
</div>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-printer"></i></div>
    <div class="flex-grow-1">
      <h2 class="book-service-card-title">What if my proof copy doesn’t turn out right?</h2>
      <p class="mb-0">This is more common than you think! If an error in the design appears in the proof copy, I will supply an updated file with corrections at no extra cost.</p>
    </div>
  </div>
</div>

<div class="card book-service-card mb-4">
  <div class="card-body d-flex align-items-start flex-row">
    <div class="book-service-icon" aria-hidden="true"><i class="ti ti-license"></i></div>
    <div class="flex-grow-1">
      <h2 class="book-service-card-title">Do I own the rights to the book and will I receive royalties if Janae is my illustrator?</h2>
      <p class="mb-0">During the contract phase, we will work together to reach a mutual agreement on how royalties are shared between the author and illustrator. Please note that this is not a work-for-hire arrangement; I retain the rights to all artwork created for the book.</p>
    </div>
  </div>
</div>
