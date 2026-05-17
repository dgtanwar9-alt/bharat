(function () {
  "use strict";

  if (window.SmartTripNavbar) return;

  // Universal default routes. Zarurat ho to page level config se override kar sakte hain.
  var DEFAULT_LINKS = {
    home: "home.html",
    destinations: "home.html#destinations",
    planner: "home.html#planner",
    tripIdeas: "home.html#ideas",
    about: "home.html#about",
    wishlist: "wishlist.html",
    login: "login.html",
    profile: "#profile",
  };

  var DEFAULT_MENU_ITEMS = [
    { key: "home", label: "Home", icon: "fa-house" },
    { key: "destinations", label: "Destinations", icon: "fa-compass" },
    { key: "planner", label: "AI Planner", icon: "fa-wand-magic-sparkles" },
    { key: "tripIdeas", label: "Trip Ideas", icon: "fa-map-location-dot" },
    { key: "about", label: "About Us", icon: "fa-circle-info" },
    { key: "wishlist", label: "Wishlist", icon: "fa-heart" },
  ];

  var state = {
    mount: null,
    config: null,
    nav: null,
    backdrop: null,
    sidebar: null,
    profileSlot: null,
    sidebarAccount: null,
    sidebarAuth: null,
    menuButton: null,
    cleanupFns: [],
  };

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function toText(value, fallback) {
    var clean = String(value || "").trim();
    return clean || fallback;
  }

  function getInitials(name) {
    var parts = toText(name, "Traveler").split(/\s+/).filter(Boolean).slice(0, 2);
    return parts.map(function (part) { return part.charAt(0).toUpperCase(); }).join("") || "ST";
  }

  function getUser() {
    var token = localStorage.getItem("smarttrip_token");
    var rawUser = localStorage.getItem("smarttrip_user");
    if (!token && !rawUser) return null;

    if (!rawUser) {
      return {
        name: "Traveler",
        avatar: "",
      };
    }

    try {
      var parsed = JSON.parse(rawUser);
      if (parsed && typeof parsed === "object") return parsed;
    } catch (error) {
      return {
        name: rawUser,
        avatar: "",
      };
    }

    return null;
  }

  function getUserName(user) {
    return toText(user && (user.name || user.fullName || user.username), "Traveler");
  }

  function getAvatarUrl(user) {
    return toText(
      user && (user.avatar || user.avatarUrl || user.photo || user.photoURL || user.image || user.profileImage),
      ""
    );
  }

  // Runtime config ko defaults ke saath merge karke navbar reusable banaya gaya hai.
  function mergeConfig() {
    var incoming = window.SMARTTRIP_NAVBAR_CONFIG || {};
    var links = Object.assign({}, DEFAULT_LINKS, incoming.links || {});
    var menuItems = Array.isArray(incoming.menuItems) && incoming.menuItems.length
      ? incoming.menuItems
      : DEFAULT_MENU_ITEMS;

    return {
      brandName: toText(incoming.brandName, "Smart Trip"),
      brandTagline: toText(incoming.brandTagline, "Travel India Smartly"),
      brandHref: toText(incoming.brandHref, links.home),
      links: links,
      menuItems: menuItems,
      profileMenuItems: Array.isArray(incoming.profileMenuItems) && incoming.profileMenuItems.length
        ? incoming.profileMenuItems
        : [
            { type: "link", label: "My Profile", href: links.profile, icon: "fa-user" },
            { type: "link", label: "Wishlist", href: links.wishlist, icon: "fa-heart" },
            { type: "action", label: "Logout", action: "logout", icon: "fa-right-from-bracket", danger: true },
          ],
    };
  }

  // Purane #navbar ko bhi auto-upgrade kar do taaki existing pages toot na jaayein.
  function resolveMount() {
    var explicitMount = document.querySelector("[data-smarttrip-navbar]");
    if (explicitMount) return explicitMount;

    var legacyNav = document.getElementById("navbar");
    if (legacyNav) {
      var legacyMobileMenu = document.getElementById("mobileMenu");
      var mount = document.createElement("div");
      mount.setAttribute("data-smarttrip-navbar", "");
      legacyNav.replaceWith(mount);
      if (legacyMobileMenu) legacyMobileMenu.remove();
      return mount;
    }

    var autoMount = document.createElement("div");
    autoMount.setAttribute("data-smarttrip-navbar", "");
    document.body.insertBefore(autoMount, document.body.firstChild);
    return autoMount;
  }

  function isActiveLink(href) {
    if (!href || href === "#") return false;

    try {
      var target = new URL(href, window.location.href);
      var current = new URL(window.location.href);
      var samePath = target.pathname === current.pathname;

      if (!samePath) return false;
      if (!target.hash) return !current.hash;
      return target.hash === current.hash;
    } catch (error) {
      return false;
    }
  }

  function createAvatarMarkup(user, className) {
    var avatarUrl = escapeHtml(getAvatarUrl(user));
    var initials = escapeHtml(getInitials(getUserName(user)));

    if (avatarUrl) {
      return '<span class="' + className + '"><img src="' + avatarUrl + '" alt="' + initials + '"></span>';
    }

    return '<span class="' + className + '">' + initials + "</span>";
  }

  function createSidebarLinks() {
    return state.config.menuItems.map(function (item) {
      var href = state.config.links[item.key] || "#";
      var activeClass = isActiveLink(href) ? " is-active" : "";
      return [
        '<a class="st-sidebar__link' + activeClass + '" href="' + escapeHtml(href) + '">',
        '  <span class="st-sidebar__icon"><i class="fas ' + escapeHtml(item.icon) + '"></i></span>',
        '  <span class="st-sidebar__label">' + escapeHtml(item.label) + "</span>",
        "</a>",
      ].join("");
    }).join("");
  }

  function createProfileMenuMarkup() {
    return state.config.profileMenuItems.map(function (item) {
      var commonClass = "st-profile-menu__item" + (item.danger ? " is-danger" : "");
      if (item.type === "action") {
        return [
          '<button class="' + commonClass + '" type="button" data-st-action="' + escapeHtml(item.action) + '">',
          '  <i class="fas ' + escapeHtml(item.icon) + '"></i>',
          "  <span>" + escapeHtml(item.label) + "</span>",
          "</button>",
        ].join("");
      }

      return [
        '<a class="' + commonClass + '" href="' + escapeHtml(item.href || "#") + '">',
        '  <i class="fas ' + escapeHtml(item.icon) + '"></i>',
        "  <span>" + escapeHtml(item.label) + "</span>",
        "</a>",
      ].join("");
    }).join("");
  }

  function createNavbarMarkup() {
    return [
      '<div class="st-nav-shell">',
      '  <header class="st-nav" data-st-navbar>',
      '    <div class="st-nav__bar">',
      '      <div class="st-nav__left">',
      '        <button class="st-nav__menu-btn" type="button" aria-label="Open menu" aria-expanded="false" data-st-menu-toggle>',
      '          <span class="st-nav__menu-icon"></span>',
      "        </button>",
      '        <a class="st-nav__brand" href="' + escapeHtml(state.config.brandHref) + '">',
      '          <span class="st-nav__brand-icon"><i class="fas fa-suitcase"></i></span>',
      '          <span class="st-nav__brand-copy">',
      '            <span class="st-nav__brand-name">' + escapeHtml(state.config.brandName) + "</span>",
      '            <span class="st-nav__brand-tagline">' + escapeHtml(state.config.brandTagline) + "</span>",
      "          </span>",
      "        </a>",
      "      </div>",
      '      <div class="st-nav__center" aria-hidden="true">',
      '        <span class="st-nav__center-line"></span>',
      "      </div>",
      '      <div class="st-nav__right">',
      '        <div class="st-nav__profile-slot" data-st-profile-slot></div>',
      "      </div>",
      "    </div>",
      "  </header>",
      '  <button class="st-sidebar-backdrop" type="button" aria-label="Close menu" data-st-backdrop></button>',
      '  <aside class="st-sidebar" aria-hidden="true" data-st-sidebar>',
      '    <div class="st-sidebar__topbar">',
      '      <div class="st-sidebar__title">Explore Menu</div>',
      '      <button class="st-sidebar__close" type="button" aria-label="Close menu" data-st-close-sidebar>',
      '        <i class="fas fa-xmark"></i>',
      "      </button>",
      "    </div>",
      '    <div class="st-sidebar__account" data-st-sidebar-account></div>',
      '    <nav class="st-sidebar__nav">',
      createSidebarLinks(),
      '      <div data-st-sidebar-auth></div>',
      "    </nav>",
      '    <div class="st-sidebar__footer">',
      "      Smart Trip universal navbar. Naye pages par bhi isi component ko reuse karein.",
      "    </div>",
      "  </aside>",
      "</div>",
    ].join("");
  }

  // Login state ke hisaab se right side CTA aur sidebar account area switch hota hai.
  function renderAuthUI() {
    var user = getUser();
    var profileSlot = state.profileSlot;
    var sidebarAccount = state.sidebarAccount;
    var sidebarAuth = state.sidebarAuth;

    if (!profileSlot || !sidebarAccount || !sidebarAuth) return;

    if (!user) {
      profileSlot.innerHTML = [
        '<a class="st-login-btn" href="' + escapeHtml(state.config.links.login) + '">',
        '  <i class="fas fa-user"></i>',
        "  <span>Login</span>",
        "</a>",
      ].join("");

      sidebarAccount.innerHTML = [
        '<span class="st-sidebar__avatar"><i class="fas fa-user"></i></span>',
        '<div class="st-sidebar__account-copy">',
        '  <span class="st-sidebar__account-name">Welcome, Traveler</span>',
        '  <span class="st-sidebar__account-subtitle">Login karke profile aur wishlist access karein.</span>',
        "</div>",
      ].join("");

      sidebarAuth.innerHTML = [
        '<a class="st-sidebar__auth-btn" href="' + escapeHtml(state.config.links.login) + '">',
        '  <span class="st-sidebar__icon"><i class="fas fa-right-to-bracket"></i></span>',
        '  <span class="st-sidebar__label">Login</span>',
        "</a>",
      ].join("");

      return;
    }

    var safeName = escapeHtml(getUserName(user));

    profileSlot.innerHTML = [
      '<button class="st-profile-trigger" type="button" aria-expanded="false" data-st-profile-toggle>',
      createAvatarMarkup(user, "st-profile-avatar"),
      '  <span class="st-profile-meta">',
      '    <span class="st-profile-name">' + safeName + "</span>",
      '    <span class="st-profile-label">My Account</span>',
      "  </span>",
      '  <i class="fas fa-chevron-down"></i>',
      "</button>",
      '<div class="st-profile-menu" data-st-profile-menu>',
      createProfileMenuMarkup(),
      "</div>",
    ].join("");

    sidebarAccount.innerHTML = [
      createAvatarMarkup(user, "st-sidebar__avatar"),
      '<div class="st-sidebar__account-copy">',
      '  <span class="st-sidebar__account-name">' + safeName + "</span>",
      '  <span class="st-sidebar__account-subtitle">Ready for your next journey</span>',
      "</div>",
    ].join("");

    sidebarAuth.innerHTML = [
      '<button class="st-sidebar__auth-btn is-danger" type="button" data-st-action="logout">',
      '  <span class="st-sidebar__icon"><i class="fas fa-right-from-bracket"></i></span>',
      '  <span class="st-sidebar__label">Logout</span>',
      "</button>",
    ].join("");
  }

  function setScrolledState() {
    if (!state.nav) return;
    state.nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function closeProfileMenu() {
    var trigger = state.mount.querySelector("[data-st-profile-toggle]");
    var menu = state.mount.querySelector("[data-st-profile-menu]");
    if (!menu || !trigger) return;

    menu.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    state.nav.classList.remove("is-profile-open");
  }

  function toggleProfileMenu(forceOpen) {
    var trigger = state.mount.querySelector("[data-st-profile-toggle]");
    var menu = state.mount.querySelector("[data-st-profile-menu]");
    if (!menu || !trigger) return;

    var shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", shouldOpen);
    trigger.setAttribute("aria-expanded", String(shouldOpen));
    state.nav.classList.toggle("is-profile-open", shouldOpen);
  }

  function toggleSidebar(forceOpen) {
    if (!state.sidebar || !state.backdrop || !state.nav || !state.menuButton) return;

    var shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !state.sidebar.classList.contains("is-open");
    if (shouldOpen) closeProfileMenu();

    state.sidebar.classList.toggle("is-open", shouldOpen);
    state.backdrop.classList.toggle("is-open", shouldOpen);
    state.sidebar.setAttribute("aria-hidden", String(!shouldOpen));
    state.menuButton.setAttribute("aria-expanded", String(shouldOpen));
    state.nav.classList.toggle("is-menu-open", shouldOpen);
    document.body.classList.toggle("st-nav-lock", shouldOpen);

    if (!shouldOpen) closeProfileMenu();
  }

  function logoutUser() {
    localStorage.removeItem("smarttrip_token");
    localStorage.removeItem("smarttrip_user");
    closeProfileMenu();
    toggleSidebar(false);
    renderAuthUI();
    window.location.href = state.config.links.login;
  }

  function bindEvents() {
    function onScroll() {
      setScrolledState();
    }

    function onDocumentClick(event) {
      var clickedInsideProfile = event.target.closest("[data-st-profile-slot]");
      var clickedProfileToggle = event.target.closest("[data-st-profile-toggle]");
      var clickedSidebar = event.target.closest("[data-st-sidebar]");
      var clickedMenuToggle = event.target.closest("[data-st-menu-toggle]");

      if (!clickedInsideProfile && !clickedProfileToggle) closeProfileMenu();
      if (!clickedSidebar && !clickedMenuToggle && !event.target.closest("[data-st-backdrop]")) {
        toggleSidebar(false);
      }
    }

    function onKeyDown(event) {
      if (event.key !== "Escape") return;
      closeProfileMenu();
      toggleSidebar(false);
    }

    function onMountClick(event) {
      var menuToggle = event.target.closest("[data-st-menu-toggle]");
      var sidebarClose = event.target.closest("[data-st-close-sidebar]");
      var backdrop = event.target.closest("[data-st-backdrop]");
      var profileToggle = event.target.closest("[data-st-profile-toggle]");
      var action = event.target.closest("[data-st-action]");
      var sidebarLink = event.target.closest(".st-sidebar__link");

      if (menuToggle) {
        toggleSidebar();
        return;
      }

      if (sidebarClose || backdrop) {
        toggleSidebar(false);
        return;
      }

      if (profileToggle) {
        event.preventDefault();
        toggleProfileMenu();
        return;
      }

      if (action) {
        var actionName = action.getAttribute("data-st-action");
        if (actionName === "logout") {
          event.preventDefault();
          logoutUser();
        }
        return;
      }

      if (sidebarLink) {
        toggleSidebar(false);
      }
    }

    function onStorage(event) {
      if (event.key === "smarttrip_user" || event.key === "smarttrip_token") {
        renderAuthUI();
      }
    }

    state.mount.addEventListener("click", onMountClick);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("storage", onStorage);

    state.cleanupFns.push(function () { state.mount.removeEventListener("click", onMountClick); });
    state.cleanupFns.push(function () { document.removeEventListener("click", onDocumentClick); });
    state.cleanupFns.push(function () { document.removeEventListener("keydown", onKeyDown); });
    state.cleanupFns.push(function () { window.removeEventListener("scroll", onScroll); });
    state.cleanupFns.push(function () { window.removeEventListener("storage", onStorage); });
  }

  function cacheRefs() {
    state.nav = state.mount.querySelector("[data-st-navbar]");
    state.backdrop = state.mount.querySelector("[data-st-backdrop]");
    state.sidebar = state.mount.querySelector("[data-st-sidebar]");
    state.profileSlot = state.mount.querySelector("[data-st-profile-slot]");
    state.sidebarAccount = state.mount.querySelector("[data-st-sidebar-account]");
    state.sidebarAuth = state.mount.querySelector("[data-st-sidebar-auth]");
    state.menuButton = state.mount.querySelector("[data-st-menu-toggle]");
  }

  function render() {
    state.mount.innerHTML = createNavbarMarkup();
    cacheRefs();
    renderAuthUI();
    setScrolledState();
  }

  function destroy() {
    state.cleanupFns.forEach(function (cleanup) { cleanup(); });
    state.cleanupFns = [];
    document.body.classList.remove("st-nav-lock");
  }

  function init() {
    destroy();
    state.config = mergeConfig();
    state.mount = resolveMount();
    render();
    bindEvents();
  }

  window.SmartTripNavbar = {
    init: init,
    refresh: renderAuthUI,
    logout: logoutUser,
    destroy: destroy,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
