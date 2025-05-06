import Image from "next/image"
import Link from "next/link"
import { Award, Calendar, CheckCircle, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.jpg?height=400&width=1600"
            alt="Engineering team at work"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
              About Reliable Engineering & Construction
            </h1>
            <p className="text-xl text-gray-200">Building trust</p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 dark:text-white">Our Story</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Reliable Engineering and Construction was founded with a clear mission: 
                to deliver high-quality, dependable, and innovative engineering and construction solutions. 
                Since our inception, we have built a reputation for excellence through our commitment to precision, 
                safety, and client satisfaction.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our team of experienced engineers, architects, and project managers work 
                collaboratively to bring each project to life—on time and within budget. 
                Whether it's residential, commercial, or infrastructure development, 
                we take pride in delivering results that stand the test of time.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
               At Reliable Engineering and Construction, we don’t just build structures—we build trust.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/2dlogo.png?height=500&width=600"
                alt="Company history timeline"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-700 dark:text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To deliver exceptional engineering and construction services that exceed client expectations, while
                maintaining the highest standards of safety, quality, and integrity. We are committed to creating
                infrastructure that enhances communities and improves lives.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-blue-700 dark:text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the most trusted and innovative engineering and construction firm, recognized globally for our
                technical excellence, sustainable practices, and positive impact on the built environment. We aspire to
                shape the future of infrastructure through forward-thinking solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Our Core Values</h2>
            <div className="w-20 h-1 bg-yellow-500 my-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-700 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We strive for excellence in every aspect of our work, from design to execution, ensuring the highest
                quality outcomes for our clients.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-700 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in the power of teamwork and partnership, working closely with clients, communities, and
                stakeholders to achieve shared goals.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-700 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our
                clients and within our industry.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-700 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace new technologies and methodologies, continuously seeking better ways to solve complex
                engineering and construction challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-yellow-500 my-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">Meet the experts who guide our company</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                <Image src="/manojkryadav.jpg?height=320&width=280" alt="Co-Founder" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 dark:text-white">Er. Manoj Kumar Yadav</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">Co-Founder</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                <Image src="/mukeshyadav.jpeg?height=320&width=280" alt="IT Department" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 dark:text-white">Mukesh Yadav</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">IT Department</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                <Image src="/artiyadav.jpeg?height=320&width=280" alt="Architect" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 dark:text-white">Ar. Arti Yadav</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">Architect</p>
            </div>
          </div>

          {/* <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50"
            >
              <Link href="/about/team">View Full Team</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 dark:bg-blue-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join Our Team of Experts</h2>
              <p className="text-xl text-gray-200">
                We're always looking for talented engineers, project managers, and construction professionals to join
                our growing team.
              </p>
            </div>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/careers">View Career Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
