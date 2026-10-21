---
layout: page
title: The Happy Field
permalink: /books/the-happy-field/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "the-happy-field" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="the-happy-field" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/the-happy-field/page-1.jpg' | relative_url }}" alt="The Happy Field" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-happy-field/page-2.jpg' | relative_url }}" alt="The Happy Field" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-happy-field/page-3.jpg' | relative_url }}" alt="The Happy Field" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-happy-field/page-4.jpg' | relative_url }}" alt="The Happy Field" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-happy-field/page-5.jpg' | relative_url }}" alt="The Happy Field" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="the-happy-field" %}
