/*
 * ============================================================
 * BHARAT GUIDE - CITY DATA MASTER FILE
 * ============================================================
 *
 * RULES:
 * 1. Add every new city inside the `cityData` object below.
 * 2. Each city must use a UNIQUE key such as:
 *    `jaipur`, `goa`, `ajmer`, `kota`, `udaipur`
 * 3. app.js automatically reads this file and builds the whole city page.
 * 4. Normally, when adding a new city, you should NOT edit city.html or app.js.
 * 5. If a city has alternate names, add them in `aliases`.
 *
 * OPTIONAL / RECOMMENDED FIELDS:
 * - aliases: ["newdelhi", "new delhi"]
 * - heroImage: large cover image URL
 * - heroHighlights: short hero tags
 * - spotlight: one strong summary paragraph
 * - bestFor: quick audience tags
 * - quickFacts: cards shown in hero section
 * - travelTips: side tips shown in overview section
 * - attractions: cards for places to visit
 * - hotels: stay cards
 * - food: food cards
 * - transport: local travel cards
 * - itineraries: budget / mid / luxury trip plans
 *
 * MINIMUM SAFE STRUCTURE:
 *
 * city_key: {
 *   name: "City Name",
 *   state: "State Name",
 *   aliases: ["other name", "search keyword"],
 *   description: "Short paragraph for hero section.",
 *   heroImage: "https://....",
 *   heroHighlights: ["Tag 1", "Tag 2", "Tag 3"],
 *   spotlight: "Longer planning summary.",
 *   bestFor: ["Families", "Couples", "Weekend trips"],
 *   quickFacts: [
 *     { label: "Best season", value: "Oct to Mar" },
 *     { label: "Ideal stay", value: "2 to 3 days" }
 *   ],
 *   travelTips: [
 *     { title: "Tip title", desc: "Tip text", icon: "🧭" }
 *   ],
 *   attractions: [
 *     {
 *       name: "Place name",
 *       type: "Fort / Beach / Museum / Temple",
 *       icon: "📍",
 *       rating: "4.7",
 *       time: "2-3 hrs",
 *       desc: "Short card description",
 *       bg: "linear-gradient(135deg,#123,#456)",
 *       link: "https://maps.google.com/....",
 *       history: "Optional longer text",
 *       bestTime: "Optional",
 *       ticketInfo: "Optional",
 *       highlights: "Optional"
 *     }
 *   ],
 *   hotels: [
 *     {
 *       name: "Hotel name",
 *       tier: "Budget / Mid-Range / Luxury",
 *       price: "₹4,000",
 *       rating: "4.5",
 *       location: "Area, City",
 *       image: "🏨",
 *       bg: "linear-gradient(135deg,#123,#456)",
 *       desc: "Short stay description",
 *       amenities: ["Wifi", "Pool"],
 *       link: "https://booking...."
 *     }
 *   ],
 *   food: [
 *     {
 *       category: "Street / Cafe / Fine Dining",
 *       name: "Food or place name",
 *       image: "🍛",
 *       bg: "linear-gradient(135deg,#123,#456)",
 *       desc: "Short food description",
 *       price: "₹250",
 *       rating: "4.6",
 *       link: "https://maps.google.com/...."
 *     }
 *   ],
 *   transport: [
 *     {
 *       title: "Transport title",
 *       type: "Airport / Railway / Local travel",
 *       icon: "🚆",
 *       details: "Transport description",
 *       costLabel: "Typical cost",
 *       costValue: "₹100 to ₹300",
 *       link: "https://maps.google.com/...."
 *     }
 *   ],
 *   itineraries: {
 *     budget: {
 *       title: "2-Day Budget City",
 *       days: [
 *         {
 *           label: "Day 1",
 *           activities: [
 *             { time: "9:00 AM", text: "Activity text" }
 *           ]
 *         }
 *       ]
 *     },
 *     mid: { ... },
 *     luxury: { ... }
 *   }
 * }
 */

