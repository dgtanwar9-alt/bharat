/*
 * Bharat Guide - City Page Renderer
 * The page shell lives in city.html and each city is rendered from cityData.js.
 *
 * IMPORTANT:
 * 1. city.html stays a reusable shell only.
 * 2. app.js stays reusable logic only.
 * 3. To add a new city, you should mainly edit cityData.js.
 * 4. This file auto-builds the page, dropdown, filters and itinerary UI.
 */

const DEFAULT_HERO_IMAGE = '';

let selectedType = 'Solo';

// Central UI state for the currently opened city page.
const uiState = {
  currentCityKey: '',
  hotelFilter: 'all',
  foodFilter: 'all',
  attractionFilter: 'all'
};

let revealObserver = null;
let shellEventsBound = false;
let cityDataHydrated = false;

// Reusable config for all filter groups.
// If you add a new filterable section later, follow this same pattern.
const FILTER_CONFIG = {
  hotel: { selector: '.hotel-card', datasetKey: 'tier', stateKey: 'hotelFilter' },
  food: { selector: '.food-card', datasetKey: 'food', stateKey: 'foodFilter' },
  attraction: { selector: '.attraction-card', datasetKey: 'type', stateKey: 'attractionFilter' }
};

// Injects page-specific styles that are only needed for the city template.
function injectRuntimeStyles() {
  if (document.getElementById('city-runtime-styles')) return;

  const style = document.createElement('style');
  style.id = 'city-runtime-styles';
  style.textContent = `
    #city-root {
      min-height: 60vh;
      background: var(--bg-primary);
    }
    #hamburger,
    .nav-icons i {
      cursor: pointer;
    }
    .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      width: min(320px, 100%);
      height: 100vh;
      background: rgba(6, 6, 15, 0.98);
      backdrop-filter: blur(16px);
      border-left: 1px solid var(--border);
      padding: 86px 28px 28px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transform: translateX(100%);
      transition: transform 0.28s ease;
      z-index: 1200;
    }
    .mobile-menu.open {
      transform: translateX(0);
    }
    .mobile-menu a {
      padding: 12px 0;
      color: var(--text-primary);
      border-bottom: 1px solid var(--border-soft);
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .close-menu {
      position: absolute;
      top: 20px;
      right: 20px;
      background: transparent;
      color: var(--text-primary);
      font-size: 24px;
      padding: 4px;
    }
    .city-hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin: 28px 0 32px;
    }
    .city-stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 14px;
      max-width: 920px;
    }
    .city-stat-card {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 18px;
      padding: 18px 16px;
      backdrop-filter: blur(10px);
    }
    .city-stat-label {
      display: block;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.72);
      margin-bottom: 8px;
      font-weight: 700;
    }
    .city-stat-value {
      display: block;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.45;
      color: #fff;
    }
    .city-overview-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
      gap: 24px;
      align-items: start;
    }
    .city-panel {
      padding: 28px;
    }
    .city-panel-title {
      font-family: 'Cinzel', serif;
      font-size: clamp(22px, 3vw, 30px);
      margin-bottom: 14px;
      color: var(--text-primary);
    }
    .city-panel-copy {
      color: var(--text-soft);
      font-size: 15px;
      line-height: 1.85;
    }
    .city-chip-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
    }
    .city-chip {
      padding: 8px 14px;
      border-radius: 100px;
      background: rgba(212, 168, 83, 0.1);
      border: 1px solid var(--border);
      color: var(--gold-light);
      font-size: 12px;
      font-weight: 600;
    }
    .city-tip-stack {
      display: grid;
      gap: 18px;
    }
    .city-tip-card {
      padding: 22px;
    }
    .city-tip-icon {
      font-size: 28px;
      margin-bottom: 12px;
      display: block;
    }
    .city-tip-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--text-primary);
    }
    .city-tip-text {
      color: var(--text-soft);
      font-size: 14px;
      line-height: 1.75;
    }
    .city-empty-state {
      padding: 42px;
      text-align: center;
    }
    .city-empty-state h2 {
      font-family: 'Cinzel', serif;
      font-size: clamp(28px, 4vw, 40px);
      margin-bottom: 12px;
    }
    .city-empty-state p {
      max-width: 760px;
      margin: 0 auto 28px;
      color: var(--text-soft);
      line-height: 1.8;
    }
    .city-empty-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-top: 32px;
    }
    .dest-card-link {
      display: block;
    }
    .planner-note {
      color: var(--text-muted);
      font-size: 12px;
      margin-top: 16px;
      line-height: 1.7;
    }
    @media (min-width: 769px) {
      .mobile-menu {
        display: none;
      }
      #hamburger {
        display: none;
      }
    }
    @media (max-width: 1024px) {
      .city-overview-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 768px) {
      #navbar {
        background: rgba(6, 6, 15, 0.78);
        backdrop-filter: blur(16px);
      }
      .nav-links {
        display: none;
      }
      .city-hero-actions {
        flex-direction: column;
        align-items: flex-start;
      }
      .planner-card {
        padding: 32px 22px;
      }
      .hero-v3 {
        min-height: 88vh;
        padding-top: 110px;
      }
    }
    @media (max-width: 520px) {
      .city-stat-grid {
        grid-template-columns: 1fr;
      }
      .city-panel,
      .city-tip-card,
      .city-empty-state {
        padding: 22px;
      }
    }
  `;

  document.head.appendChild(style);
}

