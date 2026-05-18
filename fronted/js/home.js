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
        "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_640.jpg",
    },
    {
      name: "Maharashtra",
      slug: "maharashtra",
      tagline: "Gateway to India",
      imageUrl:
        "https://images.unsplash.com/photo-1695211564991-9cf8f7a1d799?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1haGFyYXNodHJhfGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1544588440-fc7551331160?q=80&w=2422&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Karnataka",
      slug: "karnataka",
      tagline: "Coast & Hills",
      imageUrl:
        "https://images.unsplash.com/photo-1694011772133-dc4b3ff3f24f?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gujarat",
      slug: "gujarat",
      tagline: "Cultural Heritage",
      imageUrl:
        "https://images.unsplash.com/photo-1719139962223-f62b591aee2c?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Assam",
      slug: "assam",
      tagline: "Tea Garden Trails",
      imageUrl:
        "https://images.unsplash.com/photo-1759738096744-853e689cfe66?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Andhra Pradesh",
      slug: "andhra-pradesh",
      tagline: "Temple & Coast",
      imageUrl:
        "https://images.unsplash.com/photo-1549225480-ce72840aa6c8?q=80&w=2308&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const statesGrid = document.getElementById("states-grid");

  // Har state ke liye same UI structure generate karne wala reusable template.
  const createStateCard = ({ name, slug, tagline, imageUrl }) => `
    <div class="dest-card-v2" data-url="district.html?state=${slug}" role="link" tabindex="0">
      <img loading="lazy" decoding="async" src="${imageUrl}" alt="${name}" width="520" height="320">
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


/* IMPORTANT */
if (typeof window.initStateCards === "function") {
  window.initStateCards();
}

})();
