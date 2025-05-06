import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, ChevronLeft, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProject, getProjects } from "@/lib/projects"

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block bg-brand-teal px-4 py-1 rounded-full text-white text-sm font-medium mb-2">
              {project.category}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-200">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Completed: {project.completionDate}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                <span>Client: {project.client}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="challenge">Challenge</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-0">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl text-muted-foreground">{project.description}</p>
                    <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-teal mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="challenge" className="mt-0">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h3>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </div>
                </TabsContent>
                <TabsContent value="solution" className="mt-0">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Our Solution</h3>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                </TabsContent>
                <TabsContent value="results" className="mt-0">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">The Results</h3>
                    <p className="text-muted-foreground">{project.results}</p>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Project Gallery */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.galleryImages.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-border">
                <Button asChild variant="outline">
                  <Link href="/projects" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Client Testimonial */}
                {/* {project.testimonial && (
                  <Card className="border-border bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-foreground">Client Testimonial</h3>
                      <div className="relative">
                        <div className="absolute -left-2 -top-2 text-4xl text-brand-teal opacity-20">"</div>
                        <blockquote className="pl-6 italic text-muted-foreground">
                          {project.testimonial.quote}
                        </blockquote>
                        <div className="mt-4 pl-6">
                          <div className="font-semibold text-foreground">{project.testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )} */}

                {/* Related Projects */}
                {/* <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Related Projects</h3>
                    <div className="space-y-4">
                      {project.relatedProjects.map((relatedProject) => (
                        <Link
                          key={relatedProject.slug}
                          href={`/projects/${relatedProject.slug}`}
                          className="block group"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedProject.image || "/placeholder.svg"}
                                alt={relatedProject.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground group-hover:text-brand-teal transition-colors">
                                {relatedProject.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{relatedProject.category}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card> */}

                {/* Contact CTA */}
                <Card className="border-border bg-brand-teal text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Interested in a Similar Project?</h3>
                    <p className="mb-6">
                      Contact our team to discuss how we can apply our expertise to your specific requirements.
                    </p>
                    <Button asChild className="w-full bg-white text-brand-teal hover:bg-white/90">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
