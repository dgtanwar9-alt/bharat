/*
 * UTTAR PRADESH CITY DATA
 *
 * IMPORTANT:
 * 1. Load city-data.js BEFORE this file.
 * 2. Do NOT write const cityData again.
 * 3. Every key must be unique.
 * 4. Add this file before app.js / city-detail.js.
 */

Object.assign(cityData, {

agra: {
    name: "Agra",
    state: "Uttar Pradesh",
    aliases: ["taj mahal city", "agra up"],
    description: "A world-famous Mughal heritage city known for the Taj Mahal, grand forts, tombs, gardens, and historic architecture.",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Taj Mahal", "Mughal Heritage", "UNESCO Sites"],
    spotlight: "Agra is one of India’s most visited destinations and forms the heart of the Golden Triangle route. Beyond the Taj Mahal, the city offers forts, Mughal tombs, riverside gardens, traditional markets, and famous local food.",
    bestFor: ["Heritage lovers", "Couples", "Families", "Photography"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "2 to 3 days" },
        { label: "Famous for", value: "Taj Mahal" }
    ],
    travelTips: [
        { title: "Visit Taj early", desc: "Reach the Taj Mahal near opening time for cooler weather and fewer crowds.", icon: "🌅" },
        { title: "Keep one day for heritage", desc: "Agra Fort, Itmad-ud-Daulah and Mehtab Bagh deserve enough time.", icon: "🏰" }
    ],
    attractions: [
        { name: "Taj Mahal", type: "Monument", icon: "🕌", rating: "4.8", time: "2-3 hrs", desc: "World-famous white marble mausoleum and UNESCO World Heritage Site.", bg: "linear-gradient(135deg,#6d4c41,#d7ccc8)", link: "https://maps.google.com/?q=Taj+Mahal", history: "Commissioned by Mughal emperor Shah Jahan in memory of Mumtaz Mahal.", bestTime: "Sunrise and Oct to Mar", ticketInfo: "Entry ticket required", highlights: "Marble architecture, gardens, Yamuna views" },
        { name: "Agra Fort", type: "Fort", icon: "🏰", rating: "4.6", time: "2 hrs", desc: "Massive Mughal fort complex with palaces, courtyards and historic architecture.", bg: "linear-gradient(135deg,#8d2f23,#d17b49)", link: "https://maps.google.com/?q=Agra+Fort" },
        { name: "Mehtab Bagh", type: "Garden", icon: "🌿", rating: "4.3", time: "1-2 hrs", desc: "Historic Mughal garden offering famous views of the Taj Mahal across the Yamuna.", bg: "linear-gradient(135deg,#355834,#8aa35b)", link: "https://maps.google.com/?q=Mehtab+Bagh" },
        { name: "Itmad-ud-Daulah", type: "Tomb", icon: "🏛️", rating: "4.4", time: "1 hr", desc: "Elegant Mughal tomb often called the Baby Taj.", bg: "linear-gradient(135deg,#735d44,#d9c8a9)", link: "https://maps.google.com/?q=Itmad-ud-Daulah" },
        { name: "Akbar's Tomb Sikandra", type: "Monument", icon: "🏛️", rating: "4.4", time: "1-2 hrs", desc: "Grand mausoleum of Mughal emperor Akbar surrounded by gardens.", bg: "linear-gradient(135deg,#653b2a,#b88963)", link: "https://maps.google.com/?q=Akbar's+Tomb+Sikandra" }
    ],
    hotels: [
        { name: "Budget Stay Agra", tier: "Budget", price: "₹1,200", rating: "4.1", location: "Taj Ganj, Agra", image: "🏨", bg: "linear-gradient(135deg,#455a64,#78909c)", desc: "Affordable stay near major tourist areas.", amenities: ["Wifi", "AC"], link: "https://www.google.com/search?q=budget+hotels+Agra" },
        { name: "Heritage Stay Agra", tier: "Mid-Range", price: "₹4,500", rating: "4.5", location: "Agra", image: "🏰", bg: "linear-gradient(135deg,#6d4c41,#bcaaa4)", desc: "Comfortable heritage-inspired stay for sightseeing trips.", amenities: ["Restaurant", "Wifi", "Parking"], link: "https://www.google.com/search?q=heritage+hotels+Agra" }
    ],
    food: [
        { category: "Sweet", name: "Agra Petha", image: "🍬", bg: "linear-gradient(135deg,#ffb74d,#ffe0b2)", desc: "Agra’s iconic translucent sweet available in many flavours.", price: "₹150+", rating: "4.6", link: "https://maps.google.com/?q=best+petha+Agra" },
        { category: "Street Food", name: "Bedai and Jalebi", image: "🥘", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Popular local breakfast combination served across old Agra.", price: "₹100+", rating: "4.5", link: "https://maps.google.com/?q=best+bedai+jalebi+Agra" }
    ],
    transport: [
        { title: "Agra Cantt Railway Station", type: "Railway", icon: "🚆", details: "Major railway station connecting Agra with Delhi and other Indian cities.", costLabel: "Local transfer", costValue: "₹100 to ₹400", link: "https://maps.google.com/?q=Agra+Cantt" },
        { title: "Local Travel", type: "Auto / Cab", icon: "🚕", details: "Auto-rickshaws, e-rickshaws and app-based cabs are commonly available.", costLabel: "Typical ride", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Agra" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Agra",
            days: [
                { label: "Day 1", activities: [{ time: "6:00 AM", text: "Taj Mahal sunrise visit" }, { time: "11:00 AM", text: "Agra Fort sightseeing" }, { time: "5:00 PM", text: "Mehtab Bagh sunset" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Itmad-ud-Daulah" }, { time: "12:00 PM", text: "Sikandra visit" }, { time: "5:00 PM", text: "Old Agra food and market walk" }] }
            ]
        },
        mid: {
            title: "3-Day Comfortable Agra",
            days: [
                { label: "Day 1", activities: [{ time: "6:00 AM", text: "Taj Mahal guided tour" }, { time: "11:00 AM", text: "Agra Fort" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Sikandra and Itmad-ud-Daulah" }, { time: "5:00 PM", text: "Mehtab Bagh" }] },
                { label: "Day 3", activities: [{ time: "9:00 AM", text: "Fatehpur Sikri day trip" }] }
            ]
        },
        luxury: {
            title: "3-Day Luxury Agra",
            days: [
                { label: "Day 1", activities: [{ time: "6:00 AM", text: "Private Taj Mahal experience" }, { time: "7:00 PM", text: "Fine dining experience" }] },
                { label: "Day 2", activities: [{ time: "10:00 AM", text: "Private Mughal heritage tour" }, { time: "5:00 PM", text: "Luxury sunset experience" }] },
                { label: "Day 3", activities: [{ time: "9:00 AM", text: "Private Fatehpur Sikri excursion" }] }
            ]
        }
    }
},

varanasi: {
    name: "Varanasi",
    state: "Uttar Pradesh",
    aliases: ["banaras", "kashi", "varanasi up"],
    description: "One of the world’s oldest living cities, famous for sacred Ganga ghats, temples, spiritual traditions, narrow lanes, music, and ancient culture.",
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Ganga Aarti", "Ancient Ghats", "Spiritual Capital"],
    spotlight: "Varanasi combines pilgrimage, living traditions, ancient temples, classical music, riverside culture, food, and unforgettable sunrise boat rides.",
    bestFor: ["Pilgrims", "Culture lovers", "Photographers", "Solo travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "2 to 4 days" },
        { label: "Famous for", value: "Ghats and Ganga Aarti" }
    ],
    travelTips: [
        { title: "Take a sunrise boat ride", desc: "The early morning Ganga experience is one of the city’s highlights.", icon: "🚣" },
        { title: "Walk through old lanes", desc: "Many temples, food shops, and heritage spots are best explored on foot.", icon: "🚶" }
    ],
    attractions: [
        { name: "Dashashwamedh Ghat", type: "Ghat", icon: "🪔", rating: "4.7", time: "2 hrs", desc: "Famous riverside ghat known for the grand evening Ganga Aarti.", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", link: "https://maps.google.com/?q=Dashashwamedh+Ghat" },
        { name: "Kashi Vishwanath Temple", type: "Temple", icon: "🛕", rating: "4.8", time: "2-3 hrs", desc: "One of the most sacred Shiva temples and a major pilgrimage destination.", bg: "linear-gradient(135deg,#7b1fa2,#ce93d8)", link: "https://maps.google.com/?q=Kashi+Vishwanath+Temple" },
        { name: "Assi Ghat", type: "Ghat", icon: "🌊", rating: "4.6", time: "2 hrs", desc: "Popular riverside destination for sunrise, Subah-e-Banaras, yoga, and cultural activities.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Assi+Ghat" },
        { name: "Ramnagar Fort", type: "Fort", icon: "🏰", rating: "4.1", time: "2 hrs", desc: "Historic riverside fort and museum associated with the former rulers of Banaras.", bg: "linear-gradient(135deg,#6d4c41,#bcaaa4)", link: "https://maps.google.com/?q=Ramnagar+Fort+Varanasi" }
    ],
    hotels: [
        { name: "Budget Stay Varanasi", tier: "Budget", price: "₹1,000", rating: "4.1", location: "Godowlia, Varanasi", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Affordable base for exploring old Varanasi and the ghats.", amenities: ["Wifi", "AC"], link: "https://www.google.com/search?q=budget+hotels+Varanasi" }
    ],
    food: [
        { category: "Street Food", name: "Kachori Sabzi", image: "🥘", bg: "linear-gradient(135deg,#f57c00,#ffcc80)", desc: "Classic Banarasi breakfast served in the old city.", price: "₹80+", rating: "4.6", link: "https://maps.google.com/?q=best+kachori+Varanasi" },
        { category: "Drink", name: "Banarasi Lassi", image: "🥛", bg: "linear-gradient(135deg,#fbc02d,#fff59d)", desc: "Thick traditional lassi served in earthen cups.", price: "₹70+", rating: "4.5", link: "https://maps.google.com/?q=best+lassi+Varanasi" }
    ],
    transport: [
        { title: "Varanasi Junction", type: "Railway", icon: "🚆", details: "Major railway connection for travelers arriving from across India.", costLabel: "Local transfer", costValue: "₹100 to ₹400", link: "https://maps.google.com/?q=Varanasi+Junction" },
        { title: "Lal Bahadur Shastri Airport", type: "Airport", icon: "✈️", details: "Main airport serving Varanasi and nearby pilgrimage destinations.", costLabel: "Airport transfer", costValue: "₹700 to ₹1,500", link: "https://maps.google.com/?q=Lal+Bahadur+Shastri+Airport" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Varanasi",
            days: [
                { label: "Day 1", activities: [{ time: "5:30 AM", text: "Sunrise boat ride" }, { time: "10:00 AM", text: "Kashi Vishwanath Temple" }, { time: "6:00 PM", text: "Ganga Aarti" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Assi Ghat" }, { time: "10:00 AM", text: "Old city walk" }, { time: "3:00 PM", text: "Ramnagar Fort" }] }
            ]
        },
        mid: {
            title: "3-Day Comfortable Varanasi",
            days: [
                { label: "Day 1", activities: [{ time: "5:30 AM", text: "Private sunrise boat ride" }, { time: "10:00 AM", text: "Temple and old city tour" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Sarnath excursion" }, { time: "6:00 PM", text: "Ganga Aarti" }] },
                { label: "Day 3", activities: [{ time: "8:00 AM", text: "Ramnagar Fort and local food tour" }] }
            ]
        },
        luxury: {
            title: "3-Day Luxury Varanasi",
            days: [
                { label: "Day 1", activities: [{ time: "5:30 AM", text: "Private luxury boat experience" }, { time: "7:00 PM", text: "Curated riverside dinner" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private temple and heritage tour" }, { time: "6:00 PM", text: "Reserved Ganga Aarti experience" }] },
                { label: "Day 3", activities: [{ time: "9:00 AM", text: "Private Sarnath excursion" }] }
            ]
        }
    }
},

lucknow: {
    name: "Lucknow",
    state: "Uttar Pradesh",
    aliases: ["lucknow up", "city of nawabs"],
    description: "The capital of Uttar Pradesh, known for Nawabi architecture, grand monuments, refined culture, traditional markets, and celebrated Awadhi cuisine.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Nawabi Heritage", "Awadhi Food", "Historic Monuments"],
    spotlight: "Lucknow offers monumental architecture, living traditions, markets, museums, parks, and one of India’s most celebrated culinary cultures.",
    bestFor: ["Food lovers", "Heritage travelers", "Families", "Culture lovers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "2 to 3 days" },
        { label: "Famous for", value: "Nawabi heritage" }
    ],
    travelTips: [
        { title: "Explore old Lucknow", desc: "The historic core contains major monuments, markets, and traditional food.", icon: "🕌" },
        { title: "Try Awadhi cuisine", desc: "Keep time for kebabs, biryani, korma, and local sweets.", icon: "🍢" }
    ],
    attractions: [
        { name: "Bara Imambara", type: "Monument", icon: "🕌", rating: "4.6", time: "2-3 hrs", desc: "Iconic Nawabi complex famous for its grand hall and Bhool Bhulaiya.", bg: "linear-gradient(135deg,#795548,#d7ccc8)", link: "https://maps.google.com/?q=Bara+Imambara" },
        { name: "Chota Imambara", type: "Monument", icon: "🕌", rating: "4.5", time: "1-2 hrs", desc: "Beautiful historic monument known for chandeliers, decoration, and architecture.", bg: "linear-gradient(135deg,#37474f,#90a4ae)", link: "https://maps.google.com/?q=Chota+Imambara" },
        { name: "British Residency", type: "Historic Site", icon: "🏛️", rating: "4.5", time: "2 hrs", desc: "Historic ruins associated with the uprising of 1857.", bg: "linear-gradient(135deg,#5d4037,#a1887f)", link: "https://maps.google.com/?q=British+Residency+Lucknow" },
        { name: "Ambedkar Memorial Park", type: "Memorial", icon: "🏛️", rating: "4.5", time: "2 hrs", desc: "Large monumental park known for architecture and evening views.", bg: "linear-gradient(135deg,#8d6e63,#d7ccc8)", link: "https://maps.google.com/?q=Ambedkar+Memorial+Park" }
    ],
    hotels: [
        { name: "Central Lucknow Stay", tier: "Mid-Range", price: "₹3,500", rating: "4.4", location: "Hazratganj, Lucknow", image: "🏨", bg: "linear-gradient(135deg,#455a64,#78909c)", desc: "Convenient stay near shopping, food, and major attractions.", amenities: ["Wifi", "Restaurant", "Parking"], link: "https://www.google.com/search?q=hotels+Hazratganj+Lucknow" }
    ],
    food: [
        { category: "Local Food", name: "Galouti Kebab", image: "🍢", bg: "linear-gradient(135deg,#bf360c,#ff8a65)", desc: "Soft aromatic kebab and one of Lucknow’s signature dishes.", price: "₹250+", rating: "4.7", link: "https://maps.google.com/?q=best+galouti+kebab+Lucknow" },
        { category: "Local Food", name: "Awadhi Biryani", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Fragrant slow-cooked rice dish associated with Awadhi culinary traditions.", price: "₹300+", rating: "4.6", link: "https://maps.google.com/?q=best+Awadhi+biryani+Lucknow" }
    ],
    transport: [
        { title: "Lucknow Airport", type: "Airport", icon: "✈️", details: "Major airport serving the state capital.", costLabel: "City transfer", costValue: "₹300 to ₹1,000", link: "https://maps.google.com/?q=Lucknow+Airport" },
        { title: "Lucknow Metro", type: "Local travel", icon: "🚇", details: "Metro, autos, e-rickshaws and cabs provide convenient urban travel.", costLabel: "Typical cost", costValue: "₹20 to ₹500", link: "https://maps.google.com/?q=Lucknow" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Lucknow",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Bara Imambara" }, { time: "12:00 PM", text: "Chota Imambara" }, { time: "6:00 PM", text: "Old Lucknow food walk" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "British Residency" }, { time: "2:00 PM", text: "Hazratganj" }, { time: "6:00 PM", text: "Ambedkar Memorial Park" }] }
            ]
        },
        mid: {
            title: "3-Day Comfortable Lucknow",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Nawabi heritage circuit" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Residency and museums" }, { time: "6:00 PM", text: "Food tour" }] },
                { label: "Day 3", activities: [{ time: "10:00 AM", text: "Markets and modern Lucknow attractions" }] }
            ]
        },
        luxury: {
            title: "3-Day Luxury Lucknow",
            days: [
                { label: "Day 1", activities: [{ time: "10:00 AM", text: "Private Nawabi heritage tour" }, { time: "7:00 PM", text: "Luxury Awadhi dining" }] },
                { label: "Day 2", activities: [{ time: "10:00 AM", text: "Curated museum and Residency tour" }] },
                { label: "Day 3", activities: [{ time: "11:00 AM", text: "Private shopping and culinary experience" }] }
            ]
        }
    }
},

ayodhya: {
    name: "Ayodhya",
    state: "Uttar Pradesh",
    aliases: ["ayodhya dham", "ram mandir city"],
    description: "An ancient sacred city associated with Lord Rama, known for Shri Ram Janmabhoomi Mandir, Saryu ghats, temples, festivals, and pilgrimage traditions.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Ram Mandir", "Saryu Ghats", "Sacred City"],
    spotlight: "Ayodhya is one of India’s major pilgrimage destinations, combining sacred temples, riverfront ghats, religious traditions, historic sites, and large festivals.",
    bestFor: ["Pilgrims", "Families", "Culture lovers", "Spiritual trips"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" },
        { label: "Famous for", value: "Shri Ram Janmabhoomi Mandir" }
    ],
    travelTips: [
        { title: "Expect crowds", desc: "Major temples and festival periods can be extremely busy.", icon: "👥" },
        { title: "Visit Saryu ghats", desc: "Keep time for the riverfront, evening aarti, and nearby temples.", icon: "🪔" }
    ],
    attractions: [
        { name: "Shri Ram Janmabhoomi Mandir", type: "Temple", icon: "🛕", rating: "4.9", time: "2-4 hrs", desc: "Major Hindu pilgrimage temple and the central attraction of Ayodhya.", bg: "linear-gradient(135deg,#e65100,#ffb74d)", link: "https://maps.google.com/?q=Shri+Ram+Janmabhoomi+Mandir" },
        { name: "Hanuman Garhi", type: "Temple", icon: "🛕", rating: "4.7", time: "1-2 hrs", desc: "Historic hilltop temple and one of Ayodhya’s most important pilgrimage sites.", bg: "linear-gradient(135deg,#bf360c,#ff8a65)", link: "https://maps.google.com/?q=Hanuman+Garhi+Ayodhya" },
        { name: "Ram Ki Paidi", type: "Ghat", icon: "🪔", rating: "4.7", time: "2 hrs", desc: "Popular Saryu riverfront known for ghats, evening lighting, festivals, and religious ceremonies.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Ram+Ki+Paidi" },
        { name: "Kanak Bhawan", type: "Temple", icon: "🛕", rating: "4.7", time: "1 hr", desc: "Historic temple dedicated to Lord Rama and Goddess Sita.", bg: "linear-gradient(135deg,#7b1fa2,#ce93d8)", link: "https://maps.google.com/?q=Kanak+Bhawan+Ayodhya" }
    ],
    hotels: [
        { name: "Ayodhya Pilgrim Stay", tier: "Budget", price: "₹1,500", rating: "4.2", location: "Ayodhya Dham", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Convenient stay for temple and ghat visits.", amenities: ["Wifi", "AC"], link: "https://www.google.com/search?q=hotels+Ayodhya+Dham" }
    ],
    food: [
        { category: "Vegetarian", name: "Ayodhya Thali", image: "🍛", bg: "linear-gradient(135deg,#f57c00,#ffcc80)", desc: "Traditional vegetarian meal suitable for pilgrimage travelers.", price: "₹200+", rating: "4.4", link: "https://maps.google.com/?q=best+vegetarian+food+Ayodhya" }
    ],
    transport: [
        { title: "Maharishi Valmiki International Airport", type: "Airport", icon: "✈️", details: "Airport serving Ayodhya and pilgrimage travelers.", costLabel: "Local transfer", costValue: "₹300 to ₹1,000", link: "https://maps.google.com/?q=Ayodhya+Airport" },
        { title: "Ayodhya Dham Junction", type: "Railway", icon: "🚆", details: "Major railway station serving the pilgrimage city.", costLabel: "Local transfer", costValue: "₹100 to ₹400", link: "https://maps.google.com/?q=Ayodhya+Dham+Junction" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Ayodhya",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Shri Ram Janmabhoomi Mandir" }, { time: "12:00 PM", text: "Hanuman Garhi and Kanak Bhawan" }, { time: "6:00 PM", text: "Ram Ki Paidi evening visit" }] },
                { label: "Day 2", activities: [{ time: "7:00 AM", text: "Saryu ghat visit" }, { time: "10:00 AM", text: "Additional temples and heritage sites" }] }
            ]
        },
        mid: {
            title: "2-Day Comfortable Ayodhya",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Guided temple circuit" }, { time: "6:00 PM", text: "Saryu Aarti experience" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Heritage and cultural sightseeing" }] }
            ]
        },
        luxury: {
            title: "2-Day Premium Ayodhya",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Private guided pilgrimage circuit" }, { time: "6:00 PM", text: "Curated riverfront experience" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private heritage and temple tour" }] }
            ]
        }
    }
},

