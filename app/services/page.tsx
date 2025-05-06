import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  ChevronRight,
  Compass,
  HardHat,
  Lightbulb,
  Ruler,
  Wrench,
  PenToolIcon as Tool,
  Home,
  Eye,
  Zap,
  BarChart,
  Leaf,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services.jpg?height=400&width=1600"
            alt="Engineering services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive engineering and construction solutions for projects of all sizes
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Engineering & Construction Services
            </h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              From concept to completion, we provide end-to-end solutions for your infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <HardHat className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Construction Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full-service construction solutions for commercial, residential, and industrial projects with a focus
                  on quality and timeliness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>New building construction</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Project management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Quality control</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Timeline and budget adherence</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/construction-work" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Tool className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">2D-3D Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive design services using cutting-edge software to create detailed 2D and 3D visualizations
                  of your project.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Architectural visualization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>3D modeling and rendering</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Technical drawings</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Virtual walkthroughs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/2d-3d-design" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Architectural & Structural Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert architectural and structural engineering services that balance aesthetics, functionality, and
                  structural integrity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Architectural design</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Structural engineering</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Building code compliance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Permit acquisition</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/architectural-structural" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Renovation & Remodeling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Transform existing spaces with our comprehensive renovation and remodeling services for residential
                  and commercial properties.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Space optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Historic renovations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Facility upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Energy efficiency improvements</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/renovation-remodeling" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Site Supervision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional on-site supervision to ensure your project is executed according to specifications,
                  safety standards, and quality requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Safety compliance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Progress monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Contractor coordination</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/site-supervision" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Ruler className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Interior & Exterior</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive interior and exterior design and construction services to enhance aesthetics and
                  functionality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Interior design</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Facade improvements</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Landscaping</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Material selection</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/interior-exterior" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Civil & Infrastructure Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Planning, designing, and constructing infrastructure projects including roads, bridges, and water
                  systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Transportation infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Water resource management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Site development</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Environmental compliance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/civil-infrastructure" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Electrical & Mechanical Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive electrical and mechanical engineering services for optimal building performance and
                  energy efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>HVAC system design</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Electrical distribution systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Plumbing and fire protection</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Energy modeling and analysis</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/electrical-mechanical" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Structural Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Detailed structural analysis to ensure the safety, stability, and code compliance of your building
                  projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Load calculations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Seismic evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Structural integrity assessments</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Failure analysis</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/structural-analysis" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Smart & Sustainable Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Innovative construction solutions that incorporate smart technology and sustainable practices for
                  environmentally responsible buildings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Green building certification</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Smart home/building systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Energy-efficient design</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Renewable energy integration</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link href="/services/smart-sustainable" className="text-primary font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>

            <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Post-Construction & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive post-construction services and ongoing maintenance to ensure the longevity and optimal
                  performance of your property.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Preventive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Building systems monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Repair services</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Facility management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {/* <Link
                  href="/services/post-construction-maintenance"
                  className="text-primary font-medium flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link> */}
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Our Service Process</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">How we approach every project to ensure success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-foreground">Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your project requirements, goals, constraints, and
                vision.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-foreground">Planning & Design</h3>
              <p className="text-muted-foreground">
                Our team develops detailed plans, specifications, and designs tailored to your specific project needs
                and objectives.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-foreground">Implementation</h3>
              <p className="text-muted-foreground">
                We execute the project with precision, adhering to timelines, budgets, and quality standards while
                maintaining clear communication.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We conduct thorough inspections and testing to ensure all work meets or exceeds industry standards and
                client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Industries We Serve</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">Our expertise spans across multiple sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Commercial</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Residential</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HardHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Industrial</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Infrastructure</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Energy</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Education</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Healthcare</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Government</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-teal">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-foreground/90">
                Contact us today for a free consultation and quote on your engineering or construction project.
              </p>
            </div>
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-foreground">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