function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// Escapes dynamic text before inserting it into HTML strings.
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugify(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Converts a city key, city name or alias into a normalized token.
// Example:
// "New Delhi" -> "newdelhi"
// "  Goa  "   -> "goa"
function normalizeLookupToken(value) {
  if (!value) return '';

  return decodeURIComponent(String(value).trim().toLowerCase())
    .replace(/\+/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+/g, '');
}

// Builds a lookup table from cityData itself.
// This is the key reason you do NOT need to edit app.js every time
// you add a new city. Add `aliases` in cityData.js if required.
function getCityLookupMap() {
  const lookup = {};

  Object.entries(cityData || {}).forEach(([key, city]) => {
    const aliases = Array.isArray(city?.aliases) ? city.aliases : [];
    const possibleKeys = [key, city?.name, ...aliases];

    possibleKeys.forEach(item => {
      const normalized = normalizeLookupToken(item);
      if (normalized) {
        lookup[normalized] = key;
      }
    });
  });

  return lookup;
}

// Returns a safe default city key.
// The first available city in cityData becomes the fallback automatically.
function getDefaultCityKey() {
  const firstEntry = Object.keys(cityData || {})[0];
  return firstEntry || '';
}

// Main resolver used throughout the page.
// Input can be query param, dropdown value, city key or alias.
function normalizeCityKey(cityKey) {
  const normalized = normalizeLookupToken(cityKey);
  if (!normalized) return '';

  const lookup = getCityLookupMap();
  return lookup[normalized] || normalized;
}

function humanizeKey(value) {
  const compact = String(value || 'city').replace(/[-_]+/g, ' ').trim();
  return compact.replace(/\b\w/g, char => char.toUpperCase());
}

// Hero image fallback: if a city does not provide `heroImage`,
// this global scenic image will be used.
function getHeroImage(city) {
  return city.heroImage || DEFAULT_HERO_IMAGE;
}

// Used by planner dropdown and fallback cards.
function getAvailableCityEntries() {
  return Object.entries(cityData || {})
    .filter(([key, city]) => key && city && city.name)
    .sort(([, a], [, b]) => a.name.localeCompare(b.name));
}

async function hydrateCityDataFromApi() {
  if (cityDataHydrated) return;
  cityDataHydrated = true;

  if (!window.smartTripApi) return;

  try {
    const response = await window.smartTripApi.getJson('/api/cities?full=true');
    const remoteCities = response?.data || {};

    Object.entries(remoteCities).forEach(([key, city]) => {
      cityData[key] = city;
    });
  } catch (error) {
    console.warn('City guide API fallback used:', error.message);
  }
}

// If a city does not define custom quick facts, this fallback set is generated.
function getQuickFacts(city) {
  if (Array.isArray(city.quickFacts) && city.quickFacts.length) {
    return city.quickFacts;
  }

  return [
    { label: 'State', value: city.state || 'India' },
    { label: 'Top picks', value: `${city.attractions?.length || 0} attractions` },
    { label: 'Stay options', value: `${city.hotels?.length || 0} hotel picks` },
    { label: 'Food spots', value: `${city.food?.length || 0} recommendations` }
  ];
}

function getQueryPlannerState() {
  const days = getUrlParam('days') || '';
  const budget = getUrlParam('budget') || (days ? 'mid' : '');
  return {
    city: normalizeCityKey(getUrlParam('city')) || getDefaultCityKey(),
    days,
    budget,
    selectedType
  };
}

// Reads the current values from the planner controls.
function getPlannerStateFromDom() {
  return {
    city: document.getElementById('pl-city')?.value || uiState.currentCityKey,
    budget: document.getElementById('pl-budget')?.value || '',
    days: document.getElementById('pl-days')?.value || '',
    selectedType
  };
}

// Keeps URL query params synced with the selected city and planner values.
function updateUrl(cityKey, plannerState = {}) {
  const url = new URL(window.location.href);

  if (cityKey) {
    url.searchParams.set('city', cityKey);
  } else {
    url.searchParams.delete('city');
  }

  if (plannerState.days) {
    url.searchParams.set('days', plannerState.days);
  } else {
    url.searchParams.delete('days');
  }

  if (plannerState.budget) {
    url.searchParams.set('budget', plannerState.budget);
  } else {
    url.searchParams.delete('budget');
  }

  window.history.replaceState({}, '', url);
}

// Creates safe external links for maps, bookings and spot details.
function createExternalLink(link, label, className = 'btn-outline') {
  if (!link || link === '#') return '';

  return `<a href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer" class="${className}">${escapeHtml(label)}</a>`;
}

function getTransportLinkLabel(item) {
  if (!item || !item.type) return 'Open Info';
  const type = item.type.toLowerCase();
  if (type.includes('rail')) return 'Book Train';
  if (type.includes('air') || type.includes('flight') || type.includes('plane')) return 'Book Flight';
  if (type.includes('local') || type.includes('cab') || type.includes('auto') || type.includes('taxi')) return 'Open Uber';
  return 'Open Info';
}

// ------------------------------
// Template section builders
// Each function below returns one page section as HTML.
// ------------------------------

function createHeroSection(city) {
  const facts = getQuickFacts(city).slice(0, 4);
  const heroHighlights = Array.isArray(city.heroHighlights) ? city.heroHighlights : [];

  return `
    <section
      id="cityHero"
      class="hero-v3"
      style="background-image:linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.68)), url('${escapeHtml(getHeroImage(city))}');"
    >
      <div class="container">
        <div class="hero-content reveal">
          <div class="ai-badge">
            <i class="fas fa-location-dot"></i>
            ${escapeHtml(city.state || 'India')} · Bharat Guide
          </div>
          <h1 id="city-name">Discover <span>${escapeHtml(city.name)}</span></h1>
          <p id="city-desc">${escapeHtml(city.description || '')}</p>
          <div class="hero-tags" id="city-tags">
            ${heroHighlights.map(item => `<span><i class="fas fa-check-circle"></i>${escapeHtml(item)}</span>`).join('')}
          </div>
          <div class="city-hero-actions">
            <a href="#attractions" class="btn-gold">Explore Highlights</a>
            <a href="#planner" class="btn-outline">Plan Your Trip</a>
          </div>
          <div class="city-stat-grid">
            ${facts.map(fact => `
              <div class="city-stat-card">
                <span class="city-stat-label">${escapeHtml(fact.label)}</span>
                <span class="city-stat-value">${escapeHtml(fact.value)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function createOverviewSection(city) {
  const bestFor = Array.isArray(city.bestFor) ? city.bestFor : [];
  const travelTips = Array.isArray(city.travelTips) ? city.travelTips : [];
  const spotlight = city.spotlight || city.description;

  if (!spotlight && !travelTips.length && !bestFor.length) {
    return '';
  }

  return `
    <section id="overview">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Quick Planning</span>
          <h2 class="section-title">${escapeHtml(city.name)} <span>At A Glance</span></h2>
          <div class="gold-line"></div>
          <p class="section-sub">Use these quick cues before booking your hotel, route and sightseeing order.</p>
        </div>
        <div class="city-overview-grid">
          <article class="city-panel glass-card reveal">
            <h3 class="city-panel-title">Why ${escapeHtml(city.name)} works so well</h3>
            <p class="city-panel-copy">${escapeHtml(spotlight)}</p>
            ${bestFor.length ? `
              <div class="city-chip-list">
                ${bestFor.map(item => `<span class="city-chip">${escapeHtml(item)}</span>`).join('')}
              </div>
            ` : ''}
          </article>
          <div class="city-tip-stack">
            ${travelTips.map(tip => `
              <article class="city-tip-card glass-card reveal">
                <span class="city-tip-icon">${escapeHtml(tip.icon || '✦')}</span>
                <div class="city-tip-title">${escapeHtml(tip.title)}</div>
                <p class="city-tip-text">${escapeHtml(tip.desc || '')}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function createAttractionsSection(city) {
  const attractions = Array.isArray(city.attractions) ? city.attractions : [];
  if (!attractions.length) return '';

  const types = [...new Set(attractions.map(item => item.type).filter(Boolean))];

  return `
    <section id="attractions">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Top Sights</span>
          <h2 class="section-title">${escapeHtml(city.name)} <span>Attractions</span></h2>
          <div class="gold-line"></div>
          <p class="section-sub">Explore the landmarks, viewpoints, heritage sites and local highlights that shape this destination.</p>
        </div>
        <div class="hotels-filter reveal">
          <button type="button" class="filter-btn active" data-filter-target="attraction" data-filter-value="all">All</button>
          ${types.map(type => `
            <button
              type="button"
              class="filter-btn"
              data-filter-target="attraction"
              data-filter-value="${escapeHtml(slugify(type))}"
            >
              ${escapeHtml(type)}
            </button>
          `).join('')}
        </div>
        <div class="attractions-grid reveal" id="city-attractions">
          ${attractions.map(item => `
            <div class="attraction-card" data-type="${escapeHtml(slugify(item.type || 'other'))}">
              <div class="attraction-img" style="background:${escapeHtml(item.bg || 'linear-gradient(135deg,#1f2937,#111827)')};">
                ${escapeHtml(item.icon || '📍')}
              </div>
              <div class="attraction-body">
                <div class="attraction-name">${escapeHtml(item.name)}</div>
                <div class="attraction-desc">${escapeHtml(item.desc || '')}</div>
                <div class="attraction-meta">
                  <span>⭐ ${escapeHtml(item.rating || '4.5')}</span>
                  <span>⏱ ${escapeHtml(item.time || '2 hrs')}</span>
                  <span>${escapeHtml(item.type || 'Sight')}</span>
                </div>
                <details class="attraction-details">
                  <summary>Open full guide</summary>
                  <p>${escapeHtml(item.history || 'A must-visit attraction with local history and strong visual appeal.')}</p>
                  ${item.bestTime ? `<div class="detail-row"><strong>Best time</strong><span>${escapeHtml(item.bestTime)}</span></div>` : ''}
                  ${item.ticketInfo ? `<div class="detail-row"><strong>Entry</strong><span>${escapeHtml(item.ticketInfo)}</span></div>` : ''}
                  ${item.highlights ? `<div class="detail-row"><strong>Highlights</strong><span>${escapeHtml(item.highlights)}</span></div>` : ''}
                  ${createExternalLink(item.link, 'Open Map')}
                </details>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function createPlannerSection(cityKey) {
  const cityOptions = getAvailableCityEntries()
    .map(([key, city]) => `
      <option value="${escapeHtml(key)}" ${key === cityKey ? 'selected' : ''}>
        ${escapeHtml(city.name)}${city.state ? `, ${escapeHtml(city.state)}` : ''}
      </option>
    `)
    .join('');

  const tripTypes = ['Solo', 'Couple', 'Family', 'Friends'];

  return `
    <section id="planner">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">AI Planner</span>
          <h2 class="section-title">Build Your <span>City Plan</span></h2>
          <div class="gold-line"></div>
          <p class="section-sub">Pick your budget, trip length and travel style to get a quick city plan in seconds.</p>
        </div>
        <div class="planner-card reveal">
          <div class="planner-grid">
            <div class="planner-field">
              <label>Destination</label>
              <select id="pl-city">
                ${cityOptions}
              </select>
            </div>
            <div class="planner-field">
              <label>Budget</label>
              <select id="pl-budget">
                <option value="">Select Budget</option>
                <option value="budget">Budget · Under ₹5,000</option>
                <option value="mid">Mid-Range · ₹5K to ₹15K</option>
                <option value="luxury">Luxury · ₹15K+</option>
              </select>
            </div>
            <div class="planner-field">
              <label>Days</label>
              <select id="pl-days">
                <option value="">Select Days</option>
                <option value="1">1 Day</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
                <option value="7">7 Days</option>
                
              </select>
            </div>
            <div class="planner-field">
              <label>Travel Type</label>
              <div class="planner-type-group">
                ${tripTypes.map(type => `
                  <button
                    type="button"
                    class="type-btn ${selectedType === type ? 'active' : ''}"
                    data-trip-type="${escapeHtml(type)}"
                  >
                    ${escapeHtml(type)}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="planner-actions">
            <button type="button" class="btn-gold" data-action="generate-itinerary">Generate Itinerary</button>
            <button type="button" class="btn-outline" data-action="clear-itinerary">Clear</button>
          </div>
          <div id="itinerary-result">
            <div class="itinerary-header">
              <div>
                <div class="section-label" id="itin-badge">Your Trip</div>
                <h3 class="section-title" style="font-size:26px;" id="itin-title">Sample Itinerary</h3>
              </div>
              <div style="text-align:right">
                <div class="badge" id="itin-budget-badge">Mid-Range</div>
              </div>
            </div>
            <div class="itinerary-days" id="itin-days"></div>
            <p class="planner-note" id="itin-note"></p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function createHotelsSection(city) {
  const hotels = Array.isArray(city.hotels) ? city.hotels : [];
  if (!hotels.length) return '';

  const tiers = [...new Set(hotels.map(item => item.tier).filter(Boolean))];

  return `
    <section id="hotels">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Verified Stays</span>
          <h2 class="section-title">Where To <span>Stay</span></h2>
          <div class="gold-line"></div>
          <p class="section-sub">From backpacker beds to palace stays, these picks cover different budgets and travel styles.</p>
        </div>
        <div class="hotels-filter reveal">
          <button type="button" class="filter-btn active" data-filter-target="hotel" data-filter-value="all">All</button>
          ${tiers.map(tier => `
            <button
              type="button"
              class="filter-btn"
              data-filter-target="hotel"
              data-filter-value="${escapeHtml(slugify(tier))}"
            >
              ${escapeHtml(tier)}
            </button>
          `).join('')}
        </div>
        <div class="hotels-grid reveal" id="hotelsGrid">
          ${hotels.map(item => `
            <div class="hotel-card" data-tier="${escapeHtml(slugify(item.tier || 'stay'))}">
              <div class="hotel-img" style="background:${escapeHtml(item.bg || 'linear-gradient(135deg,#334155,#0f172a)')};">
                ${escapeHtml(item.image || '🏨')}
                <span class="hotel-tier"><span class="badge">${escapeHtml(item.tier || 'Stay')}</span></span>
              </div>
              <div class="hotel-body">
                <div class="hotel-name">${escapeHtml(item.name)}</div>
                <div class="hotel-location">📍 ${escapeHtml(item.location || city.name)}</div>
                <div class="hotel-rating">
                  <span class="stars">★★★★★</span>
                  <span>${escapeHtml(item.rating || '4.5')}</span>
                </div>
                <div class="hotel-desc" style="font-size:13px; margin:10px 0 14px;">${escapeHtml(item.desc || '')}</div>
                ${Array.isArray(item.amenities) && item.amenities.length ? `
                  <div class="hotel-amenities">
                    ${item.amenities.map(amenity => `<span class="amenity">${escapeHtml(amenity)}</span>`).join('')}
                  </div>
                ` : ''}
                <div class="hotel-footer">
                  <div class="hotel-price">
                    <div class="per-night">per night</div>
                    <div class="amount">${escapeHtml(item.price || 'Ask')}</div>
                  </div>
                  ${createExternalLink(item.link, 'Book Now', 'btn-gold')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function createFoodSection(city) {
  const foodItems = Array.isArray(city.food) ? city.food : [];
  if (!foodItems.length) return '';

  const categories = [...new Set(foodItems.map(item => item.category).filter(Boolean))];

  return `
    <section id="food">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Local Food</span>
          <h2 class="section-title">Taste Of <span>${escapeHtml(city.name)}</span></h2>
          <div class="gold-line"></div>
          <p class="section-sub">Street favourites, cafes and sit-down spots collected in the same reusable food format.</p>
        </div>
        <div class="food-tabs reveal">
          <button type="button" class="food-tab active" data-filter-target="food" data-filter-value="all">All</button>
          ${categories.map(category => `
            <button
              type="button"
              class="food-tab"
              data-filter-target="food"
              data-filter-value="${escapeHtml(slugify(category))}"
            >
              ${escapeHtml(category)}
            </button>
          `).join('')}
        </div>
        <div class="food-grid reveal" id="foodGrid">
          ${foodItems.map(item => `
            <div class="food-card" data-food="${escapeHtml(slugify(item.category || 'food'))}">
              <div class="food-img" style="background:${escapeHtml(item.bg || 'linear-gradient(135deg,#9a3412,#f59e0b)')};">
                ${escapeHtml(item.image || '🍛')}
              </div>
              <div class="food-body">
                <div class="food-category">${escapeHtml(item.category || 'Food')}</div>
                <div class="food-name">${escapeHtml(item.name)}</div>
                <div class="food-desc">${escapeHtml(item.desc || '')}</div>
                <div class="food-meta">
                  <span class="food-price">${escapeHtml(item.price || 'Ask')}</span>
                  <span class="food-rating">⭐ ${escapeHtml(item.rating || '4.5')}</span>
                </div>
                ${item.link && item.link !== '#' ? `
                  <div style="margin-top:14px;">
                    ${createExternalLink(item.link, 'Open Spot')}
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function createTransportSection(city) {
  const transportItems = Array.isArray(city.transport) ? city.transport : [];
  if (!transportItems.length) return '';

  return `
    <section id="transport">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Getting Around</span>
          <h2 class="section-title">${escapeHtml(city.name)} <span>Transport</span></h2>
          <div class="gold-line"></div>
          <p class="section-sub">Simple arrival and local movement options so you can plan transfers without guesswork.</p>
        </div>
        <div class="transport-content reveal" id="transportContent">
          ${transportItems.map(item => `
            <div class="transport-card">
              <div class="transport-icon">${escapeHtml(item.icon || '🚕')}</div>
              <div class="transport-type">${escapeHtml(item.type || 'Service')}</div>
              <div class="transport-title">${escapeHtml(item.title)}</div>
              <div class="transport-details">${escapeHtml(item.details || '')}</div>
              <div class="transport-cost">
                <span class="cost-label">${escapeHtml(item.costLabel || 'Typical cost')}</span>
                <span class="cost-value">${escapeHtml(item.costValue || 'Ask locally')}</span>
              </div>
              ${item.link && item.link !== '#' ? `
                <div style="margin-top:14px;">
                  ${createExternalLink(item.link, getTransportLinkLabel(item))}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Fallback card list shown when user opens an unknown city key.
function createSuggestionCards(limit = 6) {
  return getAvailableCityEntries()
    .slice(0, limit)
    .map(([key, city]) => `
      <a class="dest-card-link" href="city.html?city=${encodeURIComponent(key)}">
        <div class="dest-card-v2">
          <img src="${escapeHtml(getHeroImage(city))}" alt="${escapeHtml(city.name)}">
          <div class="overlay">
            <h4>${escapeHtml(city.name)}</h4>
            <p>${escapeHtml(city.state || 'India')} · ${escapeHtml(city.description || 'Travel guide coming soon.')}</p>
          </div>
        </div>
      </a>
    `)
    .join('');
}

function createUnavailableCityTemplate(cityKey) {
  const label = humanizeKey(getUrlParam('city') || cityKey || 'city');
  const firstCityKey = getDefaultCityKey();
  const firstCityLabel = cityData[firstCityKey]?.name || 'Available City';

  return `
    <section
      class="hero-v3"
      style="background-image:linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.68)), url('${escapeHtml(DEFAULT_HERO_IMAGE)}');"
    >
      <div class="container">
        <div class="hero-content reveal">
          <div class="ai-badge">
            <i class="fas fa-compass"></i>
            Bharat Guide City Setup
          </div>
          <h1>${escapeHtml(label)} <span>Guide Coming Soon</span></h1>
          <p>This destination guide is still being prepared. You can open another available city guide or go back to the main site.</p>
          <div class="city-hero-actions">
            <a href="city.html?city=${encodeURIComponent(firstCityKey)}" class="btn-gold">Open ${escapeHtml(firstCityLabel)}</a>
            <a href="home.html" class="btn-outline">Back To Home</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="city-empty-state glass-card reveal">
          <h2>Guide In Progress</h2>
          <p>We are still curating the best places, stays, food spots and transport details for this destination.</p>
        </div>
        <div class="city-empty-grid reveal">
          ${createSuggestionCards()}
        </div>
      </div>
    </section>
  `;
}

// Final page builder: this combines all reusable sections into one page.
function buildCityPage(city, cityKey) {
  return [
    createHeroSection(city),
    createOverviewSection(city),
    createPlannerSection(cityKey),
    createAttractionsSection(city),
    createHotelsSection(city),
    createFoodSection(city),
    createTransportSection(city)
  ].join('');
}

// ------------------------------
// UI behavior helpers
// ------------------------------

function ensureRevealObserver() {
  if (revealObserver) return;

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
}

function observeReveals(scope = document) {
  ensureRevealObserver();

  scope.querySelectorAll('.reveal').forEach(element => {
    if (element.dataset.revealBound) return;
    element.dataset.revealBound = 'true';
    revealObserver.observe(element);
  });
}

// Navbar becomes opaque after a small scroll.
function updateNavbarState() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
  }
}

// Mobile menu helper.
function closeMobileMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
}

// Binds global shell events only once.
// city-root uses event delegation so newly rendered content works automatically.
function bindShellEvents() {
  if (shellEventsBound) return;
  shellEventsBound = true;

  const cityRoot = document.getElementById('city-root');
  const hamburger = document.getElementById('hamburger');
  const closeMenuBtn = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (cityRoot) {
    cityRoot.addEventListener('click', handleRootClick);
    cityRoot.addEventListener('change', handleRootChange);
  }

  hamburger?.addEventListener('click', () => mobileMenu?.classList.add('open'));
  closeMenuBtn?.addEventListener('click', closeMobileMenu);
  mobileMenu?.addEventListener('click', event => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMobileMenu();
    }
  });

  window.addEventListener('scroll', updateNavbarState, { passive: true });
  updateNavbarState();
}

// Shared filter logic for hotels, food and attractions.
function applyFilter(target, value) {
  const config = FILTER_CONFIG[target];
  if (!config) return;

  uiState[config.stateKey] = value;

  document.querySelectorAll(`[data-filter-target="${target}"]`).forEach(button => {
    button.classList.toggle('active', button.dataset.filterValue === value);
  });

  document.querySelectorAll(config.selector).forEach(card => {
    const cardValue = card.dataset[config.datasetKey];
    card.style.display = value === 'all' || cardValue === value ? '' : 'none';
  });
}

// Syncs active class for Solo / Couple / Family / Friends buttons.
function updateTripTypeButtons() {
  document.querySelectorAll('[data-trip-type]').forEach(button => {
    button.classList.toggle('active', button.dataset.tripType === selectedType);
  });
}

// Chooses the best itinerary based on preferred budget,
// with fallback order if that exact budget is missing.
function pickItinerary(city, preferredBudget) {
  const options = city?.itineraries || {};
  const order = [preferredBudget, 'mid', 'budget', 'luxury'];

  for (const key of order) {
    if (key && options[key]) {
      return { budgetKey: key, itinerary: options[key] };
    }
  }

  const fallbackEntry = Object.entries(options)[0];
  return fallbackEntry ? { budgetKey: fallbackEntry[0], itinerary: fallbackEntry[1] } : null;
}

function getBudgetLabel(key) {
  const labels = {
    budget: 'Budget',
    mid: 'Mid-Range',
    luxury: 'Luxury'
  };
  return labels[key] || 'Custom';
}

// Generates the visible itinerary card from the planner form.
function generateItinerary(shouldScroll = true) {
  const cityKey = document.getElementById('pl-city')?.value || uiState.currentCityKey;
  const budget = document.getElementById('pl-budget')?.value || '';
  const days = Number(document.getElementById('pl-days')?.value || 0);
  const city = cityData[cityKey];

  if (!city || !budget || !days) {
    window.alert('Please select destination, budget and days first.');
    return;
  }

  const chosen = pickItinerary(city, budget);
  if (!chosen || !chosen.itinerary) {
    window.alert(`Itinerary is not available yet for ${city.name}.`);
    return;
  }

  const itinerary = chosen.itinerary;
  const availableDays = itinerary.days.slice(0, days);
  const result = document.getElementById('itinerary-result');
  const badge = document.getElementById('itin-badge');
  const title = document.getElementById('itin-title');
  const budgetBadge = document.getElementById('itin-budget-badge');
  const daysContainer = document.getElementById('itin-days');
  const note = document.getElementById('itin-note');

  if (!result || !badge || !title || !budgetBadge || !daysContainer || !note) return;

  badge.textContent = `${selectedType} · ${city.name}`;
  title.textContent = itinerary.title;
  budgetBadge.textContent = `${getBudgetLabel(chosen.budgetKey)} · ${availableDays.length} Day Plan`;
  daysContainer.innerHTML = availableDays.map(day => `
    <div class="day-card">
      <div class="day-label">${escapeHtml(day.label)}</div>
      <div class="day-activities">
        ${(day.activities || []).map(activity => `
          <div class="activity">
            <span class="activity-time">${escapeHtml(activity.time || '')}</span>
            <span>${escapeHtml(activity.text || '')}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  note.textContent = days > itinerary.days.length
    ? `Showing ${itinerary.days.length} curated day(s) currently available for ${city.name}.`
    : '';

  result.style.display = 'block';
  updateUrl(cityKey, { budget, days: String(days), selectedType });

  if (shouldScroll) {
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Resets planner inputs for the current city.
function clearPlanner() {
  const citySelect = document.getElementById('pl-city');
  const budgetSelect = document.getElementById('pl-budget');
  const daysSelect = document.getElementById('pl-days');
  const result = document.getElementById('itinerary-result');
  const note = document.getElementById('itin-note');

  if (citySelect) {
    citySelect.value = uiState.currentCityKey;
  }
  if (budgetSelect) budgetSelect.value = '';
  if (daysSelect) daysSelect.value = '';
  if (note) note.textContent = '';
  if (result) result.style.display = 'none';

  updateUrl(uiState.currentCityKey, {});
}

// Applies saved/query/default planner values back into the UI.
function applyPlannerState(state, options = {}) {
  const citySelect = document.getElementById('pl-city');
  const budgetSelect = document.getElementById('pl-budget');
  const daysSelect = document.getElementById('pl-days');

  if (state.selectedType) {
    selectedType = state.selectedType;
  }

  if (citySelect && state.city) {
    citySelect.value = state.city;
  }
  if (budgetSelect && state.budget) {
    budgetSelect.value = state.budget;
  }
  if (daysSelect && state.days) {
    daysSelect.value = state.days;
  }

  updateTripTypeButtons();

  if (options.generateIfReady && state.budget && state.days) {
    generateItinerary(false);
  }
}

// Event delegation for all city-root button clicks.
function handleRootClick(event) {
  const filterButton = event.target.closest('[data-filter-target]');
  if (filterButton) {
    applyFilter(filterButton.dataset.filterTarget, filterButton.dataset.filterValue);
    return;
  }

  const tripTypeButton = event.target.closest('[data-trip-type]');
  if (tripTypeButton) {
    selectedType = tripTypeButton.dataset.tripType || 'Solo';
    updateTripTypeButtons();
    return;
  }

  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;

  if (actionButton.dataset.action === 'generate-itinerary') {
    generateItinerary();
  }

  if (actionButton.dataset.action === 'clear-itinerary') {
    clearPlanner();
  }
}

// Handles dropdown changes.
// The important part: changing the city dropdown re-renders the whole page
// from cityData.js using the selected city key.
async function handleRootChange(event) {
  if (event.target.id === 'pl-city') {
    const nextCityKey = normalizeCityKey(event.target.value) || getDefaultCityKey();
    const plannerState = getPlannerStateFromDom();
    plannerState.city = nextCityKey;
    await renderCityView(nextCityKey, plannerState, { autoGenerateFromUrl: false });
    updateUrl(nextCityKey, plannerState);
    return;
  }

  if (event.target.id === 'pl-budget' || event.target.id === 'pl-days') {
    updateUrl(uiState.currentCityKey, getPlannerStateFromDom());
  }
}

// Core renderer:
// 1. resolve city key
// 2. find city object in cityData
// 3. build full page HTML
// 4. restore planner state
async function renderCityView(cityKey, plannerState = null, options = {}) {
  const normalizedKey = normalizeCityKey(cityKey) || getDefaultCityKey();
  const city = cityData[normalizedKey];
  const cityRoot = document.getElementById('city-root');

  uiState.currentCityKey = normalizedKey;
  uiState.hotelFilter = 'all';
  uiState.foodFilter = 'all';
  uiState.attractionFilter = 'all';

  if (!cityRoot) return;

  if (plannerState?.selectedType) {
    selectedType = plannerState.selectedType;
  }

  if (!city) {
    cityRoot.innerHTML = createUnavailableCityTemplate(normalizedKey);
    document.title = `${humanizeKey(normalizedKey)} | Bharat Guide`;
    observeReveals(cityRoot);
    closeMobileMenu();
    return;
  }

  cityRoot.innerHTML = buildCityPage(city, normalizedKey);
  document.title = `${city.name} | Bharat Guide`;

  if (plannerState) {
    applyPlannerState(plannerState);
  } else if (options.autoGenerateFromUrl) {
    applyPlannerState(getQueryPlannerState(), { generateIfReady: true });
  }

  observeReveals(cityRoot);
  closeMobileMenu();
}

// Entry point for the page.
async function initCityPage() {
  injectRuntimeStyles();
  bindShellEvents();

  const requestedCityKey = normalizeCityKey(getUrlParam('city')) || getDefaultCityKey();
  await renderCityView(requestedCityKey, null, { autoGenerateFromUrl: true });
  hydrateCityDataFromApi();
}

window.closeMobileMenu = closeMobileMenu;
window.generateItinerary = generateItinerary;
window.clearPlanner = clearPlanner;

document.addEventListener('DOMContentLoaded', initCityPage);
