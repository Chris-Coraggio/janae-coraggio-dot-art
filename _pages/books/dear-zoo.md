---
layout: page
title: "Dear Zoo, I Think My Sister Belongs with You"
permalink: /books/dear-zoo/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "dear-zoo" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="dear-zoo" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/dear-zoo/page-1.jpg' | relative_url }}" alt="Dear Zoo" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/dear-zoo/page-2.jpg' | relative_url }}" alt="Dear Zoo" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/dear-zoo/page-3.jpg' | relative_url }}" alt="Dear Zoo" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/dear-zoo/page-4.jpg' | relative_url }}" alt="Dear Zoo" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/dear-zoo/page-5.jpg' | relative_url }}" alt="Dear Zoo" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/dear-zoo/page-6.jpg' | relative_url }}" alt="Dear Zoo" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="dear-zoo" %}