mathura: {
    name: "Mathura",
    state: "Uttar Pradesh",
    aliases: ["mathura up", "krishna janmabhoomi"],
    description: "Sacred birthplace of Lord Krishna and one of the principal pilgrimage cities of the Braj region.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Krishna Janmabhoomi", "Braj Culture", "Sacred Ghats"],
    spotlight: "Mathura offers ancient temples, Yamuna ghats, festivals, museums, food, and convenient access to Vrindavan, Govardhan, Gokul, Barsana, and Nandgaon.",
    bestFor: ["Pilgrims", "Families", "Culture lovers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "2 to 3 days" },
        { label: "Famous for", value: "Krishna Janmabhoomi" }
    ],
    travelTips: [
        { title: "Combine the Braj circuit", desc: "Mathura works best with Vrindavan, Govardhan, Gokul, Barsana, and Nandgaon.", icon: "🛕" }
    ],
    attractions: [
        { name: "Shri Krishna Janmabhoomi", type: "Temple", icon: "🛕", rating: "4.7", time: "2-3 hrs", desc: "Major pilgrimage complex traditionally associated with the birthplace of Lord Krishna.", bg: "linear-gradient(135deg,#e65100,#ffb74d)", link: "https://maps.google.com/?q=Shri+Krishna+Janmabhoomi" },
        { name: "Vishram Ghat", type: "Ghat", icon: "🪔", rating: "4.5", time: "1-2 hrs", desc: "Sacred Yamuna ghat known for religious ceremonies and evening aarti.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Vishram+Ghat+Mathura" },
        { name: "Government Museum Mathura", type: "Museum", icon: "🏛️", rating: "4.4", time: "2 hrs", desc: "Important museum known for ancient sculptures and Mathura school of art collections.", bg: "linear-gradient(135deg,#5d4037,#bcaaa4)", link: "https://maps.google.com/?q=Government+Museum+Mathura" }
    ],
    hotels: [
        { name: "Mathura Pilgrim Stay", tier: "Budget", price: "₹1,200", rating: "4.1", location: "Mathura", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Affordable base for exploring the Braj pilgrimage circuit.", amenities: ["Wifi", "AC"], link: "https://www.google.com/search?q=hotels+Mathura" }
    ],
    food: [
        { category: "Sweet", name: "Mathura Peda", image: "🍬", bg: "linear-gradient(135deg,#f9a825,#fff59d)", desc: "Traditional milk-based sweet strongly associated with Mathura.", price: "₹200+", rating: "4.7", link: "https://maps.google.com/?q=best+peda+Mathura" }
    ],
    transport: [
        { title: "Mathura Junction", type: "Railway", icon: "🚆", details: "Major railway junction providing access to Mathura and the wider Braj region.", costLabel: "Local transfer", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Mathura+Junction" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Mathura",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Krishna Janmabhoomi" }, { time: "2:00 PM", text: "Mathura Museum" }, { time: "6:00 PM", text: "Vishram Ghat Aarti" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Gokul and nearby Braj sites" }] }
            ]
        },
        mid: {
            title: "3-Day Braj Circuit",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Mathura temples and ghats" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Vrindavan sightseeing" }] },
                { label: "Day 3", activities: [{ time: "8:00 AM", text: "Govardhan and Gokul" }] }
            ]
        },
        luxury: {
            title: "3-Day Premium Braj Journey",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private Mathura heritage tour" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private Vrindavan temple circuit" }] },
                { label: "Day 3", activities: [{ time: "9:00 AM", text: "Private Braj countryside excursion" }] }
            ]
        }
    }
},

