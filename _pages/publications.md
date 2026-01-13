---
layout: page
permalink: /publications/
title: Publications

nav: true
nav_order: 3
body_class: publications-page

css:
  - publications_tab
  - selected_publications_custom
  - all_publications_custom
---


<div class="pub-tabs">
  <a href="#selected" class="pub-tab" id="tab-selected">Selected</a>
  <a href="#all" class="pub-tab" id="tab-all">All</a>
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

  function switchTab() {
    const hash = window.location.hash || "#all";

    const selected = document.getElementById("pub-selected");
    const all = document.getElementById("pub-all");

    const tabSelected = document.getElementById("tab-selected");
    const tabAll = document.getElementById("tab-all");

    if (!selected || !all || !tabSelected || !tabAll) {
      console.error("Publications tab elements not found");
      return;
    }

    if (hash === "#selected") {
      selected.style.display = "block";
      all.style.display = "none";
      tabSelected.classList.add("active");
      tabAll.classList.remove("active");
    } else {
      selected.style.display = "none";
      all.style.display = "block";
      tabSelected.classList.remove("active");
      tabAll.classList.add("active");
    }
  }

  window.addEventListener("hashchange", switchTab);
  switchTab(); // initial load
});
</script>