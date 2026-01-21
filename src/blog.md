---
layout: base.njk
title: Blog
permalink: /blog/
---

# What I Write About

I focus on practical, actionable content around software development, code quality, and automation. Each article is based on hands-on experience and designed to help you solve real problems.

<div class="articles-list">
  {% for article in collections.blog %}
  <article class="article-item">
    <div class="article-item-content">
      <h2><a href="{{ article.url | url }}">{{ article.data.title }}</a></h2>
      
      <div class="article-meta">
        <time datetime="{{ article.date | dateISO }}">
          {{ article.date | dateReadable }}
        </time>
      </div>
      
      <a href="{{ article.url | url }}" class="read-more">Read Article →</a>
    </div>
  </article>
  {% endfor %}
</div>

<style>
.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-item {
  padding: 1.5rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.article-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.article-item h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.article-item h2 a {
  color: var(--text-color);
  text-decoration: none;
}

.article-item h2 a:hover {
  color: var(--primary-color);
}
</style>