vrindavan: {
    name: "Vrindavan",
    state: "Uttar Pradesh",
    aliases: ["vrindavan dham", "brindavan"],
    description: "Major Krishna pilgrimage destination known for historic temples, devotional traditions, festivals, ashrams, and the sacred culture of Braj.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Banke Bihari", "Prem Mandir", "Braj Spirituality"],
    spotlight: "Vrindavan is filled with temples, devotional music, festivals, sacred traditions, food, ashrams, and pilgrimage routes.",
    bestFor: ["Pilgrims", "Families", "Spiritual travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" }
    ],
    travelTips: [
        { title: "Start early", desc: "Major temples become crowded during weekends and festivals.", icon: "⏰" }
    ],
    attractions: [
        { name: "Banke Bihari Temple", type: "Temple", icon: "🛕", rating: "4.8", time: "2 hrs", desc: "One of Vrindavan’s most famous Krishna temples.", bg: "linear-gradient(135deg,#e65100,#ffb74d)", link: "https://maps.google.com/?q=Banke+Bihari+Temple" },
        { name: "Prem Mandir", type: "Temple", icon: "🛕", rating: "4.8", time: "2-3 hrs", desc: "Large marble temple complex famous for evening illumination and devotional displays.", bg: "linear-gradient(135deg,#7b1fa2,#ce93d8)", link: "https://maps.google.com/?q=Prem+Mandir+Vrindavan" },
        { name: "ISKCON Vrindavan", type: "Temple", icon: "🛕", rating: "4.8", time: "2 hrs", desc: "Major international Krishna temple and spiritual center.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=ISKCON+Vrindavan" },
        { name: "Nidhivan", type: "Sacred Site", icon: "🌳", rating: "4.5", time: "1-2 hrs", desc: "Sacred grove deeply connected with local Krishna traditions.", bg: "linear-gradient(135deg,#2e7d32,#81c784)", link: "https://maps.google.com/?q=Nidhivan+Vrindavan" }
    ],
    hotels: [
        { name: "Vrindavan Pilgrim Stay", tier: "Budget", price: "₹1,500", rating: "4.2", location: "Vrindavan", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Convenient stay near temples and pilgrimage areas.", amenities: ["Wifi", "AC"], link: "https://www.google.com/search?q=hotels+Vrindavan" }
    ],
    food: [
        { category: "Vegetarian", name: "Braj Thali", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Traditional vegetarian meal for pilgrims and visitors.", price: "₹250+", rating: "4.5", link: "https://maps.google.com/?q=best+vegetarian+food+Vrindavan" }
    ],
    transport: [
        { title: "Local E-Rickshaw", type: "Local travel", icon: "🛺", details: "E-rickshaws are widely used for travel between temples and major areas.", costLabel: "Typical cost", costValue: "₹20 to ₹300", link: "https://maps.google.com/?q=Vrindavan" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Vrindavan",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Banke Bihari Temple" }, { time: "11:00 AM", text: "ISKCON Temple" }, { time: "4:00 PM", text: "Nidhivan" }, { time: "7:00 PM", text: "Prem Mandir illumination" }] }
            ]
        },
        mid: {
            title: "2-Day Comfortable Vrindavan",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Major temple circuit" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Heritage temples and Braj cultural experiences" }] }
            ]
        },
        luxury: {
            title: "2-Day Premium Vrindavan",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Private guided temple circuit" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Curated Braj spiritual and cultural experience" }] }
            ]
        }
    }
},

prayagraj: {
    name: "Prayagraj",
    state: "Uttar Pradesh",
    aliases: ["allahabad", "prayag", "prayagraj up"],
    description: "Historic pilgrimage city famous for Triveni Sangam, Kumbh traditions, forts, temples, museums, parks, and cultural heritage.",
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Triveni Sangam", "Kumbh Heritage", "Historic City"],
    spotlight: "Prayagraj is centered around the sacred confluence of the Ganga, Yamuna, and mythical Saraswati, while also offering historic monuments and cultural attractions.",
    bestFor: ["Pilgrims", "History lovers", "Families"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" }
    ],
    travelTips: [
        { title: "Visit Sangam early", desc: "Morning hours are generally best for boat trips and pilgrimage activities.", icon: "🚣" }
    ],
    attractions: [
        { name: "Triveni Sangam", type: "Pilgrimage Site", icon: "🌊", rating: "4.6", time: "2-3 hrs", desc: "Sacred confluence and the spiritual heart of Prayagraj.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Triveni+Sangam" },
        { name: "Anand Bhavan", type: "Museum", icon: "🏛️", rating: "4.5", time: "2 hrs", desc: "Historic house museum associated with the Nehru family and India’s freedom movement.", bg: "linear-gradient(135deg,#5d4037,#bcaaa4)", link: "https://maps.google.com/?q=Anand+Bhavan+Prayagraj" },
        { name: "Khusro Bagh", type: "Historic Site", icon: "🏛️", rating: "4.3", time: "1-2 hrs", desc: "Historic Mughal garden complex containing impressive tombs.", bg: "linear-gradient(135deg,#2e7d32,#81c784)", link: "https://maps.google.com/?q=Khusro+Bagh" }
    ],
    hotels: [
        { name: "Prayagraj Central Stay", tier: "Mid-Range", price: "₹3,000", rating: "4.3", location: "Civil Lines, Prayagraj", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Convenient stay for city sightseeing and Sangam visits.", amenities: ["Wifi", "Restaurant"], link: "https://www.google.com/search?q=hotels+Prayagraj" }
    ],
    food: [
        { category: "Street Food", name: "Kachori Sabzi", image: "🥘", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Popular local breakfast found across old markets.", price: "₹100+", rating: "4.4", link: "https://maps.google.com/?q=best+kachori+Prayagraj" }
    ],
    transport: [
        { title: "Prayagraj Junction", type: "Railway", icon: "🚆", details: "Major railway junction connecting the city with destinations across India.", costLabel: "Local transfer", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Prayagraj+Junction" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Prayagraj",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Triveni Sangam boat trip" }, { time: "12:00 PM", text: "Anand Bhavan" }, { time: "4:00 PM", text: "Khusro Bagh" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Temples and heritage sightseeing" }] }
            ]
        },
        mid: {
            title: "2-Day Comfortable Prayagraj",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Guided Sangam experience" }, { time: "1:00 PM", text: "Museum and heritage circuit" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "City attractions and food tour" }] }
            ]
        },
        luxury: {
            title: "2-Day Premium Prayagraj",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Private Sangam boat experience" }, { time: "2:00 PM", text: "Private heritage tour" }] },
                { label: "Day 2", activities: [{ time: "10:00 AM", text: "Curated cultural experience" }] }
            ]
        }
    }
},

sarnath: {
    name: "Sarnath",
    state: "Uttar Pradesh",
    aliases: ["sarnath varanasi", "buddhist sarnath"],
    description: "One of Buddhism’s most important pilgrimage destinations, where Gautama Buddha delivered his first sermon.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Buddhist Heritage", "Dhamek Stupa", "Archaeology"],
    spotlight: "Sarnath offers ancient stupas, monasteries, archaeological remains, museums, temples, and an international Buddhist atmosphere near Varanasi.",
    bestFor: ["Pilgrims", "History lovers", "Archaeology travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "Half to 1 day" }
    ],
    travelTips: [
        { title: "Combine with Varanasi", desc: "Sarnath is easy to visit as a half-day or full-day trip from Varanasi.", icon: "🚕" }
    ],
    attractions: [
        { name: "Dhamek Stupa", type: "Buddhist Monument", icon: "☸️", rating: "4.6", time: "1-2 hrs", desc: "Massive ancient stupa marking one of Buddhism’s most important sacred locations.", bg: "linear-gradient(135deg,#795548,#d7ccc8)", link: "https://maps.google.com/?q=Dhamek+Stupa" },
        { name: "Sarnath Archaeological Museum", type: "Museum", icon: "🏛️", rating: "4.6", time: "1-2 hrs", desc: "Important museum housing archaeological discoveries and Buddhist sculptures.", bg: "linear-gradient(135deg,#455a64,#90a4ae)", link: "https://maps.google.com/?q=Sarnath+Archaeological+Museum" },
        { name: "Mulagandha Kuti Vihar", type: "Temple", icon: "☸️", rating: "4.6", time: "1 hr", desc: "Modern Buddhist temple known for murals and peaceful surroundings.", bg: "linear-gradient(135deg,#f9a825,#fff59d)", link: "https://maps.google.com/?q=Mulagandha+Kuti+Vihar" }
    ],
    hotels: [
        { name: "Sarnath Guest Stay", tier: "Budget", price: "₹1,500", rating: "4.1", location: "Sarnath", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Simple stay for pilgrims and heritage travelers.", amenities: ["Wifi", "AC"], link: "https://www.google.com/search?q=hotels+Sarnath" }
    ],
    food: [
        { category: "Vegetarian", name: "Local Vegetarian Meal", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple vegetarian meals widely available around the pilgrimage area.", price: "₹200+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+Sarnath" }
    ],
    transport: [
        { title: "Road from Varanasi", type: "Local travel", icon: "🚕", details: "Sarnath is commonly reached by cab, auto, or local transport from Varanasi.", costLabel: "Typical transfer", costValue: "₹300 to ₹1,000", link: "https://maps.google.com/?q=Sarnath" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Sarnath",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Dhamek Stupa and archaeological complex" }, { time: "12:00 PM", text: "Museum visit" }, { time: "3:00 PM", text: "Buddhist temples and monasteries" }] }
            ]
        },
        mid: {
            title: "1-Day Guided Sarnath",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Guided Buddhist heritage circuit" }, { time: "2:00 PM", text: "Museum and monastery visits" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Sarnath",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private archaeological and Buddhist heritage tour" }] }
            ]
        }
    }
},

