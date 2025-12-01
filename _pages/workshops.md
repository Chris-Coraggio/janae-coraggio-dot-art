---
layout: page
title: Workshops
permalink: /workshops/
description: Books to Brush -  Storybook-inspired Artmaking with Janae
nav: true
nav_order: 5
horizontal: false
---

<!-- pages/workshops.md -->
<div class="workshops">
<!-- Display workshops without categories -->

{% assign sorted_workshops = site.workshops | sort: "importance" %}

  <!-- Generate cards for each workshop -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for workshop in sorted_workshops %}
      {% assign project = workshop %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for workshop in sorted_workshops %}
      {% assign project = workshop %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
</div>
