export type Project = {
  slug: string
  title: string
  category: string
  location: string
  completionDate: string
  client: string
  description: string
  challenge: string
  solution: string
  results: string
  features: string[]
  coverImage: string
  galleryImages: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  relatedProjects: {
    slug: string
    title: string
    category: string
    image: string
  }[]
}

const projects: Project[] = [
  {
    slug: "city-center-tower",
    title: "City Center Tower",
    category: "Commercial",
    location: "New York, NY",
    completionDate: "2022",
    client: "Metropolitan Development Group",
    description:
      "A 45-story mixed-use skyscraper featuring office space, retail areas, and luxury apartments with state-of-the-art sustainable design elements. This landmark project has transformed the city skyline while setting new standards for energy efficiency and occupant comfort.",
    challenge:
      "The project presented numerous challenges including a compact urban site with limited staging area, complex foundation requirements due to poor soil conditions, strict zoning height restrictions, and the need to integrate multiple building systems for different occupancy types. Additionally, the client required LEED Platinum certification, necessitating innovative sustainable design approaches.",
    solution:
      "Our team implemented a comprehensive solution that began with a deep foundation system using slurry walls and caissons to address the soil conditions. We designed a high-performance curtain wall system with integrated photovoltaic elements and automated shading to optimize energy performance while maintaining views. A sophisticated structural system using composite steel and concrete allowed for column-free interior spaces and efficient floor layouts. The mechanical systems were separated by occupancy type but integrated through a central building management system for optimal efficiency.",
    results:
      "The completed tower has exceeded performance expectations, achieving 35% energy savings compared to code requirements and securing LEED Platinum certification. The building maintains a 95% occupancy rate despite market fluctuations, and has won multiple design and engineering awards. The integrated retail and public spaces have revitalized the surrounding neighborhood, creating a vibrant urban destination.",
    features: [
      "1.2 million square feet of mixed-use space",
      "High-performance curtain wall system",
      "Integrated renewable energy systems",
      "Smart building technology throughout",
      "Rooftop garden and amenity spaces",
      "Gray water recycling system",
      "High-speed elevator system with destination dispatch",
      "Public art installations in plaza areas",
    ],
    coverImage: "/placeholder.svg?height=600&width=1200",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "The engineering team's innovative approach to our complex requirements resulted in a building that not only meets our functional needs but exceeds our expectations for sustainability and operational efficiency.",
      author: "Jonathan Reynolds",
      position: "Development Director, Metropolitan Development Group",
    },
    relatedProjects: [
      {
        slug: "oceanfront-hotel-resort",
        title: "Oceanfront Hotel & Resort",
        category: "Commercial",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "tech-campus-headquarters",
        title: "Tech Campus Headquarters",
        category: "Commercial",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "urban-mixed-use-development",
        title: "Urban Mixed-Use Development",
        category: "Commercial",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    slug: "riverside-bridge",
    title: "Riverside Bridge",
    category: "Infrastructure",
    location: "Chicago, IL",
    completionDate: "2021",
    client: "Chicago Department of Transportation",
    description:
      "A 1,200-foot cable-stayed bridge spanning the river, featuring innovative structural design and pedestrian walkways with scenic overlooks. This signature infrastructure project connects previously isolated neighborhoods while providing a new civic landmark.",
    challenge:
      "The project required spanning a navigable waterway with sufficient clearance for large vessels while maintaining gentle approach grades for accessibility. Environmental regulations protecting the river ecosystem imposed strict limitations on construction methods and materials. The site's high-profile urban location demanded an iconic design that would complement the city skyline while staying within budget constraints.",
    solution:
      "Our engineering team designed an asymmetric cable-stayed structure with a single 320-foot tower and a counterbalanced span system that minimized the footprint in the river. We employed advanced computational fluid dynamics to analyze wind effects and optimize the aerodynamic profile of the deck. Construction utilized prefabricated sections assembled on barges to minimize environmental impact. The design incorporated dedicated pedestrian and cycling paths separated from vehicular traffic, with widened sections creating viewing platforms at key vantage points.",
    results:
      "The completed bridge has become both a vital transportation link and a popular destination, carrying over 45,000 vehicles and 10,000 pedestrians daily. The project was delivered on schedule and within 3% of the original budget despite material price fluctuations during construction. The innovative design has won three major engineering awards and has been featured in international publications. Environmental monitoring shows no significant impact on river ecosystems post-construction.",
    features: [
      "Asymmetric cable-stayed design with single tower",
      "1,200-foot main span with 90-foot navigational clearance",
      "Dedicated pedestrian and cycling paths",
      "LED architectural lighting system",
      "Integrated environmental monitoring sensors",
      "Expansion joint-free deck design",
      "Viewing platforms with educational displays",
      "De-icing system for winter safety",
    ],
    coverImage: "/placeholder.svg?height=600&width=1200",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "This bridge represents the perfect balance of functionality, beauty, and fiscal responsibility. It has transformed not just how people move through our city, but how they experience and enjoy the river.",
      author: "Maria Gonzalez",
      position: "Commissioner, Chicago Department of Transportation",
    },
    relatedProjects: [
      {
        slug: "harbor-expansion-project",
        title: "Harbor Expansion Project",
        category: "Infrastructure",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "metro-transit-hub",
        title: "Metro Transit Hub",
        category: "Infrastructure",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "coastal-highway-extension",
        title: "Coastal Highway Extension",
        category: "Infrastructure",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    slug: "green-valley-residences",
    title: "Green Valley Residences",
    category: "Residential",
    location: "Austin, TX",
    completionDate: "2023",
    client: "EcoLiving Developments",
    description:
      "A luxury residential community featuring 120 eco-friendly homes with solar power, rainwater harvesting, and energy-efficient design. This master-planned development sets new standards for sustainable living without compromising on comfort or aesthetics.",
    challenge:
      "The project aimed to create a zero-net-energy residential community on a challenging site with significant topographical variations and protected natural features. The client required homes that would achieve exceptional energy performance while maintaining competitive construction costs. Additionally, the development needed to preserve 40% of the site as natural habitat while creating a cohesive community design.",
    solution:
      "Our team developed a comprehensive master plan that clustered homes to preserve natural areas and utilized the topography to enhance views and passive solar design. We created a standardized construction system with prefabricated wall panels that improved quality control while reducing costs. Each home features a rooftop solar array, geothermal heating and cooling, and a smart home system that optimizes energy use. A community-wide water management system captures rainwater for irrigation and manages stormwater through bioswales and retention ponds.",
    results:
      "The completed development has exceeded performance targets, with homes averaging 85% energy self-sufficiency. The project sold out three months ahead of projections at premium prices compared to market averages. Monitoring shows a 65% reduction in water consumption compared to similar developments. The project has won awards for sustainable design and has been featured as a case study in green building publications.",
    features: [
      "120 single-family homes ranging from 1,800 to 3,500 square feet",
      "Community center with pool and fitness facilities",
      "5 miles of nature trails through preserved areas",
      "Centralized solar energy management system",
      "Electric vehicle charging at every home",
      "Community garden and orchard",
      "Smart home technology standard in all residences",
      "Sustainable landscaping using native species",
    ],
    coverImage: "/placeholder.svg?height=600&width=1200",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "The engineering team's holistic approach to sustainability created homes that are not only environmentally responsible but also more comfortable, healthier, and less expensive to operate than conventional construction.",
      author: "Thomas Chen",
      position: "CEO, EcoLiving Developments",
    },
    relatedProjects: [
      {
        slug: "lakeside-eco-community",
        title: "Lakeside Eco-Community",
        category: "Residential",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "urban-infill-townhomes",
        title: "Urban Infill Townhomes",
        category: "Residential",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "mountain-view-estates",
        title: "Mountain View Estates",
        category: "Residential",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    slug: "advanced-manufacturing-facility",
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    location: "Detroit, MI",
    completionDate: "2022",
    client: "NextGen Manufacturing Inc.",
    description:
      "A 250,000 sq ft state-of-the-art manufacturing facility with automated production lines, energy recovery systems, and smart building technology. This facility represents the future of American manufacturing with its focus on efficiency, sustainability, and worker comfort.",
    challenge:
      "The client required a highly flexible manufacturing space that could adapt to changing production needs while maintaining optimal energy efficiency. The facility needed to accommodate heavy machinery with precise environmental controls for sensitive manufacturing processes. Additionally, the brownfield site required extensive environmental remediation and had limited space for construction staging.",
    solution:
      "Our engineering team designed a structural system using long-span trusses to create column-free manufacturing areas that can be reconfigured as needed. We implemented a zoned HVAC system with heat recovery that maintains different environmental conditions in various production areas while transferring excess heat to office and warehouse spaces. The building envelope features high-performance insulation and strategic daylighting to reduce energy consumption. A central building automation system monitors and optimizes all systems in real-time.",
    results:
      "The completed facility has achieved 42% energy savings compared to industry standards while providing the flexibility to reconfigure production lines in less than 72 hours. The project was completed two months ahead of schedule despite site remediation challenges. The improved working environment has contributed to a 15% increase in productivity and a significant reduction in staff turnover compared to the client's previous facility.",
    features: [
      "250,000 square feet of flexible manufacturing space",
      "40-foot clear height in main production areas",
      "Integrated overhead crane system throughout",
      "Advanced air filtration and precision climate control",
      "Automated material handling systems",
      "On-site renewable energy generation",
      "Employee wellness areas with natural light",
      "Smart loading dock management system",
    ],
    coverImage: "/placeholder.svg?height=600&width=1200",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "This facility has transformed our manufacturing capabilities and our company culture. The engineering innovations have given us the flexibility to adapt to market changes while significantly reducing our operational costs.",
      author: "Robert Patel",
      position: "COO, NextGen Manufacturing Inc.",
    },
    relatedProjects: [
      {
        slug: "pharmaceutical-production-facility",
        title: "Pharmaceutical Production Facility",
        category: "Industrial",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "aerospace-components-factory",
        title: "Aerospace Components Factory",
        category: "Industrial",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "food-processing-plant",
        title: "Food Processing Plant",
        category: "Industrial",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    slug: "metro-transit-hub",
    title: "Metro Transit Hub",
    category: "Infrastructure",
    location: "Seattle, WA",
    completionDate: "2023",
    client: "Regional Transit Authority",
    description:
      "A multi-modal transportation center connecting light rail, bus, and bicycle infrastructure with sustainable design and public art installations. This hub serves as both a critical transit connection and a community gathering space.",
    challenge:
      "The project required integrating multiple transportation modes with different operational requirements in a constrained urban site. The facility needed to handle peak capacity of 15,000 passengers per hour while providing a positive user experience. The site's location in a seismically active zone added structural complexity, and the 24/7 operational requirement demanded robust systems with redundancy.",
    solution:
      "Our design created a three-level facility with clear wayfinding and efficient passenger flows between transportation modes. We implemented a distinctive roof structure that spans the entire facility without intermediate columns, creating a flexible, open interior that can adapt to changing needs. The structural system incorporates base isolation technology to exceed seismic performance requirements. Extensive daylighting, natural ventilation, and renewable energy systems reduce operational costs and environmental impact.",
    results:
      "Since opening, the hub has exceeded ridership projections by 22% and has catalyzed over $500 million in transit-oriented development in the surrounding neighborhood. The facility has maintained 99.8% operational uptime and has received multiple awards for architectural excellence and engineering innovation. User surveys show 92% satisfaction with the facility's functionality and aesthetic quality.",
    features: [
      "65,000 square foot main terminal building",
      "12 bus bays with real-time arrival information",
      "Direct light rail platform access",
      "Secure bicycle storage for 300 bikes",
      "Green roof with public access",
      "Interactive digital wayfinding system",
      "Public art installations by local artists",
      "Retail and dining amenities",
    ],
    coverImage: "/placeholder.svg?height=600&width=1200",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "This transit hub has transformed how our system functions, creating seamless connections between transportation modes while providing a beautiful public space that has become a destination in itself.",
      author: "Lisa Washington",
      position: "Director, Regional Transit Authority",
    },
    relatedProjects: [
      {
        slug: "riverside-bridge",
        title: "Riverside Bridge",
        category: "Infrastructure",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "airport-terminal-expansion",
        title: "Airport Terminal Expansion",
        category: "Infrastructure",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "light-rail-extension",
        title: "Light Rail Extension",
        category: "Infrastructure",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    slug: "oceanfront-hotel-resort",
    title: "Oceanfront Hotel & Resort",
    category: "Commercial",
    location: "Miami, FL",
    completionDate: "2021",
    client: "Coastal Luxury Properties",
    description:
      "A luxury 350-room beachfront resort with conference facilities, multiple restaurants, and innovative coastal resilience features. This destination property balances luxury amenities with environmental responsibility and storm resilience.",
    challenge:
      "The oceanfront site presented significant challenges including vulnerability to hurricanes, sea level rise concerns, and sensitive coastal ecosystems. The client required a luxury experience that would operate year-round regardless of weather conditions. Strict coastal regulations limited building footprint and height, while salt air exposure demanded specialized materials and systems.",
    solution:
      "Our engineering approach elevated critical systems above projected flood levels and incorporated a structural system designed to withstand Category 5 hurricane forces. We designed a living shoreline with engineered dunes and native vegetation to provide natural storm protection while enhancing the beach ecosystem. The building envelope features impact-resistant glazing and corrosion-resistant materials throughout. Energy and water systems were designed with redundancy to maintain operations during utility outages.",
    results:
      "The resort has successfully weathered several major storms without damage or operational interruption. The property commands premium rates year-round and has established itself as a leader in sustainable luxury hospitality. The living shoreline has expanded the beach area by 20 feet and provides habitat for numerous coastal species. The project has won awards for both its luxury design and environmental innovations.",
    features: [
      "350 guest rooms and suites with ocean views",
      "25,000 square foot conference center",
      "Five restaurants and three pools",
      "Full-service spa and fitness center",
      "Living shoreline with restored dune system",
      "Rainwater harvesting for landscape irrigation",
      "Seawater cooling system reducing energy consumption",
      "Elevated design for storm surge protection",
    ],
    coverImage: "/placeholder.svg?height=600&width=1200",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "The engineering team's innovative approach to coastal resilience has given us a property that not only withstands severe weather but actually enhances the natural beach environment. This has been crucial to our success in this sensitive location.",
      author: "Sophia Rodriguez",
      position: "President, Coastal Luxury Properties",
    },
    relatedProjects: [
      {
        slug: "city-center-tower",
        title: "City Center Tower",
        category: "Commercial",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "mountain-ski-resort",
        title: "Mountain Ski Resort",
        category: "Commercial",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "desert-wellness-retreat",
        title: "Desert Wellness Retreat",
        category: "Commercial",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

export function getProjects() {
  return projects
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(slug: string, count = 3) {
  const project = getProject(slug)
  if (!project) return []
  return project.relatedProjects.slice(0, count)
}

export function getProjectsByCategory(category: string) {
  return projects.filter((project) => project.category === category)
}

export function getProjectCategories() {
  const categories = new Set<string>()
  projects.forEach((project) => {
    categories.add(project.category)
  })
  return Array.from(categories)
}
