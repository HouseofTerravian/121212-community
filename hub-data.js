/* ============================================
   121212.community — City Hub Data
   Add one entry per active or available hub.
   Key = subdomain slug (all lowercase).
   ============================================ */

const CITY_HUBS = {

  atlanta: {
    city:      'Atlanta',
    state:     'GA',
    region:    'South',
    slug:      'atlanta',
    tagline:   'The Culture Capital of the South',
    emoji:     '🏙',
    status:    'active',
    bid:       null,

    curator: {
      name:      'Marcus T.',
      handle:    'marcust',
      initial:   'M',
      bio:       'ATL native. Music curator, event connector, community builder. I\'ve been embedded in Black Atlanta culture for 15 years — from the Underground to Buckhead to the West End. This hub is everything I wish existed when I moved back home.',
      since:     'February 2025',
      instagram: '@marcust_atl',
    },

    stats: {
      events:   14,
      products: 52,
      reviews:  38,
      members:  1240,
    },

    events: [
      { name: 'AfroTech ATL 2025',           venue: 'Georgia World Congress Center', date: 'Apr 12, 2025', price: '$75',  emoji: '💻', tag: 'Tech'    },
      { name: 'Juneteenth Block Party',       venue: 'Piedmont Park',                 date: 'Jun 19, 2025', price: 'Free', emoji: '✊', tag: 'Culture' },
      { name: 'Trap Gospel Live',             venue: 'Fox Theatre',                   date: 'May 3, 2025',  price: '$45',  emoji: '🎵', tag: 'Music'   },
      { name: 'Black Entrepreneurs Expo',     venue: 'AmericasMart',                  date: 'May 17, 2025', price: '$20',  emoji: '💼', tag: 'Business'},
    ],

    products: [
      { name: 'Natural Hair Regimen Kit',     shop: '121212.market', price: '$82',  emoji: '💆', tag: 'Hair'     },
      { name: 'Handwoven Kente Tote Bag',     shop: '121212.market', price: '$68',  emoji: '👜', tag: 'Fashion'  },
      { name: 'ATL Culture Print — Framed',   shop: '121212.market', price: '$55',  emoji: '🎨', tag: 'Art'      },
      { name: 'Shea Butter Luxury Set',       shop: '121212.market', price: '$45',  emoji: '✨', tag: 'Wellness' },
    ],

    music: [
      { title: 'Midnight Frequencies',  artist: 'AfroBeat Collective',   emoji: '🌙', site: '121212.music' },
      { title: 'Crown Me',              artist: 'Queen Aura',             emoji: '👑', site: '121212.music' },
      { title: 'Black Renaissance',     artist: 'Novo Collective',        emoji: '✊', site: '121212.music' },
      { title: 'Sunday Morning Soul',   artist: 'The Melanin Choir',      emoji: '🎹', site: '121212.music' },
    ],

    places: [
      { name: 'West End',         desc: 'The cultural heartbeat. Black-owned restaurants, barbershops, and art galleries anchoring the community.',    emoji: '🏘' },
      { name: 'Sweet Auburn',     desc: 'Historic district. MLK\'s birthplace, Ebenezer Baptist, and a growing strip of Black-owned businesses.',       emoji: '⛪' },
      { name: 'Krog Street Market', desc: 'Food hall with strong Black vendor presence. Best spot to try multiple cuisines in one stop.',               emoji: '🍽' },
      { name: 'Underground Atlanta', desc: 'Revitalized entertainment district. Live music, vendors, and events centered on Black culture.',            emoji: '🎤' },
    ],

    reviews: [
      { product: 'Natural Hair Regimen Kit', reviewer: 'Amara J.', stars: 5, snippet: 'This kit completely changed my wash day routine. The scalp oil alone is worth the price.', handle: 'amaraj' },
      { product: 'AfroTech ATL — Tickets',   reviewer: 'Marcus T.', stars: 5, snippet: 'Best tech event in the South, full stop. 90% Black attendees, real networking, real deals.', handle: 'marcust' },
    ],
  },

  chicago: {
    city:    'Chicago',
    state:   'IL',
    region:  'Midwest',
    slug:    'chicago',
    tagline: 'Where Soul Music Was Born',
    emoji:   '🌬',
    status:  'active',
    bid:     null,

    curator: {
      name:    'Keisha R.',
      handle:  'keishar',
      initial: 'K',
      bio:     'South Side Chicago. Music journalist, community organizer, food writer. Chicago\'s Black culture is the most underrated in the country. This hub is my correction.',
      since:   'March 2025',
      instagram: '@keishar_chi',
    },

    stats: {
      events:   9,
      products: 34,
      reviews:  21,
      members:  876,
    },

    events: [
      { name: 'Chicago Blues & Soul Festival',  venue: 'Grant Park',          date: 'Jun 7, 2025',  price: 'Free', emoji: '🎸', tag: 'Music'   },
      { name: 'Bronzeville Art Walk',           venue: 'Bronzeville District', date: 'May 10, 2025', price: 'Free', emoji: '🎨', tag: 'Art'     },
      { name: 'Black Business Brunch',          venue: 'The Promontory',       date: 'Apr 26, 2025', price: '$35',  emoji: '☕', tag: 'Business'},
      { name: 'Step Afrika! Live',              venue: 'Chicago Theatre',      date: 'May 24, 2025', price: '$55',  emoji: '💃', tag: 'Culture' },
    ],

    products: [
      { name: 'Gold Brass Statement Earrings',  shop: '121212.market', price: '$38', emoji: '💛', tag: 'Jewelry'  },
      { name: 'Roots & Routes — Single',        shop: '121212.music',  price: '$2',  emoji: '🌍', tag: 'Music'    },
      { name: 'Beeswax Edge Control Kit',       shop: '121212.market', price: '$28', emoji: '🌿', tag: 'Hair'     },
      { name: 'LLC Formation Guide + Template', shop: '121212.law',    price: '$25', emoji: '⚖️', tag: 'Legal'    },
    ],

    music: [
      { title: 'Roots & Routes',          artist: 'Diaspora Sound System', emoji: '🌍', site: '121212.music' },
      { title: 'Lagos to London',         artist: 'Kemi Waves',            emoji: '✈️', site: '121212.music' },
      { title: 'Midnight Frequencies',    artist: 'AfroBeat Collective',   emoji: '🌙', site: '121212.music' },
    ],

    places: [
      { name: 'Bronzeville',      desc: 'The Black Metropolis. Historic jazz clubs, iconic architecture, and a new generation of Black entrepreneurs.',    emoji: '🎷' },
      { name: 'South Shore',      desc: 'Lakefront neighborhood with deep community roots. Home to the South Shore Cultural Center.',                        emoji: '🌊' },
      { name: 'Chatham',          desc: 'Solid, stable Black middle-class neighborhood. Excellent food, family businesses, pride.',                          emoji: '🏡' },
      { name: 'The Stony Island Arts Bank', desc: 'Theaster Gates\' landmark. Archives, exhibitions, jazz performances in a restored bank building.',       emoji: '🏛' },
    ],

    reviews: [
      { product: 'Gold Brass Statement Earrings', reviewer: 'Keisha R.', stars: 5, snippet: 'Striking. Lightweight. Got compliments every single time I wore them.', handle: 'keishar' },
    ],
  },

  houston: {
    city:    'Houston',
    state:   'TX',
    region:  'South',
    slug:    'houston',
    tagline: 'H-Town. Third Coast. Ours.',
    emoji:   '🤠',
    status:  'available',
    bid:     275,
    bidPeriod: 'year',
    tags:    ['Music', 'Food', 'Business', 'Art'],
  },

  miami: {
    city:    'Miami',
    state:   'FL',
    region:  'South',
    slug:    'miami',
    tagline: 'Where the Diaspora Meets the Sun',
    emoji:   '🌴',
    status:  'available',
    bid:     300,
    bidPeriod: 'year',
    tags:    ['Culture', 'Music', 'Food', 'Fashion'],
  },

  neworleans: {
    city:    'New Orleans',
    state:   'LA',
    region:  'South',
    slug:    'neworleans',
    tagline: 'The Original Black Cultural Capital',
    emoji:   '🎺',
    status:  'available',
    bid:     250,
    bidPeriod: 'year',
    tags:    ['Music', 'Food', 'Culture', 'History'],
  },

  detroit: {
    city:    'Detroit',
    state:   'MI',
    region:  'Midwest',
    slug:    'detroit',
    tagline: 'Motown Forever. The Comeback City.',
    emoji:   '🎵',
    status:  'available',
    bid:     225,
    bidPeriod: 'year',
    tags:    ['Music', 'Art', 'Business', 'History'],
  },

  dc: {
    city:    'Washington D.C.',
    state:   'DC',
    region:  'Northeast',
    slug:    'dc',
    tagline: 'Chocolate City. Always.',
    emoji:   '🏛',
    status:  'available',
    bid:     325,
    bidPeriod: 'year',
    tags:    ['Politics', 'Culture', 'Music', 'Food'],
  },

  /* ── Template for adding new hubs ─────────────────────
  cityslug: {
    city:    'City Name',
    state:   'ST',
    region:  'South | Midwest | Northeast | West',
    slug:    'cityslug',
    tagline: 'City tagline',
    emoji:   '🏙',
    status:  'active',   // or 'available'
    bid:     null,       // set price if available

    curator: {
      name: 'Name', handle: 'handle', initial: 'N',
      bio: '...', since: 'Month Year', instagram: '@handle',
    },
    stats:    { events: 0, products: 0, reviews: 0, members: 0 },
    events:   [],
    products: [],
    music:    [],
    places:   [],
    reviews:  [],
  },
  ─────────────────────────────────────────────────────── */

}
