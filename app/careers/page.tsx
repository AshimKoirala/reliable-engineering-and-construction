import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Briefcase, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getJobPositions, getJobDepartments } from "@/lib/careers"

export default function CareersPage() {
  const jobs = getJobPositions()
  const departments = getJobDepartments()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1600"
            alt="Careers at Reliable Engineering"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Join Our Team</h1>
            <p className="text-xl text-gray-200">
              Build your career with a company that values innovation, excellence, and professional growth
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Why Join Us</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover the benefits of building your career with Reliable Engineering & Construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Professional Growth</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We invest in your development through mentoring, continuing education, and opportunities to work on
                  diverse, challenging projects that expand your skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Innovative Culture</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We foster a culture of innovation where creative thinking is encouraged and new ideas are valued,
                  allowing you to contribute to groundbreaking projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Collaborative Teams</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work alongside talented professionals in a collaborative environment where teamwork and knowledge
                  sharing are essential to our success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Work-Life Balance</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We value your wellbeing with flexible work arrangements, competitive benefits, and a supportive
                  environment that recognizes life extends beyond the workplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Current Openings</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore our available positions and find the perfect fit for your skills and career goals
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Positions</TabsTrigger>
                {departments.map((department) => (
                  <TabsTrigger key={department} value={department}>
                    {department}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job) => (
                  <Card key={job.id} className="border-border bg-card flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            job.featured ? "bg-brand-orange/10 text-brand-orange" : "bg-primary/10 text-primary"
                          }`}
                        >
                          {job.type}
                        </div>
                        {job.featured && (
                          <div className="px-3 py-1 bg-brand-orange text-white text-xs font-medium rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <Link href={`/careers/${job.slug}`}>
                        <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                      </Link>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="w-4 h-4 mr-2" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{job.experience} experience</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-3">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/careers/${job.slug}`} className="flex items-center justify-center">
                          View Details <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {departments.map((department) => (
              <TabsContent key={department} value={department} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {jobs
                    .filter((job) => job.department === department)
                    .map((job) => (
                      <Card key={job.id} className="border-border bg-card flex flex-col">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <div
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                job.featured ? "bg-brand-orange/10 text-brand-orange" : "bg-primary/10 text-primary"
                              }`}
                            >
                              {job.type}
                            </div>
                            {job.featured && (
                              <div className="px-3 py-1 bg-brand-orange text-white text-xs font-medium rounded-full">
                                Featured
                              </div>
                            )}
                          </div>
                          <Link href={`/careers/${job.slug}`}>
                            <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                          </Link>
                          <div className="space-y-2 mt-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Building className="w-4 h-4 mr-2" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Briefcase className="w-4 h-4 mr-2" />
                              <span>{job.experience} experience</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground line-clamp-3">{job.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="w-full">
                            <Link href={`/careers/${job.slug}`} className="flex items-center justify-center">
                              View Details <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Employee Testimonials</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Hear from our team members about their experiences working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Employee portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">David Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Senior Structural Engineer</p>
                  <p className="text-sm text-primary">With us for 7 years</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-4xl text-primary opacity-20">"</div>
                  <blockquote className="pl-6 italic text-muted-foreground">
                    The professional growth opportunities here have been exceptional. I've worked on challenging
                    projects that have expanded my skills, and the company has supported my continuing education every
                    step of the way.
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Employee portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Jennifer Lee</h3>
                  <p className="text-sm text-muted-foreground">Project Manager</p>
                  <p className="text-sm text-primary">With us for 5 years</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-4xl text-primary opacity-20">"</div>
                  <blockquote className="pl-6 italic text-muted-foreground">
                    What I value most is the collaborative culture. Everyone's input is respected, from junior team
                    members to executives. This inclusive approach leads to better solutions and makes coming to work
                    each day a pleasure.
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Employee portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Marcus Johnson</h3>
                  <p className="text-sm text-muted-foreground">Civil Engineer</p>
                  <p className="text-sm text-primary">With us for 3 years</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-4xl text-primary opacity-20">"</div>
                  <blockquote className="pl-6 italic text-muted-foreground">
                    The work-life balance here is genuine, not just something mentioned in recruitment materials. The
                    flexible work arrangements and supportive management have allowed me to excel professionally while
                    still having time for my family and personal interests.
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Our Benefits</h2>
            <div className="w-20 h-1 bg-brand-teal my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              We offer a comprehensive benefits package to support your professional and personal wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Health & Wellness</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Comprehensive medical coverage</li>
                <li>Dental and vision plans</li>
                <li>Mental health resources</li>
                <li>Wellness program with incentives</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Work-Life Balance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Flexible work arrangements</li>
                <li>Generous paid time off</li>
                <li>Paid parental leave</li>
                <li>Company holidays</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Financial Security</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Competitive compensation</li>
                <li>401(k) with company matching</li>
                <li>Performance bonuses</li>
                <li>Professional license reimbursement</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Professional Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Continuing education support</li>
                <li>Professional certification assistance</li>
                <li>Mentorship programs</li>
                <li>Conference and training opportunities</li>
              </ul>
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
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-foreground/90">
                Explore our current openings and take the next step in your career with Reliable Engineering &
                Construction.
              </p>
            </div>
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-foreground">
              <a href="#current-openings">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
