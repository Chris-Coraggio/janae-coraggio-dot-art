---
layout: page
title: "Coloring God's Love for Me"
permalink: /books/coloring-gods-love/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "coloring-gods-love" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="coloring-gods-love" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/coloring-gods-love/cover.jpg' | relative_url }}" alt="Coloring God's Love for Me" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/coloring-gods-love/photo-1.jpg' | relative_url }}" alt="Coloring God's Love for Me" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/coloring-gods-love/photo-2.jpg' | relative_url }}" alt="Coloring God's Love for Me" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="coloring-gods-love" %}
