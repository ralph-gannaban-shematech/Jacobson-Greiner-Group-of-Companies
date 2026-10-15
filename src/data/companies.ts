export interface Company {
  id: string;
  name: string;
  category: 'Commercial' | 'Residential' | 'Civil & Infrastructure' | 'Building Supplies' | 'Sports & Entertainment' | 'Hospitality';
  tagline: string;
  description: string;
  fullOverview: string;
  phone: string;
  website: string;
  location: string;
  founded?: string;
  highlights: string[];
  image: string;
}

export const COMPANIES: Company[] = [
  {
    id: 'jacobson-commercial',
    name: 'Jacobson Commercial',
    category: 'Commercial',
    tagline: 'Fully Integrated General Contractor & Design-Build',
    description: 'Specializing in new construction, design building, structural retrofits, and large-scale commercial renovations equipped with comprehensive residential and commercial resources.',
    fullOverview: 'Jacobson Commercial delivers comprehensive general contracting, project management, and design-build solutions throughout Western Manitoba. With decades of seasoned field experience, our team oversees commercial developments from initial blueprint review and municipal permitting to turnkey commissioning, ensuring on-time and on-budget execution.',
    phone: '204-728-2235',
    website: 'https://jacobsoncommercial.ca',
    location: 'Brandon, MB',
    founded: '1984',
    highlights: ['Design-Build Delivery', 'Industrial Warehouses', 'Healthcare & Institutional', 'Commercial Tenant Fit-outs'],
    image: '/src/assets/images/commercial_construction_1792091524571.jpg'
  },
  {
    id: 'jng-homes',
    name: 'J&G Homes',
    category: 'Residential',
    tagline: 'Manitoba’s Custom Home & Residential Community Leader',
    description: 'Offering quality craftsmanship across the fullest range of innovative designs and custom development in Southwest Manitoba, from affordable family homes to prestige estates.',
    fullOverview: 'J&G Homes is the premier residential builder in Western Manitoba. We offer clients an all-in-one build journey: in-house drafting and architectural design, master-planned lot selection in Brandon’s finest communities, energy-efficient building science, and luxury finishing selections at our corporate design centre.',
    phone: '204-728-2235',
    website: 'https://jnghomes.ca',
    location: 'Brandon, MB',
    founded: '1979',
    highlights: ['Award-winning Custom Homes', 'Energy Star & Net-Zero Ready', 'Multi-Family Developments', 'Turnkey Warranty Protection'],
    image: '/src/assets/images/custom_luxury_home_1792091524925.jpg'
  },
  {
    id: 'brandon-wheat-kings',
    name: 'Brandon Wheat Kings',
    category: 'Sports & Entertainment',
    tagline: 'Western Hockey League Champions (1979 · 1996 · 2016)',
    description: 'The storied major junior ice hockey franchise based in Brandon, Manitoba, competing in the Western Hockey League and serving as the beating heart of local athletics.',
    fullOverview: 'A foundational pillar of Canadian sports, the Brandon Wheat Kings boast one of the most storied histories in the Canadian Hockey League. Generating dozens of NHL alumni, three WHL Memorial Cup appearances, and multiple championship banners, the Wheat Kings unite the Westman community on and off the ice.',
    phone: '204-726-3535',
    website: 'https://wheatkings.com',
    location: 'Brandon, MB',
    founded: '1936',
    highlights: ['3x WHL Champions', 'Dozens of NHL Alumni', 'Westman Youth Community Programs', '5,000+ Seat Gameday Experience'],
    image: '/src/assets/images/arena_hockey_stadium_1792091526764.jpg'
  },
  {
    id: 'rona-brandon',
    name: 'RONA Brandon',
    category: 'Building Supplies',
    tagline: 'Premier Retailer & Contractor Supply Partner',
    description: 'Leading Canadian retailer and distributor of hardware, building materials, lumber, and home renovation products for homeowners, contractors, and builders.',
    fullOverview: 'Operating as the premier hardware and building supply centre in Southwest Manitoba, RONA Brandon pairs global supply chain inventory with local contractor desk expertise. From dimensional lumber and trusses to contractor tools and plumbing, we supply the materials behind the region’s growth.',
    phone: '204-728-1855',
    website: 'https://rona.ca/en',
    location: 'Brandon, MB',
    highlights: ['Pro Contractor Supply Desk', 'Full Lumber Yard & Delivery Fleet', 'Window & Door Specialists', 'Power Tools & Fasteners'],
    image: '/src/assets/images/jg_headquarters_hero_1792091524260.jpg'
  },
  {
    id: 'vbj-developments',
    name: 'VBJ Developments',
    category: 'Commercial',
    tagline: 'Visionary Land Development & Community Planning',
    description: 'Specializing in residential subdivisions, commercial corridors, and industrial parks across Brandon and Southwest Manitoba since 2004.',
    fullOverview: 'VBJ Developments is the strategic land acquisition and development division of J&G Group. Responsible for planning Brandon’s most desirable residential neighborhoods and premier commercial retail hubs, VBJ balances infrastructure longevity with vibrant environmental design.',
    phone: '204-728-2235',
    website: 'https://vbjdevelopments.ca',
    location: 'Brandon, MB',
    founded: '2004',
    highlights: ['Master-Planned Subdivisions', 'Commercial Zoned Acreage', 'Industrial Parks & Utilities', 'Environmental Site Stewardship'],
    image: '/src/assets/images/excavation_civil_works_1792091526418.jpg'
  },
  {
    id: 'powell-construction',
    name: 'Powell Construction',
    category: 'Civil & Infrastructure',
    tagline: 'Over 50 Years of Commercial & Industrial Concrete Excellence',
    description: 'Founded in 1968, specializing in commercial/industrial concrete construction, flatwork, structural foundations, and high-tolerance industrial slabs.',
    fullOverview: 'For more than five decades, Powell Construction has been the trusted concrete contractor for heavy industrial, agricultural, and commercial developments across Manitoba. Our expert crews handle laser-screed concrete floors, heavy equipment pads, and complex cast-in-place structural elements.',
    phone: '204-727-2353',
    website: 'https://powellconstruction.ca',
    location: 'Brandon, MB',
    founded: '1968',
    highlights: ['Laser-Screed Superflat Floors', 'Heavy Agricultural Foundations', 'Bridge Decks & Civil Structures', '50+ Year Track Record'],
    image: '/src/assets/images/commercial_construction_1792091524571.jpg'
  },
  {
    id: 'signature-homes',
    name: 'Signature Homes',
    category: 'Residential',
    tagline: 'Contemporary, Efficient & Attainable Living',
    description: 'Building quality, contemporary homes with innovative designs that deliver exceptional value, energy efficiency, and sustained equity for modern lifestyles.',
    fullOverview: 'Signature Homes bridges the gap between premium design and accessible pricing. By employing standardized high-efficiency floor plans and bulk-material procurement through the J&G Group supply network, Signature delivers stylish, turnkey modern living to first-time and move-up homebuyers.',
    phone: '204-728-7011',
    website: 'https://signaturehomes.ca',
    location: 'Brandon, MB',
    highlights: ['Smart Compact Living Layouts', 'Quick Possession Inventory', 'Designer Color Palettes', 'High Equity Performance'],
    image: '/src/assets/images/custom_luxury_home_1792091524925.jpg'
  },
  {
    id: 'east-side-marios',
    name: 'East Side Mario’s Brandon',
    category: 'Hospitality',
    tagline: 'Authentic Italian Hospitality & Community Dining',
    description: 'Bringing vibrant Italian-American hospitality, passion for fresh food, family-friendly atmosphere, and private catering to the Brandon community.',
    fullOverview: 'East Side Mario’s Brandon provides hearty Italian dining, welcoming families, sports teams, and business celebrations alike. With a strong commitment to local community fundraising and event sponsorship, it anchors the group’s hospitality footprint.',
    phone: '204-725-2599',
    website: 'https://eastsidemarios.com',
    location: 'Brandon, MB',
    highlights: ['Family & Team Dining', 'Private Corporate Banquets', 'Local Sports Sponsorships', 'Catering Services'],
    image: '/src/assets/images/jg_headquarters_hero_1792091524260.jpg'
  },
  {
    id: 'allen-and-bolack',
    name: 'Allen & Bolack Excavating',
    category: 'Civil & Infrastructure',
    tagline: 'Precision Earthmoving, Underground Utilities & Site Preparation',
    description: 'Founded in 1993, growing alongside the City of Brandon to provide premier municipal water/sewer, mass excavation, and site grading services.',
    fullOverview: 'Equipped with GPS-guided heavy machinery, excavators, and compaction fleets, Allen & Bolack Excavating handles large-scale earthmoving, deep municipal sewer and water installations, road subgrades, and environmental drainage retention basins.',
    phone: '204-728-6789',
    website: 'https://allenandbolack.ca',
    location: 'Brandon, MB',
    founded: '1993',
    highlights: ['GPS-Guided Mass Earthmoving', 'Municipal Sewer & Water Mains', 'Commercial Site Grading', 'Flood Mitigation & Drainage'],
    image: '/src/assets/images/excavation_civil_works_1792091526418.jpg'
  },
  {
    id: 'western-concrete',
    name: 'Western Concrete',
    category: 'Building Supplies',
    tagline: 'Serving Western Manitoba with Ready-Mix Since 1953',
    description: 'Started in 1953 as a full-service ready-mixed concrete plant and masonry block/brick supplier for Western Manitoba and the Westman region.',
    fullOverview: 'The historical foundation of the group, Western Concrete has supplied certified ready-mix concrete formulations, decorative aggregates, and masonry blocks to Manitoba infrastructure for over 70 years. Computerized batching plants and a high-capacity mixer fleet guarantee structural consistency.',
    phone: '204-728-2210',
    website: 'https://westernconcrete.ca',
    location: 'Brandon, MB',
    founded: '1953',
    highlights: ['Certified CSA Ready-Mix Batching', 'Winter Concrete Delivery Heated Fleet', 'Aggregates & Masonry Blocks', '70+ Years in Operation'],
    image: '/src/assets/images/commercial_construction_1792091524571.jpg'
  },
  {
    id: 'jng-homes-arena',
    name: 'J&G Homes Arena',
    category: 'Sports & Entertainment',
    tagline: 'State-of-the-Art Twin-Rink Sports & Event Complex',
    description: 'Brandon’s modern sports complex on Patricia Avenue & 34th Street, featuring an NHL-size ice surface, second sheet, training facilities, and event hosting.',
    fullOverview: 'Opened in December 2021, J&G Homes Arena is a premier multi-sport facility serving thousands of youth and adult athletes year-round. It features an NHL-regulation ice sheet, spectator bleachers, dryland conditioning areas, and high-efficiency refrigeration engineering.',
    phone: '204-728-2235',
    website: 'https://jandghomesarena.ca',
    location: 'Brandon, MB',
    founded: '2021',
    highlights: ['NHL-Regulation Sheet & Secondary Sheet', 'Player Training Facilities', 'Pro Shop & Community Skate', 'Energy-Efficient Refrigeration'],
    image: '/src/assets/images/arena_hockey_stadium_1792091526764.jpg'
  },
  {
    id: 'wcha',
    name: 'Western Canada Hockey Academy',
    category: 'Sports & Entertainment',
    tagline: 'Elite Athletic Development & Player Training',
    description: 'Transforming hockey development for Manitoba youth with proven professional instructors and elite regional coaches.',
    fullOverview: 'WCHA provides comprehensive player development programs, power skating, shooting clinics, and high-performance summer camps. Partnered directly with J&G Homes Arena, athletes receive dedicated ice time and athletic mentorship.',
    phone: '204-728-2235',
    website: 'https://wchahockey.ca',
    location: 'Brandon, MB',
    highlights: ['Professional Coaching Staff', 'Video Analysis & Conditioning', 'Spring & Summer Elite Camps', 'Goalie Specific Clinics'],
    image: '/src/assets/images/arena_hockey_stadium_1792091526764.jpg'
  }
];
