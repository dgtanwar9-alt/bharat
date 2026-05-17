(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function initRevealObserver() {
    var elements = document.querySelectorAll(".reveal");
    if (!elements.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function normalizePlannerCity(value) {
    return encodeURIComponent(String(value || "").trim());
  }

  function getSuggestedDays() {
    var travelersInput = document.getElementById("travelersInput");
    if (!travelersInput) return 3;

    var value = String(travelersInput.value || "").toLowerCase();
    if (value.includes("family")) return 4;
    if (value.includes("3")) return 3;
    return 2;
  }

  function handlePlannerClick() {
    var cityInput = document.getElementById("cityInput");
    var city = cityInput ? cityInput.value.trim() : "";

    if (!city) {
      window.alert("Please enter a destination first.");
      return;
    }

    window.location.href = "city.html?city=" + normalizePlannerCity(city) + "&days=" + getSuggestedDays();
  }

  function selectTag(tagName) {
    var cityInput = document.getElementById("cityInput");
    if (!cityInput) return;
    cityInput.value = tagName;
    cityInput.focus();
  }

  function renderDeals(deals) {
    var dealsGrid = document.getElementById("dealsGrid");
    if (!dealsGrid || !Array.isArray(deals) || !deals.length) return;

    dealsGrid.innerHTML = deals.slice(0, 6).map(function (deal) {
      var includes = Array.isArray(deal.includes) ? deal.includes : [];
      return [
        '<div class="deal-card reveal visible">',
        '  <div class="deal-banner" style="background:var(--gold-dark); text-align:center; padding:20px; font-size:40px;">' + escapeHtml(deal.image || "🎁") + "</div>",
        '  <div class="deal-body">',
        '    <div class="deal-name">' + escapeHtml(deal.name) + "</div>",
        '    <div class="deal-pricing"><span class="deal-final">' + escapeHtml(deal.discountedPrice || "Ask") + '</span> <span style="text-decoration:line-through; font-size:12px; opacity:0.6;">' + escapeHtml(deal.originalPrice || "") + "</span></div>",
        '    <div style="font-size:12px; margin-top:6px; color:var(--text-soft);">' + escapeHtml(deal.description || "") + "</div>",
        '    <div class="deal-includes" style="margin-top:10px;">' + includes.map(function (item) {
          return '<span class="badge" style="margin:2px;">' + escapeHtml(item) + "</span>";
        }).join("") + "</div>",
        "  </div>",
        "</div>"
      ].join("");
    }).join("");
  }

  async function loadDeals() {
    if (!window.smartTripApi || !document.getElementById("dealsGrid")) return;

    try {
      var response = await window.smartTripApi.getJson("/api/packages");
      renderDeals(response && response.data);
    } catch (error) {
      console.warn("Deals API unavailable:", error.message);
    }
  }

  function init() {
    initRevealObserver();
    loadDeals();
  }

  window.handlePlannerClick = handlePlannerClick;
  window.selectTag = selectTag;

  document.addEventListener("DOMContentLoaded", init);
})();
