export type JobPosition = {
  id: string
  slug: string
  title: string
  department: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Internship"
  experience: string
  salary: string
  postedDate: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  featured: boolean
}

const jobPositions: JobPosition[] = [
  {
    id: "SE001",
    slug: "senior-structural-engineer",
    title: "Senior Structural Engineer",
    department: "Engineering",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "5+ years",
    salary: "$90,000 - $120,000",
    postedDate: "2024-03-15",
    description:
      "We are seeking an experienced Structural Engineer to join our growing team. The ideal candidate will have a strong background in structural analysis and design for commercial and residential projects. You will work closely with architects, clients, and other engineering disciplines to deliver innovative and efficient structural solutions.",
    responsibilities: [
      "Lead structural design for complex commercial and residential projects",
      "Perform structural analysis using advanced software tools",
      "Develop construction documents and specifications",
      "Coordinate with architects, MEP engineers, and other disciplines",
      "Mentor junior engineers and review their work",
      "Conduct site visits to assess existing conditions and monitor construction progress",
      "Ensure compliance with building codes and standards",
      "Participate in client meetings and presentations",
    ],
    requirements: [
      "Bachelor's degree in Civil or Structural Engineering (Master's preferred)",
      "Professional Engineer (PE) license required",
      "5+ years of experience in structural engineering",
      "Proficiency in structural analysis software (ETABS, RAM, RISA, etc.)",
      "Strong knowledge of building codes and standards",
      "Experience with various construction materials (steel, concrete, wood, masonry)",
      "Excellent communication and teamwork skills",
      "Experience with BIM software (Revit) preferred",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) retirement plan with company matching",
      "Professional development and continuing education support",
      "Paid professional license and association fees",
      "Flexible work arrangements",
      "Paid time off and company holidays",
      "Career advancement opportunities",
    ],
    featured: true,
  },
  {
    id: "PM002",
    slug: "project-manager-construction",
    title: "Project Manager - Construction",
    department: "Construction Management",
    location: "New York, NY",
    type: "Full-time",
    experience: "7+ years",
    salary: "$100,000 - $130,000",
    postedDate: "2024-03-20",
    description:
      "We are looking for an experienced Construction Project Manager to oversee all aspects of construction projects from inception to completion. The successful candidate will be responsible for planning, coordinating, and supervising construction activities to ensure projects are completed on time, within budget, and to the highest quality standards.",
    responsibilities: [
      "Develop and manage project schedules, budgets, and resource allocation",
      "Coordinate with clients, architects, engineers, and subcontractors",
      "Oversee construction activities and ensure compliance with plans and specifications",
      "Manage project documentation, including contracts, change orders, and submittals",
      "Conduct regular site inspections and progress meetings",
      "Identify and resolve project issues and conflicts",
      "Ensure compliance with safety regulations and quality standards",
      "Prepare and present project status reports to stakeholders",
    ],
    requirements: [
      "Bachelor's degree in Construction Management, Civil Engineering, or related field",
      "7+ years of experience in construction project management",
      "Strong knowledge of construction methods, materials, and industry standards",
      "Proficiency in project management software (MS Project, Primavera, etc.)",
      "Excellent leadership, communication, and problem-solving skills",
      "Experience with contract administration and budget management",
      "Knowledge of building codes and regulatory requirements",
      "PMP certification preferred",
    ],
    benefits: [
      "Competitive salary and performance-based bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) retirement plan with employer matching",
      "Professional development opportunities",
      "Paid time off and company holidays",
      "Company vehicle or allowance",
      "Relocation assistance available",
      "Career advancement opportunities",
    ],
    featured: true,
  },
  {
    id: "ME003",
    slug: "mechanical-engineer",
    title: "Mechanical Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    experience: "3+ years",
    salary: "$75,000 - $95,000",
    postedDate: "2024-03-25",
    description:
      "We are seeking a talented Mechanical Engineer to join our team. The ideal candidate will design and develop HVAC, plumbing, and fire protection systems for commercial and residential buildings. You will work collaboratively with architects and other engineering disciplines to create integrated building systems that are efficient, sustainable, and meet client requirements.",
    responsibilities: [
      "Design HVAC, plumbing, and fire protection systems for various building types",
      "Perform load calculations and equipment selection",
      "Develop construction documents and specifications",
      "Coordinate with architects and other engineering disciplines",
      "Review shop drawings and submittals",
      "Conduct site visits during construction",
      "Ensure compliance with applicable codes and standards",
      "Participate in sustainable design initiatives",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "3+ years of experience in building mechanical systems design",
      "Professional Engineer (PE) license or EIT with plan to obtain PE",
      "Proficiency in AutoCAD, Revit MEP, or similar software",
      "Knowledge of ASHRAE standards and building codes",
      "Experience with energy modeling software preferred",
      "Strong analytical and problem-solving skills",
      "Excellent communication and teamwork abilities",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Health, dental, and vision insurance",
      "401(k) retirement plan with company matching",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Paid time off and holidays",
      "Casual work environment",
      "Employee wellness program",
    ],
    featured: false,
  },
  {
    id: "CA004",
    slug: "construction-administrator",
    title: "Construction Administrator",
    department: "Construction Management",
    location: "Miami, FL",
    type: "Full-time",
    experience: "2+ years",
    salary: "$55,000 - $70,000",
    postedDate: "2024-04-01",
    description:
      "We are seeking a detail-oriented Construction Administrator to support our construction management team. The successful candidate will be responsible for managing project documentation, tracking budgets, processing change orders, and facilitating communication between project stakeholders.",
    responsibilities: [
      "Maintain project documentation including contracts, submittals, and RFIs",
      "Process change orders and payment applications",
      "Track project budgets and expenses",
      "Schedule and coordinate project meetings",
      "Prepare meeting minutes and distribute to team members",
      "Assist with bid solicitation and evaluation",
      "Coordinate with subcontractors and vendors",
      "Support project managers with administrative tasks",
    ],
    requirements: [
      "Associate's or Bachelor's degree in Construction Management, Business, or related field",
      "2+ years of experience in construction administration",
      "Proficiency in Microsoft Office Suite",
      "Experience with construction management software",
      "Strong organizational and time management skills",
      "Excellent written and verbal communication abilities",
      "Attention to detail and accuracy",
      "Knowledge of construction terminology and processes",
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) retirement plan",
      "Paid time off and holidays",
      "Professional development opportunities",
      "Flexible work schedule",
      "Casual work environment",
      "Employee recognition program",
    ],
    featured: false,
  },
  {
    id: "CE005",
    slug: "civil-engineer-infrastructure",
    title: "Civil Engineer - Infrastructure",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "4+ years",
    salary: "$80,000 - $105,000",
    postedDate: "2024-04-05",
    description:
      "We are looking for an experienced Civil Engineer to join our Infrastructure team. The ideal candidate will design and develop transportation, water resources, and site development projects. You will work on challenging infrastructure projects that improve communities and enhance the built environment.",
    responsibilities: [
      "Design roadways, bridges, drainage systems, and other infrastructure components",
      "Perform engineering calculations and analyses",
      "Develop construction documents and specifications",
      "Coordinate with regulatory agencies for project approvals",
      "Conduct site investigations and field surveys",
      "Prepare technical reports and permit applications",
      "Collaborate with multidisciplinary teams",
      "Ensure compliance with applicable codes and standards",
    ],
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "4+ years of experience in civil/infrastructure engineering",
      "Professional Engineer (PE) license required",
      "Proficiency in AutoCAD Civil 3D, Microstation, or similar software",
      "Experience with hydrologic and hydraulic modeling",
      "Knowledge of local, state, and federal regulations",
      "Strong technical writing and communication skills",
      "Project management experience preferred",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) retirement plan with company matching",
      "Professional development and continuing education",
      "Paid professional license and association fees",
      "Flexible work arrangements",
      "Paid time off and company holidays",
      "Employee referral program",
    ],
    featured: true,
  },
  {
    id: "ID006",
    slug: "interior-designer",
    title: "Interior Designer",
    department: "Design",
    location: "Los Angeles, CA",
    type: "Full-time",
    experience: "3+ years",
    salary: "$65,000 - $85,000",
    postedDate: "2024-04-10",
    description:
      "We are seeking a creative and detail-oriented Interior Designer to join our team. The successful candidate will create innovative and functional interior spaces for commercial and residential projects. You will collaborate with architects, engineers, and clients to develop design concepts that meet aesthetic, functional, and budgetary requirements.",
    responsibilities: [
      "Develop interior design concepts and space planning",
      "Create presentation materials including renderings and material boards",
      "Select finishes, furniture, fixtures, and equipment",
      "Prepare construction documents and specifications",
      "Coordinate with architects, engineers, and contractors",
      "Conduct site visits during construction",
      "Ensure compliance with building codes and accessibility requirements",
      "Present design concepts to clients",
    ],
    requirements: [
      "Bachelor's degree in Interior Design or related field",
      "3+ years of professional interior design experience",
      "Proficiency in AutoCAD, Revit, and SketchUp",
      "Strong portfolio demonstrating design capabilities",
      "Knowledge of building codes and accessibility standards",
      "Experience with commercial and/or residential projects",
      "Excellent visual, written, and verbal communication skills",
      "NCIDQ certification preferred",
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) retirement plan",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Paid time off and holidays",
      "Creative work environment",
      "Employee discount program",
    ],
    featured: false,
  },
  {
    id: "GE007",
    slug: "graduate-engineer",
    title: "Graduate Engineer",
    department: "Engineering",
    location: "Denver, CO",
    type: "Full-time",
    experience: "0-2 years",
    salary: "$60,000 - $70,000",
    postedDate: "2024-04-15",
    description:
      "We are seeking recent engineering graduates to join our team. This position offers an excellent opportunity to gain hands-on experience across multiple engineering disciplines while working on diverse projects. The successful candidate will receive mentoring from experienced engineers and develop technical and professional skills.",
    responsibilities: [
      "Assist senior engineers with design and analysis tasks",
      "Perform engineering calculations and studies",
      "Help prepare construction documents and specifications",
      "Participate in site visits and field investigations",
      "Research building codes and standards",
      "Support project teams with technical tasks",
      "Attend client meetings and presentations",
      "Contribute to quality control processes",
    ],
    requirements: [
      "Bachelor's degree in Civil, Structural, Mechanical, or Electrical Engineering",
      "0-2 years of professional experience",
      "Engineer in Training (EIT) certification preferred",
      "Proficiency in AutoCAD, Revit, or similar software",
      "Strong analytical and problem-solving skills",
      "Excellent communication and teamwork abilities",
      "Eagerness to learn and grow professionally",
      "Attention to detail and commitment to quality",
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) retirement plan",
      "Structured mentoring program",
      "Professional development and exam preparation support",
      "Paid time off and holidays",
      "Collaborative work environment",
      "Career advancement opportunities",
    ],
    featured: false,
  },
  {
    id: "CM008",
    slug: "construction-manager",
    title: "Construction Manager",
    department: "Construction Management",
    location: "Dallas, TX",
    type: "Full-time",
    experience: "8+ years",
    salary: "$110,000 - $140,000",
    postedDate: "2024-04-20",
    description:
      "We are seeking an experienced Construction Manager to lead our construction operations. The successful candidate will oversee multiple projects, manage construction teams, and ensure successful project delivery. You will be responsible for maintaining high standards of quality, safety, and client satisfaction across all projects.",
    responsibilities: [
      "Oversee multiple construction projects simultaneously",
      "Manage project budgets, schedules, and resources",
      "Lead and develop construction project managers",
      "Establish and maintain client relationships",
      "Implement and enforce safety programs and quality standards",
      "Resolve complex construction issues and conflicts",
      "Coordinate with design teams and subcontractors",
      "Develop and improve construction processes and procedures",
    ],
    requirements: [
      "Bachelor's degree in Construction Management, Civil Engineering, or related field",
      "8+ years of progressive experience in construction management",
      "Proven track record of successful project delivery",
      "Strong leadership and team management skills",
      "Excellent problem-solving and decision-making abilities",
      "In-depth knowledge of construction methods, contracts, and regulations",
      "Experience with various project delivery methods",
      "CCM certification preferred",
    ],
    benefits: [
      "Competitive salary and executive bonus program",
      "Comprehensive health, dental, and vision insurance",
      "401(k) retirement plan with generous company matching",
      "Executive leadership development program",
      "Company vehicle or allowance",
      "Generous paid time off and holidays",
      "Relocation assistance available",
      "Long-term incentive plan",
    ],
    featured: true,
  },
]

export function getJobPositions() {
  return jobPositions
}

export function getFeaturedJobPositions() {
  return jobPositions.filter((job) => job.featured)
}

export function getJobPosition(slug: string) {
  return jobPositions.find((job) => job.slug === slug)
}

export function getJobDepartments() {
  const departments = new Set<string>()
  jobPositions.forEach((job) => {
    departments.add(job.department)
  })
  return Array.from(departments)
}

export function getJobsByDepartment(department: string) {
  return jobPositions.filter((job) => job.department === department)
}

export function getJobLocations() {
  const locations = new Set<string>()
  jobPositions.forEach((job) => {
    locations.add(job.location)
  })
  return Array.from(locations)
}

export function getJobsByLocation(location: string) {
  return jobPositions.filter((job) => job.location === location)
}
