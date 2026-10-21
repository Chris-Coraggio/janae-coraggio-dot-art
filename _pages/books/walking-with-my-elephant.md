---
layout: page
title: Walking with My Elephant
permalink: /books/walking-with-my-elephant/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "walking-with-my-elephant" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="walking-with-my-elephant" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/walking-with-my-elephant/pages-1-2.jpg' | relative_url }}" alt="Walking with My Elephant" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/walking-with-my-elephant/pages-5-6.jpg' | relative_url }}" alt="Walking with My Elephant" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/walking-with-my-elephant/pages-9-10.jpg' | relative_url }}" alt="Walking with My Elephant" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/walking-with-my-elephant/pages-13-14.jpg' | relative_url }}" alt="Walking with My Elephant" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/walking-with-my-elephant/pages-17-18.jpg' | relative_url }}" alt="Walking with My Elephant" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/walking-with-my-elephant/pages-23-24.jpg' | relative_url }}" alt="Walking with My Elephant" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="walking-with-my-elephant" %}
