---
layout: base.njk
title: "Projects"
description: "A collection of projects I've worked on"
---

<div class="hero-section">
  <h1 class="hero-title">Things I've made trying to put my dent in the universe</h1>
  <p class="hero-subtitle">A collection of projects, experiments, and solutions I've built over the years.</p>
</div>

<section class="featured-section">
  <div class="project-grid">
    {% for project in projects.featured %}
    <article class="project-card">
      <a href="{{ project.url | url }}">
        <div class="project-image">
          <img src="{{ project.image | url }}" alt="{{ project.title }}" loading="lazy">
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          {% if project.badges %}
          <div class="project-badges">
            {% for badge in project.badges %}
            <span class="badge">{{ badge }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
</section>
