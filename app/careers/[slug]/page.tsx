"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, MapPin, Briefcase, ChevronLeft, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getJobPosition } from "@/lib/careers"
import { toast } from "@/components/ui/use-toast"

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  const job = getJobPosition(params.slug)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
  })

  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!job) {
    notFound()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0])
    }
  }

  const removeFile = () => {
    setResume(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. We'll review your application and contact you soon.",
    })

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      coverLetter: "",
    })
    setResume(null)
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1600"
            alt={job.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  job.featured ? "bg-brand-orange text-white" : "bg-white/20 text-white"
                }`}
              >
                {job.type}
              </div>
              <div className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">{job.department}</div>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-200">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                <span>{job.experience} experience</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Button asChild variant="outline" className="mb-8">
                  <Link href="/careers" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Careers
                  </Link>
                </Button>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Job Description</h2>
                  <p className="text-muted-foreground">{job.description}</p>

                  <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Key Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-teal mr-2">•</span>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Requirements</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-teal mr-2">•</span>
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Benefits</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-teal mr-2">•</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Form */}
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Apply for this Position</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV</Label>
                    <div className="border border-input rounded-md p-2">
                      {resume ? (
                        <div className="flex items-center justify-between bg-secondary/50 p-2 rounded">
                          <span className="text-sm">{resume.name}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={removeFile} className="h-8 w-8 p-0">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove file</span>
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-4">
                          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                          <label
                            htmlFor="file-upload"
                            className="cursor-pointer text-sm text-primary hover:text-primary/80"
                          >
                            Upload your resume (PDF, DOC, DOCX)
                            <input
                              id="file-upload"
                              name="resume"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="sr-only"
                              required
                            />
                          </label>
                          <p className="text-xs text-muted-foreground mt-1">Max file size: 5MB</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Job Summary */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Job Summary</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Department</h4>
                        <p className="text-foreground">{job.department}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                        <p className="text-foreground">{job.location}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Employment Type</h4>
                        <p className="text-foreground">{job.type}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Experience Required</h4>
                        <p className="text-foreground">{job.experience}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Salary Range</h4>
                        <p className="text-foreground">{job.salary}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Posted Date</h4>
                        <p className="text-foreground">{new Date(job.postedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>


                {/* Share Job */}
                {/* <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Share This Job</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
