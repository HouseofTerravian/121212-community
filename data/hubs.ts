import type { RegionSlug } from './regions'

export interface HubEvent {
  name: string
  venue: string
  date: string
  price: string
  emoji: string
  tag: string
}

export interface HubProduct {
  name: string
  price: string
  shop: string
  emoji: string
  tag: string
}

export interface HubMusic {
  title: string
  artist: string
  emoji: string
  site: string
}

export interface HubPlace {
  name: string
  description: string
  emoji: string
}

export interface HubReview {
  product: string
  reviewer: string
  stars: number
  snippet: string
  handle: string
}

export interface Curator {
  name: string
  handle: string
  initial: string
  bio: string
  since: string
  instagram?: string
}

export interface CityHub {
  city: string
  state: string
  region: RegionSlug
  slug: string
  tagline: string
  emoji: string
  status: 'active' | 'available'
  bid?: number
  bidPeriod?: string
  tags: string[]
  curator?: Curator
  stats: {
    events: number
    products: number
    reviews: number
    members: number
  }
  events: HubEvent[]
  products: HubProduct[]
  music: HubMusic[]
  places: HubPlace[]
  reviews: HubReview[]
}

const hubs: CityHub[] = [
  // ─── ACTIVE HUBS ───────────────────────────────────────────────

  {
    city: 'Atlanta',
    state: 'GA',
    region: 'south',
    slug: 'atlanta',
    tagline: 'The cultural capital of the Black South',
    emoji: '\uD83C\uDFD1',
    status: 'active',
    tags: ['Music', 'Tech', 'Food', 'HBCU Culture'],
    curator: {
      name: 'Marcus T.',
      handle: '@marcust_atl',
      initial: 'M',
      bio: 'Atlanta native. Culture curator. Building the Black digital layer for the city I love.',
      since: '2025-06',
      instagram: '@marcust_atl',
    },
    stats: { events: 14, products: 52, reviews: 38, members: 1240 },
    events: [
      { name: 'Trap Music Museum After Dark', venue: 'Trap Music Museum', date: 'Apr 12, 2026', price: '$35', emoji: '\uD83C\uDFB5', tag: 'Music' },
      { name: 'Black Tech Week ATL', venue: 'Atlanta Tech Village', date: 'May 3, 2026', price: '$75', emoji: '\uD83D\uDCBB', tag: 'Tech' },
      { name: 'Soul Food Festival', venue: 'Piedmont Park', date: 'Jun 21, 2026', price: '$20', emoji: '\uD83C\uDF5B', tag: 'Food' },
      { name: 'Spelman Homecoming Block Party', venue: 'Spelman College', date: 'Oct 18, 2026', price: 'Free', emoji: '\uD83C\uDF93', tag: 'Culture' },
    ],
    products: [
      { name: 'Atlanta Culture Tee', price: '$32', shop: 'ATL Drip Co.', emoji: '\uD83D\uDC55', tag: 'Fashion' },
      { name: 'Peach State Hot Sauce', price: '$14', shop: 'Southern Burn', emoji: '\uD83C\uDF36\uFE0F', tag: 'Food' },
      { name: 'Trap Candle Collection', price: '$28', shop: 'Wax & Vibe', emoji: '\uD83D\uDD6F\uFE0F', tag: 'Home' },
      { name: 'ATL Skyline Print', price: '$45', shop: 'Black Canvas ATL', emoji: '\uD83C\uDFA8', tag: 'Art' },
    ],
    music: [
      { title: 'Southside Frequencies', artist: 'DJ Zone 6', emoji: '\uD83C\uDFB6', site: 'https://121212.music' },
      { title: 'Peachtree Nights', artist: 'Kira Monae', emoji: '\uD83C\uDF19', site: 'https://121212.music' },
      { title: 'HBCU Anthems Vol. 1', artist: 'The Yard Band', emoji: '\uD83C\uDFBA', site: 'https://121212.music' },
      { title: 'West End Stories', artist: 'Marlo Rich', emoji: '\uD83C\uDFA4', site: 'https://121212.music' },
    ],
    places: [
      { name: 'Sweet Auburn Market', description: 'Historic food hall in the heart of Black Atlanta.', emoji: '\uD83C\uDFEA' },
      { name: 'The APEX Museum', description: 'African American history museum on Auburn Avenue.', emoji: '\uD83C\uDFDB\uFE0F' },
      { name: 'Ponce City Market', description: 'Trendy market with Black-owned food stalls and shops.', emoji: '\uD83C\uDF54' },
      { name: 'Cascade Heights', description: 'One of the wealthiest Black neighborhoods in America.', emoji: '\uD83C\uDFE0' },
    ],
    reviews: [
      { product: 'Atlanta Culture Tee', reviewer: 'Jasmine K.', stars: 5, snippet: 'Quality is insane. Wore it to Essence Fest and got so many compliments.', handle: '@jasmine_k' },
      { product: 'Peach State Hot Sauce', reviewer: 'Derek M.', stars: 4, snippet: 'Perfect amount of heat. Goes on everything.', handle: '@derek_eats' },
    ],
  },

  {
    city: 'Chicago',
    state: 'IL',
    region: 'midwest',
    slug: 'chicago',
    tagline: 'From the South Side to the Loop',
    emoji: '\uD83C\uDFD9\uFE0F',
    status: 'active',
    tags: ['House Music', 'Art', 'Food', 'Business'],
    curator: {
      name: 'Keisha R.',
      handle: '@keisha_chi',
      initial: 'K',
      bio: 'South Side born. Building the digital layer for Black Chicago, one block at a time.',
      since: '2025-08',
      instagram: '@keisha_chi',
    },
    stats: { events: 9, products: 34, reviews: 21, members: 876 },
    events: [
      { name: 'House Music Heritage Night', venue: 'The Promontory', date: 'Apr 19, 2026', price: '$25', emoji: '\uD83C\uDFB6', tag: 'Music' },
      { name: 'South Side Art Walk', venue: 'Bronzeville', date: 'May 10, 2026', price: 'Free', emoji: '\uD83C\uDFA8', tag: 'Art' },
      { name: 'Chi-Town Food Fest', venue: 'Washington Park', date: 'Jul 4, 2026', price: '$15', emoji: '\uD83C\uDF54', tag: 'Food' },
      { name: 'Black Business Expo Chicago', venue: 'McCormick Place', date: 'Sep 20, 2026', price: '$50', emoji: '\uD83D\uDCBC', tag: 'Business' },
    ],
    products: [
      { name: 'Chicago Flag Hoodie', price: '$55', shop: 'Chi Threads', emoji: '\uD83E\uDDE5', tag: 'Fashion' },
      { name: 'Deep Dish Seasoning Kit', price: '$18', shop: 'South Side Spice', emoji: '\uD83C\uDF55', tag: 'Food' },
      { name: 'Bronzeville Print Series', price: '$40', shop: 'Art of the Block', emoji: '\uD83D\uDDBC\uFE0F', tag: 'Art' },
      { name: 'House Music Vinyl Pack', price: '$65', shop: 'Wax Chi', emoji: '\uD83C\uDFB9', tag: 'Music' },
    ],
    music: [
      { title: 'South Side Sessions', artist: 'DJ First Lady', emoji: '\uD83C\uDFB5', site: 'https://121212.music' },
      { title: 'Lake Shore Drive', artist: 'K. Winters', emoji: '\uD83C\uDF0A', site: 'https://121212.music' },
      { title: 'Chi-Town Classics Remixed', artist: 'The House Collective', emoji: '\uD83C\uDFDB\uFE0F', site: 'https://121212.music' },
    ],
    places: [
      { name: 'Bronzeville', description: 'Historic Black Metropolis neighborhood with a cultural renaissance.', emoji: '\uD83C\uDFD8\uFE0F' },
      { name: 'DuSable Museum', description: 'First museum dedicated to African American history.', emoji: '\uD83C\uDFDB\uFE0F' },
      { name: 'Harold\'s Chicken', description: 'Legendary Chicago fried chicken chain. A cultural institution.', emoji: '\uD83C\uDF57' },
      { name: 'The Promontory', description: 'Live music venue and restaurant in Hyde Park.', emoji: '\uD83C\uDFB6' },
    ],
    reviews: [
      { product: 'Chicago Flag Hoodie', reviewer: 'Tania W.', stars: 5, snippet: 'Thick, warm, and the design is fire. Repping the city the right way.', handle: '@tania_w' },
    ],
  },

  // ─── AVAILABLE HUBS ────────────────────────────────────────────

  {
    city: 'Houston', state: 'TX', region: 'south', slug: 'houston',
    tagline: 'Deep-rooted culture in the Fourth City', emoji: '\uD83E\uDD20',
    status: 'available', bid: 275, bidPeriod: 'year',
    tags: ['Hip-Hop', 'Southern Cuisine', 'Energy'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Miami', state: 'FL', region: 'south', slug: 'miami',
    tagline: 'Where Caribbean meets American Black culture', emoji: '\uD83C\uDF34',
    status: 'available', bid: 300, bidPeriod: 'year',
    tags: ['Caribbean Culture', 'Art Basel', 'Nightlife'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'New Orleans', state: 'LA', region: 'south', slug: 'neworleans',
    tagline: 'Birthplace of jazz and Black resilience', emoji: '\uD83C\uDFBA',
    status: 'available', bid: 250, bidPeriod: 'year',
    tags: ['Jazz', 'Creole Cuisine', 'Mardi Gras'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Detroit', state: 'MI', region: 'midwest', slug: 'detroit',
    tagline: 'Motown, motors, and a renaissance', emoji: '\uD83C\uDFB5',
    status: 'available', bid: 225, bidPeriod: 'year',
    tags: ['Motown', 'Urban Renaissance', 'Techno'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Washington D.C.', state: 'DC', region: 'northeast', slug: 'dc',
    tagline: 'Chocolate City — the seat of Black power', emoji: '\uD83C\uDFDB\uFE0F',
    status: 'available', bid: 325, bidPeriod: 'year',
    tags: ['Go-Go Music', 'Howard University', 'Politics'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Baltimore', state: 'MD', region: 'northeast', slug: 'baltimore',
    tagline: 'Fierce identity and ground-up culture', emoji: '\uD83E\uDDE1',
    status: 'available', bid: 275, bidPeriod: 'year',
    tags: ['Club Music', 'Community', 'Resilience'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Philadelphia', state: 'PA', region: 'northeast', slug: 'philadelphia',
    tagline: 'Brotherly love and legendary Black music', emoji: '\uD83D\uDD14',
    status: 'available', bid: 300, bidPeriod: 'year',
    tags: ['Philly Soul', 'Entrepreneurship', 'Community'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Memphis', state: 'TN', region: 'south', slug: 'memphis',
    tagline: 'Soul, blues, and BBQ — the heartbeat', emoji: '\uD83C\uDFB8',
    status: 'available', bid: 200, bidPeriod: 'year',
    tags: ['Blues Heritage', 'BBQ Capital', 'Civil Rights'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Charlotte', state: 'NC', region: 'south', slug: 'charlotte',
    tagline: 'The New South with a booming Black professional class', emoji: '\uD83C\uDFE6',
    status: 'available', bid: 225, bidPeriod: 'year',
    tags: ['Banking Hub', 'New South', 'Growing Tech'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Nashville', state: 'TN', region: 'south', slug: 'nashville',
    tagline: 'Beyond country — a thriving Black music scene', emoji: '\uD83C\uDFB6',
    status: 'available', bid: 250, bidPeriod: 'year',
    tags: ['Music City', 'HBCU Hub', 'Southern Hospitality'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Los Angeles', state: 'CA', region: 'west', slug: 'losangeles',
    tagline: 'Crenshaw to Leimert Park — a Black cultural powerhouse', emoji: '\uD83C\uDF1E',
    status: 'available', bid: 400, bidPeriod: 'year',
    tags: ['Entertainment', 'Leimert Park', 'West Coast Culture'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Oakland', state: 'CA', region: 'west', slug: 'oakland',
    tagline: 'Black activism, art, and innovation', emoji: '\u270A',
    status: 'available', bid: 275, bidPeriod: 'year',
    tags: ['Black Panther Legacy', 'Tech Meets Culture', 'Activism'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Seattle', state: 'WA', region: 'west', slug: 'seattle',
    tagline: 'Carving out cultural space in the Pacific Northwest', emoji: '\uD83C\uDF32',
    status: 'available', bid: 250, bidPeriod: 'year',
    tags: ['Central District', 'Tech Economy', 'PNW Culture'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Cleveland', state: 'OH', region: 'midwest', slug: 'cleveland',
    tagline: 'Rock, soul, and a proud Black community', emoji: '\uD83C\uDFB8',
    status: 'available', bid: 200, bidPeriod: 'year',
    tags: ['Rock & Roll Heritage', 'Great Lakes', 'Arts District'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Jacksonville', state: 'FL', region: 'south', slug: 'jacksonville',
    tagline: 'The bold city with bold Black culture', emoji: '\uD83C\uDF0A',
    status: 'available', bid: 175, bidPeriod: 'year',
    tags: ['Bold City', 'Southern Culture', 'Growing Scene'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'St. Louis', state: 'MO', region: 'midwest', slug: 'stlouis',
    tagline: 'Gateway city with resilient Black roots', emoji: '\uD83C\uDF09',
    status: 'available', bid: 200, bidPeriod: 'year',
    tags: ['Gateway City', 'Jazz Scene', 'Community Activism'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Minneapolis', state: 'MN', region: 'midwest', slug: 'minneapolis',
    tagline: 'Prince, culture, and a growing Black arts scene', emoji: '\u2744\uFE0F',
    status: 'available', bid: 225, bidPeriod: 'year',
    tags: ['Music Heritage', 'Arts Scene', 'Community'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Pittsburgh', state: 'PA', region: 'northeast', slug: 'pittsburgh',
    tagline: 'Steel City with deep Black cultural roots', emoji: '\uD83C\uDFD7\uFE0F',
    status: 'available', bid: 200, bidPeriod: 'year',
    tags: ['Steel City', 'Hill District', 'Arts & Culture'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Brooklyn', state: 'NY', region: 'northeast', slug: 'brooklyn',
    tagline: 'The epicenter of Black art, music, and fashion', emoji: '\uD83C\uDF06',
    status: 'available', bid: 350, bidPeriod: 'year',
    tags: ['Hip-Hop', 'Fashion', 'Bed-Stuy Culture', 'Art'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Denver', state: 'CO', region: 'west', slug: 'denver',
    tagline: 'Five Points — the Harlem of the West, reclaimed', emoji: '\uD83C\uDFD4\uFE0F',
    status: 'available', bid: 225, bidPeriod: 'year',
    tags: ['Five Points', 'Mountain West', 'Growing Scene'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Portland', state: 'OR', region: 'west', slug: 'portland',
    tagline: 'Building Black cultural space in the PNW', emoji: '\uD83C\uDF3F',
    status: 'available', bid: 200, bidPeriod: 'year',
    tags: ['PNW Culture', 'Albina District', 'Community Building'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
  {
    city: 'Phoenix', state: 'AZ', region: 'west', slug: 'phoenix',
    tagline: 'Sunbelt growth meets emerging Black culture', emoji: '\u2600\uFE0F',
    status: 'available', bid: 225, bidPeriod: 'year',
    tags: ['Sunbelt Growth', 'Emerging Scene', 'Black Business'],
    stats: { events: 0, products: 0, reviews: 0, members: 0 },
    events: [], products: [], music: [], places: [], reviews: [],
  },
]

export function getHubBySlug(slug: string): CityHub | undefined {
  return hubs.find((h) => h.slug === slug)
}

export function getActiveHubs(): CityHub[] {
  return hubs.filter((h) => h.status === 'active')
}

export function getAvailableHubs(): CityHub[] {
  return hubs.filter((h) => h.status === 'available')
}

export function getHubsByRegion(region: RegionSlug): CityHub[] {
  return hubs.filter((h) => h.region === region)
}

export function getAllHubs(): CityHub[] {
  return hubs
}

export function getFeaturedHubs(limit: number = 8): CityHub[] {
  const active = getActiveHubs()
  const available = getAvailableHubs().sort((a, b) => (b.bid ?? 0) - (a.bid ?? 0))
  return [...active, ...available].slice(0, limit)
}
