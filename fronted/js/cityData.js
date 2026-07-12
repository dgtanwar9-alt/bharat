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

Object.assign(cityData, {
  bikaner: {
    name: "Bikaner",
    state: "Rajasthan",
    aliases: ["camel city", "bikaner city", "desert circuit"],
    description: "Bikaner pairs massive red-sandstone forts, camel-country culture, old havelis and iconic snacks into one of Rajasthan's most character-rich desert stops.",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Junagarh Fort", "Camel culture", "Bhujia and sweets"],
    spotlight: "Bikaner works best when you split the trip into a royal heritage half-day, a Deshnoke or camel-country outing, and one slow evening in the old market with snacks and sweets.",
    bestFor: ["Desert heritage", "Food trails", "Family road trips", "Fort lovers"],
    quickFacts: [
      { label: "Best season", value: "October to February" },
      { label: "Ideal stay", value: "2 days" },
      { label: "Known for", value: "Junagarh Fort, bhujia, camels" },
      { label: "Getting around", value: "Auto, cab, day rental" }
    ],
    travelTips: [
      { title: "Keep fort time in the morning", desc: "Junagarh and the old city lanes feel more comfortable before the desert heat builds up.", icon: "🏰" },
      { title: "Bundle Deshnoke with a cab", desc: "Karni Mata Temple is easier when you plan a return cab instead of separate local hops.", icon: "🚕" },
      { title: "Leave room for market snacking", desc: "Bikaneri bhujia, sweets and namkeen shops are a major part of the city experience.", icon: "🥟" }
    ],
    hotels: [
      {
        name: "Narendra Bhawan Bikaner", tier: "Luxury", price: "₹16,000", rating: "4.8", location: "Dr. Karni Singhji Road, Bikaner",
        image: "🏰", bg: "linear-gradient(rgba(82,45,15,0.18), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1400&auto=format&fit=crop')",
        desc: "A stylish former royal residence with strong design detail, curated dining and a high-end heritage atmosphere.",
        amenities: ["Heritage stay", "Pool", "Fine dining", "Design-led rooms"],
        link: "https://www.booking.com/searchresults.html?ss=Narendra+Bhawan+Bikaner"
      },
      {
        name: "Laxmi Niwas Palace", tier: "Mid-Range", price: "₹8,500", rating: "4.5", location: "Lalgarh Palace Complex, Bikaner",
        image: "🏛", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1400&auto=format&fit=crop')",
        desc: "Classic palace stay for travellers who want historic ambience, lawns and easy access to the heritage zone.",
        amenities: ["Palace rooms", "Restaurant", "Garden grounds", "Event spaces"],
        link: "https://www.booking.com/searchresults.html?ss=Laxmi+Niwas+Palace+Bikaner"
      },
      {
        name: "Hotel Heeralal", tier: "Budget", price: "₹2,200", rating: "4.2", location: "Transport Nagar, Bikaner",
        image: "🏠", bg: "linear-gradient(rgba(30,58,95,0.16), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1400&auto=format&fit=crop')",
        desc: "A practical budget-friendly stay with clean rooms, dependable service and quick road access for short stopovers.",
        amenities: ["Parking", "Restaurant", "Budget rooms", "Road access"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Heeralal+Bikaner"
      }
    ],
    food: [
      {
        category: "Street", name: "Bikaneri Bhujia", image: "🥟", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=80')",
        desc: "The city's most famous savoury snack, best enjoyed fresh from old market namkeen counters.",
        price: "₹80", rating: "4.8", link: "https://www.google.com/maps/search/Bikaneri+Bhujia+Bikaner"
      },
      {
        category: "Sweet", name: "Bikaneri Rasgulla", image: "🍮", bg: "linear-gradient(rgba(120,53,15,0.16), rgba(154,52,18,0.30)), url('https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1400&q=80')",
        desc: "Soft syrupy rasgullas are one of Bikaner's best-known edible souvenirs and a must-try after a fort day.",
        price: "₹180", rating: "4.6", link: "https://www.google.com/maps/search/Bikaneri+Rasgulla+Bikaner"
      },
      {
        category: "Restaurant", name: "Gallops Restaurant", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A dependable sit-down choice for north Indian meals after sightseeing around Lalgarh and the city centre.",
        price: "₹350", rating: "4.4", link: "https://www.google.com/maps/search/Gallops+Restaurant+Bikaner"
      }
    ],
    transport: [
      {
        title: "Bikaner Airport", type: "Airport", icon: "✈️", details: "Small airport access is limited, so many travellers still combine Bikaner with Jaipur or Jodhpur arrivals.", costLabel: "Airport to city", costValue: "₹400 to ₹900", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Bikaner Junction", type: "Railway", icon: "🚆", details: "A useful rail gateway with connections across Rajasthan, Delhi and major desert-route circuits.", costLabel: "Station transfer", costValue: "₹100 to ₹250", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Autos and Local Cabs", type: "Local travel", icon: "🚕", details: "Autos work well for the old city, while hired cabs are better for Deshnoke, palace stays and spread-out landmarks.", costLabel: "City ride", costValue: "₹80 to ₹250", link: "https://www.uber.com/in/en/"
      },
      {
        title: "Deshnoke Day Cab", type: "Excursion", icon: "🚗", details: "The easiest way to cover Karni Mata Temple and return without depending on tight local timings.", costLabel: "Round trip", costValue: "₹900 to ₹1,800", link: "https://www.google.com/maps/search/Deshnoke+cab+Bikaner"
      }
    ],
    attractions: [
      {
        name: "Junagarh Fort", type: "Fort", icon: "🏰", rating: "4.8", time: "2-3 hrs",
        desc: "A richly decorated fort-palace complex known for carved balconies, museum halls and unusually intact interiors.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Junagarh+Fort+Bikaner",
        history: "Unlike many Rajput forts built on hills, Junagarh Fort was built on the plains and still stands as Bikaner's defining royal complex.",
        bestTime: "Morning",
        ticketInfo: "Check latest ticket desk rates",
        highlights: "Anup Mahal, museum rooms, sandstone facades"
      },
      {
        name: "Karni Mata Temple", type: "Temple", icon: "🛕", rating: "4.6", time: "1-2 hrs",
        desc: "The famous Deshnoke temple draws pilgrims and curious travellers for its unique local faith traditions.", bg: "linear-gradient(rgba(185,28,28,0.16), rgba(245,158,11,0.26)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Karni+Mata+Temple+Deshnoke",
        history: "The temple is deeply rooted in the Charan tradition and remains one of the region's most widely recognized spiritual stops.",
        bestTime: "Early morning",
        ticketInfo: "Free entry",
        highlights: "Pilgrimage site, Deshnoke visit, carved marble work"
      },
      {
        name: "Lalgarh Palace", type: "Palace", icon: "🏛", rating: "4.5", time: "1-2 hrs",
        desc: "A striking Indo-Saracenic palace complex known for red sandstone architecture and royal-era charm.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Lalgarh+Palace+Bikaner",
        history: "Commissioned in the early 20th century, Lalgarh Palace reflects Bikaner's princely-era expansion and global influences.",
        bestTime: "Late morning",
        ticketInfo: "Varies by section and hotel access",
        highlights: "Palace grounds, heritage architecture, photo stops"
      },
      {
        name: "Rampuria Havelis", type: "Heritage", icon: "🏘", rating: "4.5", time: "1 hr",
        desc: "A classic Bikaner streetscape of ornate merchant havelis that reward a slower walk through the old quarters.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Rampuria+Havelis+Bikaner",
        history: "The Rampuria family havelis reflect the trading wealth and decorative craftsmanship that shaped Bikaner's urban identity.",
        bestTime: "Golden hour or morning",
        ticketInfo: "Exterior viewing area",
        highlights: "Old-city facades, photo walk, merchant-era architecture"
      }
    ],
    itineraries: {
      budget: {
        title: "2-Day Budget Bikaner",
        days: [
          { label: "Day 1", activities: [{ time: "9:00 AM", text: "Junagarh Fort tour" }, { time: "1:00 PM", text: "Bhujia and local lunch in the old city" }, { time: "5:30 PM", text: "Rampuria Haveli walk" }] },
          { label: "Day 2", activities: [{ time: "8:00 AM", text: "Deshnoke Karni Mata Temple" }, { time: "1:00 PM", text: "Lalgarh Palace side visit" }, { time: "4:30 PM", text: "Sweet shopping and departure prep" }] }
        ]
      },
      mid: {
        title: "3-Day Bikaner Heritage Circuit",
        days: [
          { label: "Day 1", activities: [{ time: "9:30 AM", text: "Junagarh Fort with museum route" }, { time: "2:00 PM", text: "Lalgarh Palace" }, { time: "6:00 PM", text: "Dinner near palace district" }] },
          { label: "Day 2", activities: [{ time: "8:00 AM", text: "Karni Mata Temple excursion" }, { time: "2:00 PM", text: "Rest and local snack trail" }, { time: "5:30 PM", text: "Old bazaar walk" }] },
          { label: "Day 3", activities: [{ time: "10:00 AM", text: "Camel centre or free heritage time" }, { time: "1:00 PM", text: "Lunch and checkout" }, { time: "4:00 PM", text: "Station or airport transfer" }] }
        ]
      },
      luxury: {
        title: "3-Day Royal Bikaner Escape",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Check-in at palace-style hotel" }, { time: "6:30 PM", text: "Curated dinner and slow evening" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private Junagarh heritage route" }, { time: "1:30 PM", text: "Lalgarh Palace and leisure break" }, { time: "7:00 PM", text: "Chef-led Rajasthani dinner" }] },
          { label: "Day 3", activities: [{ time: "8:30 AM", text: "Comfortable Deshnoke visit" }, { time: "12:30 PM", text: "Brunch and spa or rest" }, { time: "4:00 PM", text: "Departure transfer" }] }
        ]
      }
    }
  },

  pushkar: {
    name: "Pushkar",
    state: "Rajasthan",
    aliases: ["pushkar lake", "holy town", "brahma temple town"],
    description: "Pushkar mixes sacred ghats, rooftop cafes, desert-edge calm and one of Rajasthan's most distinctive spiritual atmospheres into an easy two-day escape.",
    heroImage: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Pushkar Lake", "Brahma Temple", "Cafe and ghat walks"],
    spotlight: "Pushkar works best when you balance temple time and lake walks with one relaxed cafe window, a Savitri sunset and a slower morning through the bazaar lanes.",
    bestFor: ["Spiritual retreats", "Couple trips", "Weekend escapes", "Cafe-hopping"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 days" },
      { label: "Known for", value: "Pushkar Lake, Brahma Temple, camel fair" },
      { label: "Getting around", value: "Walk, e-rickshaw, cab" }
    ],
    travelTips: [
      { title: "Walk the lake early", desc: "Ghats and temple lanes feel most peaceful before the late-morning rush begins.", icon: "🌅" },
      { title: "Keep footwear rules in mind", desc: "Temple and ghat areas have clear etiquette, so dress modestly and move respectfully.", icon: "👣" },
      { title: "Use Ajmer as your arrival point", desc: "Many travellers reach Pushkar through Ajmer and then take a short cab over the hill road.", icon: "🚗" }
    ],
    hotels: [
      {
        name: "Ananta Spa and Resorts", tier: "Luxury", price: "₹12,000", rating: "4.6", location: "Village Leela Sevri, Pushkar",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1400&auto=format&fit=crop')",
        desc: "A resort-style stay for travellers who want landscaped grounds, pool time and a quieter edge-of-town setting.",
        amenities: ["Pool", "Spa", "Resort grounds", "Private rooms"],
        link: "https://www.booking.com/searchresults.html?ss=Ananta+Spa+and+Resorts+Pushkar"
      },
      {
        name: "Inn Seventh Heaven", tier: "Mid-Range", price: "₹4,800", rating: "4.7", location: "Near Old Rangji Temple, Pushkar",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1400&auto=format&fit=crop')",
        desc: "A heritage-style haveli stay that keeps you close to the lake, cafes and bazaar without losing local character.",
        amenities: ["Heritage rooms", "Courtyard", "Central location", "Roof views"],
        link: "https://www.booking.com/searchresults.html?ss=Inn+Seventh+Heaven+Pushkar"
      },
      {
        name: "Madpackers Pushkar", tier: "Budget", price: "₹900", rating: "4.3", location: "Badi Basti, Pushkar",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1400&auto=format&fit=crop')",
        desc: "A social budget stay for backpackers and short-stay travellers who want walkable access and simple rooms.",
        amenities: ["Dorm beds", "Common lounge", "Rooftop", "Budget stay"],
        link: "https://www.booking.com/searchresults.html?ss=Madpackers+Pushkar"
      }
    ],
    food: [
      {
        category: "Sweet", name: "Pushkar Malpua", image: "🍮", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1619535860434-cf9bca59df0f?auto=format&fit=crop&w=1400&q=80')",
        desc: "The most famous local sweet in town, often paired with temple visits and evening market rounds.",
        price: "₹80", rating: "4.7", link: "https://www.google.com/maps/search/Malpua+Pushkar"
      },
      {
        category: "Cafe", name: "The Laughing Buddha Cafe", image: "☕", bg: "linear-gradient(rgba(15,155,142,0.16), rgba(16,34,59,0.32)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80')",
        desc: "A relaxed traveller-friendly cafe stop for breakfast plates, coffee and easy rooftop breaks.",
        price: "₹250", rating: "4.4", link: "https://www.google.com/maps/search/Laughing+Buddha+Cafe+Pushkar"
      },
      {
        category: "Restaurant", name: "La Pizzeria Garden", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "One of Pushkar's popular sit-down options for travellers who want a long, easy meal between bazaar and ghat walks.",
        price: "₹350", rating: "4.5", link: "https://www.google.com/maps/search/La+Pizzeria+Garden+Pushkar"
      }
    ],
    transport: [
      {
        title: "Kishangarh Airport", type: "Airport", icon: "✈️", details: "The nearest airport for Pushkar, with onward cab access through Ajmer-side routes.", costLabel: "Airport to town", costValue: "₹1,200 to ₹2,200", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Ajmer Junction", type: "Railway", icon: "🚆", details: "Ajmer is the main rail arrival point, after which a short cab or bus ride connects you to Pushkar.", costLabel: "Ajmer to Pushkar", costValue: "₹300 to ₹900", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Walk and E-Rickshaw", type: "Local travel", icon: "🛺", details: "The old Pushkar core is best covered on foot, with e-rickshaws helpful for hotel and hill transfers.", costLabel: "Town ride", costValue: "₹50 to ₹180", link: "https://www.google.com/maps/search/Pushkar+e-rickshaw"
      },
      {
        title: "Ajmer Return Cab", type: "Excursion", icon: "🚗", details: "Useful if you want to combine Pushkar with Ajmer Sharif or a railway connection on the same day.", costLabel: "Round trip", costValue: "₹900 to ₹1,800", link: "https://www.google.com/maps/search/Ajmer+Pushkar+cab"
      }
    ],
    attractions: [
      {
        name: "Pushkar Lake", type: "Lake", icon: "🌊", rating: "4.8", time: "1-2 hrs",
        desc: "The spiritual heart of the town, surrounded by ghats, rituals, temple lanes and slow sunset viewpoints.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Pushkar+Lake",
        history: "Pushkar Lake has deep pilgrimage importance and remains the central anchor around which the town's spiritual identity revolves.",
        bestTime: "Sunrise or sunset",
        ticketInfo: "Open public access",
        highlights: "Ghats, rituals, evening atmosphere"
      },
      {
        name: "Brahma Temple", type: "Temple", icon: "🛕", rating: "4.7", time: "45 mins - 1 hr",
        desc: "One of the most famous temples dedicated to Lord Brahma and a defining stop for first-time Pushkar visitors.", bg: "linear-gradient(rgba(185,28,28,0.16), rgba(245,158,11,0.28)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Brahma+Temple+Pushkar",
        history: "The temple is among the most recognized Brahma shrines in India and remains central to Pushkar's religious character.",
        bestTime: "Morning",
        ticketInfo: "Free entry",
        highlights: "Temple rituals, spiritual atmosphere, old lanes"
      },
      {
        name: "Savitri Temple", type: "Viewpoint", icon: "🌄", rating: "4.6", time: "1-2 hrs",
        desc: "A hilltop temple and viewpoint reached by ropeway or climb, best known for panoramic views over Pushkar and the desert edge.", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Savitri+Temple+Pushkar",
        history: "The temple has long been a favored high-point stop for pilgrims and travellers looking over the wider Pushkar basin.",
        bestTime: "Sunset or early morning",
        ticketInfo: "Ropeway cost varies",
        highlights: "Ropeway, sunset point, city view"
      },
      {
        name: "Rangji Temple", type: "Temple", icon: "🏛", rating: "4.5", time: "45 mins",
        desc: "A visually distinctive temple known for mixing south Indian, Rajput and Mughal influences in one complex.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Rangji+Temple+Pushkar",
        history: "Rangji Temple stands out in Pushkar for both its architecture and its place in the town's larger temple landscape.",
        bestTime: "Morning to early afternoon",
        ticketInfo: "Temple timing based",
        highlights: "Unique architecture, temple route, cultural stop"
      }
    ],
    itineraries: {
      budget: {
        title: "2-Day Budget Pushkar",
        days: [
          { label: "Day 1", activities: [{ time: "8:00 AM", text: "Pushkar Lake and ghat walk" }, { time: "12:00 PM", text: "Brahma Temple and bazaar lunch" }, { time: "5:30 PM", text: "Cafe evening and market stroll" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Rangji Temple" }, { time: "1:00 PM", text: "Local sweet stop and rest" }, { time: "5:00 PM", text: "Savitri Temple sunset" }] }
        ]
      },
      mid: {
        title: "3-Day Pushkar Spiritual and Cafe Loop",
        days: [
          { label: "Day 1", activities: [{ time: "9:00 AM", text: "Pushkar Lake full circuit" }, { time: "1:00 PM", text: "Heritage lane lunch" }, { time: "6:00 PM", text: "Sunset rooftop dinner" }] },
          { label: "Day 2", activities: [{ time: "8:30 AM", text: "Brahma Temple" }, { time: "11:30 AM", text: "Rangji Temple and bazaar" }, { time: "5:00 PM", text: "Slow cafe evening" }] },
          { label: "Day 3", activities: [{ time: "9:00 AM", text: "Ajmer half-day add-on or free morning" }, { time: "2:00 PM", text: "Rest at hotel" }, { time: "5:30 PM", text: "Savitri sunset repeat or shopping" }] }
        ]
      },
      luxury: {
        title: "3-Day Curated Pushkar Escape",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Resort check-in and leisure time" }, { time: "6:30 PM", text: "Private dinner and quiet evening" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Comfortable temple and lake circuit" }, { time: "1:30 PM", text: "Spa or pool break" }, { time: "5:30 PM", text: "Savitri sunset by ropeway" }] },
          { label: "Day 3", activities: [{ time: "10:00 AM", text: "Short Ajmer crossover if desired" }, { time: "1:30 PM", text: "Brunch and checkout" }, { time: "4:00 PM", text: "Departure transfer" }] }
        ]
      }
    }
  },

  udaipur: {
    name: "Udaipur",
    state: "Rajasthan",
    aliases: ["lake city", "city of lakes", "udaipur city"],
    description: "Udaipur layers lakeside sunsets, palace balconies, boat rides and whitewashed heritage streets into Rajasthan's most romantic and easygoing city break.",
    heroImage: "https://lh3.googleusercontent.com/gpms-cs-s/ABJJf50Vd8p8swRa-NQCcX0p2KX3h-6BbKjtlrYjEcGMBhYclCJAnvk-CO0cpyAPoh9V9yCpXFPJuItXt_OQfMHR6hyqkgR2tcBOV6NWmFV1djZmOE1KedF47QTYOgQV7V7iv1ERtqMLtg=s1360-w1360-h1020-rw",
    heroHighlights: ["Lake Pichola", "City Palace", "Sunset points"],
    spotlight: "Udaipur works best when you combine one palace half-day, one lake evening and a slower café or market window between heritage stops.",
    bestFor: ["Couples", "Photography trips", "Palace stays", "Relaxed 2-3 day trips"],
    quickFacts: [
      { label: "Best season", value: "September to March" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Lakes, palaces, sunset views" },
      { label: "Getting around", value: "Auto, cab, boat, walk" }
    ],
    travelTips: [
      { title: "Keep one full evening for the lake", desc: "Sunset around Ambrai, Gangaur Ghat or a boat ride is a big part of the Udaipur experience.", icon: "🌅" },
      { title: "Start the palace zone early", desc: "The City Palace side is much easier before midday queues and bright heat build up.", icon: "🏛" },
      { title: "Book hillside viewpoints with a cab", desc: "Monsoon Palace and outer viewpoints are easier when you group them into one cab route.", icon: "🚕" }
    ],
    hotels: [
      {
        name: "Taj Lake Palace", tier: "Luxury", price: "₹38,000", rating: "4.9", location: "Lake Pichola, Udaipur",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.42)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop')",
        desc: "One of India's most iconic luxury stays, floating on Lake Pichola with exceptional service and old-world palace drama.",
        amenities: ["Lake views", "Fine dining", "Boat transfer", "Luxury suites"],
        link: "https://www.booking.com/searchresults.html?ss=Taj+Lake+Palace+Udaipur"
      },
      {
        name: "Trident Udaipur", tier: "Mid-Range", price: "₹9,500", rating: "4.7", location: "Haridasji Ki Magri, Udaipur",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop')",
        desc: "A polished, family-friendly lake-area resort with gardens and comfortable access to the main sightseeing circuit.",
        amenities: ["Pool", "Garden grounds", "Family stay", "Lake-area access"],
        link: "https://www.booking.com/searchresults.html?ss=Trident+Udaipur"
      },
      {
        name: "Moustache Udaipur", tier: "Budget", price: "₹850", rating: "4.3", location: "Lal Ghat, Udaipur",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop')",
        desc: "A social low-cost stay close to the old lakefront for backpackers and short city breaks.",
        amenities: ["Dorms", "Old-city location", "Rooftop", "Common spaces"],
        link: "https://www.booking.com/searchresults.html?ss=Moustache+Udaipur"
      }
    ],
    food: [
      {
        category: "Restaurant", name: "Ambrai", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop')",
        desc: "A signature dinner stop for lake views, palace lights and one of Udaipur's best evening dining settings.",
        price: "₹900", rating: "4.7", link: "https://www.google.com/maps/search/Ambrai+Udaipur"
      },
      {
        category: "Traditional", name: "Natraj Dining Hall", image: "🥘", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A classic thali choice for travellers who want a hearty Rajasthani meal without overcomplicating the route.",
        price: "₹300", rating: "4.6", link: "https://www.google.com/maps/search/Natraj+Dining+Hall+Udaipur"
      },
      {
        category: "Cafe", name: "Jheel's Rooftop Cafe", image: "☕", bg: "linear-gradient(rgba(15,155,142,0.16), rgba(16,34,59,0.32)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80')",
        desc: "A relaxed lake-facing stop for coffee, breakfast and soft-paced morning or sunset breaks.",
        price: "₹250", rating: "4.5", link: "https://www.google.com/maps/search/Jheels+Cafe+Udaipur"
      }
    ],
    transport: [
      {
        title: "Maharana Pratap Airport", type: "Airport", icon: "✈️", details: "The main air gateway for Udaipur, around 22 km from the old-city and lake areas.", costLabel: "Airport to city", costValue: "₹700 to ₹1,400", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Udaipur City Railway Station", type: "Railway", icon: "🚆", details: "A convenient arrival point for Rajasthan rail routes with simple onward auto and cab access.", costLabel: "Station transfer", costValue: "₹120 to ₹300", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Autos and App Cabs", type: "Local travel", icon: "🚕", details: "Autos are enough for short city hops, while cabs help for Monsoon Palace and spread-out hotel zones.", costLabel: "City ride", costValue: "₹100 to ₹280", link: "https://www.uber.com/in/en/"
      },
      {
        title: "Lake Boat Ride", type: "Sightseeing", icon: "⛵", details: "Boat rides are one of the easiest ways to add a classic Udaipur sunset layer to the trip.", costLabel: "Boat ticket", costValue: "₹400 to ₹1,000", link: "https://www.google.com/maps/search/Lake+Pichola+boat+ride"
      }
    ],
    attractions: [
      {
        name: "City Palace Udaipur", type: "Palace", icon: "🏛", rating: "4.8", time: "2-3 hrs",
        desc: "A sprawling royal complex of balconies, courtyards, museums and some of the city's best elevated lake views.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/City+Palace+Udaipur",
        history: "The palace complex developed over centuries and remains the visual centrepiece of Udaipur's royal identity.",
        bestTime: "Morning",
        ticketInfo: "Check current museum and camera ticket rates",
        highlights: "Museum route, lake views, royal courtyards"
      },
      {
        name: "Lake Pichola", type: "Lake", icon: "🌊", rating: "4.8", time: "1-2 hrs",
        desc: "The most photogenic water body in Udaipur, especially at sunset when palaces and ghats glow across the lake.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Lake+Pichola+Udaipur",
        history: "Lake Pichola helped shape Udaipur's entire layout and remains central to its palace, ghat and island-hotel character.",
        bestTime: "Late afternoon to sunset",
        ticketInfo: "Shore access is free; boats are ticketed",
        highlights: "Boat ride, palace reflections, sunset walk"
      },
      {
        name: "Sajjangarh Palace", type: "Viewpoint", icon: "🌄", rating: "4.6", time: "1-2 hrs",
        desc: "Also called Monsoon Palace, this hilltop stop is popular for long sunset views over Udaipur's lakes and hills.", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Sajjangarh+Palace+Udaipur",
        history: "Built as a monsoon retreat and astronomical observatory concept, Sajjangarh became one of Udaipur's most loved viewpoints.",
        bestTime: "Sunset",
        ticketInfo: "Entry and vehicle charges may apply",
        highlights: "Sunset point, hill road, city panorama"
      },
      {
        name: "Bagore Ki Haveli", type: "Heritage", icon: "🏘", rating: "4.6", time: "1-2 hrs",
        desc: "A restored haveli by the lake known for its museum rooms and evening cultural performances.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Bagore+Ki+Haveli+Udaipur",
        history: "The haveli offers a close look at aristocratic lakefront living and remains one of the city's best cultural venues.",
        bestTime: "Late afternoon or evening show time",
        ticketInfo: "Museum and show tickets are separate",
        highlights: "Evening dance show, lakefront setting, haveli rooms"
      }
    ],
    itineraries: {
      budget: {
        title: "2-Day Budget Udaipur",
        days: [
          { label: "Day 1", activities: [{ time: "9:00 AM", text: "City Palace route" }, { time: "1:30 PM", text: "Cheap thali lunch" }, { time: "5:30 PM", text: "Lake Pichola sunset walk" }] },
          { label: "Day 2", activities: [{ time: "10:00 AM", text: "Bagore Ki Haveli" }, { time: "1:00 PM", text: "Cafe break" }, { time: "5:00 PM", text: "Sajjangarh sunset" }] }
        ]
      },
      mid: {
        title: "3-Day Udaipur Lake and Palace Loop",
        days: [
          { label: "Day 1", activities: [{ time: "9:30 AM", text: "City Palace with museum visit" }, { time: "2:00 PM", text: "Lake-area lunch" }, { time: "6:00 PM", text: "Ambrai dinner view" }] },
          { label: "Day 2", activities: [{ time: "10:00 AM", text: "Bagore Ki Haveli" }, { time: "2:00 PM", text: "Free market time" }, { time: "5:30 PM", text: "Lake boat ride" }] },
          { label: "Day 3", activities: [{ time: "11:00 AM", text: "Relaxed cafe morning" }, { time: "3:00 PM", text: "Sajjangarh drive" }, { time: "6:15 PM", text: "Final sunset viewpoint" }] }
        ]
      },
      luxury: {
        title: "3-Day Royal Udaipur Escape",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Lake hotel check-in" }, { time: "7:00 PM", text: "Curated dinner with palace views" }] },
          { label: "Day 2", activities: [{ time: "10:00 AM", text: "Private City Palace route" }, { time: "2:00 PM", text: "Boat ride and leisure" }, { time: "6:30 PM", text: "Fine dining by the lake" }] },
          { label: "Day 3", activities: [{ time: "11:00 AM", text: "Bagore or artisan stop" }, { time: "3:30 PM", text: "Sajjangarh sunset drive" }, { time: "8:00 PM", text: "Final tasting dinner" }] }
        ]
      }
    }
  },

  jodhpur: {
    name: "Jodhpur",
    state: "Rajasthan",
    aliases: ["blue city", "sun city", "jodhpur city"],
    description: "Jodhpur blends the commanding mass of Mehrangarh, blue old-city lanes, palace hotels and robust Marwari food into one of Rajasthan's most dramatic heritage breaks.",
    heroImage: "https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Mehrangarh Fort", "Blue old city", "Marwari food"],
    spotlight: "Jodhpur works best when you anchor the trip around Mehrangarh, give yourself one slow old-city market window and leave an evening for rooftop or palace-lit views.",
    bestFor: ["Fort lovers", "Photography", "Food-focused trips", "Weekend heritage breaks"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Mehrangarh, blue lanes, mirchi bada" },
      { label: "Getting around", value: "Auto, cab, walk in old city" }
    ],
    travelTips: [
      { title: "Do Mehrangarh first", desc: "The fort dominates the experience, and early hours make the climb and museum route far easier.", icon: "🏰" },
      { title: "Use rooftops in the evening", desc: "Jodhpur's old-city charm really opens up once the blue houses and fort lights start glowing.", icon: "🌆" },
      { title: "Keep a snack trail ready", desc: "Mirchi bada, makhaniya lassi and local sweets are worth planning between monuments.", icon: "🥤" }
    ],
    hotels: [
      {
        name: "RAAS Jodhpur", tier: "Luxury", price: "₹24,000", rating: "4.8", location: "Tunwarji Ka Jhalra, Jodhpur",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.40)), url('https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?q=80&w=1400&auto=format&fit=crop')",
        desc: "One of the city's most coveted stays, pairing strong design with an unbeatable Mehrangarh-facing setting.",
        amenities: ["Fort views", "Luxury suites", "Pool", "Fine dining"],
        link: "https://www.booking.com/searchresults.html?ss=RAAS+Jodhpur"
      },
      {
        name: "Ratan Vilas", tier: "Mid-Range", price: "₹6,500", rating: "4.7", location: "Loco Shed Road, Jodhpur",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?q=80&w=1400&auto=format&fit=crop')",
        desc: "A charming heritage stay with warm service and enough space to feel calm away from the old-city rush.",
        amenities: ["Heritage rooms", "Garden", "Pool", "Quiet stay"],
        link: "https://www.booking.com/searchresults.html?ss=Ratan+Vilas+Jodhpur"
      },
      {
        name: "Zostel Jodhpur", tier: "Budget", price: "₹900", rating: "4.2", location: "Makrana Mohalla, Jodhpur",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?q=80&w=1400&auto=format&fit=crop')",
        desc: "A budget-friendly social stay close to the old quarter for travellers who want quick fort and market access.",
        amenities: ["Dorms", "Rooftop", "Budget stay", "Old-city access"],
        link: "https://www.booking.com/searchresults.html?ss=Zostel+Jodhpur"
      }
    ],
    food: [
      {
        category: "Street", name: "Janta Sweet Home", image: "🥟", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A classic stop for mirchi bada and makhaniya lassi, especially if you want to taste Jodhpur's quick local favourites.", price: "₹120", rating: "4.6", link: "https://www.google.com/maps/search/Janta+Sweet+Home+Jodhpur"
      },
      {
        category: "Traditional", name: "Gypsy Restaurant", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A dependable pick for thalis and Marwari food when you want a classic sit-down meal near the tourist core.", price: "₹350", rating: "4.5", link: "https://www.google.com/maps/search/Gypsy+Restaurant+Jodhpur"
      },
      {
        category: "Restaurant", name: "On The Rocks", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80')",
        desc: "A popular evening choice for travellers wanting a comfortable dinner after fort and market sightseeing.", price: "₹700", rating: "4.4", link: "https://www.google.com/maps/search/On+The+Rocks+Jodhpur"
      }
    ],
    transport: [
      {
        title: "Jodhpur Airport", type: "Airport", icon: "✈️", details: "A city-convenient airport with short transfers to the fort, station and heritage hotel areas.", costLabel: "Airport to city", costValue: "₹300 to ₹700", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Jodhpur Junction", type: "Railway", icon: "🚆", details: "A central rail point useful for travellers coming from Jaipur, Jaisalmer, Delhi and Udaipur.", costLabel: "Station transfer", costValue: "₹100 to ₹250", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Autos and Cabs", type: "Local travel", icon: "🚕", details: "Autos work well for city hops, while cabs are more practical for fort and palace circuits in one route.", costLabel: "City ride", costValue: "₹80 to ₹250", link: "https://www.uber.com/in/en/"
      },
      {
        title: "Osian Day Cab", type: "Excursion", icon: "🚗", details: "A popular add-on if you want desert camp or temple views outside the city on a flexible half-day plan.", costLabel: "Half day", costValue: "₹2,000 to ₹3,800", link: "https://www.google.com/maps/search/Osian+cab+from+Jodhpur"
      }
    ],
    attractions: [
      {
        name: "Mehrangarh Fort", type: "Fort", icon: "🏰", rating: "4.9", time: "3-4 hrs",
        desc: "A monumental hill fort with superb museum sections, courtyards and one of the best views in Rajasthan.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://plus.unsplash.com/premium_photo-1697730388194-0f8f7943dbad?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Mehrangarh+Fort+Jodhpur",
        history: "Mehrangarh has defined Jodhpur's skyline since the 15th century and remains among the strongest fort experiences in India.",
        bestTime: "Morning",
        ticketInfo: "Audio guide and entry options available",
        highlights: "Museum, ramparts, blue-city views"
      },
      {
        name: "Jaswant Thada", type: "Memorial", icon: "🏛", rating: "4.6", time: "45 mins - 1 hr",
        desc: "A serene marble cenotaph just below the fort, appreciated for its reflective mood and elegant detailing.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Jaswant+Thada+Jodhpur",
        history: "Built in memory of Maharaja Jaswant Singh II, the monument stands out for its intricate marble work and calm setting.",
        bestTime: "Morning or post-fort visit",
        ticketInfo: "Nominal entry fee",
        highlights: "Marble detail, quiet garden, fort-side stop"
      },
      {
        name: "Umaid Bhawan Palace", type: "Palace", icon: "🏰", rating: "4.7", time: "1-2 hrs",
        desc: "A grand 20th-century palace combining royal residence, luxury hotel and museum in one iconic landmark.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Umaid+Bhawan+Palace+Jodhpur",
        history: "Built during a famine-relief period, Umaid Bhawan reflects a later royal era and remains one of Jodhpur's defining landmarks.",
        bestTime: "Late morning",
        ticketInfo: "Museum ticket applies; hotel zones are separate",
        highlights: "Museum wing, palace exterior, vintage royal feel"
      },
      {
        name: "Clock Tower and Sardar Market", type: "Market", icon: "🛍️", rating: "4.5", time: "1-2 hrs",
        desc: "The heart of the old city for spice shopping, textiles, snack breaks and everyday blue-city energy.", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Clock+Tower+Sardar+Market+Jodhpur",
        history: "This market zone has long served as Jodhpur's commercial centre and remains one of the best places to feel the city's street rhythm.",
        bestTime: "Late afternoon or evening",
        ticketInfo: "Open market area",
        highlights: "Spices, textiles, snacks, local buzz"
      }
    ],
    itineraries: {
      budget: {
        title: "2-Day Budget Jodhpur",
        days: [
          { label: "Day 1", activities: [{ time: "8:30 AM", text: "Mehrangarh Fort" }, { time: "1:00 PM", text: "Janta Sweet Home snack stop" }, { time: "5:30 PM", text: "Clock Tower market walk" }] },
          { label: "Day 2", activities: [{ time: "10:00 AM", text: "Jaswant Thada" }, { time: "12:00 PM", text: "Umaid Bhawan museum" }, { time: "6:00 PM", text: "Rooftop dinner with fort lights" }] }
        ]
      },
      mid: {
        title: "3-Day Jodhpur Blue City Circuit",
        days: [
          { label: "Day 1", activities: [{ time: "9:00 AM", text: "Mehrangarh deep route" }, { time: "2:00 PM", text: "Jaswant Thada" }, { time: "7:00 PM", text: "Dinner in the old city" }] },
          { label: "Day 2", activities: [{ time: "10:00 AM", text: "Umaid Bhawan museum" }, { time: "1:30 PM", text: "Rest and cafe break" }, { time: "5:30 PM", text: "Sardar Market shopping" }] },
          { label: "Day 3", activities: [{ time: "9:30 AM", text: "Slow blue-lane walk" }, { time: "1:00 PM", text: "Traditional lunch" }, { time: "5:00 PM", text: "Flexible Osian add-on or fort viewpoint" }] }
        ]
      },
      luxury: {
        title: "3-Day Royal Jodhpur Stay",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Luxury hotel check-in" }, { time: "6:30 PM", text: "Rooftop or palace dinner" }] },
          { label: "Day 2", activities: [{ time: "9:30 AM", text: "Private Mehrangarh guide" }, { time: "2:00 PM", text: "Leisure break" }, { time: "7:00 PM", text: "Curated Marwari tasting menu" }] },
          { label: "Day 3", activities: [{ time: "10:00 AM", text: "Umaid Bhawan and city drive" }, { time: "1:30 PM", text: "Rest or spa" }, { time: "5:30 PM", text: "Golden-hour market and fort view" }] }
        ]
      }
    }
  },

  ranthambore: {
    name: "Ranthambore",
    state: "Rajasthan",
    aliases: ["sawai madhopur", "ranthambore national park", "tiger reserve"],
    description: "Ranthambore is Rajasthan's best-known wildlife escape, blending tiger safaris, a dramatic hill fort and slow lodge-based travel around Sawai Madhopur.",
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Tiger safaris", "Ranthambore Fort", "Lodge stays"],
    spotlight: "The smartest Ranthambore trip keeps safaris at the centre, uses the hottest hours for rest and adds one fort or lakeside stop outside the jungle gates.",
    bestFor: ["Wildlife lovers", "Family trips", "Luxury jungle stays", "Weekend safaris"],
    quickFacts: [
      { label: "Best season", value: "October to June" },
      { label: "Ideal stay", value: "2 to 3 days" },
      { label: "Known for", value: "Tigers, safaris, Ranthambore Fort" },
      { label: "Getting around", value: "Resort transfer, gypsy, cab" }
    ],
    travelTips: [
      { title: "Book safari zones early", desc: "Popular slots and better-known zones move quickly, especially on weekends and holidays.", icon: "🐅" },
      { title: "Keep afternoons light", desc: "Ranthambore days are best when you rest between safari drives instead of overpacking sightseeing.", icon: "🌤" },
      { title: "Choose stay near gate access", desc: "Lodge location can save real drive time on early morning safari departures.", icon: "🏕" }
    ],
    hotels: [
      {
        name: "The Oberoi Vanyavilas", tier: "Luxury", price: "₹45,000", rating: "4.9", location: "Ranthambore Road, Sawai Madhopur",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.42)), url('https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1400&auto=format&fit=crop')",
        desc: "A top-tier jungle retreat for travellers who want the most polished safari stay in the region.",
        amenities: ["Luxury tents", "Spa", "Safari desk", "Fine dining"],
        link: "https://www.booking.com/searchresults.html?ss=The+Oberoi+Vanyavilas+Ranthambore"
      },
      {
        name: "Ranthambore Regency", tier: "Mid-Range", price: "₹8,500", rating: "4.5", location: "Sawai Madhopur, Ranthambore",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1400&auto=format&fit=crop')",
        desc: "A dependable wildlife hotel with safari arrangements, family-friendly rooms and a practical location.",
        amenities: ["Pool", "Safari assistance", "Family rooms", "Restaurant"],
        link: "https://www.booking.com/searchresults.html?ss=Ranthambore+Regency"
      },
      {
        name: "Zostel Ranthambore", tier: "Budget", price: "₹1,000", rating: "4.2", location: "Kutalpura Maliyan, Sawai Madhopur",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1400&auto=format&fit=crop')",
        desc: "A social low-cost stay for safari-first travellers who want basic comfort and shared planning energy.",
        amenities: ["Dorms", "Shared spaces", "Budget stay", "Safari route access"],
        link: "https://www.booking.com/searchresults.html?ss=Zostel+Ranthambore"
      }
    ],
    food: [
      {
        category: "Traditional", name: "Lal Maas Thali", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80')",
        desc: "A rich Rajasthani meal that fits best after a morning safari and some rest back at the lodge.", price: "₹450", rating: "4.5", link: "https://www.google.com/maps/search/Lal+Maas+Ranthambore"
      },
      {
        category: "Restaurant", name: "The Dining Room", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A comfortable sit-down choice within the safari circuit for travellers who want a long, proper meal between game drives.", price: "₹900", rating: "4.6", link: "https://www.google.com/maps/search/Dining+Room+Ranthambore"
      },
      {
        category: "Cafe", name: "Station Road Chai Stops", image: "☕", bg: "linear-gradient(rgba(15,155,142,0.16), rgba(16,34,59,0.32)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80')",
        desc: "Simple tea and quick bites near Sawai Madhopur are useful before or after train-linked safari plans.", price: "₹80", rating: "4.2", link: "https://www.google.com/maps/search/Chai+Sawai+Madhopur"
      }
    ],
    transport: [
      {
        title: "Jaipur International Airport", type: "Airport", icon: "✈️", details: "Most Ranthambore visitors arrive via Jaipur and continue by road or rail to Sawai Madhopur.", costLabel: "Jaipur to Ranthambore", costValue: "₹2,500 to ₹5,500", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Sawai Madhopur Junction", type: "Railway", icon: "🚆", details: "The most practical rail arrival point for safari travellers, with many resorts offering pickups.", costLabel: "Station to hotel", costValue: "₹150 to ₹500", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Safari Gypsy and Canter", type: "Safari transport", icon: "🛻", details: "Official safari vehicles are the core movement option inside the park and should be pre-booked.", costLabel: "Safari cost", costValue: "Varies by zone and vehicle", link: "https://www.google.com/maps/search/Ranthambore+Safari+Booking"
      },
      {
        title: "Resort Cabs", type: "Local travel", icon: "🚕", details: "Private cabs are useful for the fort, station transfers and any non-safari movement in the area.", costLabel: "Local trip", costValue: "₹500 to ₹1,500", link: "https://www.google.com/maps/search/Ranthambore+cab+service"
      }
    ],
    attractions: [
      {
        name: "Ranthambore National Park", type: "Wildlife", icon: "🐅", rating: "4.8", time: "3-4 hrs",
        desc: "One of India's most famous tiger reserves, known for dramatic fort ruins, lakes and strong wildlife photography appeal.", bg: "linear-gradient(rgba(20,83,45,0.18), rgba(15,23,42,0.38)), url('https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Ranthambore+National+Park",
        history: "The reserve evolved from royal hunting grounds into one of the country's most recognisable conservation landscapes.",
        bestTime: "Morning or evening safari slot",
        ticketInfo: "Advance safari permit required",
        highlights: "Tiger sightings, lakes, safari routes"
      },
      {
        name: "Ranthambore Fort", type: "Fort", icon: "🏰", rating: "4.6", time: "1-2 hrs",
        desc: "A historic hill fort within the larger reserve landscape, offering commanding views and a deeper layer to the tiger-country experience.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Ranthambore+Fort",
        history: "The fort has watched over the forested landscape for centuries and adds strong Rajput-era context to a wildlife trip.",
        bestTime: "Morning in cooler weather",
        ticketInfo: "Separate access/timing rules may apply",
        highlights: "Hill views, historic walls, reserve backdrop"
      },
      {
        name: "Padam Talao", type: "Lake", icon: "🌊", rating: "4.5", time: "30-45 mins",
        desc: "A scenic water body inside the park often associated with iconic safari views and wildlife movement.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Padam+Talao+Ranthambore",
        history: "Padam Talao remains one of the most photographed zones in the reserve and helps define the Ranthambore visual identity.",
        bestTime: "During safari hours",
        ticketInfo: "Covered within safari permit",
        highlights: "Lake reflections, wildlife movement, classic photography"
      },
      {
        name: "Surwal Lake", type: "Birding", icon: "🕊️", rating: "4.4", time: "1 hr",
        desc: "A quieter wetland-style stop outside the main safari narrative, good for seasonal birding and open rural views.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Surwal+Lake+Ranthambore",
        history: "Surwal is often used as the softer side of a Ranthambore itinerary for those who want more than safari jeeps and hotel time.",
        bestTime: "Winter mornings",
        ticketInfo: "Open natural area",
        highlights: "Birding, calm landscape, rural detour"
      }
    ],
    itineraries: {
      budget: {
        title: "2-Day Budget Ranthambore",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Check-in and evening safari" }, { time: "7:30 PM", text: "Dinner and rest" }] },
          { label: "Day 2", activities: [{ time: "6:00 AM", text: "Morning safari" }, { time: "1:00 PM", text: "Lunch and checkout" }, { time: "4:00 PM", text: "Short fort or station transfer" }] }
        ]
      },
      mid: {
        title: "3-Day Ranthambore Safari Loop",
        days: [
          { label: "Day 1", activities: [{ time: "1:00 PM", text: "Arrival and resort check-in" }, { time: "5:00 PM", text: "First safari slot" }] },
          { label: "Day 2", activities: [{ time: "6:00 AM", text: "Morning safari" }, { time: "1:00 PM", text: "Rest at lodge" }, { time: "4:00 PM", text: "Ranthambore Fort or second drive" }] },
          { label: "Day 3", activities: [{ time: "7:00 AM", text: "Optional birding or free morning" }, { time: "12:00 PM", text: "Checkout and lunch" }, { time: "3:00 PM", text: "Return transfer" }] }
        ]
      },
      luxury: {
        title: "3-Day Luxury Jungle Stay",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Luxury camp check-in" }, { time: "6:30 PM", text: "Curated dinner under the stars" }] },
          { label: "Day 2", activities: [{ time: "6:00 AM", text: "Private or premium safari experience" }, { time: "1:30 PM", text: "Spa and leisure" }, { time: "5:00 PM", text: "Second safari or sunset drive" }] },
          { label: "Day 3", activities: [{ time: "8:30 AM", text: "Slow breakfast and optional fort stop" }, { time: "12:30 PM", text: "Checkout" }, { time: "3:00 PM", text: "Comfortable departure transfer" }] }
        ]
      }
    }
  },

  mountabu: {
    name: "Mount Abu",
    state: "Rajasthan",
    aliases: ["mount abu hill station", "abu road hills", "rajasthan hills"],
    description: "Mount Abu is Rajasthan's cool-weather hill retreat, combining Nakki Lake, Jain temple architecture, viewpoints and slower family-friendly evenings.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Nakki Lake", "Dilwara Temples", "Hill viewpoints"],
    spotlight: "Mount Abu works best when you slow the pace down, keep one boat-and-lake evening and reserve the clearest weather window for Guru Shikhar or sunset viewpoints.",
    bestFor: ["Families", "Summer escapes", "Temple visits", "Road trips"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "2 days" },
      { label: "Known for", value: "Hill weather, Nakki Lake, Dilwara" },
      { label: "Getting around", value: "Taxi, walk, local auto" }
    ],
    travelTips: [
      { title: "Do Dilwara with a calm morning", desc: "Temple etiquette and the finer marble work are best appreciated when the day is still quiet.", icon: "🛕" },
      { title: "Keep one sunset slot free", desc: "Mount Abu evenings can change quickly with weather, so leave room for the best view window.", icon: "🌄" },
      { title: "Use Abu Road for smooth arrivals", desc: "Most road and rail plans become simpler when you treat Abu Road as the transfer anchor.", icon: "🚆" }
    ],
    hotels: [
      {
        name: "Hotel Hillock", tier: "Mid-Range", price: "₹6,500", rating: "4.5", location: "Main Road, Mount Abu",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')",
        desc: "A reliable long-running stay for families who want central convenience, greenery and full-service comfort.",
        amenities: ["Pool", "Family rooms", "Restaurant", "Garden setting"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Hillock+Mount+Abu"
      },
      {
        name: "Sterling Mount Abu", tier: "Luxury", price: "₹9,000", rating: "4.4", location: "New RTO Road, Mount Abu",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.40)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')",
        desc: "A spacious hill stay for travellers who want a resort feel and a quieter location above the busier town core.",
        amenities: ["Resort setting", "Views", "Restaurant", "Family stay"],
        link: "https://www.booking.com/searchresults.html?ss=Sterling+Mount+Abu"
      },
      {
        name: "Hotel Krishna Niwas", tier: "Budget", price: "₹1,800", rating: "4.1", location: "Near Bus Stand, Mount Abu",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')",
        desc: "A basic low-cost option for travellers who want to stay close to the main town and keep transport simple.",
        amenities: ["Budget rooms", "Central stay", "Parking", "Simple access"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Krishna+Niwas+Mount+Abu"
      }
    ],
    food: [
      {
        category: "Sweet", name: "Mount Abu Rabdi", image: "🍮", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1400&q=80')",
        desc: "A classic hill-station sweet stop, especially enjoyable during cool evenings near the lake area.", price: "₹120", rating: "4.5", link: "https://www.google.com/maps/search/Rabdi+Mount+Abu"
      },
      {
        category: "Restaurant", name: "Mulberry Tree", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A popular family dining option for relaxed evening meals after sightseeing and boating.", price: "₹450", rating: "4.4", link: "https://www.google.com/maps/search/Mulberry+Tree+Mount+Abu"
      },
      {
        category: "Traditional", name: "Rajasthani Thali", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80')",
        desc: "A hearty option for travellers who want a proper meal after temple visits and hill drives.", price: "₹300", rating: "4.5", link: "https://www.google.com/maps/search/Rajasthani+Thali+Mount+Abu"
      }
    ],
    transport: [
      {
        title: "Udaipur or Ahmedabad Airport", type: "Airport", icon: "✈️", details: "Most visitors fly into either Udaipur or Ahmedabad and continue by road to the hills.", costLabel: "Airport to Abu", costValue: "₹3,000 to ₹6,500", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Abu Road Railway Station", type: "Railway", icon: "🚆", details: "The standard arrival point for Mount Abu, followed by a hill-road taxi transfer to the main town.", costLabel: "Abu Road to town", costValue: "₹400 to ₹900", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Local Taxi Union", type: "Local travel", icon: "🚕", details: "Taxis are the easiest way to cover Guru Shikhar, Sunset Point and temple stops without wasting time.", costLabel: "Half day", costValue: "₹1,000 to ₹2,200", link: "https://www.google.com/maps/search/Mount+Abu+taxi"
      }
    ],
    attractions: [
      {
        name: "Nakki Lake", type: "Lake", icon: "🌊", rating: "4.5", time: "1-2 hrs",
        desc: "The social heart of Mount Abu, best for boating, evening snacks and easy hill-station strolling.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Nakki+Lake+Mount+Abu",
        history: "Nakki Lake has long been central to the town's leisure culture and remains the most familiar first stop for visitors.",
        bestTime: "Late afternoon and evening",
        ticketInfo: "Boating is ticketed",
        highlights: "Boating, evening walk, snack stops"
      },
      {
        name: "Dilwara Temples", type: "Temple", icon: "🛕", rating: "4.8", time: "1-2 hrs",
        desc: "A world-famous Jain temple complex known for breathtaking marble carving and remarkable craftsmanship.", bg: "linear-gradient(rgba(185,28,28,0.16), rgba(245,158,11,0.28)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Dilwara+Temples+Mount+Abu",
        history: "The temples are celebrated as some of the finest marble works in Indian temple architecture.",
        bestTime: "Morning",
        ticketInfo: "Check camera and timing rules",
        highlights: "Marble detail, Jain heritage, serene interiors"
      },
      {
        name: "Guru Shikhar", type: "Viewpoint", icon: "🌄", rating: "4.6", time: "1-2 hrs",
        desc: "The highest point in the Aravalli range, offering wide mountain views and a cooler, windier atmosphere.", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Guru+Shikhar+Mount+Abu",
        history: "Guru Shikhar remains Mount Abu's defining high-point stop and a favorite for first-time visitors.",
        bestTime: "Morning or clear late afternoon",
        ticketInfo: "Open natural viewpoint",
        highlights: "Highest peak, cool air, Aravalli panorama"
      },
      {
        name: "Sunset Point", type: "Viewpoint", icon: "🌇", rating: "4.4", time: "45 mins - 1 hr",
        desc: "A classic evening stop where families and couples gather for one of Mount Abu's easiest scenic moments.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Sunset+Point+Mount+Abu",
        history: "The spot has long served as the town's shared evening ritual for visitors finishing a day in the hills.",
        bestTime: "Sunset",
        ticketInfo: "Public viewpoint area",
        highlights: "Evening colors, easy walk, family-friendly stop"
      }
    ],
    itineraries: {
      budget: {
        title: "2-Day Budget Mount Abu",
        days: [
          { label: "Day 1", activities: [{ time: "10:00 AM", text: "Nakki Lake and town walk" }, { time: "2:00 PM", text: "Budget lunch" }, { time: "5:30 PM", text: "Sunset Point" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Dilwara Temples" }, { time: "1:00 PM", text: "Rest and local sweets" }, { time: "4:00 PM", text: "Guru Shikhar drive" }] }
        ]
      },
      mid: {
        title: "3-Day Mount Abu Hill Retreat",
        days: [
          { label: "Day 1", activities: [{ time: "11:00 AM", text: "Arrival and lake circuit" }, { time: "6:00 PM", text: "Relaxed dinner" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Dilwara Temples" }, { time: "1:00 PM", text: "Cafe break" }, { time: "5:30 PM", text: "Sunset Point repeat or bazaar stroll" }] },
          { label: "Day 3", activities: [{ time: "8:30 AM", text: "Guru Shikhar" }, { time: "12:30 PM", text: "Checkout lunch" }, { time: "3:00 PM", text: "Departure via Abu Road" }] }
        ]
      },
      luxury: {
        title: "3-Day Slow Mount Abu Escape",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Resort check-in and leisure" }, { time: "6:30 PM", text: "Quiet hill dinner" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private temple and viewpoint route" }, { time: "2:00 PM", text: "Resort downtime" }, { time: "5:30 PM", text: "Premium sunset outing" }] },
          { label: "Day 3", activities: [{ time: "10:00 AM", text: "Nakki Lake boat window" }, { time: "1:30 PM", text: "Checkout lunch" }, { time: "4:00 PM", text: "Departure transfer" }] }
        ]
      }
    }
  },

  chittorgarh: {
    name: "Chittorgarh",
    state: "Rajasthan",
    aliases: ["चित्तौड़गढ़", "chittor", "chittorgarh fort city"],
    description: "Chittorgarh is Rajasthan's great fort city of legend, best known for heroic Rajput history, monumental towers and a sprawling hilltop fort complex.",
    heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Chittorgarh Fort", "Vijay Stambh", "Rajput history"],
    spotlight: "Chittorgarh works best when you focus on the fort plateau itself, because the towers, palaces, reservoirs and legends all connect inside one large heritage zone.",
    bestFor: ["History lovers", "Road trips", "Fort enthusiasts", "Photography"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "1 to 2 days" },
      { label: "Known for", value: "Fort complex, victory towers, Rajput tales" },
      { label: "Getting around", value: "Cab, auto, fort drive" }
    ],
    travelTips: [
      { title: "Treat the fort as the main day", desc: "The complex is large, so keep enough time for multiple stops inside instead of rushing from gate to gate.", icon: "🏰" },
      { title: "Carry water in warm months", desc: "The plateau stretches out more than most visitors expect and afternoon heat rises quickly.", icon: "💧" },
      { title: "Use a local cab for the circuit", desc: "A vehicle inside or around the fort saves time across towers, palaces and reservoirs.", icon: "🚕" }
    ],
    hotels: [
      {
        name: "Hotel Pratap Palace", tier: "Mid-Range", price: "₹4,200", rating: "4.3", location: "Bhilwara Road, Chittorgarh",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')",
        desc: "A practical stay for fort-focused travellers who want comfort without overcomplicating the route.",
        amenities: ["Restaurant", "Parking", "Family rooms", "Easy road access"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Pratap+Palace+Chittorgarh"
      },
      {
        name: "The Elegance Resort", tier: "Luxury", price: "₹7,800", rating: "4.4", location: "Near Fort Road, Chittorgarh",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.40)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')",
        desc: "A comfortable higher-end option for travellers who want a little more space and a resort-style pause after fort touring.",
        amenities: ["Pool", "Restaurant", "Lawn areas", "Family stay"],
        link: "https://www.booking.com/searchresults.html?ss=The+Elegance+Resort+Chittorgarh"
      },
      {
        name: "Hotel Royal Inn", tier: "Budget", price: "₹1,600", rating: "4.0", location: "Collectorate Circle, Chittorgarh",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')",
        desc: "A simple low-cost base close to town services for short overnight stays before or after the fort route.",
        amenities: ["Budget rooms", "Central access", "Parking", "Short stays"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Royal+Inn+Chittorgarh"
      }
    ],
    food: [
      {
        category: "Street", name: "Kachori and Poha", image: "🥟", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=80')",
        desc: "A familiar local breakfast route that works especially well before climbing into the fort zone.", price: "₹70", rating: "4.4", link: "https://www.google.com/maps/search/Kachori+Chittorgarh"
      },
      {
        category: "Traditional", name: "Rajasthani Thali", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80')",
        desc: "A dependable midday option after long fort circuits when you want something filling and local.", price: "₹280", rating: "4.5", link: "https://www.google.com/maps/search/Rajasthani+Thali+Chittorgarh"
      },
      {
        category: "Restaurant", name: "Gangour Restaurant", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A practical sit-down stop for travellers who want a cleaner restaurant break between heritage sites.", price: "₹350", rating: "4.3", link: "https://www.google.com/maps/search/Gangour+Restaurant+Chittorgarh"
      }
    ],
    transport: [
      {
        title: "Maharana Pratap Airport", type: "Airport", icon: "✈️", details: "Udaipur is the usual airport arrival point before a road transfer to Chittorgarh.", costLabel: "Airport to city", costValue: "₹2,500 to ₹4,500", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Chittorgarh Junction", type: "Railway", icon: "🚆", details: "A useful rail stop on Rajasthan circuits for direct fort-city arrivals.", costLabel: "Station transfer", costValue: "₹80 to ₹220", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Fort Circuit Cab", type: "Local travel", icon: "🚕", details: "The easiest way to cover the long heritage spread, especially if you're short on time or travelling with family.", costLabel: "Half day", costValue: "₹900 to ₹1,800", link: "https://www.google.com/maps/search/Chittorgarh+cab"
      }
    ],
    attractions: [
      {
        name: "Chittorgarh Fort", type: "Fort", icon: "🏰", rating: "4.8", time: "3-4 hrs",
        desc: "One of India's largest fort complexes, full of gates, towers, palaces and battlefield memory.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Chittorgarh+Fort",
        history: "The fort is inseparable from Rajput resistance stories and remains one of Rajasthan's most symbolic heritage sites.",
        bestTime: "Morning",
        ticketInfo: "Check ASI fort entry rates",
        highlights: "Massive walls, historic gates, long fort route"
      },
      {
        name: "Vijay Stambh", type: "Tower", icon: "🗼", rating: "4.7", time: "45 mins",
        desc: "The famous Victory Tower remains the visual signature of the fort and a key symbol of Chittorgarh's legacy.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Vijay+Stambh+Chittorgarh",
        history: "The tower was erected to commemorate victory and still stands as one of the most iconic vertical monuments in Rajasthan.",
        bestTime: "Morning to late afternoon",
        ticketInfo: "Covered within fort visit context",
        highlights: "Historic tower, carvings, classic photo stop"
      },
      {
        name: "Padmini Palace", type: "Palace", icon: "🏛", rating: "4.4", time: "30-45 mins",
        desc: "A water-front palace stop deeply tied to legends associated with the fort's most famous narratives.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Padmini+Palace+Chittorgarh",
        history: "The palace is remembered through stories tied to Queen Padmini and remains a key stop in the fort's storytelling arc.",
        bestTime: "Daylight hours",
        ticketInfo: "Included within fort zone",
        highlights: "Legendary context, water setting, short heritage stop"
      },
      {
        name: "Kirti Stambh", type: "Tower", icon: "🏯", rating: "4.5", time: "30 mins",
        desc: "A second important tower within the complex, valued for its Jain connection and carved architectural character.", bg: "linear-gradient(rgba(185,28,28,0.16), rgba(245,158,11,0.28)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Kirti+Stambh+Chittorgarh",
        history: "Kirti Stambh predates Vijay Stambh and adds another religious and architectural layer to the wider fort plateau.",
        bestTime: "Within the fort circuit",
        ticketInfo: "Part of fort visit area",
        highlights: "Jain heritage, stone detail, quieter stop"
      }
    ],
    itineraries: {
      budget: {
        title: "1-Day Chittorgarh Fort Focus",
        days: [
          { label: "Day 1", activities: [{ time: "9:00 AM", text: "Chittorgarh Fort entry" }, { time: "11:00 AM", text: "Vijay Stambh and fort route" }, { time: "2:00 PM", text: "Lunch and Padmini Palace" }, { time: "5:00 PM", text: "Kirti Stambh and departure" }] }
        ]
      },
      mid: {
        title: "2-Day Chittorgarh Heritage Stay",
        days: [
          { label: "Day 1", activities: [{ time: "10:00 AM", text: "Fort circuit with cab" }, { time: "2:00 PM", text: "Lunch break" }, { time: "5:30 PM", text: "Town evening and rest" }] },
          { label: "Day 2", activities: [{ time: "9:30 AM", text: "Second fort-side photography window" }, { time: "12:30 PM", text: "Traditional lunch" }, { time: "3:00 PM", text: "Checkout and transfer" }] }
        ]
      },
      luxury: {
        title: "2-Day Curated Chittorgarh History Route",
        days: [
          { label: "Day 1", activities: [{ time: "1:00 PM", text: "Comfortable arrival and check-in" }, { time: "5:00 PM", text: "Golden-hour fort edge drive" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private guided fort route" }, { time: "1:30 PM", text: "Lunch and leisure" }, { time: "4:00 PM", text: "Departure transfer" }] }
        ]
      }
    }
  },

  bundi: {
    name: "Bundi",
    state: "Rajasthan",
    aliases: ["bundi town", "stepwell city", "taragarh bundi"],
    description: "Bundi is one of Rajasthan's most atmospheric smaller heritage towns, known for painted palaces, stepwells and slow old-street charm.",
    heroImage: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Bundi Palace", "Stepwells", "Quiet heritage lanes"],
    spotlight: "Bundi rewards travellers who move slowly, because the charm sits in painted rooms, baori architecture and the town's quieter rhythm rather than checklist sightseeing alone.",
    bestFor: ["Offbeat Rajasthan", "Photography", "Short heritage trips", "Road routes"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "1 to 2 days" },
      { label: "Known for", value: "Bundi Palace, baoris, murals" },
      { label: "Getting around", value: "Walk, auto, local cab" }
    ],
    travelTips: [
      { title: "Walk the old core", desc: "Much of Bundi's appeal sits in short distances between palace walls, blue lanes and stepwell corners.", icon: "🚶" },
      { title: "Carry a camera for details", desc: "Painted rooms, arches and textured walls create some of the state's best slow-heritage photography.", icon: "📷" },
      { title: "Pair it with Kota if needed", desc: "Bundi is easy to combine with Kota for rail access and a fuller two-city plan.", icon: "🛣️" }
    ],
    hotels: [
      {
        name: "Bundi Vilas", tier: "Mid-Range", price: "₹4,500", rating: "4.5", location: "Near Palace Road, Bundi",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1400&auto=format&fit=crop')",
        desc: "A heritage-style stay with fort-facing character and good access to the older part of Bundi.",
        amenities: ["Heritage style", "Views", "Courtyard", "Walkable location"],
        link: "https://www.booking.com/searchresults.html?ss=Bundi+Vilas"
      },
      {
        name: "Hadoti Palace", tier: "Luxury", price: "₹7,000", rating: "4.3", location: "Bundi Bypass Road, Bundi",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.40)), url('https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1400&auto=format&fit=crop')",
        desc: "A larger stay option for travellers who want comfort, parking and a more spread-out property feel.",
        amenities: ["Pool", "Parking", "Family rooms", "Restaurant"],
        link: "https://www.booking.com/searchresults.html?ss=Hadoti+Palace+Bundi"
      },
      {
        name: "Kasera Paradise", tier: "Budget", price: "₹1,500", rating: "4.0", location: "Near Bus Stand, Bundi",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1400&auto=format&fit=crop')",
        desc: "A simple low-cost base for travellers who mainly need a clean bed and central starting point.",
        amenities: ["Budget rooms", "Central location", "Parking", "Short stays"],
        link: "https://www.booking.com/searchresults.html?ss=Kasera+Paradise+Bundi"
      }
    ],
    food: [
      {
        category: "Street", name: "Kachori and Chai", image: "🥟", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=80')",
        desc: "Simple old-town breakfasts are part of the Bundi mood and work well before palace climbs.", price: "₹60", rating: "4.3", link: "https://www.google.com/maps/search/Kachori+Bundi"
      },
      {
        category: "Restaurant", name: "Tom and Jerry Restaurant", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A familiar traveller stop for simple meals, rooftop breaks and easy heritage-town pacing.", price: "₹250", rating: "4.3", link: "https://www.google.com/maps/search/Tom+and+Jerry+Restaurant+Bundi"
      },
      {
        category: "Traditional", name: "Rajasthani Lunch Plate", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80')",
        desc: "A hearty local meal is the best reset after fort stairs and stepwell walks in the heat.", price: "₹220", rating: "4.4", link: "https://www.google.com/maps/search/Rajasthani+food+Bundi"
      }
    ],
    transport: [
      {
        title: "Jaipur Airport", type: "Airport", icon: "✈️", details: "Jaipur is a common air entry point before continuing by road to Bundi.", costLabel: "Airport to town", costValue: "₹4,000 to ₹6,500", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Bundi Railway Station", type: "Railway", icon: "🚆", details: "A modest rail point, with Kota often acting as the more connected backup rail hub.", costLabel: "Station transfer", costValue: "₹80 to ₹200", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Local Auto and Cab", type: "Local travel", icon: "🚕", details: "The old part is walkable, but autos and cabs help for fort climbs and station transfers.", costLabel: "Town ride", costValue: "₹60 to ₹220", link: "https://www.google.com/maps/search/Bundi+auto+service"
      }
    ],
    attractions: [
      {
        name: "Bundi Palace", type: "Palace", icon: "🏛", rating: "4.7", time: "1-2 hrs",
        desc: "A painted palace complex with layered rooms, murals and one of Rajasthan's most rewarding smaller-city heritage experiences.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Bundi+Palace",
        history: "Bundi Palace is celebrated for its mural traditions and intimate scale compared with the state's bigger palace complexes.",
        bestTime: "Morning",
        ticketInfo: "Local ticket applies",
        highlights: "Murals, palace rooms, heritage photography"
      },
      {
        name: "Taragarh Fort Bundi", type: "Fort", icon: "🏰", rating: "4.5", time: "1-2 hrs",
        desc: "A hill fort above the town that adds strong views and rougher old-Rajasthan atmosphere to a Bundi route.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Taragarh+Fort+Bundi",
        history: "Taragarh has long watched over Bundi and helps explain how the town's layered heritage grew beneath it.",
        bestTime: "Cool morning hours",
        ticketInfo: "Road and ticket rules may vary",
        highlights: "Hilltop views, fort ruins, town panorama"
      },
      {
        name: "Rani Ji Ki Baori", type: "Stepwell", icon: "🪜", rating: "4.6", time: "30-45 mins",
        desc: "One of Bundi's most famous stepwells, admired for arches, carved detail and photogenic depth.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Rani+Ji+Ki+Baori+Bundi",
        history: "The baori reflects Bundi's reputation as one of Rajasthan's richest stepwell towns, where water architecture became an art form.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Usually modest entry or open access",
        highlights: "Stepwell design, carved arches, photo stop"
      },
      {
        name: "Sukh Mahal", type: "Palace", icon: "🌿", rating: "4.3", time: "30-45 mins",
        desc: "A quieter waterside palace stop that works well if you want a softer final note after the main fort-and-palace circuit.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Sukh+Mahal+Bundi",
        history: "The palace adds a calmer, lakeside chapter to Bundi's otherwise more vertical and fort-facing heritage story.",
        bestTime: "Late afternoon",
        ticketInfo: "Check local access rules",
        highlights: "Lake edge, quiet atmosphere, gentle ending stop"
      }
    ],
    itineraries: {
      budget: {
        title: "1-Day Budget Bundi",
        days: [
          { label: "Day 1", activities: [{ time: "9:00 AM", text: "Bundi Palace" }, { time: "11:30 AM", text: "Rani Ji Ki Baori" }, { time: "2:00 PM", text: "Lunch break" }, { time: "5:00 PM", text: "Taragarh Fort viewpoint" }] }
        ]
      },
      mid: {
        title: "2-Day Bundi Heritage Slowdown",
        days: [
          { label: "Day 1", activities: [{ time: "10:00 AM", text: "Bundi Palace and old lanes" }, { time: "2:00 PM", text: "Stepwell route" }, { time: "6:00 PM", text: "Rooftop dinner" }] },
          { label: "Day 2", activities: [{ time: "8:30 AM", text: "Taragarh Fort" }, { time: "1:00 PM", text: "Sukh Mahal" }, { time: "4:00 PM", text: "Checkout and onward travel" }] }
        ]
      },
      luxury: {
        title: "2-Day Curated Bundi Stay",
        days: [
          { label: "Day 1", activities: [{ time: "1:00 PM", text: "Heritage stay check-in" }, { time: "5:30 PM", text: "Slow old-town and dinner view" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private palace and baori route" }, { time: "1:30 PM", text: "Lunch and rest" }, { time: "4:30 PM", text: "Departure transfer" }] }
        ]
      }
    }
  },

  alwar: {
    name: "Alwar",
    state: "Rajasthan",
    aliases: ["alwar city", "sariska gateway", "bala quila"],
    description: "Alwar combines lakes, palaces, fortified hills and easy access to Sariska into a flexible Rajasthan stop not far from Delhi.",
    heroImage: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Bala Quila", "Siliserh Lake", "Sariska access"],
    spotlight: "Alwar works well as a mixed heritage-and-nature route, especially if you treat the fort, lake and Sariska side as separate layers rather than one rushed day.",
    bestFor: ["Weekend escapes", "Delhi road trips", "History and nature mix", "Family trips"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "1 to 2 days" },
      { label: "Known for", value: "Bala Quila, lakes, Sariska side" },
      { label: "Getting around", value: "Cab, auto, private car" }
    ],
    travelTips: [
      { title: "Use a cab for the hill and lake route", desc: "The attractions spread out enough that a vehicle saves a lot of time compared with piecemeal local transport.", icon: "🚕" },
      { title: "Pair Sariska separately if possible", desc: "The wildlife side works best as its own half-day or full-day layer instead of being squeezed into a city circuit.", icon: "🐆" },
      { title: "Keep sweets on the list", desc: "Alwar's milk-cake and sweet culture are part of the stop, especially on short weekend trips.", icon: "🍮" }
    ],
    hotels: [
      {
        name: "Neemrana's Hill Fort Kesroli", tier: "Luxury", price: "₹11,000", rating: "4.6", location: "Kesroli, Alwar",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.40)), url('https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1400&auto=format&fit=crop')",
        desc: "A strong heritage stay choice if you want a fort-resort experience within Alwar district rather than only the city core.",
        amenities: ["Heritage fort", "Pool", "Views", "Weekend resort"],
        link: "https://www.booking.com/searchresults.html?ss=Hill+Fort+Kesroli+Alwar"
      },
      {
        name: "Lemon Tree Hotel Alwar", tier: "Mid-Range", price: "₹5,800", rating: "4.4", location: "MIA, Alwar",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1400&auto=format&fit=crop')",
        desc: "A modern practical stay with reliable comfort for business-plus-leisure travellers doing a quick Alwar route.",
        amenities: ["Modern rooms", "Restaurant", "Parking", "Comfort stay"],
        link: "https://www.booking.com/searchresults.html?ss=Lemon+Tree+Alwar"
      },
      {
        name: "Hotel Natraj", tier: "Budget", price: "₹1,800", rating: "4.0", location: "Hope Circus, Alwar",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1400&auto=format&fit=crop')",
        desc: "A straightforward budget stay for travellers who want central access and a simple overnight stop.",
        amenities: ["Central location", "Budget rooms", "Parking", "Short stay"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Natraj+Alwar"
      }
    ],
    food: [
      {
        category: "Sweet", name: "Alwar Milk Cake", image: "🍮", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1400&q=80')",
        desc: "Alwar's most famous edible takeaway and one of the easiest things to seek out on a short trip.", price: "₹200", rating: "4.7", link: "https://www.google.com/maps/search/Milk+Cake+Alwar"
      },
      {
        category: "Traditional", name: "Rajasthani Lunch", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80')",
        desc: "A dependable meal choice if you want something filling between the fort road and lake stop.", price: "₹280", rating: "4.4", link: "https://www.google.com/maps/search/Rajasthani+Food+Alwar"
      },
      {
        category: "Restaurant", name: "Prem Pavitra Bhojnalaya", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A practical sit-down meal stop if you want a simple city lunch before heading back out to the fort or Sariska side.", price: "₹250", rating: "4.3", link: "https://www.google.com/maps/search/Restaurant+Alwar"
      }
    ],
    transport: [
      {
        title: "Delhi Airport", type: "Airport", icon: "✈️", details: "Many Alwar trips start from Delhi, especially for short road-trip weekends.", costLabel: "Delhi to Alwar", costValue: "₹3,500 to ₹6,500", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Alwar Junction", type: "Railway", icon: "🚆", details: "A practical rail option for visitors coming from Delhi, Jaipur and north Indian corridors.", costLabel: "Station transfer", costValue: "₹80 to ₹220", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Private Day Cab", type: "Local travel", icon: "🚕", details: "The easiest way to cover Bala Quila, Siliserh and city monuments without breaking the route up.", costLabel: "Half day", costValue: "₹1,200 to ₹2,500", link: "https://www.google.com/maps/search/Alwar+cab"
      }
    ],
    attractions: [
      {
        name: "Bala Quila", type: "Fort", icon: "🏰", rating: "4.5", time: "1-2 hrs",
        desc: "The big hill fort above Alwar, best for wide views and understanding the city's older defensive geography.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Bala+Quila+Alwar",
        history: "Bala Quila has long watched over the city and remains one of Alwar's most defining landmarks.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Check current road and entry rules",
        highlights: "Hill views, fort walls, city panorama"
      },
      {
        name: "City Palace and Museum", type: "Palace", icon: "🏛", rating: "4.4", time: "1 hr",
        desc: "A central heritage stop that helps ground Alwar's princely and cultural story within the city core.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/City+Palace+Alwar",
        history: "The palace and museum space reflect Alwar's courtly history and hold together the urban heritage route.",
        bestTime: "Late morning",
        ticketInfo: "Local ticket applies",
        highlights: "Museum displays, palace exterior, city history"
      },
      {
        name: "Siliserh Lake", type: "Lake", icon: "🌊", rating: "4.5", time: "1-2 hrs",
        desc: "A calm lake outing for sunset, light boating and a welcome break from fort-and-palace sightseeing.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Siliserh+Lake+Alwar",
        history: "The lake area adds a leisure layer to Alwar's otherwise more structural heritage route.",
        bestTime: "Late afternoon",
        ticketInfo: "Open public lake zone",
        highlights: "Lake air, sunset, quiet detour"
      },
      {
        name: "Moosi Maharani Ki Chhatri", type: "Monument", icon: "🏯", rating: "4.4", time: "30-45 mins",
        desc: "An ornate cenotaph complex that rewards short visits with excellent stone detail and a quieter heritage mood.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Moosi+Maharani+Ki+Chhatri+Alwar",
        history: "The chhatri stands as one of the city's finer commemorative monuments and fits naturally into a palace-side route.",
        bestTime: "Morning or evening",
        ticketInfo: "Open exterior heritage stop",
        highlights: "Stone carving, heritage mood, short stop"
      }
    ],
    itineraries: {
      budget: {
        title: "1-Day Budget Alwar",
        days: [
          { label: "Day 1", activities: [{ time: "9:30 AM", text: "City Palace and museum" }, { time: "12:30 PM", text: "Lunch and milk cake stop" }, { time: "3:30 PM", text: "Bala Quila" }, { time: "5:30 PM", text: "Siliserh sunset" }] }
        ]
      },
      mid: {
        title: "2-Day Alwar and Lake Loop",
        days: [
          { label: "Day 1", activities: [{ time: "10:00 AM", text: "City Palace and Moosi Maharani Ki Chhatri" }, { time: "2:00 PM", text: "Rest and lunch" }, { time: "5:30 PM", text: "Siliserh Lake" }] },
          { label: "Day 2", activities: [{ time: "9:00 AM", text: "Bala Quila" }, { time: "1:00 PM", text: "Sweet shopping" }, { time: "4:00 PM", text: "Checkout or Sariska add-on" }] }
        ]
      },
      luxury: {
        title: "2-Day Alwar Heritage Weekend",
        days: [
          { label: "Day 1", activities: [{ time: "1:00 PM", text: "Heritage resort check-in" }, { time: "5:30 PM", text: "Fort-view evening or lake drive" }] },
          { label: "Day 2", activities: [{ time: "9:30 AM", text: "Private heritage route" }, { time: "1:30 PM", text: "Lunch and leisure" }, { time: "4:30 PM", text: "Departure toward Delhi" }] }
        ]
      }
    }
  },

  kota: {
    name: "Kota",
    state: "Rajasthan",
    aliases: ["kota city", "chambal city", "education city"],
    description: "Kota mixes riverfront energy, parks, older palaces and practical city convenience into a route that works beyond its education-hub image.",
    heroImage: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Chambal riverfront", "Garadia Mahadev", "City parks"],
    spotlight: "Kota makes the most sense when you split it between urban parks and viewpoints inside the city and one stronger natural outing like Garadia Mahadev.",
    bestFor: ["Road breaks", "Family outings", "Short city stays", "Riverfront evenings"],
    quickFacts: [
      { label: "Best season", value: "October to March" },
      { label: "Ideal stay", value: "1 to 2 days" },
      { label: "Known for", value: "Chambal views, parks, coaching hub" },
      { label: "Getting around", value: "Auto, cab, local car" }
    ],
    travelTips: [
      { title: "Keep Garadia separate", desc: "It deserves its own drive window rather than being squeezed into a city-only afternoon.", icon: "🛣️" },
      { title: "Use the riverfront in the evening", desc: "Kota's atmosphere improves sharply after daytime heat, especially around public spaces.", icon: "🌆" },
      { title: "Stay near station or main roads", desc: "A central stay helps if you are treating Kota as a short, transit-linked city break.", icon: "🚆" }
    ],
    hotels: [
      {
        name: "Country Inn and Suites Kota", tier: "Luxury", price: "₹7,500", rating: "4.4", location: "Jhalawar Road, Kota",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.40)), url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1400&auto=format&fit=crop')",
        desc: "A polished modern stay that works well for families and short leisure-plus-comfort trips in the city.",
        amenities: ["Pool", "Modern rooms", "Restaurant", "Road access"],
        link: "https://www.booking.com/searchresults.html?ss=Country+Inn+and+Suites+Kota"
      },
      {
        name: "Umed Bhawan Palace Kota", tier: "Mid-Range", price: "₹5,500", rating: "4.3", location: "Station Road, Kota",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1400&auto=format&fit=crop')",
        desc: "A heritage-leaning stay for travellers who prefer older architecture without moving too far from the city core.",
        amenities: ["Heritage feel", "Restaurant", "Central access", "Garden grounds"],
        link: "https://www.booking.com/searchresults.html?ss=Umed+Bhawan+Palace+Kota"
      },
      {
        name: "Hotel Lilac", tier: "Budget", price: "₹1,900", rating: "4.1", location: "Talwandi, Kota",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1400&auto=format&fit=crop')",
        desc: "A straightforward budget option for short stays with decent access to the main city roads.", amenities: ["Budget rooms", "Central access", "Parking", "Simple stay"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Lilac+Kota"
      }
    ],
    food: [
      {
        category: "Street", name: "Kota Kachori", image: "🥟", bg: "linear-gradient(rgba(180,83,9,0.18), rgba(124,45,18,0.34)), url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=80')",
        desc: "The most familiar local bite and an easy snack stop during short city runs.", price: "₹50", rating: "4.5", link: "https://www.google.com/maps/search/Kota+Kachori"
      },
      {
        category: "Traditional", name: "Rajasthani Thali", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80')",
        desc: "A simple and reliable lunch option after parks, viewpoints or station-linked sightseeing.", price: "₹250", rating: "4.4", link: "https://www.google.com/maps/search/Rajasthani+Food+Kota"
      },
      {
        category: "Restaurant", name: "Eatos Restaurant", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "A comfortable city meal option if you want a straightforward dinner after a long day outdoors.", price: "₹350", rating: "4.3", link: "https://www.google.com/maps/search/Restaurant+Kota"
      }
    ],
    transport: [
      {
        title: "Jaipur Airport", type: "Airport", icon: "✈️", details: "Jaipur is the more practical air gateway before a rail or road transfer to Kota.", costLabel: "Jaipur to Kota", costValue: "₹3,500 to ₹6,000", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Kota Junction", type: "Railway", icon: "🚆", details: "One of north India's busiest and most connected railway stations, making Kota easy to fit into larger routes.", costLabel: "Station transfer", costValue: "₹80 to ₹220", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Auto and Cab Network", type: "Local travel", icon: "🚕", details: "Autos cover city hops, while cabs help for Garadia Mahadev and spread-out riverfront stops.", costLabel: "City ride", costValue: "₹60 to ₹250", link: "https://www.google.com/maps/search/Kota+cab"
      }
    ],
    attractions: [
      {
        name: "Garadia Mahadev", type: "Viewpoint", icon: "🌄", rating: "4.8", time: "2-3 hrs",
        desc: "The most striking natural viewpoint near Kota, looking out over a sweeping bend of the Chambal river gorge.", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Garadia+Mahadev+Kota",
        history: "The viewpoint is the region's standout landscape stop and has become the visual icon of modern Kota tourism.",
        bestTime: "Sunrise or sunset",
        ticketInfo: "Road access and local parking charges may apply",
        highlights: "Chambal gorge, dramatic cliff view, nature photography"
      },
      {
        name: "Seven Wonders Park", type: "Park", icon: "🌍", rating: "4.4", time: "1 hr",
        desc: "A family-friendly city attraction with miniature global landmarks and easy evening energy by the waterfront.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Seven+Wonders+Park+Kota",
        history: "The park reflects Kota's more recent tourism development and works best as an easy urban stop rather than a heritage site.",
        bestTime: "Evening",
        ticketInfo: "Entry fee applies",
        highlights: "Family outing, lit-up evening, easy walk"
      },
      {
        name: "Chambal Riverfront", type: "Riverfront", icon: "🌊", rating: "4.5", time: "1-2 hrs",
        desc: "A modern public-space zone where Kota's evening atmosphere becomes more relaxed and social.", bg: "linear-gradient(rgba(15,76,129,0.16), rgba(56,189,248,0.30)), url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Chambal+Riverfront+Kota",
        history: "The riverfront is part of Kota's newer city-facing identity and gives the destination more than a transit-city feel.",
        bestTime: "Evening",
        ticketInfo: "Check current public access or ticket policy",
        highlights: "Evening lights, public walk, river views"
      },
      {
        name: "Kota Garh and Museum", type: "Palace", icon: "🏛", rating: "4.3", time: "1 hr",
        desc: "A heritage stop for travellers who want at least one older royal-layer site inside a mostly modern city route.", bg: "linear-gradient(rgba(109,66,36,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Kota+Garh+Museum",
        history: "The garh and museum tie Kota back to its princely roots and add context to the city's older identity.",
        bestTime: "Late morning",
        ticketInfo: "Museum ticket may apply",
        highlights: "Royal artifacts, palace edge, city history"
      }
    ],
    itineraries: {
      budget: {
        title: "1-Day Budget Kota",
        days: [
          { label: "Day 1", activities: [{ time: "9:30 AM", text: "Kota Garh and museum" }, { time: "1:00 PM", text: "Kachori lunch break" }, { time: "4:00 PM", text: "Seven Wonders Park" }, { time: "6:00 PM", text: "Chambal Riverfront" }] }
        ]
      },
      mid: {
        title: "2-Day Kota City and Viewpoint Loop",
        days: [
          { label: "Day 1", activities: [{ time: "10:00 AM", text: "Kota Garh" }, { time: "2:00 PM", text: "Rest and city lunch" }, { time: "6:00 PM", text: "Riverfront evening" }] },
          { label: "Day 2", activities: [{ time: "7:00 AM", text: "Garadia Mahadev drive" }, { time: "1:00 PM", text: "Return lunch" }, { time: "5:00 PM", text: "Seven Wonders Park if skipped" }] }
        ]
      },
      luxury: {
        title: "2-Day Comfortable Kota Break",
        days: [
          { label: "Day 1", activities: [{ time: "1:00 PM", text: "Hotel check-in and leisure" }, { time: "6:00 PM", text: "Curated riverfront evening" }] },
          { label: "Day 2", activities: [{ time: "8:00 AM", text: "Private Garadia Mahadev outing" }, { time: "1:30 PM", text: "Lunch and relax" }, { time: "4:30 PM", text: "Departure transfer" }] }
        ]
      }
    }
  },

  neemrana: {
    name: "Neemrana",
    state: "Rajasthan",
    aliases: ["neemrana fort", "neemrana fort palace", "heritage weekend"],
    description: "Neemrana is a heritage-weekend destination built around its famous fort-palace stay, stepwells and easy road access from Delhi and Gurugram.",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Neemrana Fort Palace", "Weekend escape", "Heritage stay"],
    spotlight: "Neemrana works best as a short heritage pause, where the fort-palace, zipline, baori and unhurried stay experience matter more than long sightseeing lists.",
    bestFor: ["Weekend stays", "Couples", "Delhi road trips", "Short heritage escapes"],
    quickFacts: [
      { label: "Best season", value: "September to March" },
      { label: "Ideal stay", value: "1 to 2 days" },
      { label: "Known for", value: "Fort stay, zipline, road-trip ease" },
      { label: "Getting around", value: "Private car, cab, hotel transport" }
    ],
    travelTips: [
      { title: "Treat the fort as the core experience", desc: "Neemrana is more about the stay and atmosphere than a long, packed city itinerary.", icon: "🏰" },
      { title: "Go off-peak for a calmer feel", desc: "Weekends get busy, so weekday stays feel more intimate and easier to enjoy fully.", icon: "📅" },
      { title: "Drive timing matters", desc: "Highway traffic from Delhi can shape the whole mood, so start early on departure days.", icon: "🚗" }
    ],
    hotels: [
      {
        name: "Neemrana Fort-Palace", tier: "Luxury", price: "₹13,500", rating: "4.6", location: "Fort Road, Neemrana",
        image: "🏰", bg: "linear-gradient(rgba(16,34,59,0.18), rgba(16,34,59,0.40)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop')",
        desc: "The signature stay and main reason most travellers come, with layered terraces, pools and heritage ambience built into the hillside.",
        amenities: ["Heritage fort", "Pool", "Zipline access", "Weekend stay"],
        link: "https://www.booking.com/searchresults.html?ss=Neemrana+Fort+Palace"
      },
      {
        name: "Ramada by Wyndham Neemrana", tier: "Mid-Range", price: "₹6,000", rating: "4.3", location: "NH 48, Neemrana",
        image: "🏛", bg: "linear-gradient(rgba(107,66,38,0.18), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop')",
        desc: "A practical full-service stay for travellers who want comfort and highway convenience without the fort-palace splurge.",
        amenities: ["Pool", "Restaurant", "Parking", "Road access"],
        link: "https://www.booking.com/searchresults.html?ss=Ramada+Neemrana"
      },
      {
        name: "Hotel Highway King", tier: "Budget", price: "₹1,900", rating: "4.0", location: "Neemrana Highway Stretch",
        image: "🏠", bg: "linear-gradient(rgba(37,99,235,0.15), rgba(15,23,42,0.34)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop')",
        desc: "A simple road-trip stop for travellers who mainly want a night halt close to the highway.", amenities: ["Budget rooms", "Highway access", "Parking", "Short stop"],
        link: "https://www.booking.com/searchresults.html?ss=Hotel+Neemrana"
      }
    ],
    food: [
      {
        category: "Traditional", name: "Rajasthani Thali", image: "🥘", bg: "linear-gradient(rgba(124,45,18,0.18), rgba(245,158,11,0.30)), url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80')",
        desc: "A dependable option whether you stay in the fort or stop en route on a highway-based trip.", price: "₹320", rating: "4.4", link: "https://www.google.com/maps/search/Rajasthani+food+Neemrana"
      },
      {
        category: "Restaurant", name: "Fort Terrace Dining", image: "🍽", bg: "linear-gradient(rgba(20,83,45,0.16), rgba(16,34,59,0.34)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
        desc: "The fort-palace dining experience is part of the main Neemrana draw, especially after sunset over the terraces.", price: "₹900", rating: "4.5", link: "https://www.google.com/maps/search/Neemrana+Fort+Restaurant"
      },
      {
        category: "Cafe", name: "Highway Chai and Snacks", image: "☕", bg: "linear-gradient(rgba(15,155,142,0.16), rgba(16,34,59,0.32)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80')",
        desc: "Simple roadside chai stops work well for those treating Neemrana as a drive-and-pause weekend outing.", price: "₹80", rating: "4.1", link: "https://www.google.com/maps/search/Chai+Neemrana"
      }
    ],
    transport: [
      {
        title: "Delhi Airport", type: "Airport", icon: "✈️", details: "Most Neemrana visitors arrive by road from Delhi airport, Gurugram or NCR stays.", costLabel: "Delhi to Neemrana", costValue: "₹3,500 to ₹6,000", link: "https://www.makemytrip.com/flights/"
      },
      {
        title: "Rewari or Alwar Rail Connection", type: "Railway", icon: "🚆", details: "Rail options exist nearby, but road travel remains the easiest and most common way to reach Neemrana.", costLabel: "Railhead to fort", costValue: "₹1,000 to ₹2,000", link: "https://www.irctc.co.in/nget/train-search"
      },
      {
        title: "Private Car or Cab", type: "Local travel", icon: "🚕", details: "A personal car or booked cab is by far the smoothest way to handle the highway approach and local movement.", costLabel: "One-way road trip", costValue: "₹2,500 to ₹5,000", link: "https://www.google.com/maps/search/Neemrana+cab"
      }
    ],
    attractions: [
      {
        name: "Neemrana Fort-Palace", type: "Fort", icon: "🏰", rating: "4.8", time: "2-3 hrs",
        desc: "The signature multi-level fort-stay complex that defines Neemrana's entire tourism identity.", bg: "linear-gradient(rgba(91,58,41,0.18), rgba(91,58,41,0.40)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Neemrana+Fort+Palace",
        history: "The restored fort became one of India's best-known heritage-hotel revival stories and turned Neemrana into a weekend destination.",
        bestTime: "Late afternoon through morning stay window",
        ticketInfo: "Usually best accessed through stay or day-visit policy",
        highlights: "Terraces, heritage rooms, hill views"
      },
      {
        name: "Neemrana Baori", type: "Stepwell", icon: "🪜", rating: "4.4", time: "30 mins",
        desc: "A good short stop that adds old water architecture context to a fort-focused trip.", bg: "linear-gradient(rgba(63,63,70,0.18), rgba(63,63,70,0.34)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Neemrana+Baori",
        history: "The baori reflects how stepwells and water systems shaped older settlement life in this belt of Rajasthan.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Short public visit area",
        highlights: "Stepwell forms, heritage add-on, quick stop"
      },
      {
        name: "Flying Fox Neemrana", type: "Adventure", icon: "🪂", rating: "4.5", time: "1 hr",
        desc: "A zipline experience that gives Neemrana a more active, experiential layer beyond the heritage stay itself.", bg: "linear-gradient(rgba(15,155,142,0.16), rgba(16,34,59,0.32)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", link: "https://www.google.com/maps/search/Flying+Fox+Neemrana",
        history: "Adventure activities helped broaden Neemrana from a simple fort stay into a more rounded weekend destination.",
        bestTime: "Morning or late afternoon",
        ticketInfo: "Pre-booking often recommended",
        highlights: "Zipline, fort views, active add-on"
      },
      {
        name: "Fort Terraces and Sunset Corners", type: "Viewpoint", icon: "🌇", rating: "4.6", time: "45 mins",
        desc: "Some of Neemrana's best moments are not separate monuments at all, but the terraced fort views at golden hour.", bg: "linear-gradient(rgba(124,45,18,0.16), rgba(16,34,59,0.38)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop')", link: "https://www.google.com/maps/search/Neemrana+Fort+sunset+view",
        history: "The fort's stepped design is part of what makes the sunset experience so memorable and built-in to the stay.",
        bestTime: "Sunset",
        ticketInfo: "Usually within fort access",
        highlights: "Golden hour, terrace views, slow stay mood"
      }
    ],
    itineraries: {
      budget: {
        title: "1-Day Quick Neemrana Break",
        days: [
          { label: "Day 1", activities: [{ time: "11:00 AM", text: "Arrival and fort check-in or visit" }, { time: "2:00 PM", text: "Lunch and baori stop" }, { time: "5:30 PM", text: "Sunset terrace view" }] }
        ]
      },
      mid: {
        title: "2-Day Neemrana Weekend Stay",
        days: [
          { label: "Day 1", activities: [{ time: "1:00 PM", text: "Check-in and leisure" }, { time: "6:00 PM", text: "Fort dinner and sunset walk" }] },
          { label: "Day 2", activities: [{ time: "9:30 AM", text: "Zipline or heritage walk" }, { time: "1:00 PM", text: "Brunch and checkout" }, { time: "3:00 PM", text: "Drive back to Delhi" }] }
        ]
      },
      luxury: {
        title: "2-Day Curated Neemrana Escape",
        days: [
          { label: "Day 1", activities: [{ time: "2:00 PM", text: "Premium fort suite check-in" }, { time: "6:30 PM", text: "Terrace dinner and sunset" }] },
          { label: "Day 2", activities: [{ time: "10:00 AM", text: "Private heritage and activity window" }, { time: "1:30 PM", text: "Leisure lunch" }, { time: "4:00 PM", text: "Comfortable return drive" }] }
        ]
      }
    }
  }
});

if (typeof window !== "undefined") {
  window.cityData = cityData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = cityData;
}
