/*
 * ============================================================
 * BHARAT GUIDE - CHHATTISGARH CITY DATA
 * ============================================================
 *
 * IMPORTANT:
 * 1. city-data.js MUST load before this file.
 * 2. Do NOT create const cityData again.
 * 3. Add every Chhattisgarh destination inside Object.assign().
 */

Object.assign(cityData, {

  // ============================================================
  // RAIPUR
  // ============================================================

  raipur: {
    name: "Raipur",
    state: "Chhattisgarh",

    aliases: [
      "raipur city",
      "capital of chhattisgarh",
      "raipur chhattisgarh"
    ],

    description:
      "Raipur is the capital of Chhattisgarh and a practical gateway to the state's cultural attractions, museums, temples, lakes and nearby nature escapes.",

    heroImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",

    heroHighlights: [
      "State capital",
      "Culture and museums",
      "Gateway to Chhattisgarh"
    ],

    spotlight:
      "Raipur works well as the starting point of a Chhattisgarh journey. Explore the city's museums, temples and food scene before using it as a base for trips toward Naya Raipur, Sirpur and nearby natural attractions.",

    bestFor: [
      "First Chhattisgarh trip",
      "Families",
      "Business travellers",
      "Weekend trips"
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
        value: "Museums, temples, lakes and food"
      },
      {
        label: "Getting around",
        value: "Cab, auto and city buses"
      }
    ],

    travelTips: [
      {
        title: "Keep one day for city sightseeing",
        desc: "Museums, temples and major city attractions can comfortably fill one complete sightseeing day.",
        icon: "🏙️"
      },
      {
        title: "Explore nearby Naya Raipur",
        desc: "Atal Nagar offers modern attractions, landscaped areas and family-friendly places outside central Raipur.",
        icon: "🚗"
      },
      {
        title: "Try Chhattisgarhi food",
        desc: "Keep time for local dishes and traditional snacks during your stay.",
        icon: "🍛"
      }
    ],

    hotels: [
      {
        name: "Courtyard by Marriott Raipur",
        tier: "Luxury",
        price: "₹8,000",
        rating: "4.6",
        location: "Labhandih, Raipur",
        image: "🏨",
        bg: "linear-gradient(135deg,#334155,#0f172a)",
        desc: "Modern upscale hotel suitable for families, business travellers and comfortable city stays.",
        amenities: [
          "Pool",
          "Restaurant",
          "Fitness centre",
          "Parking"
        ],
        link:
          "https://www.google.com/maps/search/Courtyard+by+Marriott+Raipur"
      },

      {
        name: "Sayaji Raipur",
        tier: "Mid-Range",
        price: "₹5,500",
        rating: "4.5",
        location: "GE Road, Raipur",
        image: "🏨",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        desc: "Popular city hotel with comfortable rooms, dining facilities and convenient road connectivity.",
        amenities: [
          "Restaurant",
          "Parking",
          "Family rooms",
          "Business facilities"
        ],
        link:
          "https://www.google.com/maps/search/Sayaji+Raipur"
      },

      {
        name: "Hotel Meera",
        tier: "Budget",
        price: "₹1,800",
        rating: "4.1",
        location: "Raipur City Centre",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#0c4a6e)",
        desc: "Affordable city stay suitable for short visits and budget travellers.",
        amenities: [
          "Budget rooms",
          "Restaurant",
          "Central location",
          "Room service"
        ],
        link:
          "https://www.google.com/maps/search/Hotel+Meera+Raipur"
      }
    ],

    food: [
      {
        category: "Traditional",
        name: "Chila",
        image: "🥞",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        desc: "A popular Chhattisgarhi rice-based dish commonly enjoyed for breakfast or a light meal.",
        price: "₹60",
        rating: "4.6",
        link:
          "https://www.google.com/maps/search/Chhattisgarhi+food+Raipur"
      },

      {
        category: "Traditional",
        name: "Faraa",
        image: "🥟",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        desc: "Steamed rice dumplings and one of the best-known traditional snacks of Chhattisgarh.",
        price: "₹80",
        rating: "4.7",
        link:
          "https://www.google.com/maps/search/Traditional+food+Raipur"
      },

      {
        category: "Street Food",
        name: "Raipur Food Street",
        image: "🍜",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "A useful option for travellers wanting to sample snacks and casual food during the evening.",
        price: "₹200",
        rating: "4.4",
        link:
          "https://www.google.com/maps/search/Food+Street+Raipur"
      }
    ],

    transport: [
      {
        title: "Swami Vivekananda Airport",
        type: "Airport",
        icon: "✈️",
        details:
          "The main airport serving Raipur and an important arrival point for travellers exploring Chhattisgarh.",
        costLabel: "Airport transfer",
        costValue: "₹400 to ₹900",
        link:
          "https://www.google.com/maps/search/Swami+Vivekananda+Airport"
      },

      {
        title: "Raipur Junction",
        type: "Railway",
        icon: "🚆",
        details:
          "Raipur's major railway station with connections to important cities across India.",
        costLabel: "Station transfer",
        costValue: "₹100 to ₹300",
        link:
          "https://www.google.com/maps/search/Raipur+Railway+Station"
      },

      {
        title: "Autos and Cabs",
        type: "Local travel",
        icon: "🚕",
        details:
          "Autos, taxis and app-based cabs are convenient options for sightseeing around Raipur.",
        costLabel: "City ride",
        costValue: "₹80 to ₹400",
        link:
          "https://www.google.com/maps/search/Taxi+Raipur"
      }
    ],

    attractions: [
      {
        name: "Mahant Ghasidas Memorial Museum",
        type: "Museum",
        icon: "🏛️",
        rating: "4.4",
        time: "1-2 hrs",

        desc:
          "An important museum showcasing archaeological objects, tribal culture, inscriptions and historical collections.",

        bg:
          "linear-gradient(135deg,#92400e,#451a03)",

        link:
          "https://www.google.com/maps/search/Mahant+Ghasidas+Memorial+Museum",

        history:
          "The museum is one of Raipur's important cultural institutions and helps visitors understand the archaeology and cultural traditions of Chhattisgarh.",

        bestTime:
          "Morning or afternoon",

        ticketInfo:
          "Check latest museum entry charges",

        highlights:
          "Archaeology, tribal heritage and historical collections"
      },

      {
        name: "Nandan Van Jungle Safari",
        type: "Wildlife",
        icon: "🐅",
        rating: "4.4",
        time: "3-4 hrs",

        desc:
          "A large wildlife and safari attraction near Naya Raipur popular with families and nature lovers.",

        bg:
          "linear-gradient(135deg,#166534,#052e16)",

        link:
          "https://www.google.com/maps/search/Nandan+Van+Jungle+Safari",

        history:
          "Developed as a major wildlife attraction near Atal Nagar, the safari offers visitors a nature-focused excursion outside central Raipur.",

        bestTime:
          "Morning",

        ticketInfo:
          "Check latest safari ticket prices",

        highlights:
          "Safari experience, wildlife and family outing"
      },

      {
        name: "Purkhouti Muktangan",
        type: "Cultural Attraction",
        icon: "🎭",
        rating: "4.5",
        time: "2-3 hrs",

        desc:
          "An open-air cultural attraction presenting the tribal traditions, architecture and heritage of Chhattisgarh.",

        bg:
          "linear-gradient(135deg,#9a3412,#431407)",

        link:
          "https://www.google.com/maps/search/Purkhouti+Muktangan",

        history:
          "Purkhouti Muktangan was developed to showcase the cultural identity, folk traditions and architectural styles of Chhattisgarh.",

        bestTime:
          "Late afternoon",

        ticketInfo:
          "Check latest entry information",

        highlights:
          "Tribal culture, open-air exhibits and photography"
      },

      {
        name: "Vivekananda Sarovar",
        type: "Lake",
        icon: "🌊",
        rating: "4.4",
        time: "1-2 hrs",

        desc:
          "A popular lake and recreational area suitable for evening walks and relaxed city sightseeing.",

        bg:
          "linear-gradient(135deg,#0369a1,#082f49)",

        link:
          "https://www.google.com/maps/search/Vivekananda+Sarovar+Raipur",

        history:
          "The historic lake, also associated with the name Budha Talab, remains an important landmark in Raipur.",

        bestTime:
          "Evening",

        ticketInfo:
          "Free public access areas",

        highlights:
          "Lake views, evening walks and city atmosphere"
      }
    ],

    itineraries: {

      budget: {
        title: "2-Day Budget Raipur",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "9:00 AM",
                text: "Mahant Ghasidas Memorial Museum"
              },
              {
                time: "1:00 PM",
                text: "Traditional Chhattisgarhi lunch"
              },
              {
                time: "5:00 PM",
                text: "Vivekananda Sarovar evening visit"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Purkhouti Muktangan"
              },
              {
                time: "1:00 PM",
                text: "Naya Raipur sightseeing"
              },
              {
                time: "4:00 PM",
                text: "Local market and food exploration"
              }
            ]
          }
        ]
      },


      mid: {
        title: "3-Day Raipur Explorer",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "10:00 AM",
                text: "Raipur museum and city sightseeing"
              },
              {
                time: "2:00 PM",
                text: "Traditional lunch"
              },
              {
                time: "6:00 PM",
                text: "Vivekananda Sarovar"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Nandan Van Jungle Safari"
              },
              {
                time: "2:00 PM",
                text: "Naya Raipur lunch"
              },
              {
                time: "5:00 PM",
                text: "Purkhouti Muktangan"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "9:00 AM",
                text: "Temple and local market exploration"
              },
              {
                time: "1:00 PM",
                text: "Chhattisgarhi food experience"
              },
              {
                time: "5:00 PM",
                text: "Shopping and departure"
              }
            ]
          }
        ]
      },


      luxury: {
        title: "3-Day Premium Raipur",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "2:00 PM",
                text: "Luxury hotel check-in"
              },
              {
                time: "6:00 PM",
                text: "Private city sightseeing"
              },
              {
                time: "8:00 PM",
                text: "Premium dinner"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Private Nandan Van Jungle Safari visit"
              },
              {
                time: "2:00 PM",
                text: "Resort lunch and leisure"
              },
              {
                time: "5:00 PM",
                text: "Purkhouti Muktangan"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "10:00 AM",
                text: "Relaxed brunch"
              },
              {
                time: "12:00 PM",
                text: "Shopping and departure transfer"
              }
            ]
          }
        ]
      }
    }
  },


  // ============================================================
  // JAGDALPUR
  // ============================================================

  jagdalpur: {
    name: "Jagdalpur",
    state: "Chhattisgarh",

    aliases: [
      "jagdalpur city",
      "bastar",
      "bastar headquarters"
    ],

    description:
      "Jagdalpur is the tourism hub of Bastar, surrounded by waterfalls, caves, forests, tribal culture and some of Chhattisgarh's most spectacular natural attractions.",

    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",

    heroHighlights: [
      "Chitrakote Falls",
      "Bastar culture",
      "Waterfalls and caves"
    ],

    spotlight:
      "Jagdalpur is one of the strongest tourism bases in Chhattisgarh. Keep several days here because Chitrakote Falls, Tirathgarh Falls, Kanger Valley and Bastar's cultural attractions require separate sightseeing routes.",

    bestFor: [
      "Nature lovers",
      "Road trips",
      "Photography",
      "Adventure travellers"
    ],

    quickFacts: [
      {
        label: "Best season",
        value: "July to February"
      },
      {
        label: "Ideal stay",
        value: "3 to 4 days"
      },
      {
        label: "Known for",
        value: "Waterfalls, caves, forests and Bastar culture"
      },
      {
        label: "Getting around",
        value: "Private cab or hired vehicle"
      }
    ],

    travelTips: [
      {
        title: "Hire a vehicle for sightseeing",
        desc: "Major attractions are spread outside the city, so a dedicated cab is the easiest option.",
        icon: "🚙"
      },
      {
        title: "Check seasonal conditions",
        desc: "Waterfall views and access conditions can change significantly between monsoon and summer.",
        icon: "🌧️"
      },
      {
        title: "Keep multiple days",
        desc: "Trying to cover Chitrakote, Tirathgarh and Kanger Valley in one day makes the trip unnecessarily rushed.",
        icon: "🗓️"
      }
    ],

    hotels: [
      {
        name: "Naman Bastar",
        tier: "Luxury",
        price: "₹6,500",
        rating: "4.5",
        location: "Jagdalpur",
        image: "🏨",
        bg: "linear-gradient(135deg,#14532d,#052e16)",
        desc: "Comfortable higher-end stay suitable for travellers exploring the Bastar region.",
        amenities: [
          "Restaurant",
          "Parking",
          "Comfortable rooms",
          "Travel assistance"
        ],
        link:
          "https://www.google.com/maps/search/Naman+Bastar+Jagdalpur"
      },

      {
        name: "Hotel Devansh Residency",
        tier: "Mid-Range",
        price: "₹3,500",
        rating: "4.3",
        location: "Jagdalpur",
        image: "🏨",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        desc: "Practical city accommodation for travellers using Jagdalpur as their Bastar sightseeing base.",
        amenities: [
          "Restaurant",
          "Parking",
          "Family rooms",
          "City access"
        ],
        link:
          "https://www.google.com/maps/search/Hotel+Devansh+Residency+Jagdalpur"
      },

      {
        name: "Budget Hotels Jagdalpur",
        tier: "Budget",
        price: "₹1,500",
        rating: "4.0",
        location: "Central Jagdalpur",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Affordable accommodation options for backpackers and budget-focused travellers.",
        amenities: [
          "Budget rooms",
          "City access",
          "Parking",
          "Basic facilities"
        ],
        link:
          "https://www.google.com/maps/search/Budget+Hotels+Jagdalpur"
      }
    ],

    food: [
      {
        category: "Traditional",
        name: "Bastar Tribal Cuisine",
        image: "🍛",
        bg: "linear-gradient(135deg,#166534,#052e16)",
        desc: "Traditional Bastar dishes offer travellers a chance to explore the region's distinct local food culture.",
        price: "₹300",
        rating: "4.6",
        link:
          "https://www.google.com/maps/search/Traditional+Bastar+Food+Jagdalpur"
      },

      {
        category: "Local Food",
        name: "Chapda Chutney",
        image: "🥣",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "A well-known traditional food associated with Bastar's indigenous cuisine.",
        price: "₹150",
        rating: "4.5",
        link:
          "https://www.google.com/maps/search/Bastar+Traditional+Food"
      },

      {
        category: "Restaurant",
        name: "Jagdalpur Local Restaurants",
        image: "🍽️",
        bg: "linear-gradient(135deg,#7c3aed,#3b0764)",
        desc: "City restaurants provide practical dining options between long waterfall and forest sightseeing trips.",
        price: "₹400",
        rating: "4.3",
        link:
          "https://www.google.com/maps/search/Best+Restaurants+Jagdalpur"
      }
    ],

    transport: [
      {
        title: "Jagdalpur Airport",
        type: "Airport",
        icon: "✈️",
        details:
          "The regional airport serving Jagdalpur and the wider Bastar tourism region.",
        costLabel: "Airport transfer",
        costValue: "₹300 to ₹700",
        link:
          "https://www.google.com/maps/search/Jagdalpur+Airport"
      },

      {
        title: "Jagdalpur Railway Station",
        type: "Railway",
        icon: "🚆",
        details:
          "Railway access for travellers arriving in Jagdalpur before exploring Bastar.",
        costLabel: "Station transfer",
        costValue: "₹100 to ₹300",
        link:
          "https://www.google.com/maps/search/Jagdalpur+Railway+Station"
      },

      {
        title: "Private Sightseeing Cab",
        type: "Sightseeing",
        icon: "🚙",
        details:
          "The most practical option for reaching waterfalls, caves and national park attractions around Jagdalpur.",
        costLabel: "Full day",
        costValue: "₹2,500 to ₹5,000",
        link:
          "https://www.google.com/maps/search/Jagdalpur+Sightseeing+Taxi"
      }
    ],

    attractions: [
      {
        name: "Chitrakote Falls",
        type: "Waterfall",
        icon: "🌊",
        rating: "4.8",
        time: "3-4 hrs",

        desc:
          "A spectacular horseshoe-shaped waterfall on the Indravati River and one of Chhattisgarh's most famous natural attractions.",

        bg:
          "linear-gradient(135deg,#0369a1,#082f49)",

        link:
          "https://www.google.com/maps/search/Chitrakote+Falls",

        history:
          "Chitrakote Falls has long been one of Bastar's most important natural landmarks and is especially dramatic during the monsoon season.",

        bestTime:
          "July to February",

        ticketInfo:
          "General viewing areas are usually accessible without major entry charges",

        highlights:
          "Waterfall panorama, photography and Indravati River"
      },

      {
        name: "Tirathgarh Falls",
        type: "Waterfall",
        icon: "💦",
        rating: "4.7",
        time: "2-3 hrs",

        desc:
          "A beautiful multi-level waterfall surrounded by forest inside the Kanger Valley region.",

        bg:
          "linear-gradient(135deg,#0f766e,#134e4a)",

        link:
          "https://www.google.com/maps/search/Tirathgarh+Falls",

        history:
          "Tirathgarh Falls is one of the most visited natural attractions in the Bastar region and forms part of the wider Kanger Valley tourism circuit.",

        bestTime:
          "Monsoon to winter",

        ticketInfo:
          "Check latest forest and local entry rules",

        highlights:
          "Cascading waterfall, forest scenery and photography"
      },

      {
        name: "Kanger Valley National Park",
        type: "National Park",
        icon: "🌳",
        rating: "4.6",
        time: "Full day",

        desc:
          "A major protected landscape known for forests, wildlife, limestone caves and waterfalls.",

        bg:
          "linear-gradient(135deg,#166534,#052e16)",

        link:
          "https://www.google.com/maps/search/Kanger+Valley+National+Park",

        history:
          "The national park protects one of the most important forest landscapes in the Bastar region.",

        bestTime:
          "November to March",

        ticketInfo:
          "Forest permits and vehicle charges may apply",

        highlights:
          "Forests, wildlife, caves and nature tourism"
      },

      {
        name: "Danteshwari Temple",
        type: "Temple",
        icon: "🛕",
        rating: "4.7",
        time: "1-2 hrs",

        desc:
          "An important cultural and religious landmark connected with the traditions of the Bastar region.",

        bg:
          "linear-gradient(135deg,#b45309,#7c2d12)",

        link:
          "https://www.google.com/maps/search/Danteshwari+Temple+Jagdalpur",

        history:
          "The temple has deep cultural significance in Bastar and is closely connected with the region's religious traditions.",

        bestTime:
          "Morning or evening",

        ticketInfo:
          "Free temple entry",

        highlights:
          "Religious heritage, Bastar traditions and architecture"
      }
    ],

    itineraries: {

      budget: {
        title: "2-Day Budget Jagdalpur",

        days: [
          {
            label: "Day 1",
            activities: [
              {
                time: "8:00 AM",
                text: "Travel to Chitrakote Falls"
              },
              {
                time: "12:00 PM",
                text: "Waterfall sightseeing and local lunch"
              },
              {
                time: "5:00 PM",
                text: "Return to Jagdalpur"
              }
            ]
          },

          {
            label: "Day 2",
            activities: [
              {
                time: "8:00 AM",
                text: "Tirathgarh Falls"
              },
              {
                time: "12:00 PM",
                text: "Kanger Valley sightseeing"
              },
              {
                time: "6:00 PM",
                text: "Return to Jagdalpur"
              }
            ]
          }
        ]
      },


      mid: {
        title: "3-Day Bastar Explorer",

        days: [
          {
            label: "Day 1",
            activities: [
              {
                time: "9:00 AM",
                text: "Jagdalpur city and Bastar cultural attractions"
              },
              {
                time: "2:00 PM",
                text: "Local food experience"
              },
              {
                time: "6:00 PM",
                text: "City market exploration"
              }
            ]
          },

          {
            label: "Day 2",
            activities: [
              {
                time: "8:00 AM",
                text: "Chitrakote Falls excursion"
              },
              {
                time: "1:00 PM",
                text: "Lunch near sightseeing route"
              },
              {
                time: "5:00 PM",
                text: "Sunset and return"
              }
            ]
          },

          {
            label: "Day 3",
            activities: [
              {
                time: "8:00 AM",
                text: "Tirathgarh Falls"
              },
              {
                time: "12:00 PM",
                text: "Kanger Valley National Park"
              },
              {
                time: "6:00 PM",
                text: "Return to Jagdalpur"
              }
            ]
          }
        ]
      },


      luxury: {
        title: "4-Day Premium Bastar Journey",

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
                text: "Private Jagdalpur city tour"
              },
              {
                time: "8:00 PM",
                text: "Curated dinner"
              }
            ]
          },

          {
            label: "Day 2",
            activities: [
              {
                time: "8:00 AM",
                text: "Private Chitrakote Falls excursion"
              },
              {
                time: "1:00 PM",
                text: "Leisure lunch"
              },
              {
                time: "5:00 PM",
                text: "Sunset photography"
              }
            ]
          },

          {
            label: "Day 3",
            activities: [
              {
                time: "8:00 AM",
                text: "Tirathgarh Falls"
              },
              {
                time: "12:00 PM",
                text: "Private Kanger Valley exploration"
              },
              {
                time: "6:00 PM",
                text: "Return and leisure"
              }
            ]
          },

          {
            label: "Day 4",
            activities: [
              {
                time: "9:00 AM",
                text: "Bastar cultural shopping"
              },
              {
                time: "12:00 PM",
                text: "Lunch and departure"
              }
            ]
          }
        ]
      }
    }
  }

});