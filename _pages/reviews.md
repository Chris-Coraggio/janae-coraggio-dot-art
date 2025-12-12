---
layout: page
title: Reviews
permalink: /reviews/
description: Customer reviews from Amazon
nav: true
nav_order: 4
---

<!-- _pages/reviews.md -->

<div class="reviews">
  {% assign sorted_reviews = site.reviews | sort: "date" | reverse %}
  {% for review in sorted_reviews %}
    {% include reviews.liquid %}
  {% endfor %}
</div>

