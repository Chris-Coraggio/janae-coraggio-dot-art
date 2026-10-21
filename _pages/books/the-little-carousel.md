---
layout: page
title: The Little Carousel That Could Change the World
permalink: /books/the-little-carousel/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "the-little-carousel" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="the-little-carousel" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/the-little-carousel/chapter-1.jpg' | relative_url }}" alt="The Little Carousel" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-little-carousel/chapter-5.jpg' | relative_url }}" alt="The Little Carousel" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-little-carousel/chapter-6.jpg' | relative_url }}" alt="The Little Carousel" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-little-carousel/chapter-7.jpg' | relative_url }}" alt="The Little Carousel" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/the-little-carousel/chapter-12.jpg' | relative_url }}" alt="The Little Carousel" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="the-little-carousel" %}
