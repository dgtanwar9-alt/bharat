const districtStates = {
    rajasthan: {
        header: {
            label: 'Discover Rajasthan',
            title: 'Rajasthan Travel Guide',
            subtitle: 'Explore the top Rajasthan destinations every tourist loves, followed by quieter hidden gems in the state.',
            heroImg: 'https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        topSubtitle: '20 must-visit spots where most tourists begin their Rajasthan journey.',
        moreSubtitle: 'Lesser-known gems for the traveler who wants to dig deeper into Rajasthan.',
        topPlaces: [
            { 
  name: 'Jaipur',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2M2bEqMlJgKOMZp6_D3cugUPW-yqTwTVPWNN9ZMz0IZXcFtut8Q4Mlw&s=10',
  desc: 'Pink City famous for forts, bazaars and royal landmarks.'
},
{ 
  name: 'Udaipur',
  img: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH8ib4mfctI4DVVRHKqE9JrjwYlnxdO_DDDggtDynBEMZipnjxm2TBZPp7qje0qAjeLsp4HD5KxfQg0-fb5NBvvKavDx7llSTpfJhuGbNCCkkKFQmu6qiGuiB0MSYa3Z4OVQztB7YXvD90=w141-h235-n-k-no-nu',
  desc: 'Lake City known for palaces, boat rides and sunset views.'
},
{ 
  name: 'Ajmer',
  img: 'https://media.istockphoto.com/id/1140660972/photo/panoramic-view-on-holy-lake-and-city-pushkar-rajasthan-india.jpg?s=1024x1024&w=is&k=20&c=DtEsNNHghdWBoqOHfi39SOFFcQBVMcvdCbau4Yzwtgs=',
  desc: 'Spiritual center with Dargah Sharif and Ana Sagar Lake.'
},
{ 
  name: 'Jodhpur',
  img: 'https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  desc: 'Blue City wrapped around Mehrangarh Fort.'
},
{ 
  name: 'Pushkar',
  img: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop',
  desc: 'Holy lake, Brahma temple and colorful bazaars.'
},
{ 
  name: 'Ranthambore',
  img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop',
  desc: 'Top safari park for tigers and wildlife.'
},
{ 
  name: 'Mount Abu',
  img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
  desc: 'The only hill station in Rajasthan.'
},
{ 
  name: 'Chittorgarh',
  img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200&auto=format&fit=crop',
  desc: 'Historic fort city of Rajput valor.'
},

{ 
  name: 'Bikaner',
  img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop',
  desc: 'Desert city known for Junagarh Fort, bhujia and camel culture.'
}   ],
        morePlaces: [
            { 
  name: 'Bundi',
  img: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1200&auto=format&fit=crop',
  desc: 'Quiet stepwell town with palaces and old streets.'
},

{ 
  name: 'Alwar',
  img: 'https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1200&auto=format&fit=crop',
  desc: 'Gateway to Sariska and heritage hill forts.'
},

{ 
  name: 'Kota',
  img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200&auto=format&fit=crop',
  desc: 'Riverside city known for palaces and gardens.'
},

{ 
  name: 'Neemrana',
  img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  desc: 'Fort palace stay near Delhi for weekend heritage escapes.'
}    ]
    },


chhattisgarh: {
    header: {
        label: 'Discover Chhattisgarh',
        title: 'Chhattisgarh Travel Guide',
        subtitle: 'From spectacular waterfalls and ancient temples to dense forests — explore the natural and cultural treasures of Central India.',
        heroImg: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1600&auto=format&fit=crop'
    },
    topSubtitle: 'Famous waterfalls, heritage sites, wildlife reserves, and cultural destinations across Chhattisgarh.',
    moreSubtitle: 'Ancient towns, hidden waterfalls, sacred sites, caves, forests, and quieter destinations beyond the main tourist routes.',
    topPlaces: [
        { name: 'Raipur', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop', desc: 'Capital city known for museums, temples, lakes, and modern attractions.' },
        { name: 'Jagdalpur', img: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=600&auto=format&fit=crop', desc: 'Gateway to Bastar waterfalls, tribal culture, caves, and dense forests.' },
        { name: 'Chitrakote Falls', img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop', desc: 'Spectacular horseshoe-shaped waterfall on the Indravati River.' },
        { name: 'Tirathgarh Falls', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop', desc: 'Multi-tiered waterfall surrounded by the forests of Kanger Valley.' },
        { name: 'Kanger Valley National Park', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop', desc: 'Protected wilderness famous for waterfalls, limestone caves, forests, and wildlife.' },
        { name: 'Mainpat', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Peaceful hill destination known for waterfalls, scenic landscapes, and Tibetan culture.' },
        { name: 'Sirpur', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop', desc: 'Ancient archaeological town famous for temples, monasteries, and Buddhist heritage.' },
        { name: 'Dongargarh', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Popular pilgrimage town famous for the hilltop Maa Bamleshwari Temple.' },
        { name: 'Bhoramdeo Temple', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Historic temple complex surrounded by forests and the scenic Maikal Hills.' },
        { name: 'Achanakmar Tiger Reserve', img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop', desc: 'Large forest reserve known for wildlife, biodiversity, and wilderness experiences.' }
    ],
    morePlaces: [
        { name: 'Bilaspur', img: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?q=80&w=600&auto=format&fit=crop', desc: 'Major city and gateway to temples, wildlife reserves, and historic destinations.' },
        { name: 'Ambikapur', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', desc: 'Northern city surrounded by hills, forests, waterfalls, and scenic destinations.' },
        { name: 'Dantewada', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop', desc: 'Historic pilgrimage destination famous for Danteshwari Temple and Bastar culture.' },
        { name: 'Barsur', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Ancient temple town known for archaeological ruins, sculptures, and historic monuments.' },
        { name: 'Dhamtari', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Nature destination surrounded by reservoirs, forests, temples, and wildlife areas.' },
        { name: 'Gangrel Dam', img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop', desc: 'Popular reservoir destination for scenic views, recreation, and water activities.' },
        { name: 'Barnawapara Wildlife Sanctuary', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop', desc: 'Wildlife sanctuary known for forests, grasslands, safaris, and diverse animal species.' },
        { name: 'Rajim', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop', desc: 'Sacred temple town located at the scenic confluence of three rivers.' },
        { name: 'Champaran', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Important pilgrimage destination associated with the birthplace of Vallabhacharya.' },
        { name: 'Malhar', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Ancient archaeological destination featuring temples, sculptures, and historic ruins.' },
        { name: 'Ratanpur', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Historic temple town famous for Mahamaya Devi Temple and ancient heritage.' },
        { name: 'Chaiturgarh', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop', desc: 'Hill fort destination offering forests, temples, trekking, and panoramic landscapes.' },
        { name: 'Kailash and Kotumsar Caves', img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop', desc: 'Remarkable limestone cave systems located inside Kanger Valley National Park.' },
        { name: 'Tamra Ghoomar Waterfall', img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop', desc: 'Scenic seasonal waterfall surrounded by forests near the Chitrakote region.' },
        { name: 'Mendri Ghumar Waterfall', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop', desc: 'Tall seasonal waterfall and scenic viewpoint located near Chitrakote Falls.' },
        { name: 'Madku Dweep', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'River island known for ancient temples, archaeological remains, and peaceful scenery.' },
        { name: 'Gadiya Mountain', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', desc: 'Historic hill destination in Kanker known for viewpoints, temples, and local legends.' },
        { name: 'Kanker', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=600&auto=format&fit=crop', desc: 'Forest-covered heritage destination known for tribal culture and natural landscapes.' },
        { name: 'Bhuteshwar Nath', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Sacred destination famous for its naturally growing Shiva Lingam near Gariaband.' },
        { name: 'Guru Ghasidas National Park', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop', desc: 'Expansive protected wilderness known for forests, wildlife, and rich biodiversity.' }
    ]
},

     kerala: {
        header: {
            label: 'Discover Kerala',
            title: 'Kerala Travel Guide',
            subtitle: 'From backwaters to beaches — explore the diverse landscapes of God\'s Own Country.',
            heroImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop'
        },
        topSubtitle: 'North Kerala and South Kerala highlights for every kind of beach traveler.',
        moreSubtitle: 'Hidden bays, forts, and quieter coastal escapes beyond the main beach routes.',
        topPlaces: [
            { name: 'Baga Beach', img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=600&auto=format&fit=crop', desc: 'North Goa hotspot famous for lively shacks and watersports.' },
            { name: 'Calangute Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Busy beach with markets, cafes, and sunset parties.' },
            { name: 'Anjuna Beach', img: 'https://images.unsplash.com/photo-1519821172141-b7aa8c43b1c4?q=80&w=600&auto=format&fit=crop', desc: 'Bohemian shore known for its lively flea market and cliffs.' },
            { name: 'Fort Aguada', img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop', desc: 'Historic coastal fort with panoramic Arabian Sea views.' },
            { name: 'Vagator Beach', img: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=600&auto=format&fit=crop', desc: 'Cliff-backed beach with dramatic sunsets and chilled cafes.' },
            { name: 'Chapora Fort', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Scenic fort ruins overlooking the North Goa coastline.' },
            { name: 'Morjim Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Laid-back shore with calm waves and turtle nesting season.' },
            { name: 'Arambol Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Bohemian beach popular with yoga, music, and sunbathers.' },
            { name: 'Basilica of Bom Jesus', img: 'https://images.unsplash.com/photo-1542131593-8ff66e5b1fa7?q=80&w=600&auto=format&fit=crop', desc: 'Baroque UNESCO heritage church in Old Goa.' },
            { name: 'Cabo de Rama', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop', desc: 'South Goa cliff fort with sweeping ocean views.' }
        ],
        morePlaces: [
            { name: 'Palolem Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Peaceful South Goa crescent beach with colorful boats.' },
            { name: 'Colva Beach', img: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=600&auto=format&fit=crop', desc: 'South Goa beach lined with coconut palms and shacks.' },
            { name: 'Majorda Beach', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop', desc: 'Quiet South Goa beach perfect for sunset strolls.' },
            { name: 'Agonda Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Serene South Goa beach popular with wellness travelers.' },
            { name: 'Dudhsagar Falls', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Spectacular waterfall set in lush Western Ghats forest.' },
            { name: 'Spice Plantations', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600&auto=format&fit=crop', desc: 'Fragrant plantation tours just inland from Goa’s coast.' },
            { name: 'Benaulim Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Laid-back beach with soft sand and peaceful cafes.' },
            { name: 'Butterfly Beach', img: 'https://images.unsplash.com/photo-1514820720305-146c6fbe0d94?q=80&w=600&auto=format&fit=crop', desc: 'Secluded bay reached by boat or scenic hike.' },
            { name: 'Old Goa', img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop', desc: 'Historic Portuguese churches, cathedrals and colonial flavor.' },
            { name: 'Goa Beach Shacks', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Classic beach shacks serving seafood and chilled cocktails.' }
        ]
    },

    himachal: {
        header: {
            label: 'Discover Himachal Pradesh',
            title: 'Himachal Pradesh Travel Guide',
            subtitle: 'From snow-capped peaks to lush valleys — explore the natural beauty of the Himalayan state.',
            heroImg: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1600&auto=format&fit=crop'
        },
        topSubtitle: 'North Himachal and South Himachal highlights for every kind of mountain traveler.',
        moreSubtitle: 'Hidden trails, monasteries, and quieter hill stations beyond the main tourist routes.',
        topPlaces: [
            { name: 'Baga Beach', img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=600&auto=format&fit=crop', desc: 'North Goa hotspot famous for lively shacks and watersports.' },
            { name: 'Calangute Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Busy beach with markets, cafes, and sunset parties.' },
            { name: 'Anjuna Beach', img: 'https://images.unsplash.com/photo-1519821172141-b7aa8c43b1c4?q=80&w=600&auto=format&fit=crop', desc: 'Bohemian shore known for its lively flea market and cliffs.' },
            { name: 'Fort Aguada', img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop', desc: 'Historic coastal fort with panoramic Arabian Sea views.' },
            { name: 'Vagator Beach', img: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=600&auto=format&fit=crop', desc: 'Cliff-backed beach with dramatic sunsets and chilled cafes.' },
            { name: 'Chapora Fort', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Scenic fort ruins overlooking the North Goa coastline.' },
            { name: 'Morjim Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Laid-back shore with calm waves and turtle nesting season.' },
            { name: 'Arambol Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Bohemian beach popular with yoga, music, and sunbathers.' },
            { name: 'Basilica of Bom Jesus', img: 'https://images.unsplash.com/photo-1542131593-8ff66e5b1fa7?q=80&w=600&auto=format&fit=crop', desc: 'Baroque UNESCO heritage church in Old Goa.' },
            { name: 'Cabo de Rama', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop', desc: 'South Goa cliff fort with sweeping ocean views.' }
        ],
        morePlaces: [
            { name: 'Palolem Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Peaceful South Goa crescent beach with colorful boats.' },
            { name: 'Colva Beach', img: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=600&auto=format&fit=crop', desc: 'South Goa beach lined with coconut palms and shacks.' },
            { name: 'Majorda Beach', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop', desc: 'Quiet South Goa beach perfect for sunset strolls.' },
            { name: 'Agonda Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Serene South Goa beach popular with wellness travelers.' },
            { name: 'Dudhsagar Falls', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Spectacular waterfall set in lush Western Ghats forest.' },
            { name: 'Spice Plantations', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600&auto=format&fit=crop', desc: 'Fragrant plantation tours just inland from Goa’s coast.' },
            { name: 'Benaulim Beach', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop', desc: 'Laid-back beach with soft sand and peaceful cafes.' },
            { name: 'Butterfly Beach', img: 'https://images.unsplash.com/photo-1514820720305-146c6fbe0d94?q=80&w=600&auto=format&fit=crop', desc: 'Secluded bay reached by boat or scenic hike.' },
            { name: 'Old Goa', img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop', desc: 'Historic Portuguese churches, cathedrals and colonial flavor.' },
            { name: 'Goa Beach Shacks', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Classic beach shacks serving seafood and chilled cocktails.' }
        ]
    },

   'madhya-pradesh': {
    header: {
        label: 'Discover Madhya Pradesh',
        title: 'Madhya Pradesh Travel Guide',
        subtitle: 'From ancient temples and royal forts to tiger reserves, waterfalls, sacred rivers, and hill stations — explore the heritage and natural wonders of the Heart of India.',
        heroImg: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1600&auto=format&fit=crop'
    },
    topSubtitle: 'Famous heritage cities, pilgrimage destinations, national parks, ancient temples, and natural attractions across Madhya Pradesh.',
    moreSubtitle: 'Historic towns, wildlife reserves, sacred destinations, waterfalls, archaeological sites, hill retreats, and quieter attractions beyond the main tourist routes.',

    topPlaces: [
        { name: 'Bhopal', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop', desc: 'Capital city known for lakes, museums, historic mosques, cultural attractions, and nearby archaeological destinations.' },
        { name: 'Indore', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop', desc: 'Major city famous for Holkar heritage, royal palaces, temples, vibrant markets, and legendary street food.' },
        { name: 'Ujjain', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Ancient pilgrimage city famous for Mahakaleshwar Jyotirlinga, Mahakal Lok, Shipra River, and historic temples.' },
        { name: 'Gwalior', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Historic city famous for Gwalior Fort, royal palaces, ancient temples, museums, and classical music heritage.' },
        { name: 'Jabalpur', img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop', desc: 'Major tourism city known for Marble Rocks, Dhuandhar Falls, historic temples, forts, and the Narmada River.' },
        { name: 'Khajuraho', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'World-famous UNESCO heritage destination known for magnificent Chandela-era temples and intricate stone sculptures.' },
        { name: 'Orchha', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop', desc: 'Historic riverside town famous for palaces, temples, cenotaphs, forts, and Bundela architectural heritage.' },
        { name: 'Sanchi', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'UNESCO heritage destination famous for ancient Buddhist stupas, monasteries, pillars, and archaeological monuments.' },
        { name: 'Pachmarhi', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', desc: 'Popular hill station known for waterfalls, caves, forests, viewpoints, trekking trails, and Satpura landscapes.' },
        { name: 'Mandu', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop', desc: 'Historic fortified city famous for palaces, monuments, Afghan architecture, lakes, and romantic legends.' }
    ],

    morePlaces: [
        { name: 'Maheshwar', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop', desc: 'Historic Narmada riverside town famous for Ahilya Fort, temples, ghats, handloom traditions, and Maheshwari sarees.' },
        { name: 'Omkareshwar', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Sacred island pilgrimage destination famous for Omkareshwar Jyotirlinga, Narmada ghats, temples, and spiritual heritage.' },
        { name: 'Amarkantak', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Sacred hill destination known as the source of the Narmada River, with temples, waterfalls, forests, and pilgrimage sites.' },
        { name: 'Shivpuri', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop', desc: 'Historic city known for royal cenotaphs, lakes, Madhav National Park, palaces, and forest landscapes.' },
        { name: 'Chanderi', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Historic town famous for forts, palaces, mosques, ancient monuments, and traditional Chanderi handloom sarees.' },
        { name: 'Burhanpur', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Historic Mughal-era city known for forts, mosques, royal monuments, underground water systems, and architectural heritage.' },
        { name: 'Datia', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Historic pilgrimage and heritage city famous for Datia Palace, Pitambara Peeth, temples, and Bundela architecture.' },
        { name: 'Vidisha', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Ancient city surrounded by archaeological sites, historic temples, monuments, caves, and cultural heritage.' },
        { name: 'Bhimbetka', img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop', desc: 'UNESCO heritage site famous for prehistoric rock shelters, ancient cave paintings, archaeology, and human history.' },
        { name: 'Bhojpur', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Historic temple destination famous for the unfinished Bhojeshwar Temple and its massive Shiva Lingam.' },
        { name: 'Raisen', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop', desc: 'Historic hill destination known for Raisen Fort, ancient monuments, temples, mosques, and panoramic landscapes.' },
        { name: 'Rewa', img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop', desc: 'Regional tourism hub known for waterfalls, royal heritage, forests, temples, and scenic destinations of northeastern Madhya Pradesh.' },
        { name: 'Maihar', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', desc: 'Major pilgrimage town famous for the hilltop Maa Sharda Temple and its religious and musical heritage.' },
        { name: 'Chitrakoot', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Sacred pilgrimage destination associated with the Ramayana, known for ghats, temples, forests, caves, and waterfalls.' },
        { name: 'Kanha National Park', img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop', desc: 'One of India’s most famous tiger reserves, known for wildlife safaris, forests, grasslands, barasingha, and rich biodiversity.' },
        { name: 'Bandhavgarh National Park', img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop', desc: 'Renowned tiger reserve famous for wildlife safaris, dense forests, ancient caves, and historic Bandhavgarh Fort.' },
        { name: 'Pench National Park', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop', desc: 'Popular wildlife destination known for tiger safaris, teak forests, diverse wildlife, and landscapes associated with The Jungle Book.' },
        { name: 'Panna National Park', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop', desc: 'Tiger reserve and wilderness destination known for wildlife, forests, waterfalls, Ken River landscapes, and biodiversity.' },
        { name: 'Satpura National Park', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop', desc: 'Large protected wilderness famous for wildlife safaris, forests, mountains, rivers, trekking, and nature experiences.' },
        { name: 'Kuno National Park', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop', desc: 'Expansive wildlife destination internationally known for cheetah conservation, forests, grasslands, and wilderness tourism.' },
        { name: 'Sanjay-Dubri Tiger Reserve', img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop', desc: 'Remote tiger reserve known for dense forests, wildlife, biodiversity, and quieter wilderness experiences.' },
        { name: 'Tamia', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', desc: 'Peaceful hill destination known for forests, viewpoints, valleys, trekking routes, and scenic Satpura landscapes.' },
        { name: 'Patalkot', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=600&auto=format&fit=crop', desc: 'Deep horseshoe-shaped valley known for tribal communities, forests, viewpoints, traditional culture, and natural landscapes.' },
        { name: 'Hanuwantiya', img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop', desc: 'Popular water tourism destination on Indira Sagar Reservoir known for water sports, island landscapes, and adventure activities.' },
        { name: 'Sailani Island', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Scenic island tourism destination on the Narmada backwaters known for peaceful stays, boating, and water-based recreation.' },
        { name: 'Gandhi Sagar', img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop', desc: 'Reservoir and wildlife destination known for Gandhi Sagar Dam, sanctuary landscapes, water tourism, and nature experiences.' },
        { name: 'Mandsaur', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop', desc: 'Historic city known for Pashupatinath Temple, archaeological heritage, religious sites, and nearby nature attractions.' },
        { name: 'Neemuch', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Regional destination known for temples, historic sites, nearby waterfalls, reservoirs, and natural landscapes.' },
        { name: 'Dewas', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop', desc: 'Historic city famous for the hilltop Tekri temples, religious tourism, panoramic views, and nearby natural attractions.' },
        { name: 'Ratlam', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', desc: 'Regional city known for temples, historic attractions, local cuisine, markets, and access to western Madhya Pradesh destinations.' },
        { name: 'Sehore', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=600&auto=format&fit=crop', desc: 'Regional tourism destination known for temples, historic sites, river landscapes, forests, and nearby nature attractions.' }
    ]
},

'uttar-pradesh': {
    header: {
        label: 'Discover Uttar Pradesh',
        title: 'Uttar Pradesh Travel Guide',
        subtitle: 'From the timeless Taj Mahal and sacred ghats of Varanasi to royal cities, Buddhist heritage sites, wildlife reserves, and ancient temples — explore the cultural heartland of India.',
        heroImg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop'
    },

    topSubtitle: 'Famous heritage cities, pilgrimage destinations, Mughal monuments, sacred rivers, Buddhist sites, and cultural attractions across Uttar Pradesh.',

    moreSubtitle: 'Historic towns, wildlife reserves, ancient temples, forts, waterfalls, archaeological sites, spiritual destinations, and quieter attractions beyond the main tourist routes.',

    topPlaces: [

        {
            name: 'Agra',
            img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop',
            desc: 'World-famous heritage city known for the Taj Mahal, Agra Fort, Mughal architecture, gardens, and historic monuments.'
        },

        {
            name: 'Varanasi',
            img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
            desc: 'One of the world’s oldest living cities, famous for sacred Ganga ghats, temples, evening aarti, spirituality, and ancient culture.'
        },

        {
            name: 'Lucknow',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Capital city famous for Nawabi heritage, Bara Imambara, historic architecture, gardens, traditional markets, and Awadhi cuisine.'
        },

        {
            name: 'Ayodhya',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient sacred city associated with Lord Rama, famous for Shri Ram Janmabhoomi Mandir, Saryu River ghats, temples, and pilgrimage tourism.'
        },

        {
            name: 'Mathura',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Sacred birthplace of Lord Krishna known for Shri Krishna Janmabhoomi, ancient temples, festivals, ghats, and Braj culture.'
        },

        {
            name: 'Vrindavan',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Major Krishna pilgrimage destination famous for Banke Bihari Temple, Prem Mandir, ISKCON Temple, festivals, and spiritual atmosphere.'
        },

        {
            name: 'Prayagraj',
            img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic pilgrimage city famous for Triveni Sangam, Kumbh Mela, ancient temples, Allahabad Fort, and cultural heritage.'
        },

        {
            name: 'Sarnath',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Important Buddhist pilgrimage destination where Buddha delivered his first sermon, known for stupas, monasteries, museums, and archaeological remains.'
        },

        {
            name: 'Fatehpur Sikri',
            img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop',
            desc: 'UNESCO World Heritage Site and former Mughal capital famous for palaces, courtyards, mosques, gateways, and magnificent architecture.'
        },

        {
            name: 'Dudhwa National Park',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
            desc: 'Major wildlife destination known for dense forests, grasslands, tigers, rhinos, swamp deer, birdlife, and wilderness safaris.'
        }

    ],

    morePlaces: [

        {
            name: 'Jhansi',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic Bundelkhand city famous for Jhansi Fort, Rani Lakshmibai heritage, museums, temples, and important sites of the 1857 uprising.'
        },

        {
            name: 'Chitrakoot',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Sacred pilgrimage destination associated with the Ramayana, known for ghats, temples, forests, caves, hills, and waterfalls.'
        },

        {
            name: 'Kushinagar',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'International Buddhist pilgrimage destination associated with the Mahaparinirvana of Buddha, featuring temples, stupas, monasteries, and museums.'
        },

        {
            name: 'Shravasti',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient Buddhist pilgrimage destination known for Jetavana Monastery, archaeological ruins, stupas, temples, and spiritual heritage.'
        },

        {
            name: 'Kapilvastu',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Important Buddhist heritage region associated with the early life of Gautama Buddha and known for archaeological remains and ancient stupas.'
        },

        {
            name: 'Kaushambi',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient archaeological destination associated with Buddhist history, historic ruins, stupas, forts, and early Indian civilization.'
        },

        {
            name: 'Vindhyachal',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Major pilgrimage destination famous for Vindhyavasini Devi Temple, sacred ghats, nearby temples, and the traditional Trikona Parikrama.'
        },

        {
            name: 'Mirzapur',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Scenic destination known for waterfalls, reservoirs, forests, historic temples, ghats, and nearby natural attractions.'
        },

        {
            name: 'Chunar',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic riverside town famous for Chunar Fort, ancient legends, Ganga views, sandstone heritage, and cultural history.'
        },

        {
            name: 'Sonbhadra',
            img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop',
            desc: 'Nature-rich district known for waterfalls, forests, reservoirs, rock formations, ancient sites, and scenic landscapes.'
        },

        {
            name: 'Lakhaniya Dari Waterfall',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular natural attraction surrounded by rocky landscapes, seasonal streams, forests, and scenic picnic locations.'
        },

        {
            name: 'Rajdari Waterfall',
            img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop',
            desc: 'Scenic waterfall destination surrounded by forests and rocky landscapes, popular for nature trips and monsoon tourism.'
        },

        {
            name: 'Devdari Waterfall',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Beautiful seasonal waterfall near Chandauli known for forest landscapes, rocky terrain, and peaceful natural surroundings.'
        },

        {
            name: 'Chandraprabha Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop',
            desc: 'Protected forest destination known for waterfalls, wildlife, forest trails, reservoirs, and scenic landscapes.'
        },

        {
            name: 'Hastinapur',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient historic and pilgrimage town associated with the Mahabharata and famous for Jain temples, sacred sites, and wildlife areas.'
        },

        {
            name: 'Hastinapur Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
            desc: 'Large protected landscape known for wetlands, forests, grasslands, wildlife, migratory birds, and biodiversity.'
        },

        {
            name: 'Nawabganj Bird Sanctuary',
            img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular wetland and birdwatching destination known for migratory birds, nature trails, lake landscapes, and wildlife tourism.'
        },

        {
            name: 'National Chambal Sanctuary',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
            desc: 'Protected river ecosystem known for gharials, Gangetic dolphins, turtles, migratory birds, boat safaris, and ravine landscapes.'
        },

        {
            name: 'Etawah Safari Park',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
            desc: 'Large safari and wildlife park featuring lion, deer, bear, leopard, and other safari zones with nature education facilities.'
        },

        {
            name: 'Bateshwar',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic pilgrimage destination on the Yamuna River famous for a long chain of Shiva temples, ghats, fairs, and cultural heritage.'
        },

        {
            name: 'Deogarh',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic archaeological destination famous for the ancient Dashavatara Temple, Jain monuments, sculptures, and nearby natural landscapes.'
        },

        {
            name: 'Kalpi',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic town on the Yamuna River known for ancient monuments, temples, forts, cultural heritage, and links to the 1857 uprising.'
        },

        {
            name: 'Bithoor',
            img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic pilgrimage town on the Ganga River known for ghats, temples, Ramayana traditions, and associations with the 1857 uprising.'
        },

        {
            name: 'Kanpur',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Major city on the Ganga known for historic sites, temples, museums, parks, riverfront attractions, and colonial heritage.'
        },

        {
            name: 'Gorakhpur',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Major eastern Uttar Pradesh city known for Gorakhnath Temple, museums, parks, religious heritage, and access to Buddhist destinations.'
        },

        {
            name: 'Meerut',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic city strongly associated with the uprising of 1857 and known for monuments, temples, churches, museums, and local heritage.'
        },

        {
            name: 'Aligarh',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic city known for Aligarh Fort, cultural institutions, museums, traditional markets, and regional heritage.'
        },

        {
            name: 'Bareilly',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Regional cultural destination known for temples, shrines, historic sites, markets, crafts, and Rohilkhand heritage.'
        },

        {
            name: 'Jaunpur',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic city famous for Sharqi-era architecture, Atala Mosque, Shahi Bridge, forts, monuments, and medieval heritage.'
        },

        {
            name: 'Mahoba',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic Bundelkhand destination known for Chandela heritage, ancient lakes, temples, forts, and warrior traditions.'
        },

        {
            name: 'Kalinjar Fort',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient hill fort in Bundelkhand famous for military history, temples, sculptures, rock-cut monuments, and panoramic landscapes.'
        },

        {
            name: 'Banda',
            img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop',
            desc: 'Bundelkhand destination known for forts, temples, rivers, historic landscapes, nearby hills, and access to Kalinjar.'
        },

        {
            name: 'Garhmukteshwar',
            img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient pilgrimage town on the Ganga River known for sacred ghats, temples, religious fairs, and spiritual tourism.'
        },

        {
            name: 'Naimisharanya',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient pilgrimage destination associated with Hindu scriptures and famous for Chakra Tirtha, temples, sacred ponds, and spiritual heritage.'
        },

        {
            name: 'Deva Sharif',
            img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
            desc: 'Important Sufi pilgrimage destination famous for the shrine of Haji Waris Ali Shah, religious harmony, fairs, and cultural traditions.'
        },

        {
            name: 'Shukratal',
            img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
            desc: 'Sacred pilgrimage destination on the Ganga River associated with the narration of the Bhagavata Purana and known for temples and ghats.'
        },

        {
            name: 'Barsana',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Sacred Braj town associated with Radha, famous for Radha Rani Temple, Lathmar Holi, pilgrimage routes, hills, and traditional culture.'
        },

        {
            name: 'Nandgaon',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic Braj pilgrimage town associated with the childhood of Lord Krishna and known for Nand Bhavan, temples, hills, and festivals.'
        },

        {
            name: 'Govardhan',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Major Krishna pilgrimage destination famous for Govardhan Hill, sacred parikrama, temples, kunds, and Braj religious traditions.'
        },

        {
            name: 'Gokul',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Sacred Braj pilgrimage town associated with the childhood of Lord Krishna and known for temples, ghats, festivals, and traditional heritage.'
        },

        {
            name: 'Balrampur',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Regional tourism destination known for temples, historic estates, cultural heritage, and access to Shravasti and nearby nature attractions.'
        },

        {
            name: 'Pilibhit Tiger Reserve',
            img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop',
            desc: 'Important tiger reserve known for forests, grasslands, rivers, wildlife safaris, birdlife, and rich Terai biodiversity.'
        },

        {
            name: 'Katarniaghat Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop',
            desc: 'Terai wilderness destination known for forests, gharials, Gangetic dolphins, tigers, elephants, birdlife, and river ecosystems.'
        },

        {
            name: 'Sohagi Barwa Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
            desc: 'Protected forest landscape in eastern Uttar Pradesh known for wildlife, wetlands, birdlife, forest trails, and natural biodiversity.'
        },

        {
            name: 'Sur Sarovar Bird Sanctuary',
            img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=600&auto=format&fit=crop',
            desc: 'Wetland and bird sanctuary near Agra known for Keetham Lake, migratory birds, nature trails, wildlife, and peaceful landscapes.'
        },

        {
            name: 'Okhla Bird Sanctuary',
            img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=600&auto=format&fit=crop',
            desc: 'Urban wetland sanctuary on the Yamuna River known for migratory birds, birdwatching trails, wetlands, and biodiversity.'
        }

    ]
},goa: {
    header: {
        label: 'Discover Goa',
        title: 'Goa Travel Guide',
        subtitle: 'Golden beaches, Portuguese heritage, waterfalls, forts, islands, wildlife, nightlife, and peaceful villages — explore Goa beyond the usual tourist routes.',
        heroImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop'
    },

    topSubtitle: 'Goa’s most famous beaches, forts, churches, waterfalls, heritage areas, and must-visit attractions.',

    moreSubtitle: 'Explore quieter beaches, hidden waterfalls, wildlife sanctuaries, islands, temples, caves, heritage villages, and lesser-known destinations across Goa.',

    topPlaces: [

        {
            name: 'Baga Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular North Goa beach known for watersports, beach shacks, nightlife, restaurants, and lively tourist atmosphere.'
        },

        {
            name: 'Calangute Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'One of Goa’s largest and busiest beaches, surrounded by markets, hotels, cafes, watersports, and entertainment.'
        },

        {
            name: 'Anjuna Beach',
            img: 'https://media.istockphoto.com/id/2196332462/photo/parasailing-north-goa.jpg?s=612x612&w=0&k=20&c=DVOQaJsJT_ybGdD_5PNsg9gwk3zo1S2zV1X6v57n9_k=',
            desc: 'Iconic North Goa beach famous for rocky coastline, sunset views, flea markets, cafes, and bohemian culture.'
        },

        {
            name: 'Vagator Beach',
            img: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=600&auto=format&fit=crop',
            desc: 'Beautiful cliff-backed beach offering dramatic landscapes, sunset viewpoints, cafes, and access to Chapora Fort.'
        },

        {
            name: 'Candolim Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular but relatively relaxed North Goa beach known for long sandy shores, watersports, resorts, and restaurants.'
        },

        {
            name: 'Sinquerim Beach',
            img: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=600&auto=format&fit=crop',
            desc: 'Scenic beach near Fort Aguada known for golden sand, water activities, coastal views, and luxury resorts.'
        },

        {
            name: 'Fort Aguada',
            img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic Portuguese coastal fort and lighthouse complex overlooking the Arabian Sea and Mandovi River.'
        },

        {
            name: 'Chapora Fort',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic hilltop fort famous for panoramic views over Vagator Beach, Chapora River, and the Arabian Sea.'
        },

        {
            name: 'Basilica of Bom Jesus',
            img: 'https://images.unsplash.com/photo-1542131593-8ff66e5b1fa7?q=80&w=600&auto=format&fit=crop',
            desc: 'UNESCO-listed church in Old Goa famous for Baroque architecture and the relics of Saint Francis Xavier.'
        },

        {
            name: 'Se Cathedral',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'One of Asia’s largest historic churches and an important landmark of Goa’s Portuguese colonial heritage.'
        },

        {
            name: 'Old Goa',
            img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic former Portuguese capital filled with UNESCO churches, museums, cathedrals, monuments, and colonial heritage.'
        },

        {
            name: 'Dudhsagar Falls',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Spectacular multi-tier waterfall surrounded by dense Western Ghats forests and one of Goa’s greatest natural attractions.'
        },

        {
            name: 'Palolem Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Beautiful crescent-shaped South Goa beach known for calm waters, colorful boats, beach huts, and relaxed atmosphere.'
        },

        {
            name: 'Agonda Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Peaceful South Goa beach popular for relaxation, yoga retreats, long walks, sunsets, and quieter coastal stays.'
        },

        {
            name: 'Colva Beach',
            img: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=600&auto=format&fit=crop',
            desc: 'Long South Goa beach known for white sand, coconut palms, beach shacks, watersports, and family-friendly atmosphere.'
        },

        {
            name: 'Cabo de Rama Fort',
            img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic cliff-top fort in South Goa offering dramatic Arabian Sea views, ruins, and peaceful coastal scenery.'
        },

        {
            name: 'Butterfly Beach',
            img: 'https://images.unsplash.com/photo-1514820720305-146c6fbe0d94?q=80&w=600&auto=format&fit=crop',
            desc: 'Secluded crescent-shaped bay surrounded by forests and cliffs, accessible by boat or adventurous trekking routes.'
        },

        {
            name: 'Arambol Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Bohemian North Goa beach famous for live music, yoga, sunset gatherings, cafes, markets, and international travelers.'
        },

        {
            name: 'Morjim Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Relaxed North Goa beach known for broad sandy shores, coastal cafes, sunsets, and seasonal Olive Ridley turtle nesting.'
        },

        {
            name: 'Fontainhas',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Colorful Latin Quarter of Panaji known for Portuguese houses, narrow streets, art galleries, cafes, and heritage walks.'
        }

    ],

    morePlaces: [

        {
            name: 'Benaulim Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Relaxed South Goa beach known for peaceful surroundings, seafood restaurants, water activities, and long sandy coastline.'
        },

        {
            name: 'Majorda Beach',
            img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',
            desc: 'Quiet South Goa beach surrounded by palm trees, resorts, traditional bakeries, and peaceful coastal landscapes.'
        },

        {
            name: 'Betalbatim Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Peaceful coastal destination between Colva and Majorda known for clean sand, sunsets, and fewer tourist crowds.'
        },

        {
            name: 'Varca Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Long and peaceful South Goa beach known for soft sand, luxury resorts, palm trees, and relaxed coastal holidays.'
        },

        {
            name: 'Cavelossim Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Beautiful beach located between the Arabian Sea and Sal River, popular for resorts, boat trips, and sunset views.'
        },

        {
            name: 'Mobor Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Quiet South Goa beach known for luxury resorts, water activities, river cruises, and scenic coastal landscapes.'
        },

        {
            name: 'Galgibaga Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Remote South Goa beach known for natural beauty, peaceful surroundings, and seasonal Olive Ridley turtle nesting.'
        },

        {
            name: 'Talpona Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Quiet beach near the Talpona River offering peaceful scenery, fishing villages, and uncrowded coastal landscapes.'
        },

        {
            name: 'Patnem Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Relaxed South Goa beach near Palolem known for yoga retreats, beach huts, cafes, and peaceful swimming conditions.'
        },

        {
            name: 'Cola Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Secluded coastal destination famous for its freshwater lagoon, palm-covered hills, beach tents, and scenic surroundings.'
        },

        {
            name: 'Kakolem Beach',
            img: 'https://images.unsplash.com/photo-1514820720305-146c6fbe0d94?q=80&w=600&auto=format&fit=crop',
            desc: 'Remote beach surrounded by cliffs and forests, offering an adventurous escape from Goa’s busy tourist destinations.'
        },

        {
            name: 'Ashwem Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Stylish and peaceful North Goa beach known for boutique stays, beach cafes, yoga retreats, and relaxed atmosphere.'
        },

        {
            name: 'Mandrem Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Quiet North Goa beach featuring long sandy stretches, shallow waters, wellness retreats, and beautiful sunsets.'
        },

        {
            name: 'Querim Beach',
            img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=600&auto=format&fit=crop',
            desc: 'Goa’s northernmost beach offering quiet surroundings, casuarina trees, river views, and fewer tourist crowds.'
        },

        {
            name: 'Reis Magos Fort',
            img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop',
            desc: 'Restored Portuguese fort overlooking the Mandovi River, known for exhibitions, architecture, and panoramic views.'
        },

        {
            name: 'Corjuem Fort',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
            desc: 'Small inland Portuguese fort surrounded by rural landscapes and known for quiet historical exploration.'
        },

        {
            name: 'Tiracol Fort',
            img: 'https://images.unsplash.com/photo-1517868864008-832d1054d80e?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic coastal fort near Goa’s northern border offering dramatic sea views and heritage architecture.'
        },

        {
            name: 'Church of Our Lady of the Immaculate Conception',
            img: 'https://images.unsplash.com/photo-1542131593-8ff66e5b1fa7?q=80&w=600&auto=format&fit=crop',
            desc: 'Famous Panaji landmark recognized for its white facade, grand stairways, Portuguese architecture, and city views.'
        },

        {
            name: 'Church of Saint Cajetan',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic Old Goa church inspired by European architectural traditions and surrounded by important heritage monuments.'
        },

        {
            name: 'Museum of Christian Art',
            img: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=600&auto=format&fit=crop',
            desc: 'Museum displaying Indo-Portuguese Christian artworks, sculptures, paintings, textiles, and historic religious artifacts.'
        },

        {
            name: 'Goa State Museum',
            img: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=600&auto=format&fit=crop',
            desc: 'Museum featuring archaeological objects, sculptures, manuscripts, cultural artifacts, and exhibits about Goa’s history.'
        },

        {
            name: 'Salim Ali Bird Sanctuary',
            img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=600&auto=format&fit=crop',
            desc: 'Mangrove wildlife sanctuary on Chorao Island known for birdwatching, boat rides, and peaceful natural surroundings.'
        },

        {
            name: 'Chorao Island',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Large Mandovi River island known for mangrove forests, traditional villages, churches, birdlife, and ferry journeys.'
        },

        {
            name: 'Divar Island',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Peaceful island destination featuring traditional Goan villages, churches, green fields, heritage houses, and scenic roads.'
        },

        {
            name: 'Grande Island',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular offshore destination for boat trips, snorkeling, scuba diving, dolphin spotting, and marine adventures.'
        },

        {
            name: 'Netravali Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop',
            desc: 'Large protected forest landscape in South Goa known for waterfalls, wildlife, trekking, streams, and biodiversity.'
        },

        {
            name: 'Bhagwan Mahavir Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop',
            desc: 'Goa’s largest protected wildlife area featuring Western Ghats forests, trekking routes, wildlife, and waterfalls.'
        },

        {
            name: 'Mollem National Park',
            img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop',
            desc: 'Forest national park within the Western Ghats known for biodiversity, wildlife, trekking, and access to Dudhsagar Falls.'
        },

        {
            name: 'Cotigao Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop',
            desc: 'Quiet South Goa wildlife sanctuary known for dense forests, walking trails, observation towers, and nature experiences.'
        },

        {
            name: 'Bondla Wildlife Sanctuary',
            img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop',
            desc: 'Compact wildlife sanctuary popular with families for nature trails, botanical gardens, wildlife exhibits, and forest scenery.'
        },

        {
            name: 'Tambdi Surla Mahadev Temple',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient stone Shiva temple surrounded by dense Western Ghats forests and known for remarkable Kadamba-era architecture.'
        },

        {
            name: 'Shri Mangueshi Temple',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'One of Goa’s most famous Hindu temples, known for its elegant architecture, lamp tower, and religious importance.'
        },

        {
            name: 'Shri Shantadurga Temple',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Important Goan temple complex surrounded by greenery and recognized for its distinctive architecture and spiritual heritage.'
        },

        {
            name: 'Arvalem Waterfalls',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Scenic seasonal waterfall in North Goa surrounded by greenery and located near caves and historic temples.'
        },

        {
            name: 'Arvalem Caves',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient rock-cut caves also known as the Pandava Caves, located near Arvalem Waterfalls in North Goa.'
        },

        {
            name: 'Harvalem Rudreshwar Temple',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic Shiva temple near Arvalem Waterfalls and caves, surrounded by forests and pilgrimage traditions.'
        },

        {
            name: 'Kesarval Waterfall',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Seasonal waterfall and natural spring destination surrounded by tropical greenery near the Verna plateau.'
        },

        {
            name: 'Netravali Bubbling Lake',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Unusual natural pond famous for bubbles rising from the lake bed and surrounded by peaceful village landscapes.'
        },

        {
            name: 'Savoi Spice Plantation',
            img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600&auto=format&fit=crop',
            desc: 'Traditional plantation offering guided walks through spice gardens, tropical crops, local cuisine, and rural Goa experiences.'
        },

        {
            name: 'Sahakari Spice Farm',
            img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular spice plantation destination featuring guided tours, traditional meals, tropical vegetation, and Goan agricultural culture.'
        },

        {
            name: 'Mayem Lake',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Peaceful freshwater lake surrounded by green countryside and suitable for relaxed nature trips and family outings.'
        },

        {
            name: 'Carambolim Lake',
            img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=600&auto=format&fit=crop',
            desc: 'Freshwater wetland near Old Goa known for migratory birds, birdwatching opportunities, and peaceful natural scenery.'
        },

        {
            name: 'Three Kings Chapel',
            img: 'https://images.unsplash.com/photo-1542131593-8ff66e5b1fa7?q=80&w=600&auto=format&fit=crop',
            desc: 'Hilltop chapel known for panoramic coastal views, sunsets, quiet surroundings, and local legends.'
        },

        {
            name: 'Rachol Seminary',
            img: 'https://images.unsplash.com/photo-1542131593-8ff66e5b1fa7?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic religious institution known for Portuguese-era architecture, manuscripts, cultural history, and peaceful surroundings.'
        },

        {
            name: 'Braganza House',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Large Portuguese-era heritage mansion in Chandor showcasing antique furniture, artworks, architecture, and Goan aristocratic history.'
        },

        {
            name: 'Chandor Heritage Village',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic South Goa village known for Portuguese mansions, ancient heritage, traditional homes, and cultural walking tours.'
        },

        {
            name: 'Loutolim Heritage Village',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Traditional Goan village known for heritage houses, green landscapes, Portuguese architecture, and cultural attractions.'
        },

        {
            name: 'Ancestral Goa',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Cultural attraction in Loutolim presenting traditional Goan village life, crafts, architecture, history, and local heritage.'
        },

        {
            name: 'Goa Science Centre',
            img: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=600&auto=format&fit=crop',
            desc: 'Family-friendly science museum in Panaji featuring interactive exhibits, demonstrations, planetarium programs, and educational activities.'
        },

        {
            name: 'Miramar Beach',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Urban beach near Panaji located where the Mandovi River approaches the Arabian Sea, popular for walks and sunsets.'
        },

        {
            name: 'Dona Paula Viewpoint',
            img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular coastal viewpoint near Panaji known for sea views, local legends, waterfront walks, and nearby attractions.'
        },

        {
            name: 'Mandovi River Cruise',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Popular Panaji river experience featuring sunset cruises, music, cultural performances, and views of the Mandovi waterfront.'
        },

        {
            name: 'Mapusa Market',
            img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=600&auto=format&fit=crop',
            desc: 'Traditional market known for spices, local produce, Goan food products, clothing, handicrafts, and lively Friday shopping.'
        },

        {
            name: 'Margao Market',
            img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=600&auto=format&fit=crop',
            desc: 'Busy South Goa market offering local food products, spices, seafood, vegetables, household goods, and traditional shopping.'
        },

        {
            name: 'Menezes Braganza Pereira House',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
            desc: 'Historic Portuguese-era mansion showcasing elaborate interiors, antique furniture, art collections, and Goa’s colonial heritage.'
        },

        {
            name: 'Pequeno Island',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            desc: 'Small offshore island also known as Bat Island, popular for snorkeling, boat trips, fishing, and coastal adventures.'
        },

        {
            name: 'Cumbarjua Canal',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Mangrove-lined waterway known for boat tours, birdlife, traditional villages, and occasional crocodile spotting.'
        },

        {
            name: 'Pomburpa Spring',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Traditional freshwater spring surrounded by greenery and known as a quiet local attraction in North Goa.'
        },

        {
            name: 'Keri Foot Bridge',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Quiet scenic area near Querim featuring coastal landscapes, river views, rural surroundings, and peaceful walks.'
        },

        {
            name: 'Salaulim Dam',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
            desc: 'Major South Goa reservoir famous for its unique spillway, landscaped gardens, green hills, and monsoon scenery.'
        },

        {
            name: 'Usgalimal Rock Carvings',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient prehistoric petroglyph site in South Goa featuring rock carvings along the Kushavati River.'
        },

        {
            name: 'Rivona Caves',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
            desc: 'Ancient rock-cut caves in South Goa associated with Buddhist heritage and surrounded by quiet rural landscapes.'
        },

        {
            name: 'Kuskem Waterfall',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Seasonal waterfall near Cotigao Wildlife Sanctuary surrounded by forests and rural South Goa landscapes.'
        },

        {
            name: 'Bamanbudo Waterfall',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Roadside seasonal waterfall in South Goa known for easy access, forest surroundings, and monsoon scenery.'
        },

        {
            name: 'Karmalya Waterfall',
            img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=600&auto=format&fit=crop',
            desc: 'Lesser-known seasonal waterfall surrounded by green landscapes and suited to travelers exploring Goa beyond beaches.'
        }

    ]
}
};



function createPlaceCard(place) {
    const key = encodeURIComponent(place.name.toString().trim().toLowerCase().replace(/\s+/g, ''));
    return `
        <a class="dest-card-link" href="city.html?city=${key}">
          <div class="dest-card-v2">
              <img src="${place.img}" alt="${place.name}">
              <div class="overlay">
                  <h4>${place.name}</h4>
                  <p>${place.desc}</p>
              </div>
          </div>
        </a>`;
}

const DISTRICT_CITY_DATA_SOURCES = [
    'js/cityData.js',
    'js/mp-city-data.js',
    'js/goa-city-data.js',
    'js/chhattisgarh-city-data.js',
    'js/up-city-data.js'
];

const districtSearchState = {
    readyPromise: null,
    searchIndex: [],
    suggestions: [],
    activeSuggestionIndex: -1
};

function escapeHtml(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeLookupToken(value) {
    let decodedValue = String(value || '').trim().toLowerCase();

    try {
        decodedValue = decodeURIComponent(decodedValue);
    } catch (error) {
        decodedValue = String(value || '').trim().toLowerCase();
    }

    return decodedValue
        .replace(/\+/g, ' ')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\s+/g, '');
}

function humanizeKey(value) {
    return String(value || '')
        .replace(/[-_]+/g, ' ')
        .trim()
        .replace(/\b\w/g, char => char.toUpperCase());
}

function getRequestedStateKey() {
    const urlParams = new URLSearchParams(window.location.search);
    return normalizeStateKey(urlParams.get('state'));
}

function getStateName(pageData, stateKey) {
    const title = String(pageData?.header?.title || '').trim();
    if (title) {
        return title.replace(/\s+Travel Guide$/i, '').trim() || humanizeKey(stateKey);
    }

    return humanizeKey(stateKey);
}

function getStateTagline(pageData, stateName) {
    const title = String(pageData?.header?.title || '').trim();
    if (title && title.toLowerCase() !== String(stateName || '').trim().toLowerCase()) {
        return title;
    }

    return `${stateName} Travel Guide`;
}

function createCityHref(cityKey, hash) {
    const safeCityKey = encodeURIComponent(String(cityKey || '').trim());
    const safeHash = hash ? `#${hash}` : '';
    return `city.html?city=${safeCityKey}${safeHash}`;
}

function loadDistrictScript(src) {
    return new Promise((resolve, reject) => {
        const selector = `script[data-district-city-src="${src}"]`;
        const existing = document.querySelector(selector);

        if (existing && existing.getAttribute('data-loaded') === 'true') {
            resolve();
            return;
        }

        if (existing) {
            existing.addEventListener('load', () => resolve(), { once: true });
            existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.defer = true;
        script.setAttribute('data-district-city-src', src);
        script.addEventListener('load', () => {
            script.setAttribute('data-loaded', 'true');
            resolve();
        }, { once: true });
        script.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
        document.head.appendChild(script);
    });
}

async function loadDistrictCityData() {
    if (districtSearchState.readyPromise) {
        return districtSearchState.readyPromise;
    }

    districtSearchState.readyPromise = (async () => {
        try {
            for (const source of DISTRICT_CITY_DATA_SOURCES) {
                await loadDistrictScript(source);
            }
        } catch (error) {
            console.warn('District search data script fallback used:', error.message);
        }

        if ((!window.cityData || !Object.keys(window.cityData).length) && window.smartTripApi) {
            try {
                const response = await window.smartTripApi.getJson('/api/cities?full=true');
                window.cityData = Object.assign(window.cityData || {}, response?.data || {});
            } catch (error) {
                console.warn('District search API fallback failed:', error.message);
            }
        }

        return window.cityData || {};
    })();

    return districtSearchState.readyPromise;
}

function buildDistrictSearchIndex() {
    const cityEntries = Object.entries(window.cityData || {});
    const searchIndex = [];

    cityEntries.forEach(([cityKey, city]) => {
        const cityName = String(city?.name || '').trim();
        if (!cityKey || !cityName) return;

        const stateName = String(city?.state || '').trim();
        const stateToken = normalizeLookupToken(stateName);
        const aliases = Array.isArray(city?.aliases) ? city.aliases : [];
        const citySearchSource = [cityKey, cityName, stateName, ...aliases].join(' ');

        searchIndex.push({
            id: `district-city-${cityKey}`,
            type: 'city',
            cityKey,
            cityName,
            stateName,
            stateToken,
            name: cityName,
            nameToken: normalizeLookupToken(cityName),
            searchText: normalizeLookupToken(citySearchSource),
            label: `${cityName} — ${stateName || 'India'}`,
            href: createCityHref(cityKey),
            sortLabel: cityName.toLowerCase()
        });

        const attractions = Array.isArray(city?.attractions) ? city.attractions : [];
        attractions.forEach((attraction, index) => {
            const attractionName = String(attraction?.name || '').trim();
            if (!attractionName) return;

            const attractionSearchSource = [
                attractionName,
                cityName,
                stateName,
                attraction?.type || '',
                attraction?.desc || '',
                attraction?.highlights || ''
            ].join(' ');

            searchIndex.push({
                id: `district-attraction-${cityKey}-${index}`,
                type: 'attraction',
                cityKey,
                cityName,
                stateName,
                stateToken,
                name: attractionName,
                nameToken: normalizeLookupToken(attractionName),
                searchText: normalizeLookupToken(attractionSearchSource),
                label: `${attractionName} — ${cityName}, ${stateName || 'India'}`,
                href: createCityHref(cityKey, 'attractions'),
                sortLabel: attractionName.toLowerCase()
            });
        });
    });

    return searchIndex;
}

function renderStateFilterOptions(select, searchIndex) {
    if (!select) return;

    const stateNames = [...new Set(
        searchIndex
            .filter(item => item.type === 'city' && item.stateName)
            .map(item => item.stateName)
    )].sort((a, b) => a.localeCompare(b));

    select.innerHTML = [
        '<option value="">All States</option>',
        ...stateNames.map(stateName => (
            `<option value="${escapeHtml(normalizeLookupToken(stateName))}">${escapeHtml(stateName)}</option>`
        ))
    ].join('');
}

function rankSearchItem(item, normalizedQuery) {
    if (item.nameToken === normalizedQuery && item.type === 'city') return 0;
    if (item.nameToken === normalizedQuery) return 1;
    if (item.nameToken.startsWith(normalizedQuery) && item.type === 'city') return 2;
    if (item.nameToken.startsWith(normalizedQuery)) return 3;
    if (item.type === 'city') return 4;
    return 5;
}

function getSearchSuggestions(query, stateToken, limit) {
    const normalizedQuery = normalizeLookupToken(query);
    if (!normalizedQuery) return [];

    const dedupe = new Set();

    return districtSearchState.searchIndex
        .filter(item => {
            const matchesState = !stateToken || item.stateToken === stateToken;
            const matchesQuery = item.searchText.includes(normalizedQuery);
            return matchesState && matchesQuery;
        })
        .sort((left, right) => {
            const rankDiff = rankSearchItem(left, normalizedQuery) - rankSearchItem(right, normalizedQuery);
            if (rankDiff !== 0) return rankDiff;
            return left.sortLabel.localeCompare(right.sortLabel);
        })
        .filter(item => {
            const dedupeKey = `${item.type}:${item.cityKey}:${item.nameToken}`;
            if (dedupe.has(dedupeKey)) return false;
            dedupe.add(dedupeKey);
            return true;
        })
        .slice(0, limit);
}

function renderSearchSuggestions(elements, suggestions) {
    const { suggestionsPanel, searchInput } = elements;
    districtSearchState.suggestions = suggestions;
    districtSearchState.activeSuggestionIndex = suggestions.length ? 0 : -1;

    if (!suggestionsPanel) return;

    if (!suggestions.length) {
        suggestionsPanel.innerHTML = '';
        suggestionsPanel.hidden = true;
        searchInput?.setAttribute('aria-expanded', 'false');
        searchInput?.removeAttribute('aria-activedescendant');
        return;
    }

    suggestionsPanel.innerHTML = suggestions.map((item, index) => `
        <button
            class="district-search__suggestion${index === 0 ? ' is-active' : ''}"
            type="button"
            id="${escapeHtml(item.id)}"
            role="option"
            aria-selected="${index === 0 ? 'true' : 'false'}"
            data-district-suggestion-index="${index}"
        >
            <span class="district-search__suggestion-copy">
                <span class="district-search__suggestion-title">${escapeHtml(item.name)}</span>
                <span class="district-search__suggestion-meta">${escapeHtml(item.label.split(' — ')[1] || item.label)}</span>
            </span>
            <span class="district-search__suggestion-type">${item.type === 'city' ? 'City' : 'Attraction'}</span>
        </button>
    `).join('');

    suggestionsPanel.hidden = false;
    searchInput?.setAttribute('aria-expanded', 'true');
    searchInput?.setAttribute('aria-activedescendant', suggestions[0].id);
}

function updateActiveSuggestion(elements, nextIndex) {
    const { suggestionsPanel, searchInput } = elements;
    const totalSuggestions = districtSearchState.suggestions.length;
    if (!suggestionsPanel || !totalSuggestions) return;

    const safeIndex = (nextIndex + totalSuggestions) % totalSuggestions;
    districtSearchState.activeSuggestionIndex = safeIndex;

    suggestionsPanel.querySelectorAll('[data-district-suggestion-index]').forEach((button, index) => {
        const isActive = index === safeIndex;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));

        if (isActive) {
            searchInput?.setAttribute('aria-activedescendant', button.id);
            button.scrollIntoView({ block: 'nearest' });
        }
    });
}

function clearSearchSuggestions(elements) {
    renderSearchSuggestions(elements, []);
}

function setSearchFeedback(feedbackNode, message, tone) {
    if (!feedbackNode) return;

    feedbackNode.textContent = message || '';
    feedbackNode.classList.remove('is-error', 'is-info');

    if (!message) return;
    feedbackNode.classList.add(tone === 'error' ? 'is-error' : 'is-info');
}

function navigateToSuggestion(item) {
    if (!item?.href) return;
    window.location.href = item.href;
}

async function ensureDistrictSearchIndex(select) {
    await loadDistrictCityData();

    if (!districtSearchState.searchIndex.length) {
        districtSearchState.searchIndex = buildDistrictSearchIndex();
        renderStateFilterOptions(select, districtSearchState.searchIndex);
    }

    return districtSearchState.searchIndex;
}

function createHeroMarkup(pageData, stateKey) {
    const stateName = getStateName(pageData, stateKey);
    const heroImage = String(pageData?.header?.heroImg || '').trim();
    const stateTagline = getStateTagline(pageData, stateName);
    const stateDescription = String(pageData?.header?.subtitle || '').trim();
    const badgeLabel = String(pageData?.header?.label || `Discover ${stateName}`).trim();

    return `
        <div class="district-hero">
            ${heroImage ? `<img class="district-hero__bg" src="${escapeHtml(heroImage)}" alt="${escapeHtml(stateName)}">` : ''}
            <div class="district-hero__overlay"></div>
            <div class="district-hero__inner">
                <div class="district-hero__spacer" aria-hidden="true"></div>
                <div class="district-hero__panel">
                    <span class="district-hero__badge">${escapeHtml(badgeLabel)}</span>
                    <h1 class="district-hero__title">${escapeHtml(stateName)}</h1>
                    <p class="district-hero__tagline">${escapeHtml(stateTagline)}</p>
                    <p class="district-hero__description">${escapeHtml(stateDescription)}</p>
                    <form class="district-search" data-district-search novalidate>
                        <div class="district-search__controls">
                            <div class="district-search__field district-search__field--input">
                                <span class="district-search__icon" aria-hidden="true">
                                    <i class="fas fa-location-dot"></i>
                                </span>
                                <input
                                    type="text"
                                    class="district-search__input"
                                    data-district-search-input
                                    placeholder="Search for cities, places, attractions..."
                                    aria-label="Search for cities, places, attractions"
                                    aria-autocomplete="list"
                                    aria-expanded="false"
                                    aria-controls="district-search-suggestions"
                                    autocomplete="off"
                                >
                                <div
                                    class="district-search__suggestions"
                                    id="district-search-suggestions"
                                    data-district-suggestions
                                    role="listbox"
                                    hidden
                                ></div>
                            </div>
                            <div class="district-search__field">
                                <select
                                    class="district-search__select"
                                    data-district-state-filter
                                    aria-label="Filter search by state"
                                >
                                    <option value="">All States</option>
                                </select>
                            </div>
                            <button class="district-search__button" type="submit">
                                <i class="fas fa-search" aria-hidden="true"></i>
                                <span>Search</span>
                            </button>
                        </div>
                        <p class="district-search__feedback" data-district-search-feedback role="status" aria-live="polite"></p>
                    </form>
                </div>
            </div>
        </div>`;
}

function initDistrictHeroSearch() {
    const searchRoot = document.querySelector('[data-district-search]');
    if (!searchRoot) return;

    const elements = {
        searchRoot,
        searchInput: searchRoot.querySelector('[data-district-search-input]'),
        stateFilter: searchRoot.querySelector('[data-district-state-filter]'),
        suggestionsPanel: searchRoot.querySelector('[data-district-suggestions]'),
        feedbackNode: searchRoot.querySelector('[data-district-search-feedback]')
    };

    const updateSuggestions = async () => {
        const rawQuery = elements.searchInput?.value || '';
        const normalizedQuery = rawQuery.trim().toLowerCase();

        if (!normalizedQuery) {
            clearSearchSuggestions(elements);
            setSearchFeedback(elements.feedbackNode, '', 'info');
            return;
        }

        await ensureDistrictSearchIndex(elements.stateFilter);

        const suggestions = getSearchSuggestions(rawQuery, elements.stateFilter?.value || '', 6);
        renderSearchSuggestions(elements, suggestions);
    };

    const submitSearch = async () => {
        const rawQuery = elements.searchInput?.value || '';
        const normalizedQuery = rawQuery.trim().toLowerCase();

        if (!normalizedQuery) {
            clearSearchSuggestions(elements);
            setSearchFeedback(elements.feedbackNode, 'Enter a city, place, or attraction to search.', 'error');
            elements.searchInput?.focus();
            return;
        }

        await ensureDistrictSearchIndex(elements.stateFilter);

        const matches = getSearchSuggestions(rawQuery, elements.stateFilter?.value || '', 6);
        if (!matches.length) {
            clearSearchSuggestions(elements);
            setSearchFeedback(elements.feedbackNode, 'No matching city or attraction found. Try another search term.', 'error');
            return;
        }

        navigateToSuggestion(matches[0]);
    };

    searchRoot.addEventListener('submit', async event => {
        event.preventDefault();
        await submitSearch();
    });

    elements.searchInput?.addEventListener('input', async () => {
        setSearchFeedback(elements.feedbackNode, '', 'info');
        await updateSuggestions();
    });

    elements.searchInput?.addEventListener('focus', async () => {
        if (!elements.searchInput?.value.trim()) return;
        await updateSuggestions();
    });

    elements.searchInput?.addEventListener('keydown', async event => {
        if (event.key === 'ArrowDown') {
            if (!districtSearchState.suggestions.length) {
                await updateSuggestions();
            }

            if (districtSearchState.suggestions.length) {
                event.preventDefault();
                updateActiveSuggestion(elements, districtSearchState.activeSuggestionIndex + 1);
            }
            return;
        }

        if (event.key === 'ArrowUp' && districtSearchState.suggestions.length) {
            event.preventDefault();
            updateActiveSuggestion(elements, districtSearchState.activeSuggestionIndex - 1);
            return;
        }

        if (event.key === 'Enter' && districtSearchState.suggestions.length && districtSearchState.activeSuggestionIndex >= 0) {
            event.preventDefault();
            navigateToSuggestion(districtSearchState.suggestions[districtSearchState.activeSuggestionIndex]);
            return;
        }

        if (event.key === 'Escape') {
            clearSearchSuggestions(elements);
        }
    });

    elements.stateFilter?.addEventListener('change', async () => {
        setSearchFeedback(elements.feedbackNode, '', 'info');
        if (elements.searchInput?.value.trim()) {
            await updateSuggestions();
        }
    });

    elements.suggestionsPanel?.addEventListener('mousedown', event => {
        event.preventDefault();
    });

    elements.suggestionsPanel?.addEventListener('click', event => {
        const target = event.target.closest('[data-district-suggestion-index]');
        if (!target) return;

        const item = districtSearchState.suggestions[Number(target.getAttribute('data-district-suggestion-index'))];
        navigateToSuggestion(item);
    });

    document.addEventListener('click', event => {
        if (!searchRoot.contains(event.target)) {
            clearSearchSuggestions(elements);
        }
    });

    ensureDistrictSearchIndex(elements.stateFilter).catch(error => {
        console.warn('District search initialization failed:', error.message);
    });
}

function renderSection(sectionId, title, subtitle, items) {
    const container = document.getElementById(sectionId);
    if (!container) return;
    container.innerHTML = `
        <div class="section-title-row" style="align-items:flex-start; gap:18px; margin-bottom:30px;">
            <div>
                <h2 style="font-size: 28px; font-weight: 800; margin:0;">${title}</h2>
                <p style="color:var(--gray); font-size:15px; margin:8px 0 0;">${subtitle}</p>
            </div>
        </div>
        <div class="dest-grid-row" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:20px;">
            ${items.map(createPlaceCard).join('')}
        </div>`;
}

function normalizeStateKey(stateValue) {
    if (!stateValue) return 'rajasthan';

    const raw = stateValue.trim().toLowerCase();
    const aliasMap = {
      'himachal-pradesh': 'himachal',
      'jammu-and-kashmir': 'jammu-and-kashmir',
      'ladakh': 'ladakh',
      'uttar-pradesh': 'uttar-pradesh',
      'andhra-pradesh': 'andhra-pradesh',
      'tamil-nadu': 'tamil-nadu',
      'new-delhi': 'delhi',
      'delhi': 'delhi',
      'goa': 'goa',
      'kerala': 'kerala',
      'rajasthan': 'rajasthan'
    };

    return aliasMap[raw] || raw;
}

function createFallbackState(rawState) {
    const stateName = (rawState || 'Rajasthan').trim().replace(/-/g, ' ');
    const displayName = stateName.replace(/\b\w/g, char => char.toUpperCase());
    return {
        header: {
            label: `Discover ${displayName}`,
            title: `${displayName} Travel Guide`,
            subtitle: `Explore the top destinations and travel highlights in ${displayName}.`,
            heroImg: `https://source.unsplash.com/1600x900/?${encodeURIComponent(stateName)}`
        },
        topSubtitle: `Highlights for ${displayName} travelers.`,
        moreSubtitle: `More places and hidden gems across ${displayName}.`,
        topPlaces: [],
        morePlaces: []
    };
}

async function getStateData() {
    const urlParams = new URLSearchParams(window.location.search);
    const rawState = urlParams.get('state');
    const stateKey = normalizeStateKey(rawState);
    const fallbackData = districtStates[stateKey] || createFallbackState(rawState);

    if (window.smartTripApi) {
        window.smartTripApi.getJson(`/api/states/${encodeURIComponent(stateKey)}`)
            .then(response => {
                if (response && response.data) {
                    districtStates[stateKey] = response.data;
                }
            })
            .catch(error => {
                console.warn('State guide API fallback used for:', stateKey, error.message);
            });
    }

    return fallbackData;
}

async function renderDistrictPage() {
    document.body.classList.add('district-page');

    const pageData = await getStateData();
    const stateKey = getRequestedStateKey();
    const pageTitle = `${pageData.header.title} | Bharat Guide`;
    if (document.title !== pageTitle) {
        document.title = pageTitle;
    }

    const header = document.getElementById('district-header');
    if (header) {
        header.innerHTML = createHeroMarkup(pageData, stateKey);
    }

    initDistrictHeroSearch();

    const stateName = getStateName(pageData, stateKey);
    renderSection('top-places', `Top ${stateName} Destinations`, pageData.topSubtitle, pageData.topPlaces);
    renderSection('more-places', `More ${stateName} Places`, pageData.moreSubtitle, pageData.morePlaces);
}

if (typeof window !== 'undefined') {
    window.districtStates = districtStates;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = districtStates;
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', renderDistrictPage);
}