// Add all city entries inside this object.
const cityData = {
  // ------------------------------------------------------------
  // REFERENCE FORMAT CITY
  // Use this entry as your main example while creating new cities.
  // Follow the same field order for Ajmer, Kota, Jodhpur, etc.
  // ------------------------------------------------------------
  jaipur: {
    // Basic identity
    name: "Jaipur",
    state: "Rajasthan",
    aliases: ["pink city"],

    // Hero section content
    description: "Jaipur, the Pink City of Rajasthan, blends royal forts, palace courtyards, old bazaars, rooftop cafes and classic Rajasthani food into one of India's easiest heritage getaways.",
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Royal forts", "Pink old city", "Food and shopping"],

    // Overview section content
    spotlight: "Jaipur works best when you split your trip into three moods: Amer side forts in the morning, old city monuments and markets in the afternoon, and a cultural dinner or rooftop view in the evening.",
    bestFor: ["First Rajasthan trip", "Heritage photography", "Family getaway", "Shopping weekends"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Forts, bazaars, palace hotels" },
      { label: "Getting around", value: "Auto, cab, e-rickshaw" }
    ],
    travelTips: [
      {
        title: "Start forts early",
        desc: "Amber, Jaigarh and Nahargarh side gets hot quickly, so morning slots give you softer light and easier walking.",
        icon: "🌤"
      },
      {
        title: "Keep one bazaar evening",
        desc: "Johari Bazaar, Bapu Bazaar and Tripolia feel liveliest after sunset, especially if you want food and shopping together.",
        icon: "🛍️"
      },
      {
        title: "Choose stay by vibe",
        desc: "Old City gives you heritage charm, while Civil Lines and MI Road make daily travel more comfortable for families.",
        icon: "🗺️"
      }
    ],

    // Hotels / stays
    hotels: [
      {
        name: "Jai Mahal Palace", tier: "Luxury", price: "₹22,000", rating: "4.9", location: "Jacob Road, Jaipur",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.38)), url('https://lh3.googleusercontent.com/p/AF1QipOvRiOmJLoQ-fPFaMVlIQEUJ0381xktK-uZmVl5=s1360-w1360-h1020-rw')", desc: "Grand palace stay with heritage rooms, Mughal gardens and one of Jaipur's most polished luxury experiences.",
        amenities: ["Heritage stay", "Spa", "Fine dining", "Pool"],
        link: "https://www.booking.com/searchresults.html?ss=Jai+Mahal+Palace+Jaipur"
      },
      {
        name: "Samode Haveli", tier: "Mid-Range", price: "₹5,800", rating: "4.7", location: "Gangapole, Jaipur",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.36)), url('https://samode.com/wp-content/uploads/2024/06/Samode-Haveli.jpg')", desc: "Beautiful old-world haveli near the walled city with carved architecture, courtyards and a strong heritage feel.",
        amenities: ["Heritage rooms", "Courtyard", "Pool", "Old City access"],
        link: "https://www.booking.com/searchresults.html?ss=Samode+Haveli+Jaipur"
      },
      {
        name: "Zostel Jaipur", tier: "Budget", price: "₹900", rating: "4.3", location: "MI Road, Jaipur",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://lh3.googleusercontent.com/p/AF1QipOSXwThm1A-mfSpR9OQGoPefl5D2qxm9gYeU8hC=s1360-w1360-h1020-rw')", desc: "Friendly and affordable stay for solo travellers with dorms, common areas and easy access to central Jaipur.",
        amenities: ["Dorm beds", "Private rooms", "Common lounge", "Central location"],
        link: "https://www.booking.com/searchresults.html?ss=Zostel+Jaipur"
      }
    ],

    // Food cards
    food: [
      {
        category: "Street", name: "Rawat Kachori", image: "🥟", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(124,45,18,0.34)), url('https://lh3.googleusercontent.com/p/AF1QipPWr62cWnGGswJh_MBF-Cfar2BA2NX2bW2hrHc8=s1360-w1360-h1020-rw')",
        desc: "A Jaipur classic for breakfast lovers, famous for pyaz kachori and quick local bites near the station side.",
        price: "₹60", rating: "4.7", link: "https://www.google.com/maps/search/Rawat+Mishtan+Bhandar+Jaipur"
      },
      {
        category: "Street", name: "Dal Baati Churma", image: "🥘", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.36)), url('https://cdn.mygingergarlickitchen.com/images_webp/800px/800px-recipe-Dal-Baati-Churma-anupama-paliwal-my-ginger-garlic-kitchen-101.webp')",
        desc: "The signature Rajasthani platter of baked baati, dal, ghee and sweet churma that most first-time visitors seek out.",
        price: "₹180", rating: "4.9", link: "https://www.google.com/maps/search/Dal+Baati+Churma+Jaipur"
      },
      {
        category: "Cafe", name: "Jaipur Adda", image: "☕", bg: "linear-gradient(rgba(15,155,142,0.16), rgba(16,34,59,0.32)), url('https://lh3.googleusercontent.com/gps-cs-s/APNQkAHQNMWwhes3p7lsudDHfDJyds7SluKO8iRlU5RP0L5_ozjW59ZIn_6SFLrJ3s4-KwP4v8iTXmjC7iiHyTIFOy038BsSTYWgii-9iIyjYfEa-zzqIjq3AFthVIinNyYqza1X1FEDSQ=s1360-w1360-h1020-rw')",
        desc: "Popular cafe with fusion food, city views, strong coffee and a relaxed evening scene for groups.",
        price: "₹320", rating: "4.6", link: "https://www.google.com/maps/search/Jaipur+Adda"
      },
      {
        category: "Fine Dining", name: "Suvarna Mahal", image: "🍽", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.42)), url('https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/b3c93b9c1498d04a37e2d7fc42bbbec7e315dbcd-4608x3456.jpg?w=1600&auto=format&dpr=2')",
        desc: "Luxury dining inside Rambagh Palace with a royal setting and carefully plated Rajasthani and north Indian menus.",
        price: "₹2,500", rating: "4.8", link: "https://www.google.com/maps/search/Suvarna+Mahal+Jaipur"
      }
    ],

    // Transport cards
    transport: [
      {
        title: "Jaipur International Airport", type: "Airport", icon: "✈️", details: "About 13 km from central Jaipur with prepaid taxi counters, app cabs and hotel pickup options.", costLabel: "Airport to city", costValue: "₹500 to ₹800", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Jaipur Junction", type: "Railway", icon: "🚆", details: "Well connected with Delhi, Mumbai, Ajmer and Udaipur, and one of the easiest arrival points for budget travellers.", costLabel: "Station transfer", costValue: "₹100 to ₹250", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "App Cabs and Autos", type: "Local travel", icon: "🚖", details: "Ola, Uber, autos and e-rickshaws are the most practical for quick city hops between forts, bazaars and cafes.", costLabel: "City ride", costValue: "₹80 to ₹250", link: "https://www.uber.com/in/en/"
      },
      {
        title: "Private Day Cab", type: "Sightseeing", icon: "🚗", details: "Best option if you want Amber, Jaigarh, Nahargarh and old city stops in one flexible day plan.", costLabel: "Full day", costValue: "₹1,800 to ₹3,500", link: "https://www.google.com/maps/search/Jaipur+day+tour+cab"
      }
    ],

    // Attractions / sightseeing cards
    attractions: [
      {
        name: "Amber Fort", type: "Fort", icon: "🏰", rating: "4.9", time: "3-4 hrs",
        desc: "Majestic hilltop fort with sprawling courtyards, mirror halls, gateways and panoramic rampart views.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://upload.wikimedia.org/wikipedia/commons/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg')", link: "https://www.google.com/maps/search/Amber+Fort+Jaipur",
        history: "Built in 1592 by Raja Man Singh, Amber Fort blends Rajput and Mughal architecture with stunning courtyards, palaces and water gardens.",
        bestTime: "Early morning or late afternoon",
        ticketInfo: "₹100 for Indians, ₹600 for foreigners",
        highlights: "Sheesh Mahal, Diwan-i-Aam, panoramic city views"
      },
      {
        name: "City Palace", type: "Palace", icon: "🏛", rating: "4.8", time: "2-3 hrs",
        desc: "Royal complex of museums, courtyards and ornate halls right in the heart of Jaipur's historic core.", bg: "linear-gradient(rgba(139,69,19,0.16), rgba(16,34,59,0.38)), url('https://reassuring-breeze-03b7dee7bc.media.strapiapp.com/Rectangle_20147_fe4c482428.jpg')", link: "https://www.google.com/maps/search/City+Palace+Jaipur",
        history: "Completed in 1727 by Maharaja Sawai Jai Singh II, City Palace remains the residence of Jaipur's royal family and showcases centuries of royal art.",
        bestTime: "Morning to early afternoon",
        ticketInfo: "₹70 for Indians, ₹500 for foreigners",
        highlights: "Chandra Mahal, royal costumes, museum artifacts"
      },
      {
        name: "Hawa Mahal", type: "Landmark", icon: "🌸", rating: "4.7", time: "1 hr",
        desc: "Iconic honeycomb-style palace with 953 windows built for royal women to observe street life unseen.", bg: "linear-gradient(rgba(247,183,51,0.14), rgba(124,45,18,0.36)), url('https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg')", link: "https://www.google.com/maps/search/Hawa+Mahal+Jaipur",
        history: "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal was designed to allow the royal family to enjoy street festivals without being seen.",
        bestTime: "Early morning for softer light",
        ticketInfo: "₹50 for Indians, ₹200 for foreigners",
        highlights: "Photo spot, narrow lanes, nearby market"
      },
      {
        name: "Jantar Mantar", type: "Observatory", icon: "🔭", rating: "4.7", time: "1-2 hrs",
        desc: "UNESCO-listed astronomical observatory with giant masonry instruments built for celestial calculations.", bg: "linear-gradient(rgba(63,60,187,0.16), rgba(22,160,133,0.34)), url('https://media.gettyimages.com/id/621218126/photo/sunset-at-jantar-mantar-monument-jaipur-rajasthan-india.jpg?s=2048x2048&w=gi&k=20&c=MLUE3aaGwFcxT4TTwxfBFOs0pwdma2JXgn0dGUWT9NY=')", link: "https://www.google.com/maps/search/Jantar+Mantar+Jaipur",
        history: "Commissioned by Maharaja Sawai Jai Singh II in the 18th century, Jantar Mantar reflects Jaipur's deep connection to astronomy and planning.",
        bestTime: "Morning or clear late afternoon",
        ticketInfo: "₹50 for Indians, ₹200 for foreigners",
        highlights: "Samrat Yantra, UNESCO site, scientific heritage"
      },
      {
        name: "Nahargarh Fort", type: "Fort", icon: "🌄", rating: "4.6", time: "2-3 hrs",
        desc: "Hilltop fort loved for sunset views, winding approach roads and city panoramas after dark.", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Nahargarh+Fort+Jaipur",
        history: "Built in 1734 as part of Jaipur's defence line, Nahargarh later became a royal retreat overlooking the expanding city.",
        bestTime: "Late afternoon to sunset",
        ticketInfo: "₹50 to ₹200 depending on combined ticket",
        highlights: "Sunset point, fort walls, evening city lights"
      },
      {
        name: "Jal Mahal", type: "Lake Palace", icon: "🌊", rating: "4.5", time: "45 mins",
        desc: "A beautiful palace floating in the middle of Man Sagar Lake, best viewed from the lakeshore.", bg: "linear-gradient(rgba(30,60,114,0.16), rgba(42,82,152,0.36)), url('https://upload.wikimedia.org/wikipedia/commons/f/ff/Jaipur_03-2016_39_Jal_Mahal_-_Water_Palace.jpg')", link: "https://www.google.com/maps/search/Jal+Mahal+Jaipur",
        history: "Originally built in the 18th century as a royal hunting lodge, Jal Mahal is now a scenic photo spot on Man Sagar Lake.",
        bestTime: "Sunset",
        ticketInfo: "Free to view from shore",
        highlights: "Lakeside view, photography, sunset glow"
      }
    ],

    // Planner itineraries
    itineraries: {
      budget: {
        title: "2-Day Budget Jaipur",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "8:30 AM", text: "Amber Fort and photo stops on Amer Road" },
              { time: "2:00 PM", text: "Jal Mahal and quick local lunch" },
              { time: "6:00 PM", text: "Nahargarh sunset and budget rooftop dinner" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:30 AM", text: "Hawa Mahal and City Palace circuit" },
              { time: "1:30 PM", text: "Jantar Mantar" },
              { time: "5:00 PM", text: "Johari Bazaar and Bapu Bazaar walk" }
            ]
          }
        ]
      },
      mid: {
        title: "3-Day Jaipur Culture Loop",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Amber Fort with guided palace route" },
              { time: "1:30 PM", text: "Jaigarh viewpoint" },
              { time: "7:00 PM", text: "Dinner and live music at a heritage venue" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "10:00 AM", text: "City Palace and Jantar Mantar" },
              { time: "2:00 PM", text: "Hawa Mahal facade and old city lunch" },
              { time: "5:30 PM", text: "Johari Bazaar shopping session" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "9:30 AM", text: "Albert Hall or cafe morning" },
              { time: "1:00 PM", text: "Rest and local food trail" },
              { time: "5:30 PM", text: "Nahargarh evening view" }
            ]
          }
        ]
      },
      luxury: {
        title: "4-Day Royal Jaipur",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Check-in and high tea at palace hotel" },
              { time: "7:30 PM", text: "Royal dinner at Suvarna Mahal" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Private Amber Fort tour" },
              { time: "1:00 PM", text: "Jaigarh and curated photography stop" },
              { time: "6:30 PM", text: "Sunset drive to Nahargarh" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "10:00 AM", text: "City Palace premium route" },
              { time: "1:00 PM", text: "Designer shopping and artisan stores" },
              { time: "8:00 PM", text: "Chef-led tasting menu" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "9:00 AM", text: "Spa or leisurely brunch" },
              { time: "12:00 PM", text: "Departure transfer" }
            ]
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------
  // NEW CITY EXAMPLE
  // Ajmer follows the same structure as Jaipur.
  // Use this format when adding more cities like Kota, Ajmer, Pushkar, etc.
  // ------------------------------------------------------------
  ajmer: {
    // Basic identity
    name: "Ajmer",
    state: "Rajasthan",
    aliases: ["ajmer sharif", "dargah city", "ajmer city"],

    // Hero section content
    description: "Ajmer blends Sufi spirituality, old Rajput heritage, lakeside evenings and busy bazaars into a compact Rajasthan city that is easy to explore over two or three days.",
    heroImage: "https://images.unsplash.com/photo-1542861339-7568a40da5b4?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Ajmer Sharif", "Historic landmarks", "Lakefront sunsets"],

    // Overview section content
    spotlight: "Ajmer works best when you divide the trip into three layers: the spiritual core around Ajmer Sharif, the heritage circuit of Adhai Din Ka Jhonpra and Taragarh, and a slower evening around Ana Sagar and the city's classic food stops.",
    bestFor: ["Spiritual trips", "Short Rajasthan stays", "Family visits", "Heritage day tours"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Dargah, lakes, old monuments" },
      { label: "Getting around", value: "Auto, cab, local rickshaw" }
    ],
    travelTips: [
      {
        title: "Keep mornings for the old core",
        desc: "The lanes near Ajmer Sharif and Adhai Din Ka Jhonpra are easier to explore before peak crowds build up.",
        icon: "🕌"
      },
      {
        title: "Reserve one calm lakeside evening",
        desc: "Ana Sagar and nearby viewpoints feel best around sunset when the city pace softens and the weather gets friendlier.",
        icon: "🌅"
      },
      {
        title: "Plan transport in advance on pilgrimage days",
        desc: "During major religious movement and weekends, station and dargah-side traffic can slow city transfers a lot.",
        icon: "🚖"
      }
    ],

    // Hotels / stays
    hotels: [
      {
        name: "Pratap Mahal, Ajmer - IHCL SeleQtions",
        tier: "Luxury",
        price: "₹14,000",
        rating: "4.7",
        location: "Pushkar Bypass Road, Ajmer",
        image: "🏰",
        bg: "linear-gradient(rgba(75,46,19,0.18), rgba(75,46,19,0.38)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A polished luxury stay between Ajmer and Pushkar with haveli-inspired design, landscaped grounds and a quieter resort feel.",
        amenities: ["Pool", "Spa", "Aravalli views", "Fine dining"],
        link: "https://www.seleqtionshotels.com/en-in/hotels/pratap-mahal-ajmer"
      },
      {
        name: "The Royal Melange Beacon",
        tier: "Mid-Range",
        price: "₹4,800",
        rating: "4.3",
        location: "Jaipur Road, Ajmer",
        image: "🏨",
        bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.36)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A practical mid-range hotel for travellers who want central road connectivity, decent comfort and quick access to Ajmer city.",
        amenities: ["Restaurant", "Parking", "Business stay", "Central access"],
        link: "https://www.theroyalmelange.com/booking/"
      },
      {
        name: "Hotel ATA INN",
        tier: "Budget",
        price: "₹1,500",
        rating: "4.1",
        location: "Dargah Bazar, Ajmer",
        image: "🏠",
        bg: "linear-gradient(rgba(30,58,95,0.16), rgba(30,58,95,0.36)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A budget-friendly option near the dargah side for short religious visits and quick city stopovers.",
        amenities: ["Near dargah", "Room service", "Budget rooms", "Local access"],
        link: "https://www.hotelatainn.com/"
      }
    ],

    // Food cards
    food: [
      {
        category: "Street",
        name: "Ajmeri Kadhi Kachori",
        image: "🥟",
        bg: "linear-gradient(rgba(194,65,12,0.16), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "Ajmer's most talked-about local comfort snack, usually enjoyed hot with kadhi and quick bazaar-style service.",
        price: "₹50",
        rating: "4.7",
        link: "https://apnaajmer.com/foods/kadhi-kachori/"
      },
      {
        category: "Sweet",
        name: "Sohan Halwa",
        image: "🍮",
        bg: "linear-gradient(rgba(139,94,52,0.16), rgba(120,53,15,0.34)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "Ajmer's iconic sweet souvenir, known for its rich texture and long-standing local reputation.",
        price: "₹180",
        rating: "4.6",
        link: "https://azadsweets.com/ajmer/about/"
      },
      {
        category: "Cafe",
        name: "Mango Masala",
        image: "🍽",
        bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1756821752955-0e95b2540418?auto=format&fit=crop&w=1400&q=80')",
        desc: "A popular family restaurant choice in Ajmer for a broader menu after a day of temple and dargah visits.",
        price: "₹350",
        rating: "4.4",
        link: "https://www.mangomasala.com/"
      },
      {
        category: "Traditional",
        name: "Dal Pakwan and Local Sweets",
        image: "🥘",
        bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "Classic savoury and sweet combinations around old market areas work well for breakfast and takeaway boxes.",
        price: "₹120",
        rating: "4.5",
        link: "https://azadsweets.com/ajmer/about/"
      }
    ],

    // Transport cards
    transport: [
      {
        title: "Kishangarh Airport",
        type: "Airport",
        icon: "✈️",
        details: "The nearest airport for Ajmer, useful for visitors arriving by air before taking a cab into the city.",
        costLabel: "Airport to city",
        costValue: "₹700 to ₹1,200",
        link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Ajmer Junction",
        type: "Railway",
        icon: "🚆",
        details: "Ajmer's main rail gateway with strong connectivity to Jaipur, Delhi and other Rajasthan circuits.",
        costLabel: "Station transfer",
        costValue: "₹80 to ₹250",
        link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Autos and Local Cabs",
        type: "Local travel",
        icon: "🚕",
        details: "Autos and app-less local cabs are the most common way to move between dargah lanes, markets and lakefront spots.",
        costLabel: "City ride",
        costValue: "₹60 to ₹220",
        link: "https://www.uber.com/in/en/"
      },
      {
        title: "Ajmer to Pushkar Cab",
        type: "Short excursion",
        icon: "🚗",
        details: "A short dedicated cab is useful if you want to pair Ajmer with a same-day Pushkar visit without juggling local transport.",
        costLabel: "Round trip",
        costValue: "₹800 to ₹1,800",
        link: "https://www.google.com/maps/search/Ajmer+to+Pushkar+taxi"
      }
    ],

    // Attractions / sightseeing cards
    attractions: [
      {
        name: "Ajmer Sharif Dargah",
        type: "Spiritual",
        icon: "🕌",
        rating: "4.8",
        time: "1-2 hrs",
        desc: "One of India's most important Sufi shrines and the emotional centre of Ajmer's identity.",
        bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.40)), url('https://images.unsplash.com/photo-1600045956971-716146cd72ac?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/the-ajmer-sharif-dargah.html",
        history: "The shrine is associated with Khwaja Moin-ud-din Chishti, the revered Sufi saint who made Ajmer a major spiritual centre from the 12th to 13th century.",
        bestTime: "Morning or non-peak hours",
        ticketInfo: "Free entry",
        highlights: "Pilgrimage atmosphere, qawwali tradition, spiritual heritage"
      },
      {
        name: "Ana Sagar Lake",
        type: "Lake",
        icon: "🌊",
        rating: "4.5",
        time: "1-2 hrs",
        desc: "A scenic artificial lake best enjoyed for relaxed walks, sunsets and slow evening views.",
        bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1521497293914-57fdc14bd4d6?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/bala-qila.html",
        history: "Ana Sagar was commissioned in the 12th century and later enhanced with marble pavilions during the Mughal period.",
        bestTime: "Late afternoon to sunset",
        ticketInfo: "Free lakeside access",
        highlights: "Sunset walk, Baradari view, calm city break"
      },
      {
        name: "Adhai Din Ka Jhonpra",
        type: "Monument",
        icon: "🏛",
        rating: "4.6",
        time: "45 mins - 1 hr",
        desc: "A striking early Indo-Islamic monument known for its arches, calligraphy and layered history.",
        bg: "linear-gradient(rgba(124,58,237,0.14), rgba(192,132,252,0.26)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/bala-qila.html",
        history: "Originally linked to a Sanskrit learning space and later transformed into a mosque complex, the monument remains one of Ajmer's most discussed heritage sites.",
        bestTime: "Morning",
        ticketInfo: "Check latest ASI/local rules",
        highlights: "Historic arches, carved details, monument photography"
      },
      {
        name: "Taragarh Fort",
        type: "Fort",
        icon: "🏰",
        rating: "4.4",
        time: "2-3 hrs",
        desc: "A hill fort above Ajmer known for commanding city views and its rough old-Rajasthan character.",
        bg: "linear-gradient(rgba(91,58,41,0.18), rgba(180,83,9,0.34)), url('https://images.unsplash.com/photo-1646559120826-a5ceb93c74b3?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/bala-qila.html",
        history: "Taragarh is among the older hill forts of the region and has long held strategic value above Ajmer's settlement zone.",
        bestTime: "Morning or cool-weather afternoon",
        ticketInfo: "Usually free or locally managed access",
        highlights: "Hill views, fort remains, panoramic city outlook"
      },
      {
        name: "Soniji Ki Nasiyan",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "A famous Jain temple complex admired for its red sandstone exterior and elaborate gold-toned display hall.",
        bg: "linear-gradient(rgba(185,28,28,0.16), rgba(245,158,11,0.28)), url('https://plus.unsplash.com/premium_photo-1697729683472-5e39cf4471ed?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.google.com/maps/search/Soniji+Ki+Nasiyan+Ajmer",
        history: "This Jain temple is one of Ajmer's most distinctive religious landmarks and is especially known for its ornamental interior work.",
        bestTime: "Late morning",
        ticketInfo: "Nominal donation or local ticket rules may apply",
        highlights: "Jain heritage, ornate hall, architectural detail"
      }
    ],

    // Planner itineraries
    itineraries: {
      budget: {
        title: "2-Day Budget Ajmer",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "8:30 AM", text: "Ajmer Sharif Dargah visit" },
              { time: "11:30 AM", text: "Adhai Din Ka Jhonpra" },
              { time: "5:30 PM", text: "Ana Sagar sunset and local snacks" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Taragarh Fort" },
              { time: "1:00 PM", text: "Local market lunch break" },
              { time: "4:00 PM", text: "Soniji Ki Nasiyan" }
            ]
          }
        ]
      },
      mid: {
        title: "3-Day Ajmer Heritage and Spiritual Stay",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Ajmer Sharif Dargah" },
              { time: "12:00 PM", text: "Adhai Din Ka Jhonpra and nearby old lanes" },
              { time: "6:00 PM", text: "Ana Sagar evening walk" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "8:30 AM", text: "Taragarh Fort viewpoint" },
              { time: "1:00 PM", text: "Rest and traditional lunch" },
              { time: "5:00 PM", text: "Soniji Ki Nasiyan" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "10:00 AM", text: "City market and sweet shopping" },
              { time: "1:00 PM", text: "Cafe meal at Mango Masala" },
              { time: "4:30 PM", text: "Flexible Pushkar add-on or leisure time" }
            ]
          }
        ]
      },
      luxury: {
        title: "3-Day Ajmer and Pushkar Retreat",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Check-in at luxury resort" },
              { time: "6:00 PM", text: "Slow evening around Ana Sagar" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Private Ajmer Sharif and heritage circuit" },
              { time: "1:30 PM", text: "Curated lunch and rest" },
              { time: "5:30 PM", text: "Sunset drive and fort viewpoint" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "9:30 AM", text: "Short Pushkar excursion" },
              { time: "1:00 PM", text: "Return brunch and departure" }
            ]
          }
        ]
      }
    }
  },

  bikaner: {
    // Basic identity
    name: "Bikaner",
    state: "Rajasthan",
    aliases: ["bikaner city", "rajasthan city"],

    // Hero section content
    description: "Bikaner blends desert landscapes, royal palaces, and vibrant culture into a unique Rajasthan city that is easy to explore over two or three days.",
    heroImage: "https://images.unsplash.com/photo-1542861339-7568a40da5b4?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Karni Mata Temple", "Rajasthan Museum", "Desert Safari"],

    // Overview section content
    spotlight: "Bikaner works best when you divide the trip into three layers: the spiritual core around Karni Mata Temple, the heritage circuit of Junagarh Fort and Lalgarh Palace, and a slower evening around the city's classic food stops.",
    bestFor: ["Desert adventures", "Royal heritage tours", "Cultural experiences", "Family visits"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Dargah, lakes, old monuments" },
      { label: "Getting around", value: "Auto, cab, local rickshaw" }
    ],
    travelTips: [
      {
        title: "Keep mornings for the old core",
        desc: "The lanes near Karni Mata Temple and Rajasthan Museum are easier to explore before peak crowds build up.",
        icon: "🕌"
      },
      {
        title: "Reserve one calm lakeside evening",
        desc: "Ana Sagar and nearby viewpoints feel best around sunset when the city pace softens and the weather gets friendlier.",
        icon: "🌅"
      },
      {
        title: "Plan transport in advance on pilgrimage days",
        desc: "During major religious movement and weekends, station and dargah-side traffic can slow city transfers a lot.",
        icon: "🚖"
      }
    ],

    // Hotels / stays
    hotels: [
      {
        name: "Pratap Mahal, Bikaner - IHCL SeleQtions",
        tier: "Luxury",
        price: "₹14,000",
        rating: "4.7",
        location: "Pushkar Bypass Road, Bikaner",
        image: "🏰",
        bg: "linear-gradient(rgba(75,46,19,0.18), rgba(75,46,19,0.38)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A polished luxury stay between Bikaner and Pushkar with haveli-inspired design, landscaped grounds and a quieter resort feel.",
        amenities: ["Pool", "Spa", "Aravalli views", "Fine dining"],
        link: "https://www.seleqtionshotels.com/en-in/hotels/pratap-mahal-bikaner"
      },
      {
        name: "The Royal Melange Beacon",
        tier: "Mid-Range",
        price: "₹4,800",
        rating: "4.3",
        location: "Jaipur Road, Bikaner",
        image: "🏨",
        bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.36)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A practical mid-range hotel for travellers who want central road connectivity, decent comfort and quick access to Bikaner city.",
        amenities: ["Restaurant", "Parking", "Business stay", "Central access"],
        link: "https://www.theroyalmelange.com/booking/"
      },
      {
        name: "Hotel ATA INN",
        tier: "Budget",
        price: "₹1,500",
        rating: "4.1",
        location: "Dargah Bazar, Bikaner",
        image: "🏠",
        bg: "linear-gradient(rgba(30,58,95,0.16), rgba(30,58,95,0.36)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A budget-friendly option near the dargah side for short religious visits and quick city stopovers.",
        amenities: ["Near dargah", "Room service", "Budget rooms", "Local access"],
        link: "https://www.hotelatainn.com/"
      }
    ],

    // Food cards
    food: [
      {
        category: "Street",
        name: "Bikaner Kachori",
        image: "🥟",
        bg: "linear-gradient(rgba(194,65,12,0.16), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "Bikaner's most talked-about local comfort snack, usually enjoyed hot with kadhi and quick bazaar-style service.",
        price: "₹50",
        rating: "4.7",
        link: "https://apnaajmer.com/foods/kadhi-kachori/"
      },
      {
        category: "Sweet",
        name: "Sohan Halwa",
        image: "🍮",
        bg: "linear-gradient(rgba(139,94,52,0.16), rgba(120,53,15,0.34)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "Bikaner's iconic sweet souvenir, known for its rich texture and long-standing local reputation.",
        price: "₹180",
        rating: "4.6",
        link: "https://azadsweets.com/bikaner/about/"
      },
      {
        category: "Cafe",
        name: "Mango Masala",
        image: "🍽",
        bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1756821752955-0e95b2540418?auto=format&fit=crop&w=1400&q=80')",
        desc: "A popular family restaurant choice in Bikaner for a broader menu after a day of temple and dargah visits.",
        price: "₹350",
        rating: "4.4",
        link: "https://www.mangomasala.com/"
      },
      {
        category: "Traditional",
        name: "Dal Pakwan and Local Sweets",
        image: "🥘",
        bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "Classic savoury and sweet combinations around old market areas work well for breakfast and takeaway boxes.",
        price: "₹120",
        rating: "4.5",
        link: "https://azadsweets.com/ajmer/about/"
      }
    ],

    // Transport cards
    transport: [
      {
        title: "Kishangarh Airport",
        type: "Airport",
        icon: "✈️",
        details: "The nearest airport for Bikaner, useful for visitors arriving by air before taking a cab into the city.",
        costLabel: "Airport to city",
        costValue: "₹700 to ₹1,200",
        link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Bikaner Railway Station",
        type: "Railway",
        icon: "🚆",
        details: "Bikaner's main rail gateway with strong connectivity to Jaipur, Delhi and other Rajasthan circuits.",
        costLabel: "Station transfer",
        costValue: "₹80 to ₹250",
        link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Autos and Local Cabs",
        type: "Local travel",
        icon: "🚕",
        details: "Autos and app-less local cabs are the most common way to move between dargah lanes, markets and lakefront spots.",
        costLabel: "City ride",
        costValue: "₹60 to ₹220",
        link: "https://www.uber.com/in/en/"
      },
      {
        title: "Bikaner to Pushkar Cab",
        type: "Short excursion",
        icon: "🚗",
        details: "A short dedicated cab is useful if you want to pair Bikaner with a same-day Pushkar visit without juggling local transport.",
        costLabel: "Round trip",
        costValue: "₹800 to ₹1,800",
        link: "https://www.google.com/maps/search/Bikaner+to+Pushkar+taxi"
      }
    ],

    // Attractions / sightseeing cards
    attractions: [
      {
        name: "Bikaner Sharif Dargah",
        type: "Spiritual",
        icon: "🕌",
        rating: "4.8",
        time: "1-2 hrs",
        desc: "One of India's most important Sufi shrines and the emotional centre of Bikaner's identity.",
        bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.40)), url('https://images.unsplash.com/photo-1600045956971-716146cd72ac?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/the-bikaner-sharif-dargah.html",
        history: "The shrine is associated with Khwaja Moin-ud-din Chishti, the revered Sufi saint who made Bikaner a major spiritual centre from the 12th to 13th century.",
        bestTime: "Morning or non-peak hours",
        ticketInfo: "Free entry",
        highlights: "Pilgrimage atmosphere, qawwali tradition, spiritual heritage"
      },
      {
        name: "Ana Sagar Lake",
        type: "Lake",
        icon: "🌊",
        rating: "4.5",
        time: "1-2 hrs",
        desc: "A scenic artificial lake best enjoyed for relaxed walks, sunsets and slow evening views.",
        bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1521497293914-57fdc14bd4d6?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/bala-qila.html",
        history: "Ana Sagar was commissioned in the 12th century and later enhanced with marble pavilions during the Mughal period.",
        bestTime: "Late afternoon to sunset",
        ticketInfo: "Free lakeside access",
        highlights: "Sunset walk, Baradari view, calm city break"
      },
      {
        name: "Adhai Din Ka Jhonpra",
        type: "Monument",
        icon: "🏛",
        rating: "4.6",
        time: "45 mins - 1 hr",
        desc: "A striking early Indo-Islamic monument known for its arches, calligraphy and layered history.",
        bg: "linear-gradient(rgba(124,58,237,0.14), rgba(192,132,252,0.26)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/bala-qila.html",
        history: "Originally linked to a Sanskrit learning space and later transformed into a mosque complex, the monument remains one of Ajmer's most discussed heritage sites.",
        bestTime: "Morning",
        ticketInfo: "Check latest ASI/local rules",
        highlights: "Historic arches, carved details, monument photography"
      },
      {
        name: "Taragarh Fort",
        type: "Fort",
        icon: "🏰",
        rating: "4.4",
        time: "2-3 hrs",
        desc: "A hill fort above Ajmer known for commanding city views and its rough old-Rajasthan character.",
        bg: "linear-gradient(rgba(91,58,41,0.18), rgba(180,83,9,0.34)), url('https://images.unsplash.com/photo-1646559120826-a5ceb93c74b3?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/bala-qila.html",
        history: "Taragarh is among the older hill forts of the region and has long held strategic value above Ajmer's settlement zone.",
        bestTime: "Morning or cool-weather afternoon",
        ticketInfo: "Usually free or locally managed access",
        highlights: "Hill views, fort remains, panoramic city outlook"
      },
      {
        name: "Soniji Ki Nasiyan",
        type: "Temple",
        icon: "🛕",
        rating: "4.6",
        time: "1 hr",
        desc: "A famous Jain temple complex admired for its red sandstone exterior and elaborate gold-toned display hall.",
        bg: "linear-gradient(rgba(185,28,28,0.16), rgba(245,158,11,0.28)), url('https://plus.unsplash.com/premium_photo-1697729683472-5e39cf4471ed?auto=format&fit=crop&w=1400&q=80')",
        link: "https://www.google.com/maps/search/Soniji+Ki+Nasiyan+Ajmer",
        history: "This Jain temple is one of Ajmer's most distinctive religious landmarks and is especially known for its ornamental interior work.",
        bestTime: "Late morning",
        ticketInfo: "Nominal donation or local ticket rules may apply",
        highlights: "Jain heritage, ornate hall, architectural detail"
      }
    ],

    // Planner itineraries
    itineraries: {
      budget: {
        title: "2-Day Budget Ajmer",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "8:30 AM", text: "Bikaner Sharif Dargah visit" },
              { time: "11:30 AM", text: "Adhai Din Ka Jhonpra" },
              { time: "5:30 PM", text: "Ana Sagar sunset and local snacks" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Taragarh Fort" },
              { time: "1:00 PM", text: "Local market lunch break" },
              { time: "4:00 PM", text: "Soniji Ki Nasiyan" }
            ]
          }
        ]
      },
      mid: {
        title: "3-Day Ajmer Heritage and Spiritual Stay",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Bikaner Sharif Dargah" },
              { time: "12:00 PM", text: "Adhai Din Ka Jhonpra and nearby old lanes" },
              { time: "6:00 PM", text: "Ana Sagar evening walk" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "8:30 AM", text: "Taragarh Fort viewpoint" },
              { time: "1:00 PM", text: "Rest and traditional lunch" },
              { time: "5:00 PM", text: "Soniji Ki Nasiyan" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "10:00 AM", text: "City market and sweet shopping" },
              { time: "1:00 PM", text: "Cafe meal at Mango Masala" },
              { time: "4:30 PM", text: "Flexible Pushkar add-on or leisure time" }
            ]
          }
        ]
      },
      luxury: {
        title: "3-Day Ajmer and Pushkar Retreat",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Check-in at luxury resort" },
              { time: "6:00 PM", text: "Slow evening around Ana Sagar" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Private Bikaner Sharif and heritage circuit" },
              { time: "1:30 PM", text: "Curated lunch and rest" },
              { time: "5:30 PM", text: "Sunset drive and fort viewpoint" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "9:30 AM", text: "Short Pushkar excursion" },
              { time: "1:00 PM", text: "Return brunch and departure" }
            ]
          }
        ]
      }
    }
  },

  // pushkar

  pushkar: {
    // Basic identity
    name: "Pushkar",
    state: "Rajasthan",
    aliases: ["the holy town", "rajasthan town"],

    // Hero section content
    description: "Pushkar, the holy town of Rajasthan, is known for its sacred lake, ancient temples and vibrant local culture.",
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Sacred lake", "Ancient temples", "Vibrant culture"],

    // Overview section content
    spotlight: "Pushkar is a unique destination that combines spirituality with natural beauty. The town's sacred lake is a major draw for pilgrims and tourists alike.",
    bestFor: ["Spiritual retreat", "Heritage photography", "Family getaway", "Shopping weekends"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Forts, bazaars, palace hotels" },
      { label: "Getting around", value: "Auto, cab, e-rickshaw" }
    ],
    travelTips: [
      {
        title: "Start forts early",
        desc: "Amber, Jaigarh and Nahargarh side gets hot quickly, so morning slots give you softer light and easier walking.",
        icon: "🌤"
      },
      {
        title: "Keep one bazaar evening",
        desc: "Johari Bazaar, Bapu Bazaar and Tripolia feel liveliest after sunset, especially if you want food and shopping together.",
        icon: "🛍️"
      },
      {
        title: "Choose stay by vibe",
        desc: "Old City gives you heritage charm, while Civil Lines and MI Road make daily travel more comfortable for families.",
        icon: "🗺️"
      }
    ],

    // Hotels / stays
    hotels: [
      {
        name: "Jai Mahal Palace", tier: "Luxury", price: "₹22,000", rating: "4.9", location: "Jacob Road, pushkar, Rajasthan",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')", desc: "Grand palace stay with heritage rooms, Mughal gardens and one of Jaipur's most polished luxury experiences.",
        amenities: ["Heritage stay", "Spa", "Fine dining", "Pool"],
        link: "https://www.booking.com/searchresults.html?ss=Jai+Mahal+Palace+Jaipur"
      },
      {
        name: "Samode Haveli", tier: "Mid-Range", price: "₹5,800", rating: "4.7", location: "Gangapole, Pushkar, Rajasthan",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.36)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')", desc: "Beautiful old-world haveli near the walled city with carved architecture, courtyards and a strong heritage feel.",
        amenities: ["Heritage rooms", "Courtyard", "Pool", "Old City access"],
        link: "https://www.booking.com/searchresults.html?ss=Samode+Haveli+Pushkar"
      },
      {
        name: "Zostel Jaipur", tier: "Budget", price: "₹900", rating: "4.3", location: "MI Road, Jaipur",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&w=1400&q=80')", desc: "Friendly and affordable stay for solo travellers with dorms, common areas and easy access to central Jaipur.",
        amenities: ["Dorm beds", "Private rooms", "Common lounge", "Central location"],
        link: "https://www.booking.com/searchresults.html?ss=Zostel+Jaipur"
      }
    ],

    // Food cards
    food: [
      {
        category: "Street", name: "Rawat Kachori", image: "🥟", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "A Pushkar classic for breakfast lovers, famous for pyaz kachori and quick local bites near the station side.",
        price: "₹60", rating: "4.7", link: "https://www.google.com/maps/search/Rawat+Mishtan+Bhandar+Pushkar"
      },
      {
        category: "Street", name: "Dal Baati Churma", image: "🥘", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.36)), url('https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&w=1400&q=80')",
        desc: "The signature Rajasthani platter of baked baati, dal, ghee and sweet churma that most first-time visitors seek out.",
        price: "₹180", rating: "4.9", link: "https://www.google.com/maps/search/Dal+Baati+Churma+Pushkar"
      },
      {
        category: "Cafe", name: "Jaipur Adda", image: "☕", bg: "linear-gradient(rgba(15,155,142,0.16), rgba(16,34,59,0.32)), url('https://images.unsplash.com/photo-1756821752955-0e95b2540418?auto=format&fit=crop&w=1400&q=80')",
        desc: "Popular cafe with fusion food, city views, strong coffee and a relaxed evening scene for groups.",
        price: "₹320", rating: "4.6", link: "https://www.google.com/maps/search/Jaipur+Adda"
      },
      {
        category: "Fine Dining", name: "Suvarna Mahal", image: "🍽", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.42)), url('https://images.unsplash.com/photo-1756821752955-0e95b2540418?auto=format&fit=crop&w=1400&q=80')",
        desc: "Luxury dining inside Rambagh Palace with a royal setting and carefully plated Rajasthani and north Indian menus.",
        price: "₹2,500", rating: "4.8", link: "https://www.google.com/maps/search/Suvarna+Mahal+Pushkar"
      }
    ],

    // Transport cards
    transport: [
      {
        title: "Pushkar International Airport", type: "Airport", icon: "✈️", details: "About 13 km from central Pushkar with prepaid taxi counters, app cabs and hotel pickup options.", costLabel: "Airport to city", costValue: "₹500 to ₹800", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Pushkar Junction", type: "Railway", icon: "🚆", details: "Well connected with Delhi, Mumbai, Ajmer and Udaipur, and one of the easiest arrival points for budget travellers.", costLabel: "Station transfer", costValue: "₹100 to ₹250", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "App Cabs and Autos", type: "Local travel", icon: "🚖", details: "Ola, Uber, autos and e-rickshaws are the most practical for quick city hops between forts, bazaars and cafes.", costLabel: "City ride", costValue: "₹80 to ₹250", link: "https://www.uber.com/in/en/"
      },
      {
        title: "Private Day Cab", type: "Sightseeing", icon: "🚗", details: "Best option if you want Amber, Jaigarh, Nahargarh and old city stops in one flexible day plan.", costLabel: "Full day", costValue: "₹1,800 to ₹3,500", link: "https://www.google.com/maps/search/Pushkar+day+tour+cab"
      }
    ],

    // Attractions / sightseeing cards
    attractions: [
      {
        name: "Amber Fort", type: "Fort", icon: "🏰", rating: "4.9", time: "3-4 hrs",
        desc: "Majestic hilltop fort with sprawling courtyards, mirror halls, gateways and panoramic rampart views.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://images.unsplash.com/photo-1502930705803-9ff48bdc73e9?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Amber+Fort+Pushkar",
        history: "Built in 1592 by Raja Man Singh, Amber Fort blends Rajput and Mughal architecture with stunning courtyards, palaces and water gardens.",
        bestTime: "Early morning or late afternoon",
        ticketInfo: "₹100 for Indians, ₹600 for foreigners",
        highlights: "Sheesh Mahal, Diwan-i-Aam, panoramic city views"
      },
      {
        name: "City Palace", type: "Palace", icon: "🏛", rating: "4.8", time: "2-3 hrs",
        desc: "Royal complex of museums, courtyards and ornate halls right in the heart of Pushkar's historic core.", bg: "linear-gradient(rgba(139,69,19,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/City+Palace+Pushkar",
        history: "Completed in 1727 by Maharaja Sawai Jai Singh II, City Palace remains the residence of Pushkar's royal family and showcases centuries of royal art.",
        bestTime: "Morning to early afternoon",
        ticketInfo: "₹70 for Indians, ₹500 for foreigners",
        highlights: "Chandra Mahal, royal costumes, museum artifacts"
      },
      {
        name: "Hawa Mahal", type: "Landmark", icon: "🌸", rating: "4.7", time: "1 hr",
        desc: "Iconic honeycomb-style palace with 953 windows built for royal women to observe street life unseen.", bg: "linear-gradient(rgba(247,183,51,0.14), rgba(124,45,18,0.36)), url('https://images.unsplash.com/photo-1526481280697-3ce1df09f1af?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Hawa+Mahal+Pushkar",
        history: "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal was designed to allow the royal family to enjoy street festivals without being seen.",
        bestTime: "Early morning for softer light",
        ticketInfo: "₹50 for Indians, ₹200 for foreigners",
        highlights: "Photo spot, narrow lanes, nearby market"
      },
      {
        name: "Jantar Mantar", type: "Observatory", icon: "🔭", rating: "4.7", time: "1-2 hrs",
        desc: "UNESCO-listed astronomical observatory with giant masonry instruments built for celestial calculations.", bg: "linear-gradient(rgba(63,60,187,0.16), rgba(22,160,133,0.34)), url('https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Jantar+Mantar+Pushkar",
        history: "Commissioned by Maharaja Sawai Jai Singh II in the 18th century, Jantar Mantar reflects Pushkar's deep connection to astronomy and planning.",
        bestTime: "Morning or clear late afternoon",
        ticketInfo: "₹50 for Indians, ₹200 for foreigners",
        highlights: "Samrat Yantra, UNESCO site, scientific heritage"
      },
      {
        name: "Nahargarh Fort", type: "Fort", icon: "🌄", rating: "4.6", time: "2-3 hrs",
        desc: "Hilltop fort loved for sunset views, winding approach roads and city panoramas after dark.", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Nahargarh+Fort+Pushkar",
        history: "Built in 1734 as part of Pushkar's defence line, Nahargarh later became a royal retreat overlooking the expanding city.",
        bestTime: "Late afternoon to sunset",
        ticketInfo: "₹50 to ₹200 depending on combined ticket",
        highlights: "Sunset point, fort walls, evening city lights"
      },
      {
        name: "Jal Mahal", type: "Lake Palace", icon: "🌊", rating: "4.5", time: "45 mins",
        desc: "A beautiful palace floating in the middle of Man Sagar Lake, best viewed from the lakeshore.", bg: "linear-gradient(rgba(30,60,114,0.16), rgba(42,82,152,0.36)), url('https://images.unsplash.com/photo-1521497293914-57fdc14bd4d6?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Jal+Mahal+Pushkar  ",
        history: "Originally built in the 18th century as a royal hunting lodge, Jal Mahal is now a scenic photo spot on Man Sagar Lake.",
        bestTime: "Sunset",
        ticketInfo: "Free to view from shore",
        highlights: "Lakeside view, photography, sunset glow"
      }
    ],

    // Planner itineraries
    itineraries: {
      budget: {
        title: "2-Day Budget Pushkar Highlights",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "8:30 AM", text: "Amber Fort and photo stops on Amer Road" },
              { time: "2:00 PM", text: "Jal Mahal and quick local lunch" },
              { time: "6:00 PM", text: "Nahargarh sunset and budget rooftop dinner" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:30 AM", text: "Hawa Mahal and City Palace circuit" },
              { time: "1:30 PM", text: "Jantar Mantar" },
              { time: "5:00 PM", text: "Johari Bazaar and Bapu Bazaar walk" }
            ]
          }
        ]
      },
      mid: {
        title: "3-Day Pushkar Culture Loop",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "9:00 AM", text: "Amber Fort with guided palace route" },
              { time: "1:30 PM", text: "Jaigarh viewpoint" },
              { time: "7:00 PM", text: "Dinner and live music at a heritage venue" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "10:00 AM", text: "City Palace and Jantar Mantar" },
              { time: "2:00 PM", text: "Hawa Mahal facade and old city lunch" },
              { time: "5:30 PM", text: "Johari Bazaar shopping session" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "9:30 AM", text: "Albert Hall or cafe morning" },
              { time: "1:00 PM", text: "Rest and local food trail" },
              { time: "5:30 PM", text: "Nahargarh evening view" }
            ]
          }
        ]
      },
      luxury: {
        title: "4-Day Royal Pushkar Experience with Private Tours",
        days: [
          {
            label: "Day 1",
            activities: [
              { time: "2:00 PM", text: "Check-in and high tea at palace hotel" },
              { time: "7:30 PM", text: "Royal dinner at Suvarna Mahal" }
            ]
          },
          {
            label: "Day 2",
            activities: [
              { time: "9:00 AM", text: "Private Amber Fort tour" },
              { time: "1:00 PM", text: "Jaigarh and curated photography stop" },
              { time: "6:30 PM", text: "Sunset drive to Nahargarh" }
            ]
          },
          {
            label: "Day 3",
            activities: [
              { time: "10:00 AM", text: "City Palace premium route" },
              { time: "1:00 PM", text: "Designer shopping and artisan stores" },
              { time: "8:00 PM", text: "Chef-led tasting menu" }
            ]
          },
          {
            label: "Day 4",
            activities: [
              { time: "9:00 AM", text: "Spa or leisurely brunch" },
              { time: "12:00 PM", text: "Departure transfer" }
            ]
          }
        ]
      }
    }
  },
};

if (typeof window !== "undefined") {
  window.cityData = cityData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = cityData;
}
