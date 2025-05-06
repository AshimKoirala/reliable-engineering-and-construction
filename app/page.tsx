import Link from "next/link"
import { Building2, CheckCircle, ChevronRight, Clock, HardHat, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ProjectsShowcase from "@/components/projects-showcase"
import StatsCounter from "@/components/stats-counter"
import LandingCarousel from "@/components/landing-carousel"
import BlogPreview from "@/components/blog-preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative w-full">
        <LandingCarousel />
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Our Services</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive engineering and construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-secondary border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4">
                  <HardHat className="w-6 h-6 text-brand-teal" />
                </div>
                <CardTitle className="text-2xl text-foreground">Construction Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full-service construction solutions for commercial, residential, and industrial projects with a focus on quality and timeliness.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services/construction-work" className="text-brand-teal font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-secondary border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-brand-teal" />
                </div>
                <CardTitle className="text-2xl text-foreground">Architectural & Structural Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert architectural and structural engineering services that balance aesthetics, functionality, and structural integrity.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/services/architectural-structural"
                  className="text-brand-teal font-medium flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-secondary border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-brand-teal" />
                </div>
                <CardTitle className="text-2xl text-foreground">Civil & Infrastructure Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Planning, designing, and constructing infrastructure projects including roads, bridges, and water systems.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services/civil-infrastructure" className="text-brand-teal font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-brand-teal text-brand-teal hover:bg-background-secondary"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <StatsCounter />
        </div>
      </section>

      {/* Featured Projects */}
      {/* <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore our portfolio of successful engineering and construction projects
            </p>
          </div>

          <ProjectsShowcase />

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <BlogPreview />
        </div>
      </section>

      {/* Why Choose Us */}
     <section className="py-16 bg-secondary text-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose Us</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              What sets Reliable Engineering & Construction apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous quality control processes ensuring the highest standards on every project
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                Proven track record of completing projects within schedule constraints
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Highly qualified engineers and construction professionals with decades of experience
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                Cutting-edge approaches to complex engineering and construction challenges
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-teal">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground mb-4">
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
)}