'fatehpur-sikri': {
    name: "Fatehpur Sikri",
    state: "Uttar Pradesh",
    aliases: ["fatehpur sikri agra", "mughal capital"],
    description: "UNESCO-listed former Mughal capital known for monumental gateways, palaces, courtyards, mosques, and remarkable red sandstone architecture.",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["UNESCO Heritage", "Mughal Architecture", "Buland Darwaza"],
    spotlight: "Fatehpur Sikri is one of India’s most impressive Mughal architectural complexes and an essential excursion from Agra.",
    bestFor: ["History lovers", "Architecture lovers", "Photographers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "Half to 1 day" }
    ],
    travelTips: [
        { title: "Wear comfortable shoes", desc: "The monumental complex requires considerable walking.", icon: "👟" }
    ],
    attractions: [
        { name: "Buland Darwaza", type: "Monument", icon: "🏛️", rating: "4.6", time: "1 hr", desc: "Monumental gateway and one of the best-known landmarks of Fatehpur Sikri.", bg: "linear-gradient(135deg,#8d2f23,#d17b49)", link: "https://maps.google.com/?q=Buland+Darwaza" },
        { name: "Jama Masjid", type: "Mosque", icon: "🕌", rating: "4.6", time: "1 hr", desc: "Historic mosque forming a major part of the Mughal complex.", bg: "linear-gradient(135deg,#6d4c41,#bcaaa4)", link: "https://maps.google.com/?q=Jama+Masjid+Fatehpur+Sikri" },
        { name: "Panch Mahal", type: "Palace", icon: "🏛️", rating: "4.5", time: "1 hr", desc: "Distinctive multi-level palace pavilion in the royal complex.", bg: "linear-gradient(135deg,#5d4037,#a1887f)", link: "https://maps.google.com/?q=Panch+Mahal+Fatehpur+Sikri" }
    ],
    hotels: [
        { name: "Fatehpur Sikri Tourist Stay", tier: "Budget", price: "₹1,500", rating: "4.0", location: "Fatehpur Sikri", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Basic accommodation for travelers staying near the heritage complex.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Fatehpur+Sikri" }
    ],
    food: [
        { category: "Local Food", name: "North Indian Meal", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Simple local meals available around the tourist area.", price: "₹250+", rating: "4.1", link: "https://maps.google.com/?q=restaurants+Fatehpur+Sikri" }
    ],
    transport: [
        { title: "Road from Agra", type: "Local travel", icon: "🚕", details: "Most travelers visit Fatehpur Sikri by road from Agra.", costLabel: "Round trip", costValue: "₹1,000 to ₹3,000", link: "https://maps.google.com/?q=Fatehpur+Sikri" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Fatehpur Sikri",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Royal palace complex" }, { time: "12:00 PM", text: "Jama Masjid and Buland Darwaza" }, { time: "3:00 PM", text: "Remaining monuments and return to Agra" }] }
            ]
        },
        mid: {
            title: "1-Day Guided Heritage Trip",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Guided Mughal heritage tour" }, { time: "2:00 PM", text: "Leisurely monument photography and sightseeing" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Heritage Trip",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private guided Fatehpur Sikri excursion from Agra" }] }
            ]
        }
    }
},

'dudhwa-national-park': {
    name: "Dudhwa National Park",
    state: "Uttar Pradesh",
    aliases: ["dudhwa", "dudhwa tiger reserve", "dudhwa up"],
    description: "Major Terai wilderness destination known for forests, grasslands, tigers, swamp deer, rhinos, elephants, birdlife, and wildlife safaris.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Tiger Reserve", "Terai Wildlife", "Safari"],
    spotlight: "Dudhwa offers one of Uttar Pradesh’s strongest wildlife experiences with extensive forests, grasslands, wetlands, large mammals, and rich birdlife.",
    bestFor: ["Wildlife lovers", "Photographers", "Nature travelers"],
    quickFacts: [
        { label: "Best season", value: "Nov to Jun" },
        { label: "Ideal stay", value: "2 to 3 days" }
    ],
    travelTips: [
        { title: "Book safari early", desc: "Safari availability can be limited during peak wildlife season.", icon: "🐅" }
    ],
    attractions: [
        { name: "Dudhwa Safari Zone", type: "Wildlife Safari", icon: "🐅", rating: "4.5", time: "3-4 hrs", desc: "Forest and grassland safari experience inside the protected landscape.", bg: "linear-gradient(135deg,#1b5e20,#81c784)", link: "https://maps.google.com/?q=Dudhwa+National+Park" },
        { name: "Kishanpur Wildlife Sanctuary", type: "Wildlife Sanctuary", icon: "🦌", rating: "4.4", time: "3-4 hrs", desc: "Protected forest and grassland landscape within the wider Dudhwa Tiger Reserve.", bg: "linear-gradient(135deg,#33691e,#aed581)", link: "https://maps.google.com/?q=Kishanpur+Wildlife+Sanctuary" }
    ],
    hotels: [
        { name: "Dudhwa Forest Stay", tier: "Mid-Range", price: "₹4,000", rating: "4.3", location: "Near Dudhwa", image: "🌿", bg: "linear-gradient(135deg,#1b5e20,#66bb6a)", desc: "Nature-focused accommodation for safari travelers.", amenities: ["Meals", "Parking", "Safari assistance"], link: "https://www.google.com/search?q=hotels+near+Dudhwa+National+Park" }
    ],
    food: [
        { category: "Local Food", name: "Terai Home-Style Meal", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple regional meals available at lodges and local eateries.", price: "₹300+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+near+Dudhwa+National+Park" }
    ],
    transport: [
        { title: "Road Transfer", type: "Local travel", icon: "🚙", details: "Private vehicles and arranged transfers are the most practical options for reaching safari areas.", costLabel: "Typical transfer", costValue: "₹1,000 to ₹5,000", link: "https://maps.google.com/?q=Dudhwa+National+Park" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Dudhwa",
            days: [
                { label: "Day 1", activities: [{ time: "2:00 PM", text: "Arrival and nearby nature exploration" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Morning wildlife safari" }, { time: "3:00 PM", text: "Second safari or birdwatching" }] }
            ]
        },
        mid: {
            title: "3-Day Comfortable Wildlife Trip",
            days: [
                { label: "Day 1", activities: [{ time: "3:00 PM", text: "Arrival and lodge experience" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Morning safari" }, { time: "3:00 PM", text: "Evening safari" }] },
                { label: "Day 3", activities: [{ time: "6:00 AM", text: "Birdwatching or Kishanpur excursion" }] }
            ]
        },
        luxury: {
            title: "3-Day Premium Wildlife Experience",
            days: [
                { label: "Day 1", activities: [{ time: "3:00 PM", text: "Private transfer and premium lodge stay" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Private guided safari" }, { time: "3:00 PM", text: "Second wildlife experience" }] },
                { label: "Day 3", activities: [{ time: "6:00 AM", text: "Private birding and nature experience" }] }
            ]
        }
    }
},

jhansi: {
    name: "Jhansi",
    state: "Uttar Pradesh",
    aliases: ["jhansi up", "rani lakshmibai city"],
    description: "Historic Bundelkhand city famous for Jhansi Fort, Rani Lakshmibai heritage, museums, temples, and sites connected with the uprising of 1857.",
    heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Jhansi Fort", "1857 Heritage", "Bundelkhand"],
    spotlight: "Jhansi is an important historical destination and a practical gateway for exploring Orchha and other Bundelkhand attractions.",
    bestFor: ["History lovers", "Families", "Road trips"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" }
    ],
    travelTips: [
        { title: "Combine with Orchha", desc: "Orchha is close enough to include in the same Bundelkhand itinerary.", icon: "🏰" }
    ],
    attractions: [
        { name: "Jhansi Fort", type: "Fort", icon: "🏰", rating: "4.5", time: "2-3 hrs", desc: "Historic hill fort strongly associated with Rani Lakshmibai and the uprising of 1857.", bg: "linear-gradient(135deg,#5d4037,#a1887f)", link: "https://maps.google.com/?q=Jhansi+Fort" },
        { name: "Rani Mahal", type: "Palace", icon: "🏛️", rating: "4.3", time: "1-2 hrs", desc: "Historic palace associated with Rani Lakshmibai and now housing archaeological collections.", bg: "linear-gradient(135deg,#6d4c41,#bcaaa4)", link: "https://maps.google.com/?q=Rani+Mahal+Jhansi" }
    ],
    hotels: [
        { name: "Jhansi Central Stay", tier: "Mid-Range", price: "₹2,500", rating: "4.2", location: "Jhansi", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Comfortable base for Jhansi and nearby Bundelkhand attractions.", amenities: ["Wifi", "Restaurant", "Parking"], link: "https://www.google.com/search?q=hotels+Jhansi" }
    ],
    food: [
        { category: "Local Food", name: "Bundelkhandi Thali", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Regional meal featuring traditional Bundelkhand flavors.", price: "₹300+", rating: "4.3", link: "https://maps.google.com/?q=best+food+Jhansi" }
    ],
    transport: [
        { title: "Virangana Lakshmibai Jhansi Junction", type: "Railway", icon: "🚆", details: "Major railway junction serving Jhansi and nearby Bundelkhand destinations.", costLabel: "Local transfer", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Jhansi+Junction" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Jhansi",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Jhansi Fort" }, { time: "1:00 PM", text: "Rani Mahal" }, { time: "4:00 PM", text: "Local heritage sightseeing" }] }
            ]
        },
        mid: {
            title: "2-Day Jhansi and Orchha",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Jhansi heritage circuit" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Orchha day trip" }] }
            ]
        },
        luxury: {
            title: "2-Day Private Bundelkhand Trip",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private Jhansi heritage tour" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private Orchha excursion" }] }
            ]
        }
    }
},

chitrakoot: {
    name: "Chitrakoot",
    state: "Uttar Pradesh",
    aliases: ["chitrakoot dham", "chitrakoot up"],
    description: "Sacred pilgrimage and nature destination associated with the Ramayana, known for ghats, temples, forests, caves, hills, and waterfalls.",
    heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Ramayana Heritage", "Sacred Ghats", "Nature"],
    spotlight: "Chitrakoot combines pilgrimage traditions with forests, hills, caves, waterfalls, riverfront sites, and religious landmarks.",
    bestFor: ["Pilgrims", "Families", "Nature travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "2 days" }
    ],
    travelTips: [
        { title: "Plan local transport", desc: "Major attractions are spread across the wider Chitrakoot region.", icon: "🚕" }
    ],
    attractions: [
        { name: "Ram Ghat", type: "Ghat", icon: "🪔", rating: "4.6", time: "2 hrs", desc: "Sacred Mandakini riverfront and one of Chitrakoot’s principal pilgrimage locations.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Ram+Ghat+Chitrakoot" },
        { name: "Kamadgiri", type: "Sacred Hill", icon: "⛰️", rating: "4.7", time: "3-4 hrs", desc: "Sacred forested hill surrounded by an important pilgrimage route.", bg: "linear-gradient(135deg,#2e7d32,#81c784)", link: "https://maps.google.com/?q=Kamadgiri+Chitrakoot" },
        { name: "Gupt Godavari", type: "Cave", icon: "🪨", rating: "4.5", time: "2 hrs", desc: "Sacred cave complex with flowing water and Ramayana traditions.", bg: "linear-gradient(135deg,#37474f,#90a4ae)", link: "https://maps.google.com/?q=Gupt+Godavari" },
        { name: "Hanuman Dhara", type: "Pilgrimage Site", icon: "🛕", rating: "4.5", time: "2 hrs", desc: "Hilltop religious destination known for temple visits and scenic views.", bg: "linear-gradient(135deg,#e65100,#ffb74d)", link: "https://maps.google.com/?q=Hanuman+Dhara+Chitrakoot" }
    ],
    hotels: [
        { name: "Chitrakoot Pilgrim Stay", tier: "Budget", price: "₹1,500", rating: "4.1", location: "Chitrakoot", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Affordable base for pilgrimage and sightseeing.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Chitrakoot" }
    ],
    food: [
        { category: "Vegetarian", name: "Local Vegetarian Thali", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple vegetarian meals widely available around pilgrimage areas.", price: "₹200+", rating: "4.3", link: "https://maps.google.com/?q=restaurants+Chitrakoot" }
    ],
    transport: [
        { title: "Local Road Travel", type: "Local travel", icon: "🚕", details: "Autos, shared vehicles, and private cabs connect the region’s scattered attractions.", costLabel: "Typical cost", costValue: "₹100 to ₹2,000", link: "https://maps.google.com/?q=Chitrakoot" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Chitrakoot",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Kamadgiri Parikrama" }, { time: "5:00 PM", text: "Ram Ghat" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Gupt Godavari" }, { time: "2:00 PM", text: "Hanuman Dhara" }] }
            ]
        },
        mid: {
            title: "2-Day Comfortable Chitrakoot",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Guided pilgrimage circuit" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Caves, nature, and hill attractions" }] }
            ]
        },
        luxury: {
            title: "2-Day Private Chitrakoot",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Private spiritual and heritage tour" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private nature and pilgrimage excursion" }] }
            ]
        }
    }
},

