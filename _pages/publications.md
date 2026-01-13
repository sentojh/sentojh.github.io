---
layout: page
permalink: /publications/
title: Publications

nav: true
nav_order: 3
body_class: publications-page
---


{% comment %}
====================================
 Publications Tabs – Parameters
 (조절은 여기만!)
====================================
{% endcomment %}

{% assign TAB_FONT_SIZE = "2.5rem" %}
{% assign TAB_GAP = "2rem" %}
{% assign TAB_LETTER_SPACING = "0.5em" %}
{% assign TAB_BOTTOM_PADDING = "0.3rem" %}
{% assign TAB_MARGIN_TOP = "0.8rem" %}
{% assign TAB_MARGIN_BOTTOM = "2.0rem" %}

{% assign TAB_INACTIVE_COLOR = "#777" %}
{% assign TAB_ACTIVE_COLOR = "#000" %}
{% assign TAB_ACTIVE_BORDER = "2px solid #a000a0" %}


<div
  style="
    display: flex;
    gap: {{ TAB_GAP }};
    margin-top: {{ TAB_MARGIN_TOP }};
    margin-bottom: {{ TAB_MARGIN_BOTTOM }};
    letter-spacing: 0.04em;
  "
>
  <a
    href="#selected"
    id="tab-selected"
    style="
      font-size: {{ TAB_FONT_SIZE }};
      text-decoration: none;
      color: {{ TAB_INACTIVE_COLOR }};
      padding-bottom: {{ TAB_BOTTOM_PADDING }};
      letter-spacing: {{ TAB_LETTER_SPACING }};
      border-bottom: 3px solid transparent;
      font-weight: 600;
    "
  >
    Selected
  </a>

  <a
    href="#all"
    id="tab-all"
    style="
      font-size: {{ TAB_FONT_SIZE }};
      text-decoration: none;
      color: {{ TAB_INACTIVE_COLOR }};
      padding-bottom: {{ TAB_BOTTOM_PADDING }};
      letter-spacing: {{ TAB_LETTER_SPACING }};
      border-bottom: 3px solid transparent;
      font-weight: 600;
    "
  >
    All
  </a>
</div>

<hr>

<div id="pub-selected">
  {% include selected_publications_custom.liquid %}
</div>

<div id="pub-all">
  {% include all_publications_custom.liquid %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {

  function setActive(tabActive, tabInactive) {
    tabActive.style.color = "{{ TAB_ACTIVE_COLOR }}";
    tabActive.style.borderBottom = "{{ TAB_ACTIVE_BORDER }}";
    tabActive.style.fontWeight = "800";

    tabInactive.style.color = "{{ TAB_INACTIVE_COLOR }}";
    tabInactive.style.borderBottom = "3px solid transparent";
    tabInactive.style.fontWeight = "600";
  }

  function switchTab() {
    const hash = window.location.hash || "#all";

    const selected = document.getElementById("pub-selected");
    const all = document.getElementById("pub-all");

    const tabSelected = document.getElementById("tab-selected");
    const tabAll = document.getElementById("tab-all");

    if (hash === "#selected") {
      selected.style.display = "block";
      all.style.display = "none";
      setActive(tabSelected, tabAll);
    } else {
      selected.style.display = "none";
      all.style.display = "block";
      setActive(tabAll, tabSelected);
    }
  }

  window.addEventListener("hashchange", switchTab);
  switchTab();
});
</script>