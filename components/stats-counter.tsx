"use client"

import { useEffect, useState } from "react"
import { Award, Building, Calendar, Users } from "lucide-react"

export default function StatsCounter() {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  })

  const targets = {
    years: 25,
    projects: 500,
    clients: 350,
    awards: 45,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds animation
    const steps = 50
    const stepTime = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++

      if (currentStep >= steps) {
        setCounts(targets)
        clearInterval(interval)
        return
      }

      const progress = currentStep / steps

      setCounts({
        years: Math.floor(progress * targets.years),
        projects: Math.floor(progress * targets.projects),
        clients: Math.floor(progress * targets.clients),
        awards: Math.floor(progress * targets.awards),
      })
    }, stepTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <Calendar className="h-12 w-12 text-brand-teal mb-4" />
        <div className="text-4xl font-bold text-brand-teal mb-2">{counts.years}+</div>
        <h3 className="text-xl font-medium text-foreground">Years of Experience</h3>
      </div>

      <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <Building className="h-12 w-12 text-brand-teal mb-4" />
        <div className="text-4xl font-bold text-brand-teal mb-2">{counts.projects}+</div>
        <h3 className="text-xl font-medium text-foreground">Projects Completed</h3>
      </div>

      <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <Users className="h-12 w-12 text-brand-teal mb-4" />
        <div className="text-4xl font-bold text-brand-teal mb-2">{counts.clients}+</div>
        <h3 className="text-xl font-medium text-foreground">Satisfied Clients</h3>
      </div>

      <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <Award className="h-12 w-12 text-brand-teal mb-4" />
        <div className="text-4xl font-bold text-brand-teal mb-2">{counts.awards}</div>
        <h3 className="text-xl font-medium text-foreground">Industry Awards</h3>
      </div>
    </div>
  )
}