kushinagar: {
    name: "Kushinagar",
    state: "Uttar Pradesh",
    aliases: ["kushinagar buddhist site", "kushinagar up"],
    description: "International Buddhist pilgrimage destination associated with the Mahaparinirvana of Gautama Buddha.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Buddhist Pilgrimage", "Mahaparinirvana Temple", "International Monasteries"],
    spotlight: "Kushinagar attracts Buddhist pilgrims from around the world with sacred monuments, stupas, temples, monasteries, museums, and archaeological sites.",
    bestFor: ["Pilgrims", "History lovers", "International travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" }
    ],
    travelTips: [
        { title: "Explore international monasteries", desc: "Different Buddhist traditions are represented through temples and monasteries.", icon: "☸️" }
    ],
    attractions: [
        { name: "Mahaparinirvana Temple", type: "Buddhist Temple", icon: "☸️", rating: "4.7", time: "2 hrs", desc: "Major Buddhist pilgrimage temple containing a reclining Buddha image.", bg: "linear-gradient(135deg,#f9a825,#fff59d)", link: "https://maps.google.com/?q=Mahaparinirvana+Temple+Kushinagar" },
        { name: "Ramabhar Stupa", type: "Stupa", icon: "☸️", rating: "4.5", time: "1 hr", desc: "Important Buddhist monument traditionally associated with Buddha’s cremation.", bg: "linear-gradient(135deg,#795548,#d7ccc8)", link: "https://maps.google.com/?q=Ramabhar+Stupa" }
    ],
    hotels: [
        { name: "Kushinagar Pilgrim Stay", tier: "Budget", price: "₹1,500", rating: "4.1", location: "Kushinagar", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Simple accommodation for pilgrimage and heritage travelers.", amenities: ["Wifi", "AC"], link: "https://www.google.com/search?q=hotels+Kushinagar" }
    ],
    food: [
        { category: "Vegetarian", name: "Local Vegetarian Meal", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple meals available around the pilgrimage area.", price: "₹200+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+Kushinagar" }
    ],
    transport: [
        { title: "Kushinagar International Airport", type: "Airport", icon: "✈️", details: "Airport developed to improve access to the international Buddhist pilgrimage circuit.", costLabel: "Local transfer", costValue: "₹300 to ₹1,000", link: "https://maps.google.com/?q=Kushinagar+International+Airport" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Kushinagar",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Mahaparinirvana Temple" }, { time: "12:00 PM", text: "Ramabhar Stupa" }, { time: "3:00 PM", text: "International monasteries" }] }
            ]
        },
        mid: {
            title: "2-Day Buddhist Heritage Trip",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Main Buddhist pilgrimage sites" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Monasteries, museum, and archaeological sites" }] }
            ]
        },
        luxury: {
            title: "2-Day Private Buddhist Journey",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private pilgrimage tour" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private monastery and heritage experience" }] }
            ]
        }
    }
},

shravasti: {
    name: "Shravasti",
    state: "Uttar Pradesh",
    aliases: ["sravasti", "shravasti buddhist site"],
    description: "Ancient Buddhist pilgrimage destination famous for Jetavana Monastery, archaeological ruins, stupas, temples, and spiritual heritage.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Jetavana", "Buddhist Heritage", "Archaeological Sites"],
    spotlight: "Shravasti is an important destination on the Buddhist circuit and offers ancient ruins, monasteries, temples, stupas, and peaceful pilgrimage experiences.",
    bestFor: ["Pilgrims", "History lovers", "Archaeology travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 day" }
    ],
    travelTips: [
        { title: "Hire local transport", desc: "Having arranged transport makes exploring the scattered pilgrimage sites easier.", icon: "🚕" }
    ],
    attractions: [
        { name: "Jetavana Monastery", type: "Buddhist Site", icon: "☸️", rating: "4.7", time: "2 hrs", desc: "Ancient monastery site closely associated with the life and teachings of Gautama Buddha.", bg: "linear-gradient(135deg,#558b2f,#aed581)", link: "https://maps.google.com/?q=Jetavana+Monastery+Shravasti" },
        { name: "Angulimala Stupa", type: "Stupa", icon: "☸️", rating: "4.4", time: "1 hr", desc: "Ancient Buddhist archaeological monument associated with Buddhist traditions.", bg: "linear-gradient(135deg,#795548,#d7ccc8)", link: "https://maps.google.com/?q=Angulimala+Stupa" }
    ],
    hotels: [
        { name: "Shravasti Pilgrim Stay", tier: "Budget", price: "₹1,500", rating: "4.0", location: "Shravasti", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Basic accommodation for Buddhist circuit travelers.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Shravasti" }
    ],
    food: [
        { category: "Vegetarian", name: "Local Vegetarian Meal", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple vegetarian meals available near pilgrimage areas.", price: "₹200+", rating: "4.1", link: "https://maps.google.com/?q=restaurants+Shravasti" }
    ],
    transport: [
        { title: "Road Travel", type: "Local travel", icon: "🚕", details: "Road transport is the primary way to reach and explore Shravasti.", costLabel: "Typical transfer", costValue: "₹500 to ₹3,000", link: "https://maps.google.com/?q=Shravasti" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Shravasti",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Jetavana Monastery" }, { time: "12:00 PM", text: "Ancient stupas and ruins" }, { time: "3:00 PM", text: "International monasteries" }] }
            ]
        },
        mid: {
            title: "1-Day Guided Shravasti",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Guided Buddhist heritage circuit" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Shravasti",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private Buddhist pilgrimage and archaeology tour" }] }
            ]
        }
    }
},

vindhyachal: {
    name: "Vindhyachal",
    state: "Uttar Pradesh",
    aliases: ["vindhyachal dham", "vindhyavasini temple"],
    description: "Major pilgrimage destination famous for Vindhyavasini Devi Temple, sacred ghats, nearby temples, and the traditional Trikona Parikrama.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Vindhyavasini Temple", "Shakti Pilgrimage", "Sacred Ghats"],
    spotlight: "Vindhyachal is one of eastern Uttar Pradesh’s major pilgrimage centers and is often combined with Mirzapur’s waterfalls and natural attractions.",
    bestFor: ["Pilgrims", "Families", "Spiritual trips"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 day" }
    ],
    travelTips: [
        { title: "Expect festival crowds", desc: "Navratri and major religious dates attract very large numbers of pilgrims.", icon: "👥" }
    ],
    attractions: [
        { name: "Vindhyavasini Devi Temple", type: "Temple", icon: "🛕", rating: "4.7", time: "2 hrs", desc: "Major Shakti pilgrimage temple and the central religious attraction of Vindhyachal.", bg: "linear-gradient(135deg,#c62828,#ef9a9a)", link: "https://maps.google.com/?q=Vindhyavasini+Devi+Temple" },
        { name: "Kali Khoh Temple", type: "Temple", icon: "🛕", rating: "4.5", time: "1 hr", desc: "Important temple traditionally included in the Vindhyachal pilgrimage circuit.", bg: "linear-gradient(135deg,#4a148c,#ba68c8)", link: "https://maps.google.com/?q=Kali+Khoh+Temple" }
    ],
    hotels: [
        { name: "Vindhyachal Pilgrim Stay", tier: "Budget", price: "₹1,200", rating: "4.0", location: "Vindhyachal", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Affordable stay near pilgrimage areas.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Vindhyachal" }
    ],
    food: [
        { category: "Vegetarian", name: "Pilgrim Thali", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Traditional vegetarian meal available near the temple area.", price: "₹200+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+Vindhyachal" }
    ],
    transport: [
        { title: "Vindhyachal Railway Station", type: "Railway", icon: "🚆", details: "Local railway access serving the pilgrimage town.", costLabel: "Local transfer", costValue: "₹50 to ₹300", link: "https://maps.google.com/?q=Vindhyachal+Railway+Station" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Vindhyachal",
            days: [
                { label: "Day 1", activities: [{ time: "6:00 AM", text: "Vindhyavasini Temple darshan" }, { time: "10:00 AM", text: "Kali Khoh and Ashtabhuja circuit" }, { time: "5:00 PM", text: "Ghat visit" }] }
            ]
        },
        mid: {
            title: "1-Day Comfortable Pilgrimage",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Guided Trikona pilgrimage circuit" }, { time: "3:00 PM", text: "Mirzapur sightseeing" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Vindhyachal",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Private guided pilgrimage experience" }] }
            ]
        }
    }
},

mirzapur: {
    name: "Mirzapur",
    state: "Uttar Pradesh",
    aliases: ["mirzapur up", "mirzapur tourism"],
    description: "Scenic eastern Uttar Pradesh destination known for waterfalls, reservoirs, forests, historic temples, ghats, and nearby natural attractions.",
    heroImage: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Waterfalls", "Vindhyan Landscapes", "Nature Trips"],
    spotlight: "Mirzapur is a useful base for exploring Vindhyachal pilgrimage sites, waterfalls, reservoirs, rocky landscapes, forests, and historic attractions.",
    bestFor: ["Nature travelers", "Road trips", "Pilgrims"],
    quickFacts: [
        { label: "Best season", value: "Jul to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" }
    ],
    travelTips: [
        { title: "Check waterfall conditions", desc: "Many waterfalls are seasonal and strongest during or after the monsoon.", icon: "💧" }
    ],
    attractions: [
        { name: "Lakhaniya Dari Waterfall", type: "Waterfall", icon: "💧", rating: "4.4", time: "2-3 hrs", desc: "Popular seasonal waterfall surrounded by rocky terrain and natural landscapes.", bg: "linear-gradient(135deg,#1565c0,#80deea)", link: "https://maps.google.com/?q=Lakhaniya+Dari+Waterfall" },
        { name: "Wyndham Falls", type: "Waterfall", icon: "💧", rating: "4.2", time: "2 hrs", desc: "Scenic seasonal waterfall and picnic destination near Mirzapur.", bg: "linear-gradient(135deg,#00695c,#80cbc4)", link: "https://maps.google.com/?q=Wyndham+Falls+Mirzapur" }
    ],
    hotels: [
        { name: "Mirzapur City Stay", tier: "Budget", price: "₹1,500", rating: "4.0", location: "Mirzapur", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Practical base for nature and pilgrimage excursions.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Mirzapur" }
    ],
    food: [
        { category: "Local Food", name: "Eastern UP Thali", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Simple regional meal available in local restaurants.", price: "₹250+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+Mirzapur" }
    ],
    transport: [
        { title: "Mirzapur Railway Station", type: "Railway", icon: "🚆", details: "Railway access for Mirzapur, Vindhyachal, and nearby attractions.", costLabel: "Local transfer", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Mirzapur+Railway+Station" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Mirzapur",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Vindhyachal pilgrimage circuit" }, { time: "5:00 PM", text: "Mirzapur ghats" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Waterfall and nature excursion" }] }
            ]
        },
        mid: {
            title: "2-Day Comfortable Mirzapur",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Guided Vindhyachal and city tour" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Private waterfall excursion" }] }
            ]
        },
        luxury: {
            title: "2-Day Private Mirzapur",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private pilgrimage and heritage tour" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private nature excursion" }] }
            ]
        }
    }
},

