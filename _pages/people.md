---
title: Lab Members
layout: single
---

<div class="people-section">
<div class="people-grid">
  {% assign members = site.people | sort: "order" %}
  {% for p in members %}
    <div class="person-card">
      <a href="{{ p.url | relative_url }}">
        <img class="person-photo" src="{{ p.photo | relative_url }}" alt="{{ p.name }}">
      </a>
      <div class="person-info">
        <div class="person-name">
          <a href="{{ p.url | relative_url }}">{{ p.name }}</a>
        </div>
        <div class="person-role">
          {% case p.role %}
            {% when "pi" %} Faculty
            {% when "postdoc" %} Postdoctoral Fellow
            {% when "phd" %} Ph.D. Student
            {% when "ms" %} Master's Student
            {% else %} {{ p.role }}
          {% endcase %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
</div>

<div class="alumni">
  <h1 class="people-title" style="margin-top: -1rem !important;">Alumni</h1>
  <div class="alumni-list">
    <ul>
      <li>Junho Jang, Master's (2025). Economist, the Bank of Korea.</li>
      <li>Jaehyuk Jang, Master's (2025). Ph.D. student, Rutgers University (since 2025).</li>
      <li>Sangjin Lee, Master's (2025). Ph.D. student, Ghent University (since 2025).</li>
      <li>Suhwan Bong, Master's (2024). Ph.D. student, Harvard University (since 2024).</li>
    </ul>
  </div>
</div>
