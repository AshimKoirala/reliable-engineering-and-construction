"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Building2, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { submitContactForm, type ContactFormData } from "@/app/actions/contact-form"

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    preferredContact: "email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: value as "email" | "phone" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "Form submitted successfully",
          description: result.message,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          message: "",
          preferredContact: "email",
        })
      } else {
        toast({
          title: "Form submission failed",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.png?height=300&width=1600"
            alt="Contact us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team to discuss your engineering and construction needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Phone</h3>
                <a href="tel:+977 9812340170" className="text-primary font-medium hover:underline">
                  +977 9812340170
                </a>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Email</h3>
                <a href="mailto:reliableconstruction023@gmail.com" className="text-primary font-medium hover:underline">
                  reliableconstruction023@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Location</h3>
                <address className="text-primary font-medium not-italic">
                  Jadibutti, Koteshwor - 32
                  <br />
                  Kathmandu
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-foreground">Get in Touch</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              <p className="text-muted-foreground mb-8">
                Fill out the form below to request a consultation, ask a question, or provide feedback. Our team will
                get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-foreground">
                    Project Type
                  </Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("projectType", value)}
                    value={formData.projectType}
                  >
                    <SelectTrigger id="projectType" className="bg-background border-input">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-input">
                      <SelectItem value="commercial">Commercial Construction</SelectItem>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="industrial">Industrial Projects</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="renovation">Renovation/Retrofitting</SelectItem>
                      <SelectItem value="consulting">Engineering Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-foreground">
                    Estimated Budget
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formData.budget}>
                    <SelectTrigger id="budget" className="bg-background border-input">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-input">
                      <SelectItem value="under100k">Under $100,000</SelectItem>
                      <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                      <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                      <SelectItem value="1m-5m">$1 million - $5 million</SelectItem>
                      <SelectItem value="5m-10m">$5 million - $10 million</SelectItem>
                      <SelectItem value="over10m">Over $10 million</SelectItem>
                      <SelectItem value="undecided">Undecided/Not applicable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your project or inquiry..."
                    rows={5}
                    required
                    className="bg-background border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">Preferred Contact Method</Label>
                  <RadioGroup
                    defaultValue="email"
                    value={formData.preferredContact}
                    onValueChange={handleRadioChange}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact" className="text-foreground">
                        Email
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact" className="text-foreground">
                        Phone
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-foreground">Our Locations</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md border border-border">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.483308343557!2d85.34823871172284!3d27.671453426973137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x66a812ee85bb7ebd%3A0x604b8d43da7dcd9d!2sReliable%20engineering%20%26%20construction!5e0!3m2!1sen!2snp!4v1746522402024!5m2!1sen!2snp" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-accent my-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2 p-6 rounded-lg bg-card border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground">What areas do you serve?</h3>
              <p className="text-muted-foreground">
                We provide engineering and construction services nationwide, with offices in Chicago, New York, San
                Francisco, and Miami. We also undertake select international projects.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-lg bg-card border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground">How do I request a quote?</h3>
              <p className="text-muted-foreground">
                You can request a quote by filling out our contact form, calling our main office, or emailing us with
                details about your project. We'll respond within 1-2 business days.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-lg bg-card border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground">What information do you need for an estimate?</h3>
              <p className="text-muted-foreground">
                To provide an accurate estimate, we typically need project location, scope, timeline, any existing plans
                or specifications, and budget constraints. The more details you can provide, the better.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-lg bg-card border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground">Do you offer design-build services?</h3>
              <p className="text-muted-foreground">
                Yes, we offer comprehensive design-build services that streamline the project delivery process by
                combining design and construction under a single contract and team.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-lg bg-card border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground">What types of projects do you handle?</h3>
              <p className="text-muted-foreground">
                We handle a wide range of projects including commercial buildings, residential developments, industrial
                facilities, infrastructure projects, renovations, and specialized engineering consulting.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-lg bg-card border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground">Are you licensed and insured?</h3>
              <p className="text-muted-foreground">
                Yes, we are fully licensed, bonded, and insured in all states where we operate. We maintain professional
                liability insurance, general liability insurance, and workers' compensation coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
