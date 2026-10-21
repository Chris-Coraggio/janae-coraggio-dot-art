---
layout: page
title: Sitting with My Lions
permalink: /books/sitting-with-my-lions/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "sitting-with-my-lions" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="sitting-with-my-lions" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/sitting-with-my-lions/page-1.jpg' | relative_url }}" alt="Sitting with My Lions" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/sitting-with-my-lions/page-2.jpg' | relative_url }}" alt="Sitting with My Lions" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/sitting-with-my-lions/page-3.jpg' | relative_url }}" alt="Sitting with My Lions" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/sitting-with-my-lions/page-4.jpg' | relative_url }}" alt="Sitting with My Lions" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/sitting-with-my-lions/page-5.jpg' | relative_url }}" alt="Sitting with My Lions" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/sitting-with-my-lions/page-6.jpg' | relative_url }}" alt="Sitting with My Lions" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="sitting-with-my-lions" %}
