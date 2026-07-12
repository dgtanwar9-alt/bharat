/*
 * ============================================================
 * BHARAT GUIDE - GOA CITY DATA
 * ============================================================
 *
 * IMPORTANT:
 * 1. city-data.js MUST load before this file.
 * 2. Do NOT create const cityData again.
 * 3. Add every Goa destination inside Object.assign().
 */

Object.assign(cityData, {

  // ============================================================
  // PANAJI
  // ============================================================

  panaji: {
    name: "Panaji",
    state: "Goa",

    aliases: [
      "panaji city",
      "panjim",
      "capital of goa",
      "panaji goa"
    ],

    description:
      "Panaji is the capital of Goa and a charming riverside city known for Portuguese heritage, colourful Latin Quarter streets, historic churches, river cruises, local markets and easy access to nearby beaches.",

    heroImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",

    heroHighlights: [
      "Capital of Goa",
      "Portuguese heritage",
      "Mandovi River and Latin Quarter"
    ],

    spotlight:
      "Panaji is one of the best starting points for exploring Goa. Walk through the colourful streets of Fontainhas, visit historic churches, enjoy a Mandovi River cruise and use the city as a base for exploring Old Goa, Miramar Beach and Dona Paula.",

    bestFor: [
      "First Goa trip",
      "Families",
      "Culture lovers",
      "Couples"
    ],

    quickFacts: [
      {
        label: "Best season",
        value: "November to February"
      },
      {
        label: "Ideal stay",
        value: "2 to 3 days"
      },
      {
        label: "Known for",
        value: "Portuguese heritage, river cruises and culture"
      },
      {
        label: "Getting around",
        value: "Cab, rental scooter, bus and auto"
      }
    ],

    travelTips: [
      {
        title: "Explore Fontainhas on foot",
        desc: "Walking is the best way to explore the colourful Portuguese houses, narrow streets and heritage atmosphere of the Latin Quarter.",
        icon: "🚶"
      },
      {
        title: "Book evening river cruises early",
        desc: "Mandovi River cruises can become busy during weekends and the peak tourism season.",
        icon: "🚢"
      },
      {
        title: "Keep one day for Old Goa",
        desc: "Old Goa churches and heritage attractions are easy to explore as a separate sightseeing trip from Panaji.",
        icon: "⛪"
      }
    ],

    hotels: [
      {
        name: "Taj Cidade de Goa Horizon",
        tier: "Luxury",
        price: "₹14,000",
        rating: "4.7",
        location: "Dona Paula, Panaji",
        image: "🏨",
        bg: "linear-gradient(135deg,#0f766e,#134e4a)",
        desc: "Premium luxury resort offering comfortable rooms, sea views, restaurants and resort facilities near Panaji.",
        amenities: [
          "Pool",
          "Restaurants",
          "Fitness centre",
          "Sea views"
        ],
        link:
          "https://www.google.com/maps/search/Taj+Cidade+de+Goa+Horizon"
      },

      {
        name: "Vivanta Goa Panaji",
        tier: "Mid-Range",
        price: "₹8,000",
        rating: "4.6",
        location: "Dr D B Bandodkar Road, Panaji",
        image: "🏨",
        bg: "linear-gradient(135deg,#92400e,#451a03)",
        desc: "Popular upscale city hotel suitable for travellers wanting comfortable accommodation near central Panaji.",
        amenities: [
          "Pool",
          "Restaurant",
          "Fitness centre",
          "City access"
        ],
        link:
          "https://www.google.com/maps/search/Vivanta+Goa+Panaji"
      },

      {
        name: "The Menino Regency",
        tier: "Budget",
        price: "₹2,500",
        rating: "4.1",
        location: "Central Panaji",
        image: "🏠",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Practical city accommodation suitable for budget travellers exploring Panaji and nearby attractions.",
        amenities: [
          "Restaurant",
          "Central location",
          "Room service",
          "City access"
        ],
        link:
          "https://www.google.com/maps/search/The+Menino+Regency+Panaji"
      }
    ],

    food: [
      {
        category: "Goan Cuisine",
        name: "Goan Fish Curry Rice",
        image: "🐟",
        bg: "linear-gradient(135deg,#ea580c,#7c2d12)",
        desc: "One of Goa's most popular traditional meals combining fish curry, steamed rice and local spices.",
        price: "₹350",
        rating: "4.8",
        link:
          "https://www.google.com/maps/search/Goan+Fish+Curry+Panaji"
      },

      {
        category: "Traditional",
        name: "Goan Pork Vindaloo",
        image: "🍛",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "A famous Goan dish influenced by Portuguese cuisine and prepared with spices, vinegar and slow-cooked meat.",
        price: "₹450",
        rating: "4.7",
        link:
          "https://www.google.com/maps/search/Goan+Vindaloo+Panaji"
      },

      {
        category: "Dessert",
        name: "Bebinca",
        image: "🍰",
        bg: "linear-gradient(135deg,#7c3aed,#3b0764)",
        desc: "A traditional layered Goan dessert and one of the most popular sweets to try during a Goa trip.",
        price: "₹200",
        rating: "4.6",
        link:
          "https://www.google.com/maps/search/Bebinca+Panaji"
      }
    ],

    transport: [
      {
        title: "Manohar International Airport",
        type: "Airport",
        icon: "✈️",
        details:
          "One of Goa's major airports serving domestic and international travellers visiting North Goa and Panaji.",
        costLabel: "Airport transfer",
        costValue: "₹1,200 to ₹2,500",
        link:
          "https://www.google.com/maps/search/Manohar+International+Airport"
      },

      {
        title: "Karmali Railway Station",
        type: "Railway",
        icon: "🚆",
        details:
          "One of the convenient railway stations for travellers reaching Panaji and Old Goa.",
        costLabel: "Station transfer",
        costValue: "₹400 to ₹900",
        link:
          "https://www.google.com/maps/search/Karmali+Railway+Station"
      },

      {
        title: "Rental Scooters and Cabs",
        type: "Local travel",
        icon: "🛵",
        details:
          "Rental scooters and taxis are popular options for exploring Panaji, nearby beaches and North Goa attractions.",
        costLabel: "Daily scooter rental",
        costValue: "₹400 to ₹800",
        link:
          "https://www.google.com/maps/search/Scooter+Rental+Panaji"
      }
    ],

    attractions: [
      {
        name: "Fontainhas",
        type: "Heritage Quarter",
        icon: "🏘️",
        rating: "4.6",
        time: "2-3 hrs",

        desc:
          "A colourful historic neighbourhood known for Portuguese-style houses, narrow streets, cafes, art galleries and heritage walks.",

        bg:
          "linear-gradient(135deg,#db2777,#831843)",

        link:
          "https://www.google.com/maps/search/Fontainhas+Panaji",

        history:
          "Fontainhas developed during the Portuguese colonial period and remains one of India's best-preserved Latin Quarters.",

        bestTime:
          "Morning or late afternoon",

        ticketInfo:
          "Free public access",

        highlights:
          "Portuguese houses, colourful streets, heritage walks and photography"
      },

      {
        name: "Miramar Beach",
        type: "Beach",
        icon: "🏖️",
        rating: "4.4",
        time: "2-3 hrs",

        desc:
          "A popular urban beach near Panaji known for evening walks, sunsets and views near the Mandovi River meeting the Arabian Sea.",

        bg:
          "linear-gradient(135deg,#0284c7,#164e63)",

        link:
          "https://www.google.com/maps/search/Miramar+Beach+Goa",

        history:
          "Miramar Beach has developed into one of the most popular recreational beaches near Goa's capital city.",

        bestTime:
          "Late afternoon and sunset",

        ticketInfo:
          "Free public access",

        highlights:
          "Sunset views, beach walks and family outings"
      },

      {
        name: "Dona Paula View Point",
        type: "Viewpoint",
        icon: "🌊",
        rating: "4.4",
        time: "1-2 hrs",

        desc:
          "A famous coastal viewpoint near Panaji offering scenic views of the Arabian Sea and surrounding coastline.",

        bg:
          "linear-gradient(135deg,#0891b2,#164e63)",

        link:
          "https://www.google.com/maps/search/Dona+Paula+View+Point",

        history:
          "Dona Paula has become one of Goa's best-known sightseeing areas and is associated with local legends and Portuguese-era history.",

        bestTime:
          "Morning or sunset",

        ticketInfo:
          "Check latest local entry information",

        highlights:
          "Sea views, photography and coastal scenery"
      },

      {
        name: "Immaculate Conception Church",
        type: "Church",
        icon: "⛪",
        rating: "4.6",
        time: "1 hr",

        desc:
          "One of Panaji's most recognizable landmarks, known for its white facade, distinctive staircase and historic religious importance.",

        bg:
          "linear-gradient(135deg,#64748b,#1e293b)",

        link:
          "https://www.google.com/maps/search/Our+Lady+of+the+Immaculate+Conception+Church+Panaji",

        history:
          "The church traces its origins to the sixteenth century and remains an important historic landmark in Panaji.",

        bestTime:
          "Morning or evening",

        ticketInfo:
          "Free church entry",

        highlights:
          "Historic architecture, staircase and city views"
      }
    ],

    itineraries: {

      budget: {
        title: "2-Day Budget Panaji",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "9:00 AM",
                text: "Fontainhas heritage walk"
              },
              {
                time: "1:00 PM",
                text: "Traditional Goan lunch"
              },
              {
                time: "5:00 PM",
                text: "Miramar Beach sunset"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Immaculate Conception Church"
              },
              {
                time: "12:00 PM",
                text: "Panaji market exploration"
              },
              {
                time: "5:00 PM",
                text: "Mandovi River cruise"
              }
            ]
          }
        ]
      },


      mid: {
        title: "3-Day Panaji Explorer",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "9:00 AM",
                text: "Fontainhas guided heritage walk"
              },
              {
                time: "1:00 PM",
                text: "Goan cuisine lunch"
              },
              {
                time: "5:00 PM",
                text: "Miramar Beach"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Old Goa churches sightseeing"
              },
              {
                time: "2:00 PM",
                text: "Local lunch near Old Goa"
              },
              {
                time: "6:00 PM",
                text: "Mandovi River cruise"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "9:00 AM",
                text: "Dona Paula View Point"
              },
              {
                time: "1:00 PM",
                text: "Panaji shopping and local food"
              },
              {
                time: "5:00 PM",
                text: "Relaxed evening in Fontainhas"
              }
            ]
          }
        ]
      },


      luxury: {
        title: "3-Day Premium Panaji",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "2:00 PM",
                text: "Luxury hotel check-in"
              },
              {
                time: "5:00 PM",
                text: "Private Fontainhas heritage tour"
              },
              {
                time: "8:00 PM",
                text: "Premium Goan dinner"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Private Old Goa heritage tour"
              },
              {
                time: "2:00 PM",
                text: "Luxury lunch experience"
              },
              {
                time: "6:00 PM",
                text: "Premium Mandovi River cruise"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "9:00 AM",
                text: "Dona Paula coastal sightseeing"
              },
              {
                time: "12:00 PM",
                text: "Resort brunch and leisure"
              },
              {
                time: "4:00 PM",
                text: "Private departure transfer"
              }
            ]
          }
        ]
      }
    }
  },


  // ============================================================
  // CALANGUTE
  // ============================================================

  calangute: {
    name: "Calangute",
    state: "Goa",

    aliases: [
      "calangute goa",
      "calangute beach",
      "queen of beaches goa",
      "north goa calangute"
    ],

    description:
      "Calangute is one of Goa's most popular beach destinations, known for its long sandy coastline, water sports, restaurants, shopping streets and convenient access to Baga, Candolim and other North Goa attractions.",

    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",

    heroHighlights: [
      "Popular North Goa beach",
      "Water sports",
      "Shopping and nightlife"
    ],

    spotlight:
      "Calangute is an excellent base for travellers who want beaches, water sports, restaurants, shopping and easy access to North Goa. Explore Calangute Beach during the day, visit nearby Baga and Candolim and keep evenings for markets, cafes and nightlife.",

    bestFor: [
      "First Goa trip",
      "Friends",
      "Couples",
      "Beach lovers"
    ],

    quickFacts: [
      {
        label: "Best season",
        value: "November to February"
      },
      {
        label: "Ideal stay",
        value: "3 to 4 days"
      },
      {
        label: "Known for",
        value: "Beach, water sports, shopping and nightlife"
      },
      {
        label: "Getting around",
        value: "Rental scooter, cab and local bus"
      }
    ],

    travelTips: [
      {
        title: "Visit the beach early",
        desc: "Morning hours are generally better for relaxed beach walks before the main tourist crowds arrive.",
        icon: "🌅"
      },
      {
        title: "Compare water sports packages",
        desc: "Check prices, safety equipment and activity inclusions before booking water sports.",
        icon: "🚤"
      },
      {
        title: "Use Calangute as a North Goa base",
        desc: "Baga, Candolim, Anjuna, Vagator and several forts are easily accessible from Calangute.",
        icon: "🛵"
      }
    ],

    hotels: [
      {
        name: "Le Meridien Goa Calangute",
        tier: "Luxury",
        price: "₹13,000",
        rating: "4.6",
        location: "Calangute",
        image: "🏨",
        bg: "linear-gradient(135deg,#334155,#0f172a)",
        desc: "Premium hotel offering upscale rooms, dining facilities and convenient access to Calangute Beach.",
        amenities: [
          "Pool",
          "Restaurant",
          "Fitness centre",
          "Family rooms"
        ],
        link:
          "https://www.google.com/maps/search/Le+Meridien+Goa+Calangute"
      },

      {
        name: "BloomSuites Calangute",
        tier: "Mid-Range",
        price: "₹6,000",
        rating: "4.4",
        location: "Calangute",
        image: "🏨",
        bg: "linear-gradient(135deg,#0369a1,#082f49)",
        desc: "Comfortable accommodation suitable for couples, families and travellers exploring North Goa.",
        amenities: [
          "Pool",
          "Restaurant",
          "Family rooms",
          "WiFi"
        ],
        link:
          "https://www.google.com/maps/search/BloomSuites+Calangute"
      },

      {
        name: "Budget Hotels Calangute",
        tier: "Budget",
        price: "₹2,000",
        rating: "4.1",
        location: "Calangute Beach Area",
        image: "🏠",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        desc: "Affordable accommodation options for backpackers and budget travellers staying near Calangute Beach.",
        amenities: [
          "Budget rooms",
          "Beach access",
          "WiFi",
          "Local transport"
        ],
        link:
          "https://www.google.com/maps/search/Budget+Hotels+Calangute"
      }
    ],

    food: [
      {
        category: "Seafood",
        name: "Goan Seafood Thali",
        image: "🐟",
        bg: "linear-gradient(135deg,#0284c7,#164e63)",
        desc: "A popular meal featuring fish curry, fried fish, rice, vegetables and traditional Goan accompaniments.",
        price: "₹450",
        rating: "4.8",
        link:
          "https://www.google.com/maps/search/Seafood+Thali+Calangute"
      },

      {
        category: "Goan Cuisine",
        name: "Chicken Cafreal",
        image: "🍗",
        bg: "linear-gradient(135deg,#15803d,#14532d)",
        desc: "A famous Goan dish prepared with a flavourful green spice marinade and commonly served at local restaurants.",
        price: "₹400",
        rating: "4.7",
        link:
          "https://www.google.com/maps/search/Chicken+Cafreal+Calangute"
      },

      {
        category: "Beach Dining",
        name: "Calangute Beach Shacks",
        image: "🍽️",
        bg: "linear-gradient(135deg,#b45309,#78350f)",
        desc: "Beachside dining options serving seafood, Goan dishes, Indian meals and casual refreshments.",
        price: "₹700",
        rating: "4.4",
        link:
          "https://www.google.com/maps/search/Best+Beach+Shacks+Calangute"
      }
    ],

    transport: [
      {
        title: "Manohar International Airport",
        type: "Airport",
        icon: "✈️",
        details:
          "A major arrival airport for travellers visiting Calangute and other destinations in North Goa.",
        costLabel: "Airport transfer",
        costValue: "₹1,200 to ₹2,500",
        link:
          "https://www.google.com/maps/search/Manohar+International+Airport"
      },

      {
        title: "Thivim Railway Station",
        type: "Railway",
        icon: "🚆",
        details:
          "One of the convenient railway stations for travellers heading toward Calangute and North Goa.",
        costLabel: "Station transfer",
        costValue: "₹700 to ₹1,500",
        link:
          "https://www.google.com/maps/search/Thivim+Railway+Station"
      },

      {
        title: "Rental Scooters and Cabs",
        type: "Local travel",
        icon: "🛵",
        details:
          "Rental scooters, motorcycles and taxis are popular options for exploring Calangute and nearby North Goa destinations.",
        costLabel: "Daily scooter rental",
        costValue: "₹400 to ₹900",
        link:
          "https://www.google.com/maps/search/Scooter+Rental+Calangute"
      }
    ],

    attractions: [
      {
        name: "Calangute Beach",
        type: "Beach",
        icon: "🏖️",
        rating: "4.5",
        time: "3-5 hrs",

        desc:
          "One of Goa's most famous beaches, known for its long sandy shoreline, water sports, beach activities and lively tourism atmosphere.",

        bg:
          "linear-gradient(135deg,#0284c7,#164e63)",

        link:
          "https://www.google.com/maps/search/Calangute+Beach",

        history:
          "Calangute developed into one of Goa's major tourism centres during the growth of international and domestic beach tourism.",

        bestTime:
          "Morning and sunset",

        ticketInfo:
          "Free public beach access",

        highlights:
          "Beach activities, water sports, sunset and tourism atmosphere"
      },

      {
        name: "St Alex Church",
        type: "Church",
        icon: "⛪",
        rating: "4.5",
        time: "1 hr",

        desc:
          "A historic church in Calangute known for its distinctive architecture, peaceful surroundings and religious importance.",

        bg:
          "linear-gradient(135deg,#64748b,#1e293b)",

        link:
          "https://www.google.com/maps/search/St+Alex+Church+Calangute",

        history:
          "St Alex Church is one of Calangute's historic religious landmarks and reflects Goa's long Catholic and Portuguese cultural heritage.",

        bestTime:
          "Morning or evening",

        ticketInfo:
          "Free church entry",

        highlights:
          "Architecture, religious heritage and peaceful atmosphere"
      },

      {
        name: "Baga Beach",
        type: "Beach",
        icon: "🌊",
        rating: "4.5",
        time: "3-4 hrs",

        desc:
          "A famous beach destination located next to Calangute and known for beach activities, restaurants, water sports and nightlife.",

        bg:
          "linear-gradient(135deg,#0369a1,#082f49)",

        link:
          "https://www.google.com/maps/search/Baga+Beach+Goa",

        history:
          "Baga developed into one of North Goa's best-known tourism areas due to its beach, restaurants and nightlife scene.",

        bestTime:
          "Late afternoon and evening",

        ticketInfo:
          "Free public beach access",

        highlights:
          "Beach activities, restaurants, water sports and nightlife"
      },

      {
        name: "Candolim Beach",
        type: "Beach",
        icon: "🌴",
        rating: "4.5",
        time: "2-4 hrs",

        desc:
          "A popular North Goa beach located south of Calangute and known for its wide shoreline, beach activities and relaxed atmosphere.",

        bg:
          "linear-gradient(135deg,#0f766e,#134e4a)",

        link:
          "https://www.google.com/maps/search/Candolim+Beach+Goa",

        history:
          "Candolim has grown into an important North Goa tourism destination while maintaining a comparatively relaxed coastal atmosphere.",

        bestTime:
          "Morning or sunset",

        ticketInfo:
          "Free public beach access",

        highlights:
          "Beach walks, sunset, water sports and relaxed atmosphere"
      }
    ],

    itineraries: {

      budget: {
        title: "2-Day Budget Calangute",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "8:00 AM",
                text: "Calangute Beach morning visit"
              },
              {
                time: "1:00 PM",
                text: "Budget Goan seafood lunch"
              },
              {
                time: "5:00 PM",
                text: "Baga Beach sunset"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "St Alex Church"
              },
              {
                time: "12:00 PM",
                text: "Calangute market exploration"
              },
              {
                time: "5:00 PM",
                text: "Candolim Beach"
              }
            ]
          }
        ]
      },


      mid: {
        title: "3-Day North Goa Explorer",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "9:00 AM",
                text: "Calangute Beach and water sports"
              },
              {
                time: "2:00 PM",
                text: "Goan seafood lunch"
              },
              {
                time: "6:00 PM",
                text: "Baga Beach evening"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Candolim Beach"
              },
              {
                time: "1:00 PM",
                text: "Lunch near Candolim"
              },
              {
                time: "4:00 PM",
                text: "Fort Aguada sightseeing"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "9:00 AM",
                text: "Anjuna and Vagator sightseeing"
              },
              {
                time: "2:00 PM",
                text: "North Goa cafe experience"
              },
              {
                time: "6:00 PM",
                text: "Sunset and shopping"
              }
            ]
          }
        ]
      },


      luxury: {
        title: "4-Day Premium North Goa",

        days: [
          {
            label: "Day 1",

            activities: [
              {
                time: "2:00 PM",
                text: "Luxury hotel check-in"
              },
              {
                time: "5:00 PM",
                text: "Private Calangute Beach experience"
              },
              {
                time: "8:00 PM",
                text: "Premium seafood dinner"
              }
            ]
          },

          {
            label: "Day 2",

            activities: [
              {
                time: "9:00 AM",
                text: "Private Fort Aguada and Candolim tour"
              },
              {
                time: "2:00 PM",
                text: "Luxury lunch"
              },
              {
                time: "6:00 PM",
                text: "Sunset cruise"
              }
            ]
          },

          {
            label: "Day 3",

            activities: [
              {
                time: "10:00 AM",
                text: "Private Anjuna and Vagator sightseeing"
              },
              {
                time: "2:00 PM",
                text: "Premium cafe experience"
              },
              {
                time: "7:00 PM",
                text: "North Goa nightlife experience"
              }
            ]
          },

          {
            label: "Day 4",

            activities: [
              {
                time: "10:00 AM",
                text: "Relaxed resort breakfast"
              },
              {
                time: "12:00 PM",
                text: "Shopping and leisure"
              },
              {
                time: "4:00 PM",
                text: "Private airport transfer"
              }
            ]
          }
        ]
      }
    }
  }

});