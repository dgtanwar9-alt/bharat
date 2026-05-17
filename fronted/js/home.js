(() => {
  "use strict";

  // Home page ke popular state cards ka single source of truth.
  // Naya state add karne ke liye bas is array mein ek object add karein.
  const states = [
    {
      name: "Rajasthan",
      slug: "rajasthan",
      tagline: "The Land of Kings",
      imageUrl:
        "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=1401&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Goa",
      slug: "goa",
      tagline: "Sunshine State",
      imageUrl:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Kerala",
      slug: "kerala",
      tagline: "God's Own Country",
      imageUrl:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Himachal Pradesh",
      slug: "himachal-pradesh",
      tagline: "Queen of Hills",
      imageUrl:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Uttarakhand",
      slug: "uttarakhand",
      tagline: "The Spiritual Land",
      imageUrl:
        "https://images.unsplash.com/photo-1709623868300-e3b78cad10e1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Delhi",
      slug: "delhi",
      tagline: "Capital Culture",
      imageUrl:
        "https://images.unsplash.com/photo-1549194384-1b6ebfebd079?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Maharashtra",
      slug: "maharashtra",
      tagline: "Gateway to India",
      imageUrl:
        "https://images.unsplash.com/photo-1526481280691-3bfa7568e43b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Uttar Pradesh",
      slug: "uttar-pradesh",
      tagline: "Land of Heritage",
      imageUrl:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Madhya Pradesh",
      slug: "madhya-pradesh",
      tagline: "Heart of India",
      imageUrl:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Tamil Nadu",
      slug: "tamil-nadu",
      tagline: "Temple Trails",
      imageUrl:
        "https://images.unsplash.com/photo-1526481280691-3bfa7568e43b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Karnataka",
      slug: "karnataka",
      tagline: "Coast & Hills",
      imageUrl:
        "https://images.unsplash.com/photo-1504803540668-681d2d1a9d80?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Gujarat",
      slug: "gujarat",
      tagline: "Cultural Heritage",
      imageUrl:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Assam",
      slug: "assam",
      tagline: "Tea Garden Trails",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Andhra Pradesh",
      slug: "andhra-pradesh",
      tagline: "Temple & Coast",
      imageUrl:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const statesGrid = document.getElementById("states-grid");

  // Har state ke liye same UI structure generate karne wala reusable template.
  const createStateCard = ({ name, slug, tagline, imageUrl }) => `
    <div class="dest-card-v2" data-url="district.html?state=${slug}" role="link" tabindex="0">
      <img src="${imageUrl}" alt="${name}">
      <div class="overlay">
        <h4>${name}</h4>
        <p>${tagline}</p>
      </div>
    </div>
  `;

  // Last card static hai, lekin render flow ke andar hi rakha gaya hai taaki section ek hi jagah se manage ho.
  const moreStatesCard = `
    <a href="#states" class="dest-card-v2" data-url="#states" role="link" tabindex="0"
      style="background:#0f172a; display:flex; align-items:center; justify-content:center; text-align:center; text-decoration:none;">
      <div class="overlay" style="background:none; position:relative; padding:0;">
        <i class="fas fa-plus-circle" style="font-size:40px; color:#f59e0b; margin-bottom:10px;"></i>
        <h4 style="color:#f59e0b">More States</h4>
        <p style="color:white">Explore More</p>
      </div>
    </a>
  `;

  // Data aur rendering logic alag rakha gaya hai, isse future scaling simple rahegi.
  function renderStateCards() {
    if (!statesGrid) return;

    statesGrid.innerHTML = `${states.map(createStateCard).join("")}${moreStatesCard}`;
  }

  function openCard(url) {
    window.location.href = url;
  }

  function handleCardClick(event) {
    const card = event.target.closest(".dest-card-v2[data-url]");
    if (!card || !statesGrid.contains(card)) return;

    openCard(card.dataset.url);
  }

  function handleCardKeydown(event) {
    const card = event.target.closest(".dest-card-v2[data-url]");
    if (!card || !statesGrid.contains(card)) return;
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    openCard(card.dataset.url);
  }

  function initStateCards() {
    if (!statesGrid) return;

    renderStateCards();
    statesGrid.addEventListener("click", handleCardClick);
    statesGrid.addEventListener("keydown", handleCardKeydown);
  }

  initStateCards();
})();
