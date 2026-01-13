---
layout: page
permalink: /publications/
title: Publications

nav: true
nav_order: 3
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
  function switchTab() {
    const hash = window.location.hash || "#all";
    document.getElementById("pub-selected").style.display =
      hash === "#selected" ? "block" : "none";
    document.getElementById("pub-all").style.display =
      hash === "#all" ? "block" : "none";

    document.getElementById("tab-selected").classList.toggle("active", hash === "#selected");
    document.getElementById("tab-all").classList.toggle("active", hash === "#all");
  }

  window.addEventListener("hashchange", switchTab);
  window.addEventListener("load", switchTab);
</script>