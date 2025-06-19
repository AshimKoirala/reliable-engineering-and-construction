"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Define the slide type
type CarouselSlide = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  ctaText: string
  ctaLink: string
}

// Sample carousel data
const carouselSlides: CarouselSlide[] = [
  // {
  //   id: 1,
  //   title: "Engineering Excellence",
  //   subtitle: "Building Tomorrow's Infrastructure",
  //   description: "Award-winning structural engineering solutions for projects of all sizes.",
  //   image: "/placeholder.svg?height=800&width=1600",
  //   ctaText: "Our Services",
  //   ctaLink: "/services",
  // },
  {
    id: 2,
    title: "Architectural & Structural Services",
    subtitle: "Design Excellence",
    description: "Comprehensive architectural design and structural engineering for aesthetic appeal and integrity.",
    image: "/architect.jpg?height=800&width=1600",
    ctaText: "Learn More",
    ctaLink: "/services",
  },
  {
    id: 3,
    title: "2D-3D Design Services",
    subtitle: "Visualize Your Project",
    description: "Professional 2D drafting and 3D modeling to bring your vision to life before construction begins.",
    image: "/3dmodel.jpg?height=800&width=1600",
    ctaText: "Explore Designs",
    ctaLink: "/services",
  },
  {
    id: 4,
    title: "Smart & Sustainable Construction",
    subtitle: "Eco-Friendly Building Practices",
    description:
      "Creating environmentally responsible structures with minimal carbon footprint and maximum efficiency.",
    image: "/ecohouse.jpg?height=800&width=1600",
    ctaText: "Green Solutions",
    ctaLink: "/services",
  },
  {
    id: 5,
    title: "Renovation & Remodeling",
    subtitle: "Transform Your Space",
    description: "Expert renovation services to modernize and enhance existing residential and commercial spaces.",
    image: "/renovation.jpg?height=800&width=1600",
    ctaText: "View Projects",
    ctaLink: "/services",
  },
  // {
  //   id: 6,
  //   title: "Civil & Infrastructure Development",
  //   subtitle: "Building Foundations",
  //   description: "Comprehensive infrastructure solutions including roads, bridges, and water management systems.",
  //   image: "/placeholder.svg?height=800&width=1600",
  //   ctaText: "Discover More",
  //   ctaLink: "/services",
  // },
  // {
  //   id: 7,
  //   title: "Electrical & Mechanical Services",
  //   subtitle: "Powering Your Projects",
  //   description: "Specialized electrical and mechanical engineering for optimal building performance and efficiency.",
  //   image: "/placeholder.svg?height=800&width=1600",
  //   ctaText: "Our Expertise",
  //   ctaLink: "/services/electrical-mechanical",
  // },
  {
    id: 8,
    title: "Join Our Team",
    subtitle: "Career Opportunities",
    description: "We're looking for talented professionals to help build the future of construction and engineering.",
    image: "/career.jpg?height=800&width=1600",
    ctaText: "View Careers",
    ctaLink: "/careers",
  },
]

interface LandingCarouselProps {
  autoPlayInterval?: number
  className?: string
}

export default function LandingCarousel({ autoPlayInterval = 5000, className }: LandingCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [nextSlide, autoPlayInterval, isPaused])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Project highlights carousel"
    >
      {/* Slides container */}
      <div className="relative h-[400px] md:h-[450px]">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-1000",
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${carouselSlides.length}: ${slide.title}`}
            aria-hidden={currentSlide !== index}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover brightness-[0.6] dark:brightness-50"
                priority={index === 0}
              />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container px-4 md:px-6">
                <div className="max-w-3xl space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-medium text-brand-teal">{slide.subtitle}</h3>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white dark:text-white">
                      {slide.title}
                    </h2>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 dark:text-white/90">{slide.description}</p>
                  <div className="pt-4">
                    <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                      <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 dark:bg-background/20 hover:bg-white/30 dark:hover:bg-background/30 p-2 rounded-full backdrop-blur-sm transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 dark:bg-background/20 hover:bg-white/30 dark:hover:bg-background/30 p-2 rounded-full backdrop-blur-sm transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2 overflow-x-auto px-4">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all flex-shrink-0",
              currentSlide === index ? "bg-brand-teal w-8" : "bg-white/30 hover:bg-white/50",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20 dark:bg-background/20">
        <div
          className="h-full bg-brand-teal transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / carouselSlides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
