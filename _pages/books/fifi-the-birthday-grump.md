---
layout: page
title: Fifi the Birthday Grump
permalink: /books/fifi-the-birthday-grump/
nav: false
images:
  slider: true
---

{% assign _book = site.data.sanity.books | where: "slug", "fifi-the-birthday-grump" | first %}
{% if _book and _book.images and _book.images.size > 0 %}
{% include book_carousel.liquid slug="fifi-the-birthday-grump" %}
{% else %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
<swiper-slide><img src="{{ '/assets/img/books/fifi-the-birthday-grump/page-1.jpg' | relative_url }}" alt="Fifi the Birthday Grump" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/fifi-the-birthday-grump/page-2.jpg' | relative_url }}" alt="Fifi the Birthday Grump" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/fifi-the-birthday-grump/page-3.jpg' | relative_url }}" alt="Fifi the Birthday Grump" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/fifi-the-birthday-grump/page-4.jpg' | relative_url }}" alt="Fifi the Birthday Grump" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/fifi-the-birthday-grump/page-5.jpg' | relative_url }}" alt="Fifi the Birthday Grump" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/books/fifi-the-birthday-grump/page-6.jpg' | relative_url }}" alt="Fifi the Birthday Grump" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
</swiper-container>
{% endif %}

{% include book_description.liquid slug="fifi-the-birthday-grump" %}
