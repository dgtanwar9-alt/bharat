/*
 * ============================================================
 * BHARAT GUIDE - MADHYA PRADESH CITY DATA
 * PART 1
 * ============================================================
 *
 * IMPORTANT:
 * 1. city-data.js MUST load before this file.
 * 2. Do NOT create const cityData again.
 * 3. Add Madhya Pradesh destinations inside Object.assign().
 */

Object.assign(cityData, {

  // ============================================================
  // BHOPAL
  // ============================================================

  bhopal: {
    name: "Bhopal",
    state: "Madhya Pradesh",

    aliases: [
      "bhopal city",
      "city of lakes",
      "capital of madhya pradesh",
      "bhopal madhya pradesh"
    ],

    description:
      "Bhopal is the capital of Madhya Pradesh and a major tourism hub known for lakes, museums, historic mosques, royal heritage, cultural institutions and nearby archaeological attractions.",

    heroImage:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/0b/dc/65.jpg",

    heroHighlights: [
      "City of Lakes",
      "Museums and heritage",
      "Gateway to Central Madhya Pradesh"
    ],

    spotlight:
      "Bhopal combines lakeside landscapes, royal-era architecture, museums, religious landmarks and cultural attractions. The city is also one of the best tourism bases for exploring Bhimbetka, Bhojpur, Sanchi and other destinations of central Madhya Pradesh.",

    bestFor: [
      "Families",
      "History lovers",
      "Museum travellers",
      "Architecture lovers",
      "Weekend trips"
    ],

    quickFacts: [
      {
        label: "Best season",
        value: "October to March"
      },
      {
        label: "Ideal stay",
        value: "3 to 5 days"
      },
      {
        label: "Known for",
        value: "Lakes, museums, mosques and heritage"
      },
      {
        label: "Getting around",
        value: "Cab, auto and city bus"
      }
    ],

    travelTips: [
      {
        title: "Keep one full day for museums",
        desc: "The Tribal Museum, State Museum and cultural institutions deserve enough time instead of rushed sightseeing.",
        icon: "🏛️"
      },
      {
        title: "Visit the lake during evening",
        desc: "Upper Lake and nearby viewpoints are especially enjoyable during sunset and cooler evening hours.",
        icon: "🌅"
      },
      {
        title: "Plan nearby road trips",
        desc: "Bhimbetka, Bhojpur and Sanchi can be explored through separate excursions from Bhopal.",
        icon: "🚗"
      }
    ],

    hotels: [
      {
        name: "Jehan Numa Palace",
        tier: "Luxury",
        price: "₹8,000+",
        rating: "4.6",
        location: "Shamla Hills, Bhopal",
        image: "🏨",
        bg: "linear-gradient(135deg,#78350f,#451a03)",
        desc: "Premium heritage-style hotel suitable for travellers seeking comfort, dining and a refined Bhopal stay.",
        amenities: [
          "Pool",
          "Restaurant",
          "Parking",
          "Premium rooms"
        ],
        link:
          "https://www.google.com/maps/search/Jehan+Numa+Palace+Bhopal"
      },

      {
        name: "Courtyard by Marriott Bhopal",
        tier: "Luxury",
        price: "₹7,000+",
        rating: "4.5",
        location: "Arera Hills, Bhopal",
        image: "🏨",
        bg: "linear-gradient(135deg,#334155,#0f172a)",
        desc: "Modern upscale city hotel suitable for families and business travellers.",
        amenities: [
          "Pool",
          "Restaurant",
          "Fitness centre",
          "Parking"
        ],
        link:
          "https://www.google.com/maps/search/Courtyard+by+Marriott+Bhopal"
      },

      {
        name: "Budget Hotels Bhopal",
        tier: "Budget",
        price: "₹1,500+",
        rating: "4.0",
        location: "Central Bhopal",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Affordable accommodation options suitable for sightseeing-focused travellers.",
        amenities: [
          "Budget rooms",
          "City access",
          "Basic facilities",
          "Parking"
        ],
        link:
          "https://www.google.com/maps/search/Budget+Hotels+Bhopal"
      }
    ],

    food: [
      {
        category: "Breakfast",
        name: "Poha Jalebi",
        image: "🍽️",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        desc: "One of Madhya Pradesh's favourite breakfast combinations and a popular morning meal in Bhopal.",
        price: "₹50 to ₹150",
        rating: "4.7",
        link:
          "https://www.google.com/maps/search/Best+Poha+Jalebi+Bhopal"
      },

      {
        category: "Local Cuisine",
        name: "Bhopali Cuisine",
        image: "🍛",
        bg: "linear-gradient(135deg,#7c2d12,#450a0a)",
        desc: "Explore Bhopal's traditional culinary culture through old-city restaurants and local food areas.",
        price: "₹300 to ₹800",
        rating: "4.6",
        link:
          "https://www.google.com/maps/search/Traditional+Bhopali+Food"
      },

      {
        category: "Food Street",
        name: "Chatori Gali",
        image: "🍢",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "Popular evening food area offering snacks, kebabs and casual local dining.",
        price: "₹200 to ₹600",
        rating: "4.5",
        link:
          "https://www.google.com/maps/search/Chatori+Gali+Bhopal"
      }
    ],

    transport: [
      {
        title: "Raja Bhoj Airport",
        type: "Airport",
        icon: "✈️",
        details:
          "The main airport serving Bhopal and central Madhya Pradesh.",
        costLabel: "Airport transfer",
        costValue: "₹400 to ₹1,000",
        link:
          "https://www.google.com/maps/search/Raja+Bhoj+Airport"
      },

      {
        title: "Bhopal Junction",
        type: "Railway",
        icon: "🚆",
        details:
          "Major railway station connecting Bhopal with important Indian cities.",
        costLabel: "Station transfer",
        costValue: "₹100 to ₹400",
        link:
          "https://www.google.com/maps/search/Bhopal+Junction"
      },

      {
        title: "Cab and Auto",
        type: "Local travel",
        icon: "🚕",
        details:
          "Cabs and autos are practical options for attractions spread across the city.",
        costLabel: "Typical ride",
        costValue: "₹100 to ₹600",
        link:
          "https://www.google.com/maps/search/Taxi+Bhopal"
      }
    ],

    attractions: [
      {
        name: "Upper Lake",
        type: "Lake",
        icon: "🌊",
        rating: "4.6",
        time: "2-3 hrs",
        desc: "Bhopal's iconic historic lake popular for boating, sunset views and recreation.",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        link: "https://www.google.com/maps/search/Upper+Lake+Bhopal",
        history: "Upper Lake is one of the oldest artificial lakes in India and an important part of Bhopal's identity.",
        bestTime: "Late afternoon to sunset",
        ticketInfo: "Lake access is generally free; boating charges vary.",
        highlights: "Boating, lake views and sunset"
      },

      {
        name: "Lower Lake",
        type: "Lake",
        icon: "🌊",
        rating: "4.4",
        time: "1-2 hrs",
        desc: "Historic urban lake forming part of Bhopal's famous Bhoj Wetland landscape.",
        bg: "linear-gradient(135deg,#0284c7,#0c4a6e)",
        link: "https://www.google.com/maps/search/Lower+Lake+Bhopal",
        history: "Lower Lake forms an important part of Bhopal's twin-lake system.",
        bestTime: "Morning or evening",
        ticketInfo: "General public access areas are free.",
        highlights: "Lake scenery and city views"
      },

      {
        name: "Van Vihar National Park",
        type: "National Park",
        icon: "🐅",
        rating: "4.5",
        time: "2-3 hrs",
        desc: "Protected nature area beside Upper Lake offering wildlife viewing and green landscapes.",
        bg: "linear-gradient(135deg,#166534,#052e16)",
        link: "https://www.google.com/maps/search/Van+Vihar+National+Park",
        history: "Van Vihar protects wildlife and natural habitats within the urban landscape of Bhopal.",
        bestTime: "Morning or evening",
        ticketInfo: "Entry fees may apply.",
        highlights: "Wildlife, nature and lakeside scenery"
      },

      {
        name: "Madhya Pradesh Tribal Museum",
        type: "Museum",
        icon: "🏛️",
        rating: "4.8",
        time: "2-3 hrs",
        desc: "Immersive museum presenting tribal traditions, art, beliefs and living heritage.",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        link: "https://www.google.com/maps/search/Madhya+Pradesh+Tribal+Museum",
        history: "The museum showcases the cultural traditions and artistic heritage of tribal communities of Madhya Pradesh.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Entry charges may apply.",
        highlights: "Tribal culture, art installations and galleries"
      },

      {
        name: "State Museum Bhopal",
        type: "Museum",
        icon: "🏛️",
        rating: "4.5",
        time: "2 hrs",
        desc: "Important museum displaying archaeology, sculptures, manuscripts, coins and regional history.",
        bg: "linear-gradient(135deg,#7c2d12,#450a0a)",
        link: "https://www.google.com/maps/search/State+Museum+Bhopal",
        history: "The museum preserves archaeological and cultural collections related to Madhya Pradesh.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Entry charges may apply.",
        highlights: "Archaeology, sculptures and regional heritage"
      },

      {
        name: "Taj-ul-Masajid",
        type: "Mosque",
        icon: "🕌",
        rating: "4.7",
        time: "1-2 hrs",
        desc: "Grand historic mosque and one of Bhopal's most important architectural landmarks.",
        bg: "linear-gradient(135deg,#be123c,#4c0519)",
        link: "https://www.google.com/maps/search/Taj-ul-Masajid+Bhopal",
        history: "Construction began during the reign of Shah Jahan Begum and the mosque remains closely associated with Bhopal's royal history.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Respect religious access rules.",
        highlights: "Architecture, religious heritage and photography"
      },

      {
        name: "Moti Masjid",
        type: "Mosque",
        icon: "🕌",
        rating: "4.5",
        time: "45 mins",
        desc: "Historic mosque associated with the Begums of Bhopal and old-city heritage.",
        bg: "linear-gradient(135deg,#64748b,#1e293b)",
        link: "https://www.google.com/maps/search/Moti+Masjid+Bhopal",
        history: "Moti Masjid was built during the rule of Sikandar Jahan Begum.",
        bestTime: "Morning or evening",
        ticketInfo: "Respect religious access rules.",
        highlights: "Architecture and royal-era heritage"
      },

      {
        name: "Shaukat Mahal",
        type: "Palace",
        icon: "🏰",
        rating: "4.3",
        time: "45 mins",
        desc: "Distinctive historic building combining European and Indo-Islamic architectural influences.",
        bg: "linear-gradient(135deg,#78716c,#292524)",
        link: "https://www.google.com/maps/search/Shaukat+Mahal+Bhopal",
        history: "Shaukat Mahal represents a distinctive chapter in Bhopal's royal architectural history.",
        bestTime: "Morning or evening",
        ticketInfo: "Exterior sightseeing access varies.",
        highlights: "Architecture and old Bhopal heritage"
      },

      {
        name: "Gohar Mahal",
        type: "Palace",
        icon: "🏰",
        rating: "4.4",
        time: "1 hr",
        desc: "Historic palace associated with Qudsia Begum and Bhopal's royal heritage.",
        bg: "linear-gradient(135deg,#a16207,#422006)",
        link: "https://www.google.com/maps/search/Gohar+Mahal+Bhopal",
        history: "Gohar Mahal was built during the period of Qudsia Begum and reflects regional palace architecture.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Access may depend on exhibitions and events.",
        highlights: "Palace architecture and heritage"
      },

      {
        name: "Bharat Bhavan",
        type: "Arts Centre",
        icon: "🎭",
        rating: "4.6",
        time: "2 hrs",
        desc: "Major cultural institution featuring art galleries, theatre, performances and architecture.",
        bg: "linear-gradient(135deg,#7c3aed,#3b0764)",
        link: "https://www.google.com/maps/search/Bharat+Bhavan+Bhopal",
        history: "Bharat Bhavan is one of India's important multidisciplinary cultural institutions.",
        bestTime: "Afternoon or event hours",
        ticketInfo: "Check current exhibitions and event schedules.",
        highlights: "Art, architecture, theatre and culture"
      },

      {
        name: "Indira Gandhi Rashtriya Manav Sangrahalaya",
        type: "Museum",
        icon: "🏛️",
        rating: "4.6",
        time: "3-4 hrs",
        desc: "Large anthropological museum presenting cultures, traditional dwellings and lifestyles of communities across India.",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        link: "https://www.google.com/maps/search/Indira+Gandhi+Rashtriya+Manav+Sangrahalaya",
        history: "The museum documents and presents India's diverse communities through indoor and open-air exhibitions.",
        bestTime: "Morning to afternoon",
        ticketInfo: "Entry charges may apply.",
        highlights: "Anthropology, open-air exhibitions and cultural heritage"
      },

      {
        name: "Regional Science Centre",
        type: "Science Museum",
        icon: "🔬",
        rating: "4.4",
        time: "2-3 hrs",
        desc: "Interactive science centre popular with families, students and children.",
        bg: "linear-gradient(135deg,#2563eb,#172554)",
        link: "https://www.google.com/maps/search/Regional+Science+Centre+Bhopal",
        history: "The centre promotes science education through interactive exhibits and demonstrations.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Entry charges may apply.",
        highlights: "Science exhibits, education and family activities"
      },

      {
        name: "Shaurya Smarak",
        type: "War Memorial",
        icon: "🎖️",
        rating: "4.7",
        time: "2 hrs",
        desc: "War memorial and museum dedicated to the courage and sacrifice of Indian armed forces personnel.",
        bg: "linear-gradient(135deg,#475569,#0f172a)",
        link: "https://www.google.com/maps/search/Shaurya+Smarak+Bhopal",
        history: "Shaurya Smarak was developed as a memorial and educational attraction dedicated to India's armed forces.",
        bestTime: "Late afternoon or evening",
        ticketInfo: "Entry rules and charges may apply.",
        highlights: "Military history, memorial and landscaped grounds"
      },

      {
        name: "Birla Mandir",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "Popular hilltop temple offering religious significance and panoramic views of Bhopal.",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        link: "https://www.google.com/maps/search/Birla+Mandir+Bhopal",
        history: "The temple complex is one of Bhopal's well-known religious attractions.",
        bestTime: "Morning or evening",
        ticketInfo: "Free temple entry.",
        highlights: "Temple, city views and peaceful atmosphere"
      },

      {
        name: "Kerwa Dam",
        type: "Nature",
        icon: "🌊",
        rating: "4.4",
        time: "2-3 hrs",
        desc: "Popular nature getaway near Bhopal surrounded by water, forest and outdoor landscapes.",
        bg: "linear-gradient(135deg,#0f766e,#134e4a)",
        link: "https://www.google.com/maps/search/Kerwa+Dam+Bhopal",
        history: "Kerwa reservoir has become a popular recreational and nature destination near Bhopal.",
        bestTime: "Monsoon to winter",
        ticketInfo: "General viewing areas are usually accessible.",
        highlights: "Nature, reservoir views and outdoor recreation"
      },

      {
        name: "Kaliyasot Dam",
        type: "Nature",
        icon: "🌿",
        rating: "4.4",
        time: "2 hrs",
        desc: "Scenic reservoir and nature area popular for drives, photography and evening outings.",
        bg: "linear-gradient(135deg,#166534,#052e16)",
        link: "https://www.google.com/maps/search/Kaliyasot+Dam+Bhopal",
        history: "Kaliyasot reservoir forms part of the natural landscape surrounding Bhopal.",
        bestTime: "Monsoon to winter",
        ticketInfo: "General access areas are free.",
        highlights: "Reservoir views, nature and photography"
      }
    ],

    itineraries: {
      budget: {
        title: "2-Day Budget Bhopal",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Tribal Museum" },
              { time: "12:30 PM", text: "Local lunch" },
              { time: "2:00 PM", text: "State Museum" },
              { time: "5:00 PM", text: "Upper Lake sunset" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Taj-ul-Masajid and old Bhopal" },
              { time: "12:00 PM", text: "Gohar Mahal and Shaukat Mahal" },
              { time: "3:00 PM", text: "Bharat Bhavan" },
              { time: "6:00 PM", text: "Lower Lake evening" }
            ]
          }
        ]
      },

      mid: {
        title: "4-Day Bhopal Explorer",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Tribal Museum and State Museum" },
              { time: "4:00 PM", text: "Van Vihar National Park" },
              { time: "6:00 PM", text: "Upper Lake" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Old Bhopal heritage circuit" },
              { time: "2:00 PM", text: "Bharat Bhavan" },
              { time: "5:00 PM", text: "Manav Sangrahalaya" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "8:00 AM", text: "Bhimbetka and Bhojpur road trip" },
              { time: "7:00 PM", text: "Return to Bhopal" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "8:00 AM", text: "Sanchi excursion" },
              { time: "6:00 PM", text: "Return and departure" }
            ]
          }
        ]
      },

      luxury: {
        title: "5-Day Premium Bhopal Journey",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Luxury hotel check-in" },
              { time: "5:00 PM", text: "Private Upper Lake experience" },
              { time: "8:00 PM", text: "Premium dinner" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Private museum circuit" },
              { time: "4:00 PM", text: "Van Vihar and lakeside sightseeing" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "8:00 AM", text: "Private Sanchi excursion" },
              { time: "7:00 PM", text: "Return to hotel" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "8:00 AM", text: "Private Bhimbetka and Bhojpur tour" },
              { time: "7:00 PM", text: "Return to Bhopal" }
            ]
          },
          {
            label: "Day 5",
            activities: [
              { time: "10:00 AM", text: "Leisure brunch and shopping" },
              { time: "3:00 PM", text: "Departure transfer" }
            ]
          }
        ]
      }
    }
  },


  // ============================================================
  // INDORE
  // ============================================================

  indore: {
    name: "Indore",
    state: "Madhya Pradesh",

    aliases: [
      "indore city",
      "food capital of madhya pradesh",
      "cleanest city india",
      "indore madhya pradesh"
    ],

    description:
      "Indore is Madhya Pradesh's largest city and a major tourism hub known for Holkar heritage, palaces, temples, markets, waterfalls and legendary street food.",

    heroImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/0a/83/rajwada-indore.jpg?w=1100&h=600&s=1",

    heroHighlights: [
      "Holkar heritage",
      "Street food capital",
      "Gateway to Western MP"
    ],

    spotlight:
      "Indore combines royal heritage, vibrant markets, temples, food streets and nearby nature attractions. It is also one of the strongest bases for exploring Mandu, Maheshwar, Omkareshwar, Ujjain and western Madhya Pradesh.",

    bestFor: [
      "Food lovers",
      "Families",
      "Heritage travellers",
      "Weekend trips",
      "Road trips"
    ],

    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "3 to 5 days" },
      { label: "Known for", value: "Food, Holkar heritage, palaces and markets" },
      { label: "Getting around", value: "Cab, auto, iBus and city bus" }
    ],

    travelTips: [
      {
        title: "Keep Sarafa for night",
        desc: "Sarafa Bazaar transforms into one of India's best-known street food markets after jewellery shops close.",
        icon: "🌙"
      },
      {
        title: "Start old-city sightseeing early",
        desc: "Rajwada, Krishnapura Chhatris and nearby markets are easier to explore before peak traffic.",
        icon: "🏛️"
      },
      {
        title: "Keep extra days for road trips",
        desc: "Mandu, Maheshwar, Omkareshwar and Ujjain are important destinations around the Indore tourism circuit.",
        icon: "🚗"
      }
    ],

    hotels: [
      {
        name: "Indore Marriott Hotel",
        tier: "Luxury",
        price: "₹9,000+",
        rating: "4.6",
        location: "Vijay Nagar, Indore",
        image: "🏨",
        bg: "linear-gradient(135deg,#334155,#0f172a)",
        desc: "Premium modern hotel suitable for families, business travellers and luxury city stays.",
        amenities: ["Pool", "Restaurant", "Fitness centre", "Parking"],
        link: "https://www.google.com/maps/search/Indore+Marriott+Hotel"
      },
      {
        name: "Sayaji Indore",
        tier: "Mid-Range",
        price: "₹6,000+",
        rating: "4.5",
        location: "Vijay Nagar, Indore",
        image: "🏨",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        desc: "Popular full-service hotel with dining, recreation and convenient city access.",
        amenities: ["Restaurant", "Pool", "Parking", "Family rooms"],
        link: "https://www.google.com/maps/search/Sayaji+Indore"
      },
      {
        name: "Budget Hotels Indore",
        tier: "Budget",
        price: "₹1,500+",
        rating: "4.0",
        location: "Central Indore",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Affordable accommodation options for travellers focused on sightseeing and food exploration.",
        amenities: ["Budget rooms", "City access", "Basic facilities", "Parking"],
        link: "https://www.google.com/maps/search/Budget+Hotels+Indore"
      }
    ],

    food: [
      {
        category: "Night Market",
        name: "Sarafa Bazaar",
        image: "🍢",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "Famous late-night food market offering sweets, snacks and creative street food.",
        price: "₹200 to ₹700",
        rating: "4.8",
        link: "https://www.google.com/maps/search/Sarafa+Bazaar+Indore"
      },
      {
        category: "Food Street",
        name: "Chappan Dukan",
        image: "🍜",
        bg: "linear-gradient(135deg,#7c3aed,#3b0764)",
        desc: "Popular food street offering snacks, sweets, fast food and casual dining.",
        price: "₹200 to ₹700",
        rating: "4.7",
        link: "https://www.google.com/maps/search/Chappan+Dukan+Indore"
      },
      {
        category: "Breakfast",
        name: "Poha Jalebi",
        image: "🍽️",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        desc: "Indore's signature breakfast combination and a must-try local food experience.",
        price: "₹50 to ₹150",
        rating: "4.8",
        link: "https://www.google.com/maps/search/Best+Poha+Jalebi+Indore"
      }
    ],

    transport: [
      {
        title: "Devi Ahilyabai Holkar Airport",
        type: "Airport",
        icon: "✈️",
        details: "Major airport serving Indore and the western Madhya Pradesh tourism circuit.",
        costLabel: "Airport transfer",
        costValue: "₹300 to ₹800",
        link: "https://www.google.com/maps/search/Devi+Ahilyabai+Holkar+Airport"
      },
      {
        title: "Indore Junction",
        type: "Railway",
        icon: "🚆",
        details: "Main railway station connecting Indore with major Indian cities.",
        costLabel: "Station transfer",
        costValue: "₹100 to ₹400",
        link: "https://www.google.com/maps/search/Indore+Junction"
      },
      {
        title: "Cab, Auto and iBus",
        type: "Local travel",
        icon: "🚌",
        details: "Public transport, autos and cabs are practical for city sightseeing.",
        costLabel: "Typical ride",
        costValue: "₹50 to ₹500",
        link: "https://www.google.com/maps/search/Indore"
      }
    ],

    attractions: [
      {
        name: "Rajwada Palace",
        type: "Palace",
        icon: "🏰",
        rating: "4.6",
        time: "1-2 hrs",
        desc: "Historic Holkar palace and the architectural heart of old Indore.",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        link: "https://www.google.com/maps/search/Rajwada+Palace+Indore",
        history: "Rajwada is closely associated with the Holkar dynasty and remains one of Indore's most important landmarks.",
        bestTime: "Morning or evening",
        ticketInfo: "Entry charges may apply.",
        highlights: "Holkar heritage, architecture and old-city atmosphere"
      },
      {
        name: "Lal Bagh Palace",
        type: "Palace",
        icon: "🏰",
        rating: "4.5",
        time: "2 hrs",
        desc: "Grand former royal residence showcasing European-influenced interiors and Holkar heritage.",
        bg: "linear-gradient(135deg,#78350f,#451a03)",
        link: "https://www.google.com/maps/search/Lal+Bagh+Palace+Indore",
        history: "The palace was developed by the Holkar rulers and reflects the royal lifestyle of Indore's princely era.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Museum entry charges may apply.",
        highlights: "Royal interiors, palace architecture and history"
      },
      {
        name: "Krishnapura Chhatris",
        type: "Cenotaphs",
        icon: "🏛️",
        rating: "4.5",
        time: "1 hr",
        desc: "Historic riverside cenotaphs dedicated to members of the Holkar royal family.",
        bg: "linear-gradient(135deg,#a16207,#422006)",
        link: "https://www.google.com/maps/search/Krishnapura+Chhatris+Indore",
        history: "The chhatris commemorate Holkar rulers and represent an important part of Indore's royal heritage.",
        bestTime: "Morning or evening",
        ticketInfo: "General access conditions may vary.",
        highlights: "Architecture, Holkar history and photography"
      },
      {
        name: "Kanch Mandir",
        type: "Jain Temple",
        icon: "🛕",
        rating: "4.5",
        time: "45 mins",
        desc: "Distinctive Jain temple famous for elaborate glass and mirror decoration.",
        bg: "linear-gradient(135deg,#475569,#0f172a)",
        link: "https://www.google.com/maps/search/Kanch+Mandir+Indore",
        history: "The temple is one of Indore's best-known Jain religious landmarks.",
        bestTime: "Morning",
        ticketInfo: "Respect temple access rules.",
        highlights: "Glasswork, Jain heritage and interiors"
      },
      {
        name: "Annapurna Temple",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "Popular Hindu temple known for its large entrance and religious importance.",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        link: "https://www.google.com/maps/search/Annapurna+Temple+Indore",
        history: "The temple is dedicated to Goddess Annapurna and is an important religious attraction.",
        bestTime: "Morning or evening",
        ticketInfo: "Free temple entry.",
        highlights: "Temple architecture and religious atmosphere"
      },
      {
        name: "Khajrana Ganesh Temple",
        type: "Temple",
        icon: "🛕",
        rating: "4.8",
        time: "1-2 hrs",
        desc: "One of Indore's most visited religious landmarks dedicated to Lord Ganesha.",
        bg: "linear-gradient(135deg,#f97316,#7c2d12)",
        link: "https://www.google.com/maps/search/Khajrana+Ganesh+Temple",
        history: "The temple is traditionally associated with the Holkar period and is an important pilgrimage destination.",
        bestTime: "Morning or evening",
        ticketInfo: "Free temple entry.",
        highlights: "Pilgrimage, temple atmosphere and religious heritage"
      },
      {
        name: "Central Museum Indore",
        type: "Museum",
        icon: "🏛️",
        rating: "4.4",
        time: "2 hrs",
        desc: "Museum displaying sculptures, archaeological objects and historical collections.",
        bg: "linear-gradient(135deg,#7c2d12,#450a0a)",
        link: "https://www.google.com/maps/search/Central+Museum+Indore",
        history: "The museum preserves important archaeological material from Madhya Pradesh.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Entry charges may apply.",
        highlights: "Sculptures, archaeology and history"
      },
      {
        name: "Gandhi Hall",
        type: "Heritage Building",
        icon: "🏛️",
        rating: "4.4",
        time: "1 hr",
        desc: "Historic Indo-Gothic landmark and one of Indore's recognizable architectural buildings.",
        bg: "linear-gradient(135deg,#be123c,#4c0519)",
        link: "https://www.google.com/maps/search/Gandhi+Hall+Indore",
        history: "The historic building was originally known as King Edward Hall.",
        bestTime: "Morning or evening",
        ticketInfo: "Exterior viewing is generally accessible.",
        highlights: "Architecture, heritage and photography"
      },
      {
        name: "Pipliyapala Regional Park",
        type: "Urban Park",
        icon: "🌳",
        rating: "4.4",
        time: "2-3 hrs",
        desc: "Large recreational park featuring gardens, lake areas and family attractions.",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        link: "https://www.google.com/maps/search/Pipliyapala+Regional+Park",
        history: "The park was developed as a major recreational landscape in Indore.",
        bestTime: "Late afternoon or evening",
        ticketInfo: "Entry charges may apply.",
        highlights: "Gardens, recreation and family outing"
      },
      {
        name: "Ralamandal Wildlife Sanctuary",
        type: "Wildlife Sanctuary",
        icon: "🌳",
        rating: "4.4",
        time: "3-4 hrs",
        desc: "Protected forest and hill landscape popular for nature walks and outdoor excursions.",
        bg: "linear-gradient(135deg,#166534,#052e16)",
        link: "https://www.google.com/maps/search/Ralamandal+Wildlife+Sanctuary",
        history: "Ralamandal is one of Madhya Pradesh's older wildlife sanctuaries.",
        bestTime: "October to March",
        ticketInfo: "Entry and vehicle charges may apply.",
        highlights: "Forest, wildlife and nature trails"
      },
      {
        name: "Patalpani Waterfall",
        type: "Waterfall",
        icon: "💦",
        rating: "4.5",
        time: "Half day",
        desc: "Popular seasonal waterfall and nature excursion outside Indore.",
        bg: "linear-gradient(135deg,#0f766e,#134e4a)",
        link: "https://www.google.com/maps/search/Patalpani+Waterfall",
        history: "Patalpani has long been a popular nature getaway in the Indore region.",
        bestTime: "Monsoon and post-monsoon",
        ticketInfo: "Follow local safety restrictions.",
        highlights: "Waterfall, railway scenery and nature"
      },
      {
        name: "Janapav Hill",
        type: "Hill and Nature",
        icon: "⛰️",
        rating: "4.5",
        time: "Half day",
        desc: "Scenic hill destination associated with mythology and popular for monsoon drives.",
        bg: "linear-gradient(135deg,#166534,#052e16)",
        link: "https://www.google.com/maps/search/Janapav+Hill",
        history: "Janapav is traditionally associated with the birthplace of Parashurama.",
        bestTime: "Monsoon to winter",
        ticketInfo: "General access conditions may vary.",
        highlights: "Hill views, mythology and road trips"
      },
      {
        name: "Tincha Falls",
        type: "Waterfall",
        icon: "💦",
        rating: "4.4",
        time: "Half day",
        desc: "Seasonal waterfall and popular monsoon excursion from Indore.",
        bg: "linear-gradient(135deg,#0284c7,#0c4a6e)",
        link: "https://www.google.com/maps/search/Tincha+Falls",
        history: "Tincha Falls is one of the best-known monsoon nature attractions around Indore.",
        bestTime: "Monsoon and post-monsoon",
        ticketInfo: "Local access restrictions may apply during heavy rainfall.",
        highlights: "Waterfall views, nature and photography"
      },
      {
        name: "Gulawat Lotus Valley",
        type: "Nature",
        icon: "🪷",
        rating: "4.5",
        time: "Half day",
        desc: "Wetland landscape known for lotus blooms, photography and peaceful countryside scenery.",
        bg: "linear-gradient(135deg,#be185d,#500724)",
        link: "https://www.google.com/maps/search/Gulawat+Lotus+Valley",
        history: "Gulawat has become a popular nature and photography destination near Indore.",
        bestTime: "Morning and lotus blooming season",
        ticketInfo: "General access conditions may vary.",
        highlights: "Lotus fields, photography and countryside"
      },
      {
        name: "Choral Dam",
        type: "Nature",
        icon: "🌊",
        rating: "4.3",
        time: "Half day",
        desc: "Reservoir and nature destination popular for drives and outdoor recreation.",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        link: "https://www.google.com/maps/search/Choral+Dam",
        history: "Choral reservoir is a popular recreational landscape near Indore.",
        bestTime: "Monsoon to winter",
        ticketInfo: "General viewing areas are usually accessible.",
        highlights: "Reservoir, nature and road trips"
      }
    ],

    itineraries: {
      budget: {
        title: "2-Day Budget Indore",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Rajwada Palace" },
              { time: "11:00 AM", text: "Krishnapura Chhatris and Kanch Mandir" },
              { time: "3:00 PM", text: "Gandhi Hall and local markets" },
              { time: "8:00 PM", text: "Sarafa Bazaar" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "8:00 AM", text: "Poha Jalebi breakfast" },
              { time: "10:00 AM", text: "Lal Bagh Palace" },
              { time: "2:00 PM", text: "Khajrana Ganesh Temple" },
              { time: "6:00 PM", text: "Chappan Dukan" }
            ]
          }
        ]
      },

      mid: {
        title: "4-Day Indore Explorer",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Old Indore heritage circuit" },
              { time: "8:00 PM", text: "Sarafa food walk" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Lal Bagh Palace and Central Museum" },
              { time: "3:00 PM", text: "Khajrana and Annapurna temples" },
              { time: "7:00 PM", text: "Chappan Dukan" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "8:00 AM", text: "Patalpani and Janapav excursion" },
              { time: "6:00 PM", text: "Return to Indore" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "8:00 AM", text: "Tincha Falls and Ralamandal sightseeing" },
              { time: "6:00 PM", text: "Return and shopping" }
            ]
          }
        ]
      },

      luxury: {
        title: "5-Day Premium Indore Journey",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Premium hotel check-in" },
              { time: "6:00 PM", text: "Private heritage tour" },
              { time: "9:00 PM", text: "Curated Sarafa food experience" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Private palace and museum tour" },
              { time: "6:00 PM", text: "Chappan Dukan and city experience" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "8:00 AM", text: "Private Mandu excursion" },
              { time: "8:00 PM", text: "Return to Indore" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "8:00 AM", text: "Private Maheshwar and Omkareshwar excursion" },
              { time: "9:00 PM", text: "Return to Indore" }
            ]
          },
          {
            label: "Day 5",
            activities: [
              { time: "10:00 AM", text: "Leisure breakfast and shopping" },
              { time: "3:00 PM", text: "Departure transfer" }
            ]
          }
        ]
      }
    }
  },


  // ============================================================
  // UJJAIN
  // ============================================================

  ujjain: {
    name: "Ujjain",
    state: "Madhya Pradesh",

    aliases: [
      "ujjain city",
      "ujjayini",
      "mahakal city",
      "ujjain madhya pradesh"
    ],

    description:
      "Ujjain is one of India's most important pilgrimage cities, known for Mahakaleshwar Jyotirlinga, the Shipra River, ancient temples, astronomical heritage and the Simhastha Kumbh tradition.",

    heroImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/18/4f/3f/img-20181019-142940817.jpg?w=1000&h=-1&s=1",

    heroHighlights: [
      "Mahakaleshwar Jyotirlinga",
      "Shipra River",
      "Ancient pilgrimage city"
    ],

    spotlight:
      "Ujjain is one of India's seven sacred cities and one of Madhya Pradesh's most important religious destinations. Travellers should keep enough time for Mahakaleshwar, the Shipra ghats, major temples, ancient heritage sites and evening spiritual experiences.",

    bestFor: [
      "Pilgrims",
      "Families",
      "Spiritual travellers",
      "History lovers",
      "Religious tourism"
    ],

    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Mahakal, temples, Shipra River and Simhastha" },
      { label: "Getting around", value: "Auto, e-rickshaw, cab and local bus" }
    ],

    travelTips: [
      {
        title: "Book Mahakal Darshan in advance",
        desc: "During weekends, festivals and peak pilgrimage periods, advance planning can reduce waiting time.",
        icon: "🛕"
      },
      {
        title: "Start temple visits early",
        desc: "Early morning sightseeing is useful for covering multiple religious attractions before crowds increase.",
        icon: "🌅"
      },
      {
        title: "Keep evening for Shipra ghats",
        desc: "Ram Ghat and nearby riverfront areas are especially atmospheric during evening rituals.",
        icon: "🪔"
      }
    ],

    hotels: [
      {
        name: "Anjushree Hotel",
        tier: "Luxury",
        price: "₹6,000+",
        rating: "4.4",
        location: "Ujjain",
        image: "🏨",
        bg: "linear-gradient(135deg,#334155,#0f172a)",
        desc: "Premium city stay suitable for families and pilgrimage travellers.",
        amenities: ["Restaurant", "Pool", "Parking", "Family rooms"],
        link: "https://www.google.com/maps/search/Anjushree+Hotel+Ujjain"
      },
      {
        name: "Rudraksh Club and Resort",
        tier: "Mid-Range",
        price: "₹4,500+",
        rating: "4.4",
        location: "Ujjain",
        image: "🏨",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        desc: "Comfortable resort-style accommodation for family and leisure travellers.",
        amenities: ["Restaurant", "Parking", "Family rooms", "Recreation"],
        link: "https://www.google.com/maps/search/Rudraksh+Club+Resort+Ujjain"
      },
      {
        name: "Budget Dharamshalas and Hotels",
        tier: "Budget",
        price: "₹800+",
        rating: "4.0",
        location: "Mahakal Temple Area, Ujjain",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Affordable accommodation options suitable for pilgrims and short religious visits.",
        amenities: ["Budget rooms", "Temple access", "Basic facilities", "Family options"],
        link: "https://www.google.com/maps/search/Budget+Hotels+Near+Mahakaleshwar+Temple"
      }
    ],

    food: [
      {
        category: "Breakfast",
        name: "Poha Jalebi",
        image: "🍽️",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        desc: "Popular Madhya Pradesh breakfast available across Ujjain.",
        price: "₹50 to ₹150",
        rating: "4.7",
        link: "https://www.google.com/maps/search/Best+Poha+Jalebi+Ujjain"
      },
      {
        category: "Street Food",
        name: "Tower Chowk Food Area",
        image: "🍢",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "Popular city area for snacks, sweets and casual food.",
        price: "₹150 to ₹500",
        rating: "4.4",
        link: "https://www.google.com/maps/search/Tower+Chowk+Food+Ujjain"
      },
      {
        category: "Traditional",
        name: "Dal Bafla",
        image: "🍛",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        desc: "Traditional Madhya Pradesh dish served with dal, ghee and accompaniments.",
        price: "₹200 to ₹500",
        rating: "4.6",
        link: "https://www.google.com/maps/search/Best+Dal+Bafla+Ujjain"
      }
    ],

    transport: [
      {
        title: "Indore Airport",
        type: "Nearest Major Airport",
        icon: "✈️",
        details: "Devi Ahilyabai Holkar Airport in Indore is the nearest major airport for Ujjain.",
        costLabel: "Airport transfer",
        costValue: "₹1,500 to ₹3,000",
        link: "https://www.google.com/maps/search/Devi+Ahilyabai+Holkar+Airport"
      },
      {
        title: "Ujjain Junction",
        type: "Railway",
        icon: "🚆",
        details: "Major railway station providing access to Ujjain's pilgrimage and tourism circuit.",
        costLabel: "Station transfer",
        costValue: "₹100 to ₹300",
        link: "https://www.google.com/maps/search/Ujjain+Junction"
      },
      {
        title: "Auto and E-Rickshaw",
        type: "Local travel",
        icon: "🛺",
        details: "Convenient for travelling between temples, ghats and central city attractions.",
        costLabel: "Typical ride",
        costValue: "₹50 to ₹400",
        link: "https://www.google.com/maps/search/Ujjain"
      }
    ],

    attractions: [
      {
        name: "Mahakaleshwar Jyotirlinga",
        type: "Jyotirlinga Temple",
        icon: "🛕",
        rating: "4.9",
        time: "2-5 hrs",
        desc: "One of the twelve Jyotirlingas and the most important pilgrimage attraction in Ujjain.",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        link: "https://www.google.com/maps/search/Mahakaleshwar+Jyotirlinga",
        history: "Mahakaleshwar is an ancient Shiva pilgrimage site and one of India's twelve sacred Jyotirlingas.",
        bestTime: "Early morning",
        ticketInfo: "General darshan and special darshan arrangements vary.",
        highlights: "Jyotirlinga, Bhasma Aarti and pilgrimage"
      },
      {
        name: "Shri Mahakal Lok",
        type: "Religious Corridor",
        icon: "🕉️",
        rating: "4.8",
        time: "2-3 hrs",
        desc: "Large temple corridor featuring sculptures, murals and landscaped spaces connected with Mahakaleshwar.",
        bg: "linear-gradient(135deg,#f97316,#7c2d12)",
        link: "https://www.google.com/maps/search/Shri+Mahakal+Lok",
        history: "Mahakal Lok was developed to expand the pilgrimage and cultural experience around the Mahakaleshwar temple complex.",
        bestTime: "Evening",
        ticketInfo: "General public access conditions may vary.",
        highlights: "Sculptures, lighting, mythology and temple atmosphere"
      },
      {
        name: "Harsiddhi Temple",
        type: "Temple",
        icon: "🛕",
        rating: "4.7",
        time: "1 hr",
        desc: "Important Shakti temple and major pilgrimage attraction near Mahakaleshwar.",
        bg: "linear-gradient(135deg,#be123c,#4c0519)",
        link: "https://www.google.com/maps/search/Harsiddhi+Temple+Ujjain",
        history: "Harsiddhi Temple is an ancient sacred site associated with Shakti worship and Ujjain's religious traditions.",
        bestTime: "Morning or evening",
        ticketInfo: "Free temple entry.",
        highlights: "Shakti worship, oil lamps and religious heritage"
      },
      {
        name: "Kal Bhairav Temple",
        type: "Temple",
        icon: "🛕",
        rating: "4.7",
        time: "1-2 hrs",
        desc: "Ancient temple dedicated to Kal Bhairav and one of Ujjain's distinctive pilgrimage sites.",
        bg: "linear-gradient(135deg,#292524,#0c0a09)",
        link: "https://www.google.com/maps/search/Kal+Bhairav+Temple+Ujjain",
        history: "Kal Bhairav worship has deep historical connections with Ujjain's Shaiva and Tantric traditions.",
        bestTime: "Morning",
        ticketInfo: "Free temple entry.",
        highlights: "Religious traditions and ancient pilgrimage"
      },
      {
        name: "Ram Ghat",
        type: "Sacred Ghat",
        icon: "🪔",
        rating: "4.7",
        time: "1-2 hrs",
        desc: "Historic Shipra River ghat and one of the main locations associated with Simhastha Kumbh.",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        link: "https://www.google.com/maps/search/Ram+Ghat+Ujjain",
        history: "Ram Ghat is one of Ujjain's most important sacred bathing ghats.",
        bestTime: "Early morning or evening",
        ticketInfo: "General access is free.",
        highlights: "Shipra River, rituals and evening atmosphere"
      },
      {
        name: "Sandipani Ashram",
        type: "Ashram",
        icon: "🕉️",
        rating: "4.6",
        time: "1-2 hrs",
        desc: "Traditional site associated with the education of Lord Krishna and Balarama.",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        link: "https://www.google.com/maps/search/Sandipani+Ashram+Ujjain",
        history: "According to tradition, Lord Krishna, Balarama and Sudama studied under Guru Sandipani here.",
        bestTime: "Morning",
        ticketInfo: "General access is free.",
        highlights: "Mythology, ashram and religious heritage"
      },
      {
        name: "Mangalnath Temple",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "Temple traditionally associated with Mars and important astrological rituals.",
        bg: "linear-gradient(135deg,#dc2626,#450a0a)",
        link: "https://www.google.com/maps/search/Mangalnath+Temple+Ujjain",
        history: "Ujjain's astronomical and astrological traditions are closely connected with Mangalnath Temple.",
        bestTime: "Morning",
        ticketInfo: "Free temple entry; ritual charges vary.",
        highlights: "Astrology, temple worship and Shipra landscape"
      },
      {
        name: "Vedh Shala",
        type: "Observatory",
        icon: "🔭",
        rating: "4.4",
        time: "1-2 hrs",
        desc: "Historic astronomical observatory connected with Ujjain's long scientific traditions.",
        bg: "linear-gradient(135deg,#2563eb,#172554)",
        link: "https://www.google.com/maps/search/Vedh+Shala+Ujjain",
        history: "The observatory was developed during the period of Sawai Jai Singh II for astronomical observations.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Entry charges may apply.",
        highlights: "Astronomy, instruments and scientific heritage"
      },
      {
        name: "Gadkalika Temple",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "Ancient temple traditionally associated with poet Kalidasa.",
        bg: "linear-gradient(135deg,#be123c,#500724)",
        link: "https://www.google.com/maps/search/Gadkalika+Temple+Ujjain",
        history: "The temple is traditionally linked with the legendary Sanskrit poet Kalidasa.",
        bestTime: "Morning or evening",
        ticketInfo: "Free temple entry.",
        highlights: "Religious heritage and Kalidasa tradition"
      },
      {
        name: "Bhartrihari Caves",
        type: "Historic Caves",
        icon: "🪨",
        rating: "4.4",
        time: "1 hr",
        desc: "Ancient cave site traditionally associated with philosopher-poet Bhartrihari.",
        bg: "linear-gradient(135deg,#57534e,#1c1917)",
        link: "https://www.google.com/maps/search/Bhartrihari+Caves+Ujjain",
        history: "The caves are associated with legends of King Bhartrihari and Ujjain's spiritual traditions.",
        bestTime: "Morning",
        ticketInfo: "General access conditions may vary.",
        highlights: "Caves, legends and spiritual heritage"
      },
      {
        name: "Gopal Mandir",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "Historic Krishna temple located in the heart of Ujjain's old city.",
        bg: "linear-gradient(135deg,#ca8a04,#713f12)",
        link: "https://www.google.com/maps/search/Gopal+Mandir+Ujjain",
        history: "The temple was built during the Maratha period and remains an important religious landmark.",
        bestTime: "Morning or evening",
        ticketInfo: "Free temple entry.",
        highlights: "Krishna worship, architecture and old-city atmosphere"
      },
      {
        name: "ISKCON Ujjain",
        type: "Temple",
        icon: "🛕",
        rating: "4.7",
        time: "1-2 hrs",
        desc: "Modern Krishna temple complex known for worship, architecture and peaceful surroundings.",
        bg: "linear-gradient(135deg,#f59e0b,#78350f)",
        link: "https://www.google.com/maps/search/ISKCON+Ujjain",
        history: "ISKCON Ujjain is part of the international Krishna devotional movement.",
        bestTime: "Morning or evening aarti",
        ticketInfo: "Free temple entry.",
        highlights: "Krishna worship, architecture and spiritual atmosphere"
      }
    ],

    itineraries: {
      budget: {
        title: "2-Day Budget Ujjain",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "5:00 AM", text: "Mahakaleshwar Darshan" },
              { time: "10:00 AM", text: "Harsiddhi Temple" },
              { time: "3:00 PM", text: "Mahakal Lok" },
              { time: "6:00 PM", text: "Ram Ghat evening visit" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "8:00 AM", text: "Kal Bhairav Temple" },
              { time: "10:30 AM", text: "Sandipani Ashram" },
              { time: "1:00 PM", text: "Mangalnath Temple" },
              { time: "4:00 PM", text: "Vedh Shala and local markets" }
            ]
          }
        ]
      },

      mid: {
        title: "3-Day Ujjain Pilgrimage Explorer",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "5:00 AM", text: "Mahakaleshwar Temple" },
              { time: "10:00 AM", text: "Harsiddhi and Mahakal Lok" },
              { time: "6:00 PM", text: "Ram Ghat" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "8:00 AM", text: "Kal Bhairav Temple" },
              { time: "10:00 AM", text: "Sandipani Ashram" },
              { time: "1:00 PM", text: "Mangalnath Temple" },
              { time: "4:00 PM", text: "Gadkalika Temple" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "9:00 AM", text: "Vedh Shala" },
              { time: "11:00 AM", text: "Bhartrihari Caves" },
              { time: "2:00 PM", text: "Gopal Mandir and old city" },
              { time: "5:00 PM", text: "ISKCON Ujjain" }
            ]
          }
        ]
      },

      luxury: {
        title: "4-Day Premium Ujjain Spiritual Journey",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Premium hotel check-in" },
              { time: "5:00 PM", text: "Private Mahakal Lok visit" },
              { time: "8:00 PM", text: "Premium dinner" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "4:00 AM", text: "Planned Mahakaleshwar spiritual experience" },
              { time: "10:00 AM", text: "Harsiddhi Temple" },
              { time: "6:00 PM", text: "Private Ram Ghat visit" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "8:00 AM", text: "Private temple circuit" },
              { time: "3:00 PM", text: "Vedh Shala and heritage sightseeing" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "9:00 AM", text: "ISKCON and relaxed city exploration" },
              { time: "2:00 PM", text: "Shopping and departure transfer" }
            ]
          }
        ]
      }
    }
  },


  // ============================================================
  // GWALIOR
  // ============================================================

  gwalior: {
    name: "Gwalior",
    state: "Madhya Pradesh",

    aliases: [
      "gwalior city",
      "fort city madhya pradesh",
      "gwalior madhya pradesh"
    ],

    description:
      "Gwalior is one of Madhya Pradesh's most important heritage cities, known for its massive hill fort, royal palaces, ancient temples, museums, music traditions and historic architecture.",

    heroImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/eb/72/f2/the-tomb-of-mohammad.jpg?w=2400&h=-1&s=1",

    heroHighlights: [
      "Gwalior Fort",
      "Scindia heritage",
      "Music and architecture"
    ],

    spotlight:
      "Gwalior offers one of the strongest heritage experiences in Madhya Pradesh. The city combines a monumental hill fort, palaces, temples, museums, royal history and India's classical music traditions.",

    bestFor: [
      "History lovers",
      "Architecture lovers",
      "Families",
      "Photography",
      "Heritage travellers"
    ],

    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 to 4 days" },
      { label: "Known for", value: "Fort, palaces, temples and classical music" },
      { label: "Getting around", value: "Cab, auto and e-rickshaw" }
    ],

    travelTips: [
      {
        title: "Keep a full day for the fort",
        desc: "Gwalior Fort contains multiple palaces, temples, museums and monuments that should not be rushed.",
        icon: "🏰"
      },
      {
        title: "Carry comfortable walking shoes",
        desc: "Heritage sightseeing involves significant walking and uneven surfaces.",
        icon: "👟"
      },
      {
        title: "Explore music heritage",
        desc: "Tansen's tomb and the city's musical traditions add another dimension beyond forts and palaces.",
        icon: "🎵"
      }
    ],

    hotels: [
      {
        name: "Taj Usha Kiran Palace",
        tier: "Luxury",
        price: "₹10,000+",
        rating: "4.6",
        location: "Lashkar, Gwalior",
        image: "🏨",
        bg: "linear-gradient(135deg,#78350f,#451a03)",
        desc: "Historic palace hotel offering a premium heritage stay.",
        amenities: ["Pool", "Restaurant", "Spa", "Heritage rooms"],
        link: "https://www.google.com/maps/search/Taj+Usha+Kiran+Palace"
      },
      {
        name: "Radisson Gwalior",
        tier: "Mid-Range",
        price: "₹6,000+",
        rating: "4.4",
        location: "Gwalior",
        image: "🏨",
        bg: "linear-gradient(135deg,#334155,#0f172a)",
        desc: "Modern full-service hotel suitable for families and city travellers.",
        amenities: ["Restaurant", "Pool", "Parking", "Fitness centre"],
        link: "https://www.google.com/maps/search/Radisson+Gwalior"
      },
      {
        name: "Budget Hotels Gwalior",
        tier: "Budget",
        price: "₹1,500+",
        rating: "4.0",
        location: "Central Gwalior",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Affordable city accommodation for sightseeing-focused travellers.",
        amenities: ["Budget rooms", "City access", "Basic facilities", "Parking"],
        link: "https://www.google.com/maps/search/Budget+Hotels+Gwalior"
      }
    ],

    food: [
      {
        category: "Breakfast",
        name: "Bedai and Kachori",
        image: "🍽️",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        desc: "Popular local breakfast and snack options found across old Gwalior.",
        price: "₹50 to ₹200",
        rating: "4.6",
        link: "https://www.google.com/maps/search/Best+Kachori+Gwalior"
      },
      {
        category: "Sweet",
        name: "Gajak",
        image: "🍬",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "Traditional sesame and jaggery sweet strongly associated with Gwalior.",
        price: "₹150 to ₹500",
        rating: "4.7",
        link: "https://www.google.com/maps/search/Best+Gajak+Gwalior"
      },
      {
        category: "Street Food",
        name: "Old Gwalior Food",
        image: "🍢",
        bg: "linear-gradient(135deg,#7c3aed,#3b0764)",
        desc: "Explore local snacks, sweets and casual dining in the historic city areas.",
        price: "₹150 to ₹600",
        rating: "4.4",
        link: "https://www.google.com/maps/search/Best+Street+Food+Gwalior"
      }
    ],

    transport: [
      {
        title: "Rajmata Vijaya Raje Scindia Airport",
        type: "Airport",
        icon: "✈️",
        details: "Airport serving Gwalior and the northern Madhya Pradesh tourism region.",
        costLabel: "Airport transfer",
        costValue: "₹500 to ₹1,200",
        link: "https://www.google.com/maps/search/Gwalior+Airport"
      },
      {
        title: "Gwalior Junction",
        type: "Railway",
        icon: "🚆",
        details: "Major railway station with strong connections to Delhi, Agra and central India.",
        costLabel: "Station transfer",
        costValue: "₹100 to ₹400",
        link: "https://www.google.com/maps/search/Gwalior+Junction"
      },
      {
        title: "Cab and Auto",
        type: "Local travel",
        icon: "🚕",
        details: "Convenient for reaching the fort, palaces, museums and city attractions.",
        costLabel: "Typical ride",
        costValue: "₹100 to ₹600",
        link: "https://www.google.com/maps/search/Gwalior"
      }
    ],

    attractions: [
      {
        name: "Gwalior Fort",
        type: "Fort",
        icon: "🏰",
        rating: "4.8",
        time: "Full day",
        desc: "Massive hilltop fortress containing palaces, temples, museums and historic monuments.",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        link: "https://www.google.com/maps/search/Gwalior+Fort",
        history: "Gwalior Fort has been controlled by multiple dynasties and remains one of India's most impressive historic fort complexes.",
        bestTime: "Morning to late afternoon",
        ticketInfo: "Entry charges apply to selected monuments.",
        highlights: "Fortifications, palaces, temples and panoramic views"
      },
      {
        name: "Man Singh Palace",
        type: "Palace",
        icon: "🏰",
        rating: "4.7",
        time: "2 hrs",
        desc: "Architecturally distinctive palace inside Gwalior Fort known for decorative tiles and royal history.",
        bg: "linear-gradient(135deg,#1d4ed8,#172554)",
        link: "https://www.google.com/maps/search/Man+Singh+Palace+Gwalior",
        history: "The palace was built during the reign of Tomar ruler Man Singh Tomar.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Monument entry charges may apply.",
        highlights: "Architecture, tiles and Tomar heritage"
      },
      {
        name: "Sas Bahu Temples",
        type: "Temple",
        icon: "🛕",
        rating: "4.7",
        time: "1 hr",
        desc: "Historic temple complex inside Gwalior Fort known for detailed stone carvings.",
        bg: "linear-gradient(135deg,#a16207,#422006)",
        link: "https://www.google.com/maps/search/Sas+Bahu+Temples+Gwalior",
        history: "The temples date to the medieval period and are dedicated to forms of Vishnu.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Fort access rules apply.",
        highlights: "Stone carvings, temple architecture and views"
      },
      {
        name: "Teli Ka Mandir",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "Ancient temple inside Gwalior Fort featuring a distinctive combination of architectural traditions.",
        bg: "linear-gradient(135deg,#78716c,#292524)",
        link: "https://www.google.com/maps/search/Teli+Ka+Mandir",
        history: "Teli Ka Mandir is one of the oldest surviving monuments within Gwalior Fort.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Fort access rules apply.",
        highlights: "Ancient architecture and archaeological heritage"
      },
      {
        name: "Gopachal Parvat Jain Sculptures",
        type: "Jain Heritage",
        icon: "🪨",
        rating: "4.7",
        time: "1-2 hrs",
        desc: "Monumental Jain sculptures carved into the rock faces around Gwalior Fort.",
        bg: "linear-gradient(135deg,#57534e,#1c1917)",
        link: "https://www.google.com/maps/search/Gopachal+Parvat+Jain+Monuments",
        history: "The sculptures were created primarily during the Tomar period and represent an important Jain heritage site.",
        bestTime: "Morning",
        ticketInfo: "General access conditions may vary.",
        highlights: "Rock-cut sculptures, Jain heritage and archaeology"
      },
      {
        name: "Gujari Mahal Archaeological Museum",
        type: "Museum",
        icon: "🏛️",
        rating: "4.5",
        time: "2 hrs",
        desc: "Archaeological museum housed in a historic palace at the base of Gwalior Fort.",
        bg: "linear-gradient(135deg,#7c2d12,#450a0a)",
        link: "https://www.google.com/maps/search/Gujari+Mahal+Museum",
        history: "Gujari Mahal was built by Raja Man Singh Tomar and now houses important archaeological collections.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Museum entry charges may apply.",
        highlights: "Sculptures, archaeology and palace heritage"
      },
      {
        name: "Jai Vilas Palace",
        type: "Palace and Museum",
        icon: "🏰",
        rating: "4.6",
        time: "3 hrs",
        desc: "Grand Scindia palace featuring royal interiors, collections and the famous Durbar Hall.",
        bg: "linear-gradient(135deg,#eab308,#713f12)",
        link: "https://www.google.com/maps/search/Jai+Vilas+Palace",
        history: "The palace was built for Maharaja Jayajirao Scindia and remains closely associated with the Scindia royal family.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Museum entry charges apply.",
        highlights: "Royal interiors, Durbar Hall and Scindia heritage"
      },
      {
        name: "Tomb of Tansen",
        type: "Historic Tomb",
        icon: "🎵",
        rating: "4.5",
        time: "1 hr",
        desc: "Historic tomb associated with legendary musician Tansen and Gwalior's classical music heritage.",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        link: "https://www.google.com/maps/search/Tomb+of+Tansen",
        history: "Tansen was one of the most celebrated musicians in Indian history and is closely associated with Gwalior's musical tradition.",
        bestTime: "Morning or evening",
        ticketInfo: "General access is usually free.",
        highlights: "Music heritage, history and peaceful gardens"
      },
      {
        name: "Tomb of Muhammad Ghaus",
        type: "Historic Tomb",
        icon: "🕌",
        rating: "4.6",
        time: "1 hr",
        desc: "Elegant Mughal-era tomb known for architecture, stone screens and peaceful surroundings.",
        bg: "linear-gradient(135deg,#0f766e,#134e4a)",
        link: "https://www.google.com/maps/search/Tomb+of+Muhammad+Ghaus",
        history: "The tomb commemorates Sufi saint Muhammad Ghaus and is an important architectural monument.",
        bestTime: "Morning or evening",
        ticketInfo: "General access conditions may vary.",
        highlights: "Mughal architecture, stone screens and Sufi heritage"
      },
      {
        name: "Sun Temple Gwalior",
        type: "Temple",
        icon: "☀️",
        rating: "4.6",
        time: "1 hr",
        desc: "Modern temple inspired by the architecture of the Konark Sun Temple.",
        bg: "linear-gradient(135deg,#f97316,#7c2d12)",
        link: "https://www.google.com/maps/search/Sun+Temple+Gwalior",
        history: "The temple was developed under the patronage of the Birla family.",
        bestTime: "Morning or evening",
        ticketInfo: "Free temple entry.",
        highlights: "Temple architecture, gardens and peaceful atmosphere"
      },
      {
        name: "Gwalior Zoo",
        type: "Zoo",
        icon: "🦁",
        rating: "4.3",
        time: "2-3 hrs",
        desc: "Historic zoological park and family attraction in central Gwalior.",
        bg: "linear-gradient(135deg,#166534,#052e16)",
        link: "https://www.google.com/maps/search/Gwalior+Zoo",
        history: "The zoo forms part of Gwalior's historic recreational landscape.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Entry charges apply.",
        highlights: "Wildlife and family outing"
      },
      {
        name: "Italian Garden",
        type: "Garden",
        icon: "🌳",
        rating: "4.3",
        time: "1 hr",
        desc: "Historic landscaped garden associated with Gwalior's royal-era urban heritage.",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        link: "https://www.google.com/maps/search/Italian+Garden+Gwalior",
        history: "The garden reflects the recreational landscape developed during Gwalior's princely period.",
        bestTime: "Morning or evening",
        ticketInfo: "General access conditions may vary.",
        highlights: "Gardens, relaxation and heritage atmosphere"
      },
      {
        name: "Sarod Ghar",
        type: "Music Museum",
        icon: "🎵",
        rating: "4.5",
        time: "1-2 hrs",
        desc: "Museum dedicated to Indian classical music and the musical heritage of the Bangash family.",
        bg: "linear-gradient(135deg,#7c3aed,#3b0764)",
        link: "https://www.google.com/maps/search/Sarod+Ghar+Gwalior",
        history: "Sarod Ghar celebrates Indian classical music traditions and Gwalior's important musical heritage.",
        bestTime: "Morning or afternoon",
        ticketInfo: "Check current opening hours and entry conditions.",
        highlights: "Music, instruments and cultural history"
      }
    ],

    itineraries: {
      budget: {
        title: "2-Day Budget Gwalior",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "8:00 AM", text: "Gwalior Fort" },
              { time: "10:00 AM", text: "Man Singh Palace" },
              { time: "1:00 PM", text: "Sas Bahu Temples and Teli Ka Mandir" },
              { time: "4:00 PM", text: "Gopachal Jain Sculptures" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Jai Vilas Palace" },
              { time: "1:00 PM", text: "Tansen and Muhammad Ghaus tombs" },
              { time: "4:00 PM", text: "Sun Temple" },
              { time: "6:00 PM", text: "Local market and food exploration" }
            ]
          }
        ]
      },

      mid: {
        title: "3-Day Gwalior Heritage Explorer",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "8:00 AM", text: "Complete Gwalior Fort circuit" },
              { time: "6:00 PM", text: "Fort views and return" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Jai Vilas Palace" },
              { time: "1:00 PM", text: "Gujari Mahal Museum" },
              { time: "4:00 PM", text: "Tansen heritage circuit" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "9:00 AM", text: "Sun Temple" },
              { time: "11:00 AM", text: "Sarod Ghar" },
              { time: "2:00 PM", text: "Zoo and Italian Garden" },
              { time: "6:00 PM", text: "Shopping and departure" }
            ]
          }
        ]
      },

      luxury: {
        title: "4-Day Premium Gwalior Journey",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Heritage hotel check-in" },
              { time: "5:00 PM", text: "Private city orientation tour" },
              { time: "8:00 PM", text: "Premium dinner" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "8:00 AM", text: "Private Gwalior Fort tour" },
              { time: "1:00 PM", text: "Fort monuments and palace exploration" },
              { time: "6:00 PM", text: "Return to hotel" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "9:00 AM", text: "Private Jai Vilas Palace visit" },
              { time: "2:00 PM", text: "Tansen and music heritage tour" },
              { time: "6:00 PM", text: "Leisure evening" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "9:00 AM", text: "Sun Temple and relaxed sightseeing" },
              { time: "12:00 PM", text: "Shopping and lunch" },
              { time: "3:00 PM", text: "Departure transfer" }
            ]
          }
        ]
      }
    }
  },







  // ============================================================
  // NEEMUCH
  // ============================================================

  neemuch: {
    name: "Neemuch",
    state: "Madhya Pradesh",

    aliases: [
      "neemuch city",
      "nimach",
      "neemuch madhya pradesh",
      "neemuch mp",
      "neemuch district",
      "nimach madhya pradesh"
    ],

    description:
      "Neemuch is a historic city in northwestern Madhya Pradesh known for its military heritage, agricultural markets, temples, nearby waterfalls, natural landscapes and convenient access to important attractions around Neemuch district and the Rajasthan border region.",

    heroImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4c/18/e6/beauty-of-gandhisagar.jpg?w=1400&h=-1&s=1",

    heroHighlights: [
      "Historic cantonment city",
      "Temples and local heritage",
      "Waterfalls and nature escapes"
    ],

    spotlight:
      "Neemuch is a practical base for exploring the northwestern region of Madhya Pradesh. Discover the city's historic cantonment heritage, visit local temples and markets, explore nearby waterfalls such as Bhadwa Mata Waterfall during suitable seasonal conditions and plan excursions toward Gandhi Sagar, Sukhanand and other attractions of Neemuch district.",

    bestFor: [
      "Heritage travellers",
      "Families",
      "Religious tourism",
      "Nature lovers"
    ],

    quickFacts: [
      {
        label: "Best season",
        value: "October to March"
      },
      {
        label: "Ideal stay",
        value: "2 to 3 days"
      },
      {
        label: "Known for",
        value: "Military heritage, temples, markets and nearby nature"
      },
      {
        label: "Getting around",
        value: "Auto, cab, bus and private vehicle"
      }
    ],

    travelTips: [
      {
        title: "Keep a vehicle for nearby attractions",
        desc: "Several important attractions around Neemuch district are located outside the main city, so hiring a cab or using a private vehicle makes sightseeing easier.",
        icon: "🚙"
      },
      {
        title: "Check waterfall conditions before visiting",
        desc: "Seasonal waterfalls and natural attractions around Neemuch are generally more impressive during and shortly after the monsoon period.",
        icon: "🌧️"
      },
      {
        title: "Start religious visits early",
        desc: "Popular temples can become busy during festivals, weekends and special religious occasions, so morning visits are usually more comfortable.",
        icon: "🛕"
      }
    ],

    hotels: [
      {
        name: "Hotel Bharat Palace Neemuch",
        tier: "Luxury",
        price: "₹4,500",
        rating: "4.4",
        location: "Neemuch",
        image: "🏨",
        bg: "linear-gradient(135deg,#334155,#0f172a)",
        desc: "Comfortable higher-end city accommodation suitable for families, business travellers and visitors exploring Neemuch district.",
        amenities: [
          "Restaurant",
          "Parking",
          "Family rooms",
          "Room service"
        ],
        link:
          "https://www.google.com/maps/search/Hotel+Bharat+Palace+Neemuch"
      },

      {
        name: "Hotel Raj Palace Neemuch",
        tier: "Mid-Range",
        price: "₹2,800",
        rating: "4.2",
        location: "Neemuch City",
        image: "🏨",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        desc: "Practical city accommodation offering comfortable rooms and convenient access to markets, transport and local sightseeing areas.",
        amenities: [
          "Restaurant",
          "Parking",
          "Family rooms",
          "City access"
        ],
        link:
          "https://www.google.com/maps/search/Hotel+Raj+Palace+Neemuch"
      },

      {
        name: "Budget Hotels Neemuch",
        tier: "Budget",
        price: "₹1,200",
        rating: "4.0",
        location: "Central Neemuch",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Affordable accommodation options suitable for solo travellers, short business visits and budget-focused tourists.",
        amenities: [
          "Budget rooms",
          "Central location",
          "Basic facilities",
          "Local transport access"
        ],
        link:
          "https://www.google.com/maps/search/Budget+Hotels+Neemuch"
      }
    ],

    food: [
      {
        category: "Local Breakfast",
        name: "Poha and Jalebi",
        image: "🥣",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        desc: "A popular Madhya Pradesh breakfast combination of light poha served with sweet jalebi and commonly enjoyed at local food stalls.",
        price: "₹80",
        rating: "4.7",
        link:
          "https://www.google.com/maps/search/Poha+Jalebi+Neemuch"
      },

      {
        category: "Traditional",
        name: "Dal Bafla",
        image: "🍛",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "A traditional Madhya Pradesh meal consisting of baked wheat dough served with dal, ghee and regional accompaniments.",
        price: "₹250",
        rating: "4.6",
        link:
          "https://www.google.com/maps/search/Dal+Bafla+Neemuch"
      },

      {
        category: "Street Food",
        name: "Neemuch Local Food Market",
        image: "🍽️",
        bg: "linear-gradient(135deg,#7c3aed,#3b0764)",
        desc: "Local markets and food areas provide travellers with opportunities to try snacks, sweets, vegetarian meals and regional street food.",
        price: "₹200",
        rating: "4.3",
        link:
          "https://www.google.com/maps/search/Best+Street+Food+Neemuch"
      }
    ],

    transport: [
      {
        title: "Maharana Pratap Airport Udaipur",
        type: "Airport",
        icon: "✈️",
        details:
          "Udaipur Airport is one of the practical airport options for travellers reaching Neemuch by air before continuing the journey by road.",
        costLabel: "Airport transfer",
        costValue: "₹3,000 to ₹6,000",
        link:
          "https://www.google.com/maps/search/Maharana+Pratap+Airport+Udaipur"
      },

      {
        title: "Neemuch Railway Station",
        type: "Railway",
        icon: "🚆",
        details:
          "The main railway station serving Neemuch with rail connections toward important cities and regional destinations.",
        costLabel: "Station transfer",
        costValue: "₹80 to ₹300",
        link:
          "https://www.google.com/maps/search/Neemuch+Railway+Station"
      },

      {
        title: "Private Cabs and Local Autos",
        type: "Local travel",
        icon: "🚕",
        details:
          "Autos are practical for local city travel, while hired cabs and private vehicles are better suited for attractions located outside Neemuch.",
        costLabel: "City and local rides",
        costValue: "₹80 to ₹2,500",
        link:
          "https://www.google.com/maps/search/Taxi+Service+Neemuch"
      }
    ],

    

attractions: [
  {
    name: "CRPF Birth Place Memorial",
    type: "Historic Landmark",
    icon: "🇮🇳",
    rating: "4.6",
    time: "1-2 hrs",

    image:
      "https://www.justdial.com/Neemuch/Rtc-Crpf-Neemuch-Neemuch-Chawni/9999P7423-7423-181208213039-A1I3_BZDET/photos",

    desc:
      "A historically important site associated with the origins and institutional history of the Central Reserve Police Force in Neemuch.",

    bg:
      "linear-gradient(135deg,#334155,#0f172a)",

    link:
      "https://www.google.com/maps/search/CRPF+Birth+Place+Neemuch",

    history:
      "Neemuch has an important military and cantonment history and is closely associated with the origins of the Crown Representative's Police, which later became the Central Reserve Police Force.",

    bestTime:
      "Morning or afternoon",

    ticketInfo:
      "Check latest visitor access and entry requirements",

    highlights:
      "Military history, CRPF heritage and national importance"
  },

  {
    name: "Nava Toran Temple",
    type: "Historic Temple",
    icon: "🛕",
    rating: "4.6",
    time: "1-2 hrs",

    image:
      "https://lh3.googleusercontent.com/pw/AMWts8DbWxzc3myn4EiLY-tD35GyYWvpruAqElCuG_kZm-xHY70MnzW8nAnCgAcz4TPf6XU-auw6bL5nKlkMS19-dA_DtD2pQUQA5NfQTTEBoJk4mpA7UPrDDGByg4bFrIBZgm4eUIl1tshoGhdjA7kxwtRa=w2624-h1970-no?authuser=0",

    desc:
      "A historic temple site at Khor known for its ancient architectural remains, decorative stone carvings and archaeological importance.",

    bg:
      "linear-gradient(135deg,#b45309,#7c2d12)",

    link:
      "https://www.google.com/maps/search/Nava+Toran+Temple+Khor+Neemuch",

    history:
      "Nava Toran is an important historic monument of the Neemuch region and is recognized for its surviving ornamental arches, carved stone structures and medieval architectural character.",

    bestTime:
      "Morning or late afternoon",

    ticketInfo:
      "Check latest local entry information",

    highlights:
      "Ancient architecture, stone carvings and photography"
  },

  {
    name: "Bhadwa Mata Temple",
    type: "Temple",
    icon: "🙏",
    rating: "4.7",
    time: "2-3 hrs",

    image:
      "https://newandolder.com/wp-content/uploads/2025/12/bhadwa-mata-mandir-neemuch.jpg",

    desc:
      "A popular religious destination in Neemuch district visited by devotees and travellers interested in the spiritual traditions of the region.",

    bg:
      "linear-gradient(135deg,#ea580c,#7c2d12)",

    link:
      "https://www.google.com/maps/search/Bhadwa+Mata+Temple+Neemuch",

    history:
      "Bhadwa Mata Temple is an important centre of local faith and attracts devotees from Neemuch and surrounding regions, especially during festivals and religious occasions.",

    bestTime:
      "Morning or evening",

    ticketInfo:
      "Free temple entry",

    highlights:
      "Religious atmosphere, local traditions and pilgrimage"
  },

  {
    name: "Sukhanand Dham",
    type: "Religious and Natural Attraction",
    icon: "🌿",
    rating: "4.6",
    time: "3-4 hrs",

    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/25/cc/48/sukhanandji-temple.jpg?w=1100&h=-1&s=1",

    desc:
      "A peaceful religious and natural attraction in Neemuch district known for its temple setting, rocky landscape, natural surroundings and seasonal water features.",

    bg:
      "linear-gradient(135deg,#166534,#052e16)",

    link:
      "https://www.google.com/maps/search/Sukhanand+Dham+Neemuch",

    history:
      "Sukhanand Dham has religious importance in the Neemuch region and is associated with local spiritual traditions while also attracting visitors because of its natural setting.",

    bestTime:
      "Monsoon to winter",

    ticketInfo:
      "Free general access areas",

    highlights:
      "Temple, natural landscape, peaceful atmosphere and photography"
  }
],



    itineraries: {

      budget: {
        title: "2-Day Budget Neemuch",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "9:00 AM",
                text: "Neemuch city and cantonment heritage exploration"
              },
              {
                time: "1:00 PM",
                text: "Local Madhya Pradesh lunch"
              },
              {
                time: "4:00 PM",
                text: "CRPF heritage area and local market visit"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "8:00 AM",
                text: "Bhadwa Mata Temple visit"
              },
              {
                time: "12:00 PM",
                text: "Local lunch during sightseeing route"
              },
              {
                time: "3:00 PM",
                text: "Nava Toran Temple and return to Neemuch"
              }
            ]
          }
        ]
      },


      mid: {
        title: "3-Day Neemuch Explorer",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "9:00 AM",
                text: "Neemuch cantonment and city heritage sightseeing"
              },
              {
                time: "1:00 PM",
                text: "Traditional Madhya Pradesh lunch"
              },
              {
                time: "5:00 PM",
                text: "Local market and food exploration"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "8:00 AM",
                text: "Bhadwa Mata Temple excursion"
              },
              {
                time: "12:00 PM",
                text: "Lunch near sightseeing route"
              },
              {
                time: "3:00 PM",
                text: "Nava Toran Temple heritage visit"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "8:00 AM",
                text: "Sukhanand Dham excursion"
              },
              {
                time: "1:00 PM",
                text: "Local lunch and leisure"
              },
              {
                time: "5:00 PM",
                text: "Return to Neemuch and relaxed evening"
              }
            ]
          }
        ]
      },


      luxury: {
        title: "3-Day Premium Neemuch Journey",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "2:00 PM",
                text: "Premium hotel check-in"
              },
              {
                time: "5:00 PM",
                text: "Private Neemuch city and cantonment heritage tour"
              },
              {
                time: "8:00 PM",
                text: "Curated regional dinner"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "8:00 AM",
                text: "Private Bhadwa Mata Temple excursion"
              },
              {
                time: "12:30 PM",
                text: "Comfortable lunch and leisure break"
              },
              {
                time: "3:00 PM",
                text: "Private Nava Toran heritage sightseeing"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "8:00 AM",
                text: "Private Sukhanand Dham nature and spiritual excursion"
              },
              {
                time: "1:00 PM",
                text: "Relaxed lunch"
              },
              {
                time: "4:00 PM",
                text: "Return to Neemuch and private departure transfer"
              }
            ]
          }
        ]
      }
    }
  }

});