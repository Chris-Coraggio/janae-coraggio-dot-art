---
layout: page
title: The Space Between Us
permalink: /books/the-space-between-us/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "the-space-between-us" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="the-space-between-us" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/the-space-between-us/cover.jpg' | relative_url }}" alt="The Space Between Us" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-space-between-us/scene-1.jpg' | relative_url }}" alt="The Space Between Us" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-space-between-us/scene-4.jpg' | relative_url }}" alt="The Space Between Us" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-space-between-us/scene-6.jpg' | relative_url }}" alt="The Space Between Us" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-space-between-us/scene-9.jpg' | relative_url }}" alt="The Space Between Us" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-space-between-us/scene-11.jpg' | relative_url }}" alt="The Space Between Us" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-space-between-us/back-cover.jpg' | relative_url }}" alt="The Space Between Us" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="the-space-between-us" %}
