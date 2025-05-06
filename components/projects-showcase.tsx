"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "City Center Tower",
    category: "Commercial",
    image: "/placeholder.svg?height=300&width=400",
    location: "New York, NY",
    url: "/projects/city-center-tower",
  },
  {
    id: 2,
    title: "Riverside Bridge",
    category: "Infrastructure",
    image: "/placeholder.svg?height=300&width=400",
    location: "Chicago, IL",
    url: "/projects/riverside-bridge",
  },
  {
    id: 3,
    title: "Green Valley Residences",
    category: "Residential",
    image: "/placeholder.svg?height=300&width=400",
    location: "Austin, TX",
    url: "/projects/green-valley-residences",
  },
  {
    id: 4,
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    image: "/placeholder.svg?height=300&width=400",
    location: "Detroit, MI",
    url: "/projects/advanced-manufacturing-facility",
  },
]

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Commercial", "Infrastructure", "Residential", "Industrial"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "bg-brand-teal hover:bg-brand-teal/90" : "border-border"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border-border bg-secondary shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-brand-teal text-foreground px-3 py-1 text-sm font-medium rounded-full">
                {project.category}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-1 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.location}</p>
              <Link href={project.url} className="text-brand-teal font-medium flex items-center text-sm">
                View Details <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
