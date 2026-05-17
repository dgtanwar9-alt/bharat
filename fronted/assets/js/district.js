const districtStates = {
    rajasthan: {
        header: {
            label: 'Discover Rajasthan',
            title: 'Rajasthan Travel Guide',
            subtitle: 'Explore the top Rajasthan destinations every tourist loves, followed by quieter hidden gems in the state.',
            heroImg: 'https://images.unsplash.com/photo-1599661046827-dacde6976548?q=80&w=1600&auto=format&fit=crop'
        },
        topSubtitle: '20 must-visit spots where most tourists begin their Rajasthan journey.',
        moreSubtitle: 'Lesser-known gems for the traveler who wants to dig deeper into Rajasthan.',
        topPlaces: [
            { 
  name: 'Jaipur',
  img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
  desc: 'Lake City with royal palaces and stunning lakes.'
},
{ 
  name: 'Ajmer',
  img: 'https://media.istockphoto.com/id/1140660972/photo/panoramic-view-on-holy-lake-and-city-pushkar-rajasthan-india.jpg?s=1024x1024&w=is&k=20&c=DtEsNNHghdWBoqOHfi39SOFFcQBVMcvdCbau4Yzwtgs=',
  desc: 'Golden city, desert forts and camel safaris.'
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
  desc: 'Desert city famous for palaces and camel festival.'
},

{ 
  name: 'Ajmer',
  img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
  desc: 'Spiritual center with Dargah Sharif and Ana Sagar Lake.'
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
  desc: 'Fort palace stay near Delhi for weekend escapes.'
},

{ 
  name: 'Amber Fort',
  img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
  desc: 'Iconic hill fort above Jaipur with light shows.'
},

{ 
  name: 'Hawa Mahal',
  img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop',
  desc: 'Famous palace of winds in Jaipur Old City.'
},

{ 
  name: 'Lake Pichola',
  img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop',
  desc: 'Romantic lake with boat rides in Udaipur.'
},

{ 
  name: 'City Palace',
  img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop',
  desc: 'Grand royal complex in Jaipur and Udaipur.'
},

{ 
  name: 'Mehrangarh Fort',
  img: 'https://plus.unsplash.com/premium_photo-1697730388194-0f8f7943dbad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  desc: 'Magnificent fort with panoramic views of Jodhpur.'
},

{ 
  name: 'Bhangarh Fort',
  img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200&auto=format&fit=crop',
  desc: 'Mysterious ruined fort often called India most haunted place.'
}    ]
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
    goa: {
        header: {
            label: 'Discover Goa',
            title: 'Goa Travel Guide',
            subtitle: 'From North Goa beach parties to South Goa serenity — explore both sides of the state.',
            heroImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop'
        },
        topSubtitle: 'North Goa and South Goa highlights for every kind of beach traveler.',
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

    if (window.smartTripApi) {
        try {
            const response = await window.smartTripApi.getJson(`/api/states/${encodeURIComponent(stateKey)}`);
            if (response && response.data) {
                districtStates[stateKey] = response.data;
                return response.data;
            }
        } catch (error) {
            console.warn('State guide API fallback used for:', stateKey, error.message);
        }
    }

    return districtStates[stateKey] || createFallbackState(rawState);
}

async function renderDistrictPage() {
    const pageData = await getStateData();
    const pageTitle = `${pageData.header.title} | Smart Trip`;
    if (document.title !== pageTitle) {
        document.title = pageTitle;
    }

    const header = document.getElementById('district-header');
    if (header) {
        const heroStyle = pageData.header.heroImg
            ? `background: linear-gradient(180deg, rgba(8, 18, 34, 0.18), rgba(248, 251, 255, 0.92)), url('${pageData.header.heroImg}'); background-size: cover; background-position: center; background-repeat: no-repeat;`
            : '';

        header.innerHTML = `
            <div style="max-width: 1000px; margin: 0 auto; text-align: center; ${heroStyle}">
                <p class="section-label" style="margin:0; font-size:14px; color:#f59e0b; letter-spacing:1px;">${pageData.header.label}</p>
                <h1 style="font-size:36px; font-weight:800; margin:16px 0;">${pageData.header.title}</h1>
                <p style="color:var(--gray); max-width:760px; margin:0 auto; line-height:1.75;">${pageData.header.subtitle}</p>
            </div>`;
    }

    const stateName = pageData.header.title.replace(' Travel Guide', '');
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
