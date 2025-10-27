---
layout: page
title: Contact
permalink: /contact/
description: Reach out below if you'd like to get in touch with Janae about art therapy, her books, and/or illustrations.
nav: true
nav_order: 4
---

<form action="https://formspree.io/f/mdoqwkbv" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject" required>
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>

## Other Ways to Connect

You can also reach out through:

- **Email:** [janaecoraggio@gmail.com](mailto:janaecoraggio@gmail.com)
- **Instagram:** [@janaearttherapy](https://instagram.com/janaearttherapy)
- **LinkedIn:** [Profile](https://linkedin.com/in/janaedueck)

<style>
.contact-form {
  max-width: 600px;
  margin: 2rem 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: var(--global-theme-color);
  color: white;
}

.btn-primary:hover {
  opacity: 0.9;
}
</style>
