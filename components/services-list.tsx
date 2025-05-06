import { Building2, Compass, HardHat, Lightbulb, Ruler, Wrench, Zap, Home, PenTool, Leaf } from "lucide-react"

export const services = [
  {
    id: "construction-work",
    title: "Construction Work",
    icon: Building2,
    description:
      "Complete construction services for residential, commercial, and industrial projects with a focus on quality and timeliness.",
    details: [
      "New building construction",
      "Building extensions and additions",
      "Commercial and industrial facilities",
      "Residential developments",
      "Project management and coordination",
    ],
  },
  {
    id: "2d-3d-design",
    title: "2D-3D Design",
    icon: Ruler,
    description:
      "Professional design services including 2D drafting and 3D modeling to visualize your project before construction begins.",
    details: [
      "Architectural drafting and blueprints",
      "3D modeling and visualization",
      "Virtual walkthroughs",
      "Construction documentation",
      "Design development",
    ],
  },
  {
    id: "architectural-structural",
    title: "Architectural & Structural Services",
    icon: Compass,
    description:
      "Comprehensive architectural design and structural engineering services to ensure both aesthetic appeal and structural integrity.",
    details: [
      "Architectural design and planning",
      "Structural engineering and analysis",
      "Load calculations and structural specifications",
      "Building code compliance",
      "Permit documentation",
    ],
  },
  {
    id: "renovation-remodeling",
    title: "Renovation & Remodeling",
    icon: Home,
    description:
      "Expert renovation and remodeling services to transform existing spaces into modern, functional environments.",
    details: [
      "Complete home renovations",
      "Kitchen and bathroom remodeling",
      "Commercial space renovations",
      "Historic building restoration",
      "Adaptive reuse projects",
    ],
  },
  {
    id: "site-supervision",
    title: "Site Supervision",
    icon: HardHat,
    description:
      "Professional on-site supervision to ensure projects are executed according to plans, specifications, and quality standards.",
    details: [
      "Full-time site supervision",
      "Quality control and assurance",
      "Schedule monitoring and management",
      "Subcontractor coordination",
      "Safety compliance oversight",
    ],
  },
  {
    id: "interior-exterior",
    title: "Interior & Exterior",
    icon: Wrench,
    description:
      "Comprehensive interior and exterior design and construction services to enhance both aesthetics and functionality.",
    details: [
      "Interior design and space planning",
      "Exterior facade design and renovation",
      "Landscaping and outdoor living spaces",
      "Custom finishes and installations",
      "Lighting design and implementation",
    ],
  },
  {
    id: "civil-infrastructure",
    title: "Civil & Infrastructure Development",
    icon: Lightbulb,
    description: "Expert civil engineering and infrastructure development services for public and private projects.",
    details: [
      "Road and highway construction",
      "Water supply and drainage systems",
      "Bridge and culvert construction",
      "Site development and grading",
      "Environmental compliance",
    ],
  },
  {
    id: "electrical-mechanical",
    title: "Electrical & Mechanical Services",
    icon: Zap,
    description:
      "Specialized electrical and mechanical engineering services for optimal building performance and energy efficiency.",
    details: [
      "Electrical system design and installation",
      "HVAC system engineering",
      "Plumbing and fire protection",
      "Building automation systems",
      "Energy-efficient solutions",
    ],
  },
  {
    id: "structural-analysis",
    title: "Structural Analysis",
    icon: PenTool,
    description:
      "Detailed structural analysis to ensure the safety, stability, and code compliance of buildings and infrastructure.",
    details: [
      "Structural integrity assessments",
      "Seismic evaluation and retrofitting",
      "Foundation analysis and design",
      "Structural failure investigation",
      "Load capacity evaluation",
    ],
  },
  {
    id: "smart-sustainable",
    title: "Smart & Sustainable Construction",
    icon: Leaf,
    description:
      "Innovative approaches to create smart, sustainable buildings that minimize environmental impact and maximize efficiency.",
    details: [
      "Green building design and construction",
      "LEED certification consulting",
      "Energy-efficient building systems",
      "Smart home/building technology integration",
      "Renewable energy system installation",
    ],
  },
  {
    id: "post-construction",
    title: "Post-Construction & Maintenance",
    icon: Wrench,
    description:
      "Comprehensive post-construction services and ongoing maintenance to ensure the longevity and performance of your property.",
    details: [
      "Post-construction cleanup and finalization",
      "Preventive maintenance programs",
      "Building system inspections",
      "Repair and restoration services",
      "Facility management support",
    ],
  },
]

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg border border-border"
        >
          <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4">
            {<service.icon className="w-8 h-8 text-brand-teal" />}
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
          <p className="text-muted-foreground mb-4">{service.description}</p>
        </div>
      ))}
    </div>
  )
}