sonbhadra: {
    name: "Sonbhadra",
    state: "Uttar Pradesh",
    aliases: ["sonbhadra up", "sonebhadra"],
    description: "Nature-rich district known for waterfalls, forests, reservoirs, rock formations, ancient sites, wildlife landscapes, and scenic road trips.",
    heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Waterfalls", "Forests", "Reservoirs"],
    spotlight: "Sonbhadra offers a quieter side of Uttar Pradesh with waterfalls, forests, dams, reservoirs, fossil sites, ancient monuments, and natural landscapes.",
    bestFor: ["Nature travelers", "Road trips", "Adventure travelers"],
    quickFacts: [
        { label: "Best season", value: "Jul to Mar" },
        { label: "Ideal stay", value: "2 to 3 days" }
    ],
    travelTips: [
        { title: "Use private transport", desc: "Attractions are spread across a large district and road transport is practical.", icon: "🚙" }
    ],
    attractions: [
        { name: "Rihand Dam", type: "Dam", icon: "🌊", rating: "4.3", time: "2 hrs", desc: "Large reservoir landscape and important scenic attraction of Sonbhadra.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Rihand+Dam" },
        { name: "Salkhan Fossil Park", type: "Geological Site", icon: "🪨", rating: "4.2", time: "2 hrs", desc: "Geological heritage site known for ancient fossil formations.", bg: "linear-gradient(135deg,#5d4037,#bcaaa4)", link: "https://maps.google.com/?q=Salkhan+Fossil+Park" }
    ],
    hotels: [
        { name: "Sonbhadra Tourist Stay", tier: "Budget", price: "₹1,800", rating: "4.0", location: "Sonbhadra", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Practical accommodation for regional road trips.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Sonbhadra" }
    ],
    food: [
        { category: "Local Food", name: "Regional Home-Style Meal", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple local food available in towns across the district.", price: "₹250+", rating: "4.1", link: "https://maps.google.com/?q=restaurants+Sonbhadra" }
    ],
    transport: [
        { title: "Road Travel", type: "Local travel", icon: "🚙", details: "Private cabs and personal vehicles are practical for exploring scattered attractions.", costLabel: "Typical day cost", costValue: "₹1,500 to ₹5,000", link: "https://maps.google.com/?q=Sonbhadra" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Sonbhadra",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Rihand Dam and reservoir landscapes" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Fossil park and nearby nature attractions" }] }
            ]
        },
        mid: {
            title: "3-Day Comfortable Sonbhadra",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Arrival and local sightseeing" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Dam, reservoir, and nature circuit" }] },
                { label: "Day 3", activities: [{ time: "8:00 AM", text: "Geological and heritage attractions" }] }
            ]
        },
        luxury: {
            title: "3-Day Private Sonbhadra Road Trip",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private regional transfer and sightseeing" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Private nature excursion" }] },
                { label: "Day 3", activities: [{ time: "9:00 AM", text: "Private heritage and geological tour" }] }
            ]
        }
    }
},

chunar: {
    name: "Chunar",
    state: "Uttar Pradesh",
    aliases: ["chunar fort", "chunar mirzapur"],
    description: "Historic riverside town known for Chunar Fort, Ganga views, ancient legends, sandstone heritage, and cultural history.",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Chunar Fort", "Ganga Views", "Historic Town"],
    spotlight: "Chunar is a compact heritage destination best known for its imposing riverside fort and long history.",
    bestFor: ["History lovers", "Road trips", "Photographers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "Half to 1 day" }
    ],
    travelTips: [
        { title: "Combine with Mirzapur", desc: "Chunar can be included in a Mirzapur, Vindhyachal, or Varanasi road itinerary.", icon: "🚙" }
    ],
    attractions: [
        { name: "Chunar Fort", type: "Fort", icon: "🏰", rating: "4.4", time: "2-3 hrs", desc: "Historic fort overlooking the Ganga and associated with several periods of Indian history.", bg: "linear-gradient(135deg,#5d4037,#a1887f)", link: "https://maps.google.com/?q=Chunar+Fort" }
    ],
    hotels: [
        { name: "Chunar Local Stay", tier: "Budget", price: "₹1,200", rating: "3.9", location: "Chunar", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Basic accommodation for short heritage visits.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Chunar" }
    ],
    food: [
        { category: "Local Food", name: "North Indian Meal", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Simple regional meals available in local markets.", price: "₹200+", rating: "4.0", link: "https://maps.google.com/?q=restaurants+Chunar" }
    ],
    transport: [
        { title: "Chunar Railway Station", type: "Railway", icon: "🚆", details: "Railway and road connections provide access from Mirzapur and Varanasi.", costLabel: "Local transfer", costValue: "₹100 to ₹1,500", link: "https://maps.google.com/?q=Chunar+Railway+Station" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Chunar",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Chunar Fort exploration" }, { time: "1:00 PM", text: "Local town and riverside sightseeing" }] }
            ]
        },
        mid: {
            title: "1-Day Comfortable Chunar",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Guided fort and heritage tour" }, { time: "2:00 PM", text: "Riverside sightseeing" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Chunar",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private heritage excursion from Varanasi or Mirzapur" }] }
            ]
        }
    }
},

kanpur: {
    name: "Kanpur",
    state: "Uttar Pradesh",
    aliases: ["kanpur up", "cawnpore"],
    description: "Major city on the Ganga known for historic sites, temples, museums, parks, riverfront attractions, and colonial-era heritage.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Ganga Riverfront", "Historic City", "Urban Attractions"],
    spotlight: "Kanpur offers historic landmarks, religious sites, parks, museums, food, shopping, and access to nearby destinations such as Bithoor.",
    bestFor: ["Families", "History lovers", "Urban trips"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" }
    ],
    travelTips: [
        { title: "Add Bithoor", desc: "Bithoor makes a useful cultural and pilgrimage excursion from Kanpur.", icon: "🚕" }
    ],
    attractions: [
        { name: "JK Temple", type: "Temple", icon: "🛕", rating: "4.6", time: "1-2 hrs", desc: "Prominent modern temple and one of Kanpur’s major landmarks.", bg: "linear-gradient(135deg,#7b1fa2,#ce93d8)", link: "https://maps.google.com/?q=JK+Temple+Kanpur" },
        { name: "Kanpur Memorial Church", type: "Historic Site", icon: "⛪", rating: "4.4", time: "1 hr", desc: "Historic colonial-era church and architectural landmark.", bg: "linear-gradient(135deg,#8d6e63,#d7ccc8)", link: "https://maps.google.com/?q=Kanpur+Memorial+Church" },
        { name: "Allen Forest Zoo", type: "Zoo", icon: "🦌", rating: "4.3", time: "3-4 hrs", desc: "Large zoological park set within a forested urban landscape.", bg: "linear-gradient(135deg,#2e7d32,#81c784)", link: "https://maps.google.com/?q=Kanpur+Zoo" }
    ],
    hotels: [
        { name: "Kanpur City Stay", tier: "Mid-Range", price: "₹3,000", rating: "4.3", location: "Central Kanpur", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Convenient accommodation for city sightseeing and business trips.", amenities: ["Wifi", "Restaurant", "Parking"], link: "https://www.google.com/search?q=hotels+Kanpur" }
    ],
    food: [
        { category: "Street Food", name: "Kanpur Chaat", image: "🥘", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Popular street food found across the city’s traditional markets.", price: "₹100+", rating: "4.4", link: "https://maps.google.com/?q=best+chaat+Kanpur" }
    ],
    transport: [
        { title: "Kanpur Central", type: "Railway", icon: "🚆", details: "One of North India’s major railway stations with extensive connections.", costLabel: "Local transfer", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Kanpur+Central" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Kanpur",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "JK Temple" }, { time: "12:00 PM", text: "Kanpur Memorial Church" }, { time: "5:00 PM", text: "Ganga riverfront" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Kanpur Zoo" }, { time: "4:00 PM", text: "Markets and street food" }] }
            ]
        },
        mid: {
            title: "2-Day Comfortable Kanpur",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "City heritage and attractions" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Bithoor excursion" }] }
            ]
        },
        luxury: {
            title: "2-Day Premium Kanpur",
            days: [
                { label: "Day 1", activities: [{ time: "10:00 AM", text: "Private city tour" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private Bithoor and Ganga excursion" }] }
            ]
        }
    }
},

gorakhpur: {
    name: "Gorakhpur",
    state: "Uttar Pradesh",
    aliases: ["gorakhpur up", "gorakhnath city"],
    description: "Major eastern Uttar Pradesh city known for Gorakhnath Temple, museums, parks, religious heritage, and access to Buddhist destinations.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Gorakhnath Temple", "Eastern UP", "Buddhist Gateway"],
    spotlight: "Gorakhpur is an important regional city and transport hub for travelers visiting Kushinagar and other Buddhist circuit destinations.",
    bestFor: ["Pilgrims", "Families", "Regional trips"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 to 2 days" }
    ],
    travelTips: [
        { title: "Use as a regional base", desc: "Gorakhpur is useful for combining city sightseeing with Kushinagar and nearby destinations.", icon: "🧭" }
    ],
    attractions: [
        { name: "Gorakhnath Temple", type: "Temple", icon: "🛕", rating: "4.7", time: "2 hrs", desc: "Major religious complex and the city’s best-known pilgrimage attraction.", bg: "linear-gradient(135deg,#e65100,#ffb74d)", link: "https://maps.google.com/?q=Gorakhnath+Temple" },
        { name: "Rail Museum Gorakhpur", type: "Museum", icon: "🚆", rating: "4.3", time: "1-2 hrs", desc: "Family-friendly railway museum and recreational attraction.", bg: "linear-gradient(135deg,#455a64,#90a4ae)", link: "https://maps.google.com/?q=Rail+Museum+Gorakhpur" }
    ],
    hotels: [
        { name: "Gorakhpur City Stay", tier: "Mid-Range", price: "₹2,500", rating: "4.2", location: "Gorakhpur", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Convenient base for regional travel and city sightseeing.", amenities: ["Wifi", "Restaurant"], link: "https://www.google.com/search?q=hotels+Gorakhpur" }
    ],
    food: [
        { category: "Local Food", name: "Eastern UP Thali", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Regional meal available across local restaurants.", price: "₹250+", rating: "4.3", link: "https://maps.google.com/?q=best+food+Gorakhpur" }
    ],
    transport: [
        { title: "Gorakhpur Junction", type: "Railway", icon: "🚆", details: "Major railway hub serving eastern Uttar Pradesh and nearby regions.", costLabel: "Local transfer", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Gorakhpur+Junction" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Gorakhpur",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Gorakhnath Temple" }, { time: "1:00 PM", text: "Rail Museum" }, { time: "5:00 PM", text: "Local market and food walk" }] }
            ]
        },
        mid: {
            title: "2-Day Gorakhpur and Kushinagar",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Gorakhpur sightseeing" }] },
                { label: "Day 2", activities: [{ time: "8:00 AM", text: "Kushinagar day trip" }] }
            ]
        },
        luxury: {
            title: "2-Day Private Eastern UP Trip",
            days: [
                { label: "Day 1", activities: [{ time: "10:00 AM", text: "Private Gorakhpur city tour" }] },
                { label: "Day 2", activities: [{ time: "9:00 AM", text: "Private Kushinagar excursion" }] }
            ]
        }
    }
},

jaunpur: {
    name: "Jaunpur",
    state: "Uttar Pradesh",
    aliases: ["jaunpur up", "sharqi city"],
    description: "Historic city famous for Sharqi-era architecture, monumental mosques, Shahi Bridge, forts, and medieval heritage.",
    heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Sharqi Heritage", "Historic Mosques", "Shahi Bridge"],
    spotlight: "Jaunpur offers distinctive medieval architecture, riverside landmarks, mosques, forts, and a quieter heritage experience.",
    bestFor: ["History lovers", "Architecture lovers", "Road trips"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 day" }
    ],
    travelTips: [
        { title: "Start early", desc: "A full day is useful for covering the principal monuments at a comfortable pace.", icon: "⏰" }
    ],
    attractions: [
        { name: "Atala Mosque", type: "Mosque", icon: "🕌", rating: "4.5", time: "1-2 hrs", desc: "Major Sharqi-era monument known for distinctive architecture.", bg: "linear-gradient(135deg,#5d4037,#bcaaa4)", link: "https://maps.google.com/?q=Atala+Mosque+Jaunpur" },
        { name: "Shahi Bridge", type: "Historic Bridge", icon: "🌉", rating: "4.4", time: "1 hr", desc: "Historic bridge over the Gomti River and a major city landmark.", bg: "linear-gradient(135deg,#455a64,#90a4ae)", link: "https://maps.google.com/?q=Shahi+Bridge+Jaunpur" },
        { name: "Jaunpur Fort", type: "Fort", icon: "🏰", rating: "4.2", time: "1-2 hrs", desc: "Historic fort complex connected with the city’s medieval history.", bg: "linear-gradient(135deg,#6d4c41,#a1887f)", link: "https://maps.google.com/?q=Jaunpur+Fort" }
    ],
    hotels: [
        { name: "Jaunpur City Stay", tier: "Budget", price: "₹1,500", rating: "4.0", location: "Jaunpur", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Simple accommodation for heritage travelers.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Jaunpur" }
    ],
    food: [
        { category: "Local Food", name: "Jaunpur Local Cuisine", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Regional North Indian dishes available across local markets.", price: "₹250+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+Jaunpur" }
    ],
    transport: [
        { title: "Jaunpur Junction", type: "Railway", icon: "🚆", details: "Rail and road connections provide access from Varanasi and other regional cities.", costLabel: "Local transfer", costValue: "₹100 to ₹500", link: "https://maps.google.com/?q=Jaunpur+Junction" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Jaunpur",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Atala Mosque" }, { time: "12:00 PM", text: "Jaunpur Fort" }, { time: "4:00 PM", text: "Shahi Bridge and riverside sightseeing" }] }
            ]
        },
        mid: {
            title: "1-Day Guided Jaunpur",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Guided Sharqi heritage circuit" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Jaunpur",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private heritage excursion" }] }
            ]
        }
    }
},

