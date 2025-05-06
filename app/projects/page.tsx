import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1600"
            alt="Construction projects"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Our Projects</h1>
            <p className="text-xl text-gray-200">Showcasing our expertise in engineering and construction excellence</p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Project Portfolio</h2>
            <div className="w-20 h-1 bg-yellow-500 my-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Browse our completed and ongoing projects across various sectors
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 dark:bg-gray-800">
                <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="commercial"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  Commercial
                </TabsTrigger>
                <TabsTrigger
                  value="residential"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  Residential
                </TabsTrigger>
                <TabsTrigger
                  value="infrastructure"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  Infrastructure
                </TabsTrigger>
                <TabsTrigger
                  value="industrial"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  Industrial
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="City Center Tower"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 text-sm font-medium rounded-full">
                      Commercial
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">City Center Tower</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>New York, NY</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A 45-story mixed-use skyscraper featuring office space, retail areas, and luxury apartments with
                      state-of-the-art sustainable design elements.
                    </p>
                    <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: 2022</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/city-center-tower"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Project 2 */}
                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="Riverside Bridge"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      Infrastructure
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">Riverside Bridge</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Chicago, IL</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A 1,200-foot cable-stayed bridge spanning the river, featuring innovative structural design and
                      pedestrian walkways with scenic overlooks.
                    </p>
                    <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: 2021</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/riverside-bridge"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Project 3 */}
                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="Green Valley Residences"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      Residential
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">Green Valley Residences</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Austin, TX</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A luxury residential community featuring 120 eco-friendly homes with solar power, rainwater
                      harvesting, and energy-efficient design.
                    </p>
                    <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: 2023</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/green-valley-residences"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Project 4 */}
                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="Advanced Manufacturing Facility"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      Industrial
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">Advanced Manufacturing Facility</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Detroit, MI</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A 250,000 sq ft state-of-the-art manufacturing facility with automated production lines, energy
                      recovery systems, and smart building technology.
                    </p>
                    <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: 2022</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/advanced-manufacturing-facility"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Project 5 */}
                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="Metro Transit Hub"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      Infrastructure
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">Metro Transit Hub</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Seattle, WA</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A multi-modal transportation center connecting light rail, bus, and bicycle infrastructure with
                      sustainable design and public art installations.
                    </p>
                    <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: 2023</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/metro-transit-hub"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Project 6 */}
                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="Oceanfront Hotel & Resort"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 text-sm font-medium rounded-full">
                      Commercial
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">Oceanfront Hotel & Resort</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Miami, FL</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A luxury 350-room beachfront resort with conference facilities, multiple restaurants, and
                      innovative coastal resilience features.
                    </p>
                    <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Completed: 2021</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/oceanfront-hotel-resort"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs would have similar content but filtered by category */}
            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Commercial Projects */}
                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="City Center Tower"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 text-sm font-medium rounded-full">
                      Commercial
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">City Center Tower</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>New York, NY</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A 45-story mixed-use skyscraper featuring office space, retail areas, and luxury apartments with
                      state-of-the-art sustainable design elements.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/city-center-tower"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="Oceanfront Hotel & Resort"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 text-sm font-medium rounded-full">
                      Commercial
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold dark:text-white">Oceanfront Hotel & Resort</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Miami, FL</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      A luxury 350-room beachfront resort with conference facilities, multiple restaurants, and
                      innovative coastal resilience features.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/projects/oceanfront-hotel-resort"
                      className="text-blue-700 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other category tabs would follow the same pattern */}
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50"
            >
              <Link href="/projects/archive">View Project Archive</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-gray-900/30">
              <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">250+</div>
              <h3 className="text-xl font-medium dark:text-white">Projects Completed</h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-gray-900/30">
              <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">35</div>
              <h3 className="text-xl font-medium dark:text-white">States Served</h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-gray-900/30">
              <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">98%</div>
              <h3 className="text-xl font-medium dark:text-white">Client Satisfaction</h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-gray-900/30">
              <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">45</div>
              <h3 className="text-xl font-medium dark:text-white">Industry Awards</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 dark:bg-blue-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Have a Project in Mind?</h2>
              <p className="text-xl text-gray-200">
                Our team of experts is ready to bring your vision to life with innovative engineering and construction
                solutions.
              </p>
            </div>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
