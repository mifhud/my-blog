---
layout: base.njk
title: Articles
permalink: /articles/
---

# All Articles

Browse our complete collection of technical playbooks and guides.

## Filter by Category

<div class="category-filter">
  <button class="filter-btn active" data-category="all">All</button>
  {% for cat in metadata.categories %}
  <button class="filter-btn" data-category="{{ cat }}">{{ cat }}</button>
  {% endfor %}
</div>

<div class="articles-list">
  {% for article in collections.articles %}
  <article class="article-item" data-category="{{ article.data.category }}">
    <div class="article-item-content">
      <h2><a href="{{ article.url }}">{{ article.data.title }}</a></h2>
      
      <div class="article-meta">
        <time datetime="{{ article.date | dateISO }}">
          {{ article.date | dateReadable }}
        </time>
        
        {% if article.data.category %}
        <span class="category">{{ article.data.category }}</span>
        {% endif %}
        
        {% if article.data.tags %}
        <div class="tags">
          {% for tag in article.data.tags %}
          {% if tag != "articles" %}
          <span class="tag">{{ tag }}</span>
          {% endif %}
          {% endfor %}
        </div>
        {% endif %}
      </div>
      
      {% if article.data.description %}
      <p class="article-description">{{ article.data.description }}</p>
      {% endif %}
      
      <a href="{{ article.url }}" class="read-more">Read Article →</a>
    </div>
  </article>
  {% endfor %}
</div>

<style>
.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.filter-btn:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.filter-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

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

.article-item.hidden {
  display: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articles = document.querySelectorAll('.article-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter articles
      articles.forEach(article => {
        if (category === 'all' || article.dataset.category === category) {
          article.classList.remove('hidden');
        } else {
          article.classList.add('hidden');
        }
      });
    });
  });
});
</script>
