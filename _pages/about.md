---
permalink: /
title: "Adithya Mohan"
author_profile: false
classes:
  - landing-page
redirect_from:
  - /about/
  - /about.html
---

{% assign featured_projects = site.projects | sort: "date" | reverse | slice: 0, 4 %}
{% assign featured_talks = site.talks | sort: "date" | reverse | slice: 0, 3 %}
{% assign featured_teaching = site.teaching | sort: "date" | reverse | slice: 0, 3 %}

<section class="home-hero">
  <div class="home-hero__intro">
    <div class="home-kicker">Robotics / Safe AI / Deep Reinforcement Learning</div>
    <h1>Building intelligent systems that stay reliable when the world gets messy.</h1>
    <p class="home-lead">I am Adithya Mohan, a doctoral researcher focused on adversarial attacks and defenses in Deep Reinforcement Learning. This site is the living home for my research, talks, teaching, projects, and CV.</p>
    <div class="home-actions">
      <a class="home-btn home-btn--primary" href="{{ site.author.googlescholar }}">Publications</a>
      <a class="home-btn home-btn--secondary" href="{{ '/projects/' | relative_url }}">Projects</a>
      <a class="home-btn home-btn--secondary" href="{{ '/cv/' | relative_url }}">View CV</a>
    </div>
  </div>

  <aside class="home-hero__aside">
    <div>
      <h2>What you can find here</h2>
      <p>A cleaner structure for the work you want to keep growing over time.</p>
    </div>
    <ul class="home-mini-list">
      <li><strong>Publications</strong><br>Direct link to your Google Scholar profile.</li>
      <li><strong>Talks</strong><br>Talks, presentations, interviews, and upcoming appearances.</li>
      <li><strong>Teaching</strong><br>Courses, supervision, and subjects you teach.</li>
      <li><strong>Projects</strong><br>Each project can link to its own GitHub or <code>github.io</code> page.</li>
    </ul>
  </aside>
</section>

<section class="home-grid">
  <div class="home-highlight">
    <h3>Designed to stay maintainable</h3>
    <p>Your content still comes from Jekyll collections, so adding a new project, talk, or teaching item is just adding a markdown file in the right folder.</p>
  </div>
  <div class="home-highlight">
    <h3>Switch to monochrome</h3>
    <p>Use the button in the top navigation to switch between the default color palette and a black-and-white presentation mode.</p>
  </div>
</section>

<section class="home-section">
  <div class="home-section__header">
    <div>
      <h2>Explore the sections</h2>
      <p>Each section has a clear purpose and is easy to extend.</p>
    </div>
  </div>
  <div class="home-card-grid">
    <article class="section-card">
      <h3>Publications</h3>
      <p>All research output is routed through Google Scholar so the list stays current without duplicate maintenance.</p>
      <a class="section-link" href="{{ site.author.googlescholar }}">Open Google Scholar</a>
    </article>
    <article class="section-card">
      <h3>Talks</h3>
      <p>A dedicated archive for talks, interviews, invited lectures, and future speaking engagements.</p>
      <a class="section-link" href="{{ '/talks/' | relative_url }}">Go to talks</a>
    </article>
    <article class="section-card">
      <h3>Teaching</h3>
      <p>A section for subjects taught, academic responsibilities, and course-related work.</p>
      <a class="section-link" href="{{ '/teaching/' | relative_url }}">Go to teaching</a>
    </article>
    <article class="section-card">
      <h3>Projects</h3>
      <p>Project pages can link outward to repositories, demos, or full <code>github.io</code> project sites through front matter.</p>
      <a class="section-link" href="{{ '/projects/' | relative_url }}">Go to projects</a>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="home-section__header">
    <div>
      <h2>Selected projects</h2>
      <p>These cards are pulled from the <code>_projects</code> collection.</p>
    </div>
    <a class="section-link" href="{{ '/projects/' | relative_url }}">See all projects</a>
  </div>
  <div class="home-card-grid">
    {% for post in featured_projects %}
      <article class="section-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | markdownify | strip_html | strip_newlines }}</p>
        {% if post.link %}
          <a class="section-link" href="{{ post.link }}">Open project</a>
        {% else %}
          <a class="section-link" href="{{ post.url | relative_url }}">Read more</a>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-grid">
  <div class="home-section">
    <div class="home-section__header">
      <div>
        <h2>Recent talks</h2>
        <p>Rendered from the <code>_talks</code> collection.</p>
      </div>
      <a class="section-link" href="{{ '/talks/' | relative_url }}">View archive</a>
    </div>
    <div class="home-card-grid">
      {% for post in featured_talks %}
        <article class="section-card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.type }}{% if post.venue %}, {{ post.venue }}{% endif %}{% if post.location %}, {{ post.location }}{% endif %}</p>
          <span class="section-card__meta">{{ post.date | date: "%Y" }}</span>
        </article>
      {% endfor %}
    </div>
  </div>

  <div class="home-section">
    <div class="home-section__header">
      <div>
        <h2>Teaching</h2>
        <p>Rendered from the <code>_teaching</code> collection.</p>
      </div>
      <a class="section-link" href="{{ '/teaching/' | relative_url }}">View archive</a>
    </div>
    <div class="home-card-grid">
      {% for post in featured_teaching %}
        <article class="section-card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.type }}{% if post.venue %}, {{ post.venue }}{% endif %}</p>
          <span class="section-card__meta">{{ post.date | date: "%Y" }}</span>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
