---
layout: page
title: Workshops
permalink: /workshops/
nav: true
nav_order: 4
images:
  slider: true
---

{% assign workshop_imgs = site.data.sanity.workshops.images %}
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="4000" autoplay-pause-on-mouse-enter="true" style="margin-bottom: 2rem;">
{% if workshop_imgs and workshop_imgs.size > 0 %}
{% for img in workshop_imgs %}
<swiper-slide><img src="{{ img.url }}" alt="{{ img.alt }}" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
{% endfor %}
{% else %}
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-1.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-2.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-3.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-4.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-5.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-6.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-7.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-8.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-9.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
<swiper-slide><img src="{{ '/assets/img/workshops/workshop-10.jpg' | relative_url }}" alt="Workshop" style="width:100%;max-height:480px;object-fit:contain;"></swiper-slide>
{% endif %}
</swiper-container>

<div class="workshops-body" markdown="1">
{% if site.data.sanity.workshops.body_html %}
{% if site.data.sanity.workshops.headline %}
### {{ site.data.sanity.workshops.headline }}
{% endif %}
{{ site.data.sanity.workshops.body_html }}
{% else %}

### Read a book + make art!

Please reach out if you'd like me to facilitate an art workshop! As an art therapist, I believe the art process can help foster mental, emotional, and spiritual growth.

_\*Disclaimer: These art workshops are not art therapy. If you're looking for art therapy, please visit the [American Art Therapy Association Art Therapist Locator](https://arttherapy.org/art-therapist-locator/) to find a registered art therapist in your area._
{% endif %}

</div>
