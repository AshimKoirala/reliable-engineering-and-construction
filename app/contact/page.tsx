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
            src="/placeholder.svg?height=300&width=1600"
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
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-700 mb-2">Main Office</p>
                <a href="tel:+18005551234" className="text-blue-700 font-medium">
                  (800) 555-1234
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-700 mb-2">Customer Support</p>
                <a href="mailto:info@reliableengineering.com" className="text-blue-700 font-medium">
                  info@reliableengineering.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-700 mb-2">Headquarters</p>
                <address className="text-blue-700 font-medium not-italic">
                  123 Engineering Blvd
                  <br />
                  Chicago, IL 60601
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-gray-700 mb-8">
                Fill out the form below to request a consultation, ask a question, or provide feedback. Our team will
                get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
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
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("projectType", value)}
                    value={formData.projectType}
                  >
                    <SelectTrigger id="projectType">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
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
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formData.budget}>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
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
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    defaultValue="email"
                    value={formData.preferredContact}
                    onValueChange={handleRadioChange}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Locations</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Office location map"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-700" />
                    Headquarters
                  </h3>
                  <address className="text-gray-700 not-italic">
                    123 Engineering Blvd
                    <br />
                    Chicago, IL 60601
                    <br />
                    (800) 555-1234
                  </address>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-700" />
                    East Coast Office
                  </h3>
                  <address className="text-gray-700 not-italic">
                    456 Construction Ave
                    <br />
                    New York, NY 10001
                    <br />
                    (800) 555-5678
                  </address>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-700" />
                    West Coast Office
                  </h3>
                  <address className="text-gray-700 not-italic">
                    789 Pacific Blvd
                    <br />
                    San Francisco, CA 94105
                    <br />
                    (800) 555-9012
                  </address>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-700" />
                    Southern Office
                  </h3>
                  <address className="text-gray-700 not-italic">
                    321 Sunshine Way
                    <br />
                    Miami, FL 33101
                    <br />
                    (800) 555-3456
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-yellow-500 my-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What areas do you serve?</h3>
              <p className="text-gray-700">
                We provide engineering and construction services nationwide, with offices in Chicago, New York, San
                Francisco, and Miami. We also undertake select international projects.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">How do I request a quote?</h3>
              <p className="text-gray-700">
                You can request a quote by filling out our contact form, calling our main office, or emailing us with
                details about your project. We'll respond within 1-2 business days.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">What information do you need for an estimate?</h3>
              <p className="text-gray-700">
                To provide an accurate estimate, we typically need project location, scope, timeline, any existing plans
                or specifications, and budget constraints. The more details you can provide, the better.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer design-build services?</h3>
              <p className="text-gray-700">
                Yes, we offer comprehensive design-build services that streamline the project delivery process by
                combining design and construction under a single contract and team.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">What types of projects do you handle?</h3>
              <p className="text-gray-700">
                We handle a wide range of projects including commercial buildings, residential developments, industrial
                facilities, infrastructure projects, renovations, and specialized engineering consulting.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Are you licensed and insured?</h3>
              <p className="text-gray-700">
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
