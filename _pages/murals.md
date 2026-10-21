---
layout: page
title: Murals
permalink: /murals/
nav: true
nav_order: 5
images:
  slider: true
---

{% assign mural_videos = site.data.sanity.murals.videos %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" style="margin-bottom: 2rem;">
{% if mural_videos and mural_videos.size > 0 %}
{% for v in mural_videos %}
<swiper-slide>

  <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
    <iframe
      src="{{ v.embed_url }}"
      title="{{ v.title | default: 'Mural Video' }}"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</swiper-slide>
{% endfor %}
{% else %}
<swiper-slide>
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
    <iframe
      src="https://www.youtube.com/embed/XTAIVbOXsEI"
      title="Mural Video 1"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</swiper-slide>
<swiper-slide>
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
    <iframe
      src="https://www.youtube.com/embed/0v-NW3MquYw"
      title="Mural Video 2"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</swiper-slide>
{% endif %}
</swiper-container>

<div class="murals-body" markdown="1">
{% if site.data.sanity.murals.body_html %}
{% if site.data.sanity.murals.headline %}
**{{ site.data.sanity.murals.headline }}**
{% endif %}
{{ site.data.sanity.murals.body_html }}
{% else %}

**Murals & Community Art**

Please reach out if you're interested in commissioning a custom indoor or outdoor mural, interactive community wall, or large-scale installation!

{% endif %}

</div>
