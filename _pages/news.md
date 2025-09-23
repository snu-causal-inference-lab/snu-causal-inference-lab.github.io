---
title: News
layout: single
classes: news-page
author_profile: false
---

{% assign news_items = site.news | sort: 'date' | reverse %}
{% assign current_group = "" %}

<ul class="news-list">
  {% for item in news_items %}
    {% assign year = item.date | date: "%Y" %}

    {% if item.upcoming %}
      {% assign group = "Upcoming" %}
    {% else %}
      {% assign group = year %}
    {% endif %}

    {% if group != current_group %}
      <h2 class="news-year">{{ group }}</h2>
      {% assign current_group = group %}
    {% endif %}
    
    <li class="news-row">
      <span class="news-date">
        {% if item.short_date %}
          {{ item.date | date: "%b" }}
        {% elsif item.year %}
          {{ item.date | date: "%b %Y" }}
        {% else %}
          {{ item.date | date: "%b %d" }}
        {% endif %}
      </span>
      <span class="news-entry">
        {% if item.professor %}
          <span class="prof-icon">🎓</span>
        {% endif %}
        {{ item.content | markdownify | strip }}
      </span>
    </li>
  {% endfor %}
</ul>