'kalinjar-fort': {
    name: "Kalinjar Fort",
    state: "Uttar Pradesh",
    aliases: ["kalinjar", "kalinjar banda"],
    description: "Ancient hill fort in Bundelkhand known for military history, temples, sculptures, rock-cut monuments, and panoramic landscapes.",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Ancient Fort", "Bundelkhand", "Hill Views"],
    spotlight: "Kalinjar Fort is one of Bundelkhand’s major historical attractions and rewards travelers with architecture, temples, sculptures, legends, and expansive views.",
    bestFor: ["History lovers", "Road trips", "Adventure travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "Half to 1 day" }
    ],
    travelTips: [
        { title: "Carry water", desc: "Exploring the large hill fort can require significant walking.", icon: "💧" }
    ],
    attractions: [
        { name: "Kalinjar Fort Complex", type: "Fort", icon: "🏰", rating: "4.5", time: "3-5 hrs", desc: "Large ancient hill fort containing gateways, temples, sculptures, monuments, and viewpoints.", bg: "linear-gradient(135deg,#5d4037,#a1887f)", link: "https://maps.google.com/?q=Kalinjar+Fort" },
        { name: "Neelkanth Temple", type: "Temple", icon: "🛕", rating: "4.6", time: "1 hr", desc: "Historic temple within the fort complex known for rock-cut architecture and religious significance.", bg: "linear-gradient(135deg,#37474f,#90a4ae)", link: "https://maps.google.com/?q=Neelkanth+Temple+Kalinjar" }
    ],
    hotels: [
        { name: "Banda Tourist Stay", tier: "Budget", price: "₹1,500", rating: "4.0", location: "Banda Region", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Practical accommodation for travelers visiting Kalinjar and Bundelkhand.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+near+Kalinjar+Fort" }
    ],
    food: [
        { category: "Local Food", name: "Bundelkhandi Meal", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Traditional regional food available in nearby towns.", price: "₹250+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+near+Kalinjar+Fort" }
    ],
    transport: [
        { title: "Road Access", type: "Local travel", icon: "🚙", details: "Private road transport is the practical way to reach and explore Kalinjar.", costLabel: "Typical transfer", costValue: "₹1,000 to ₹4,000", link: "https://maps.google.com/?q=Kalinjar+Fort" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Kalinjar",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Fort gateways and main monuments" }, { time: "12:00 PM", text: "Neelkanth Temple" }, { time: "3:00 PM", text: "Viewpoints and remaining fort complex" }] }
            ]
        },
        mid: {
            title: "1-Day Guided Kalinjar",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Guided fort, temple, and history tour" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Kalinjar",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Private Bundelkhand heritage excursion" }] }
            ]
        }
    }
},

barsana: {
    name: "Barsana",
    state: "Uttar Pradesh",
    aliases: ["barsana dham", "radha rani temple"],
    description: "Sacred Braj town associated with Radha, famous for Radha Rani Temple, Lathmar Holi, pilgrimage routes, hills, and traditional culture.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Radha Rani Temple", "Lathmar Holi", "Braj Culture"],
    spotlight: "Barsana is a major Braj pilgrimage destination known for hilltop temples, festivals, sacred traditions, colorful streets, and nearby religious sites.",
    bestFor: ["Pilgrims", "Culture lovers", "Festival travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "Half to 1 day" }
    ],
    travelTips: [
        { title: "Festival periods are crowded", desc: "Lathmar Holi and major religious dates attract very large crowds.", icon: "🎉" }
    ],
    attractions: [
        { name: "Radha Rani Temple", type: "Temple", icon: "🛕", rating: "4.8", time: "2 hrs", desc: "Hilltop temple and the principal pilgrimage attraction of Barsana.", bg: "linear-gradient(135deg,#ad1457,#f48fb1)", link: "https://maps.google.com/?q=Radha+Rani+Temple+Barsana" }
    ],
    hotels: [
        { name: "Barsana Pilgrim Stay", tier: "Budget", price: "₹1,200", rating: "4.0", location: "Barsana", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Basic accommodation for Braj pilgrimage travelers.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Barsana" }
    ],
    food: [
        { category: "Vegetarian", name: "Braj Vegetarian Meal", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Traditional vegetarian food available around pilgrimage areas.", price: "₹200+", rating: "4.3", link: "https://maps.google.com/?q=restaurants+Barsana" }
    ],
    transport: [
        { title: "Road from Mathura", type: "Local travel", icon: "🚕", details: "Barsana is commonly visited by road as part of the wider Braj circuit.", costLabel: "Typical transfer", costValue: "₹1,000 to ₹3,000", link: "https://maps.google.com/?q=Barsana" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Barsana",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Radha Rani Temple" }, { time: "12:00 PM", text: "Local Braj pilgrimage sites" }, { time: "4:00 PM", text: "Town and hill views" }] }
            ]
        },
        mid: {
            title: "1-Day Braj Circuit",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Barsana and Nandgaon guided excursion" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Barsana",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private Braj pilgrimage excursion" }] }
            ]
        }
    }
},

nandgaon: {
    name: "Nandgaon",
    state: "Uttar Pradesh",
    aliases: ["nandgaon braj", "nand bhavan"],
    description: "Historic Braj pilgrimage town associated with the childhood of Lord Krishna and known for Nand Bhavan, temples, hills, festivals, and traditional culture.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Nand Bhavan", "Krishna Heritage", "Braj Culture"],
    spotlight: "Nandgaon offers a quieter Braj pilgrimage experience and is commonly combined with Barsana and other Krishna circuit destinations.",
    bestFor: ["Pilgrims", "Families", "Culture lovers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "Half day" }
    ],
    travelTips: [
        { title: "Combine with Barsana", desc: "The two towns work well together as a single Braj circuit day trip.", icon: "🚕" }
    ],
    attractions: [
        { name: "Nand Bhavan", type: "Temple", icon: "🛕", rating: "4.7", time: "1-2 hrs", desc: "Major pilgrimage temple associated with the childhood traditions of Lord Krishna.", bg: "linear-gradient(135deg,#e65100,#ffb74d)", link: "https://maps.google.com/?q=Nand+Bhavan+Nandgaon" }
    ],
    hotels: [
        { name: "Braj Pilgrim Stay", tier: "Budget", price: "₹1,200", rating: "4.0", location: "Nandgaon Region", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Basic stay for Braj circuit travelers.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Nandgaon+UP" }
    ],
    food: [
        { category: "Vegetarian", name: "Braj Local Meal", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Simple vegetarian regional food.", price: "₹200+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+Nandgaon+UP" }
    ],
    transport: [
        { title: "Road Travel", type: "Local travel", icon: "🚕", details: "Road travel from Mathura, Vrindavan, or Barsana is the practical option.", costLabel: "Typical transfer", costValue: "₹800 to ₹3,000", link: "https://maps.google.com/?q=Nandgaon+Uttar+Pradesh" }
    ],
    itineraries: {
        budget: {
            title: "Half-Day Nandgaon",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Nand Bhavan visit" }, { time: "11:00 AM", text: "Local temples and town walk" }] }
            ]
        },
        mid: {
            title: "1-Day Barsana and Nandgaon",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Guided Barsana and Nandgaon pilgrimage circuit" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Braj Excursion",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private Nandgaon and Barsana tour" }] }
            ]
        }
    }
},

