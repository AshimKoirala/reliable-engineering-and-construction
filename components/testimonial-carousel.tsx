"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Project Manager, Skyline Developers",
    quote:
      "Reliable Engineering delivered our commercial tower project on time and within budget. Their attention to detail and innovative solutions saved us both time and money. We couldn't be happier with the results.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Director of Operations, Metro Transit Authority",
    quote:
      "The infrastructure project they completed for us was complex and challenging, but their team handled every aspect professionally. Their expertise in civil engineering is unmatched in the industry.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Jennifer Williams",
    position: "CEO, Green Homes Construction",
    quote:
      "We've partnered with Reliable Engineering on multiple residential developments, and they consistently exceed our expectations. Their sustainable design approaches have become a key selling point for our properties.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Robert Martinez",
    position: "Facilities Director, Northside Hospital",
    quote:
      "The renovation of our medical facility required specialized knowledge and careful planning. Reliable Engineering managed the entire process seamlessly while we remained operational throughout construction.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <Card className="border-border bg-secondary shadow-lg">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <Quote className="h-12 w-12 text-brand-teal/30 mb-6" />

            <p className="text-xl text-foreground mb-8 italic">"{testimonials[activeIndex].quote}"</p>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-foreground">{testimonials[activeIndex].name}</h4>
              <p className="text-muted-foreground">{testimonials[activeIndex].position}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" className="rounded-full border-border" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-brand-teal" : "bg-border"}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>

        <Button variant="outline" size="icon" className="rounded-full border-border" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