govardhan: {
    name: "Govardhan",
    state: "Uttar Pradesh",
    aliases: ["govardhan dham", "govardhan hill"],
    description: "Major Krishna pilgrimage destination famous for Govardhan Hill, sacred parikrama, temples, kunds, and Braj religious traditions.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Govardhan Parikrama", "Sacred Kunds", "Krishna Pilgrimage"],
    spotlight: "Govardhan is one of the principal destinations of the Braj pilgrimage circuit and is centered around the sacred hill, parikrama route, temples, and kunds.",
    bestFor: ["Pilgrims", "Spiritual travelers", "Families"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "1 day" }
    ],
    travelTips: [
        { title: "Start parikrama early", desc: "Cooler morning hours are more comfortable for long pilgrimage walks.", icon: "🚶" }
    ],
    attractions: [
        { name: "Govardhan Parikrama", type: "Pilgrimage Route", icon: "🚶", rating: "4.8", time: "5-8 hrs", desc: "Sacred pilgrimage circuit around Govardhan Hill.", bg: "linear-gradient(135deg,#2e7d32,#81c784)", link: "https://maps.google.com/?q=Govardhan+Parikrama" },
        { name: "Radha Kund", type: "Sacred Kund", icon: "🌊", rating: "4.7", time: "1-2 hrs", desc: "One of the most sacred pilgrimage locations of the Braj region.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Radha+Kund" }
    ],
    hotels: [
        { name: "Govardhan Pilgrim Stay", tier: "Budget", price: "₹1,200", rating: "4.0", location: "Govardhan", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Affordable accommodation for pilgrimage travelers.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Govardhan" }
    ],
    food: [
        { category: "Vegetarian", name: "Braj Pilgrim Meal", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Traditional vegetarian meals available around pilgrimage areas.", price: "₹200+", rating: "4.3", link: "https://maps.google.com/?q=restaurants+Govardhan" }
    ],
    transport: [
        { title: "Road from Mathura", type: "Local travel", icon: "🚕", details: "Govardhan is commonly reached by road from Mathura and Vrindavan.", costLabel: "Typical transfer", costValue: "₹500 to ₹2,000", link: "https://maps.google.com/?q=Govardhan" }
    ],
    itineraries: {
        budget: {
            title: "1-Day Budget Govardhan",
            days: [
                { label: "Day 1", activities: [{ time: "5:30 AM", text: "Govardhan Parikrama" }, { time: "2:00 PM", text: "Radha Kund and nearby temples" }] }
            ]
        },
        mid: {
            title: "1-Day Comfortable Govardhan",
            days: [
                { label: "Day 1", activities: [{ time: "6:00 AM", text: "Guided pilgrimage circuit" }, { time: "3:00 PM", text: "Kunds and temples" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Govardhan",
            days: [
                { label: "Day 1", activities: [{ time: "7:00 AM", text: "Private guided Govardhan pilgrimage experience" }] }
            ]
        }
    }
},

gokul: {
    name: "Gokul",
    state: "Uttar Pradesh",
    aliases: ["gokul dham", "gokul mathura"],
    description: "Sacred Braj pilgrimage town associated with the childhood of Lord Krishna and known for temples, ghats, festivals, and traditional heritage.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Krishna Childhood Heritage", "Sacred Ghats", "Braj Culture"],
    spotlight: "Gokul is a peaceful pilgrimage destination near Mathura and an important stop on the wider Braj religious circuit.",
    bestFor: ["Pilgrims", "Families", "Spiritual travelers"],
    quickFacts: [
        { label: "Best season", value: "Oct to Mar" },
        { label: "Ideal stay", value: "Half to 1 day" }
    ],
    travelTips: [
        { title: "Combine with Mathura", desc: "Gokul is convenient to visit as part of a Mathura-based Braj itinerary.", icon: "🚕" }
    ],
    attractions: [
        { name: "Raman Reti", type: "Sacred Site", icon: "🛕", rating: "4.6", time: "1-2 hrs", desc: "Popular pilgrimage destination associated with Krishna traditions.", bg: "linear-gradient(135deg,#f9a825,#fff59d)", link: "https://maps.google.com/?q=Raman+Reti+Gokul" },
        { name: "Chaurasi Khamba", type: "Temple", icon: "🛕", rating: "4.5", time: "1 hr", desc: "Historic pilgrimage site associated with the childhood traditions of Lord Krishna.", bg: "linear-gradient(135deg,#6d4c41,#bcaaa4)", link: "https://maps.google.com/?q=Chaurasi+Khamba+Gokul" }
    ],
    hotels: [
        { name: "Gokul Pilgrim Stay", tier: "Budget", price: "₹1,000", rating: "4.0", location: "Gokul", image: "🏨", bg: "linear-gradient(135deg,#455a64,#90a4ae)", desc: "Basic accommodation for short pilgrimage visits.", amenities: ["Wifi", "Parking"], link: "https://www.google.com/search?q=hotels+Gokul+Mathura" }
    ],
    food: [
        { category: "Vegetarian", name: "Braj Vegetarian Meal", image: "🍛", bg: "linear-gradient(135deg,#ef6c00,#ffcc80)", desc: "Simple traditional food available around pilgrimage areas.", price: "₹200+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+Gokul+Mathura" }
    ],
    transport: [
        { title: "Road from Mathura", type: "Local travel", icon: "🚕", details: "Autos, taxis, and private vehicles connect Gokul with Mathura.", costLabel: "Typical transfer", costValue: "₹300 to ₹1,500", link: "https://maps.google.com/?q=Gokul+Mathura" }
    ],
    itineraries: {
        budget: {
            title: "Half-Day Budget Gokul",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Raman Reti" }, { time: "10:00 AM", text: "Chaurasi Khamba and nearby temples" }] }
            ]
        },
        mid: {
            title: "1-Day Mathura and Gokul",
            days: [
                { label: "Day 1", activities: [{ time: "8:00 AM", text: "Mathura sightseeing" }, { time: "2:00 PM", text: "Guided Gokul pilgrimage circuit" }] }
            ]
        },
        luxury: {
            title: "1-Day Private Gokul",
            days: [
                { label: "Day 1", activities: [{ time: "9:00 AM", text: "Private Mathura and Gokul pilgrimage experience" }] }
            ]
        }
    }
},

'pilibhit-tiger-reserve': {
    name: "Pilibhit Tiger Reserve",
    state: "Uttar Pradesh",
    aliases: ["pilibhit tiger reserve", "pilibhit wildlife"],
    description: "Important Terai tiger reserve known for forests, grasslands, rivers, wildlife safaris, birdlife, and rich biodiversity.",
    heroImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Tiger Reserve", "Terai Forests", "Wildlife"],
    spotlight: "Pilibhit Tiger Reserve offers forest landscapes, tiger habitat, grasslands, wetlands, birdlife, and wildlife experiences in the Terai region.",
    bestFor: ["Wildlife lovers", "Photographers", "Nature travelers"],
    quickFacts: [
        { label: "Best season", value: "Nov to Jun" },
        { label: "Ideal stay", value: "2 days" }
    ],
    travelTips: [
        { title: "Check safari availability", desc: "Safari schedules and access can vary by season and forest regulations.", icon: "🐅" }
    ],
    attractions: [
        { name: "Pilibhit Safari Zone", type: "Wildlife Safari", icon: "🐅", rating: "4.4", time: "3-4 hrs", desc: "Forest safari experience within the protected tiger reserve landscape.", bg: "linear-gradient(135deg,#1b5e20,#81c784)", link: "https://maps.google.com/?q=Pilibhit+Tiger+Reserve" },
        { name: "Chuka Beach", type: "Nature Spot", icon: "🌊", rating: "4.4", time: "2-3 hrs", desc: "Popular reservoir-side nature destination associated with the Pilibhit forest landscape.", bg: "linear-gradient(135deg,#1565c0,#81d4fa)", link: "https://maps.google.com/?q=Chuka+Beach+Pilibhit" }
    ],
    hotels: [
        { name: "Pilibhit Nature Stay", tier: "Mid-Range", price: "₹3,500", rating: "4.2", location: "Pilibhit Region", image: "🌿", bg: "linear-gradient(135deg,#1b5e20,#66bb6a)", desc: "Nature-focused stay for wildlife and forest travelers.", amenities: ["Meals", "Parking", "Safari assistance"], link: "https://www.google.com/search?q=hotels+near+Pilibhit+Tiger+Reserve" }
    ],
    food: [
        { category: "Local Food", name: "Terai Home-Style Meal", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple regional food available in local stays and restaurants.", price: "₹300+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+near+Pilibhit+Tiger+Reserve" }
    ],
    transport: [
        { title: "Road Transfer", type: "Local travel", icon: "🚙", details: "Private road transport is practical for reaching forest gates and nearby attractions.", costLabel: "Typical transfer", costValue: "₹1,000 to ₹4,000", link: "https://maps.google.com/?q=Pilibhit+Tiger+Reserve" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Pilibhit",
            days: [
                { label: "Day 1", activities: [{ time: "2:00 PM", text: "Arrival and Chuka Beach visit" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Morning wildlife safari" }, { time: "3:00 PM", text: "Birdwatching and nature exploration" }] }
            ]
        },
        mid: {
            title: "2-Day Comfortable Wildlife Trip",
            days: [
                { label: "Day 1", activities: [{ time: "2:00 PM", text: "Nature stay and Chuka Beach" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Guided safari" }, { time: "3:00 PM", text: "Forest and birding experience" }] }
            ]
        },
        luxury: {
            title: "3-Day Premium Wildlife Experience",
            days: [
                { label: "Day 1", activities: [{ time: "3:00 PM", text: "Private transfer and premium nature stay" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Private guided safari" }, { time: "3:00 PM", text: "Private nature experience" }] },
                { label: "Day 3", activities: [{ time: "7:00 AM", text: "Birding and relaxed departure" }] }
            ]
        }
    }
},

'katarniaghat-wildlife-sanctuary': {
    name: "Katarniaghat Wildlife Sanctuary",
    state: "Uttar Pradesh",
    aliases: ["katarniaghat", "katarniaghat wildlife", "katerniaghat"],
    description: "Terai wilderness destination known for forests, gharials, Gangetic dolphins, tigers, elephants, birdlife, and river ecosystems.",
    heroImage: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop",
    heroHighlights: ["Terai Wilderness", "Gharials", "River Wildlife"],
    spotlight: "Katarniaghat offers dense forests, river habitats, rare wildlife, birding, boat experiences, and one of Uttar Pradesh’s quieter wilderness journeys.",
    bestFor: ["Wildlife lovers", "Birdwatchers", "Nature travelers"],
    quickFacts: [
        { label: "Best season", value: "Nov to Jun" },
        { label: "Ideal stay", value: "2 to 3 days" }
    ],
    travelTips: [
        { title: "Arrange forest activities early", desc: "Accommodation, guides, boat trips, and forest activities may require advance planning.", icon: "🌿" }
    ],
    attractions: [
        { name: "Girijapuri Barrage Area", type: "Nature Spot", icon: "🌊", rating: "4.4", time: "2-3 hrs", desc: "Scenic river and forest landscape known for wildlife and birdwatching opportunities.", bg: "linear-gradient(135deg,#1565c0,#80cbc4)", link: "https://maps.google.com/?q=Girijapuri+Barrage" },
        { name: "Katarniaghat Forest Safari", type: "Wildlife Safari", icon: "🐅", rating: "4.5", time: "3-4 hrs", desc: "Forest wilderness experience within the protected Terai landscape.", bg: "linear-gradient(135deg,#1b5e20,#81c784)", link: "https://maps.google.com/?q=Katarniaghat+Wildlife+Sanctuary" }
    ],
    hotels: [
        { name: "Katarniaghat Forest Stay", tier: "Mid-Range", price: "₹3,500", rating: "4.2", location: "Katarniaghat Region", image: "🌿", bg: "linear-gradient(135deg,#1b5e20,#66bb6a)", desc: "Nature-focused accommodation for wildlife travelers.", amenities: ["Meals", "Parking", "Nature activities"], link: "https://www.google.com/search?q=hotels+near+Katarniaghat+Wildlife+Sanctuary" }
    ],
    food: [
        { category: "Local Food", name: "Terai Regional Meal", image: "🍛", bg: "linear-gradient(135deg,#558b2f,#aed581)", desc: "Simple regional food served at local stays and nearby settlements.", price: "₹300+", rating: "4.2", link: "https://maps.google.com/?q=restaurants+near+Katarniaghat" }
    ],
    transport: [
        { title: "Private Road Transfer", type: "Local travel", icon: "🚙", details: "Private vehicles and arranged transfers are the most practical options for reaching the sanctuary.", costLabel: "Typical transfer", costValue: "₹1,500 to ₹6,000", link: "https://maps.google.com/?q=Katarniaghat+Wildlife+Sanctuary" }
    ],
    itineraries: {
        budget: {
            title: "2-Day Budget Katarniaghat",
            days: [
                { label: "Day 1", activities: [{ time: "2:00 PM", text: "Arrival and riverside nature exploration" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Forest safari or nature activity" }, { time: "3:00 PM", text: "Birdwatching and river landscape visit" }] }
            ]
        },
        mid: {
            title: "3-Day Comfortable Wildlife Trip",
            days: [
                { label: "Day 1", activities: [{ time: "3:00 PM", text: "Arrival and forest stay" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Guided wildlife experience" }, { time: "3:00 PM", text: "River and birding excursion" }] },
                { label: "Day 3", activities: [{ time: "7:00 AM", text: "Morning nature walk and departure" }] }
            ]
        },
        luxury: {
            title: "3-Day Premium Wilderness Experience",
            days: [
                { label: "Day 1", activities: [{ time: "3:00 PM", text: "Private transfer and premium nature stay" }] },
                { label: "Day 2", activities: [{ time: "6:00 AM", text: "Private guided wildlife experience" }, { time: "3:00 PM", text: "Curated river and birding excursion" }] },
                { label: "Day 3", activities: [{ time: "7:00 AM", text: "Private nature experience and departure" }] }
            ]
        }
    }
}

});