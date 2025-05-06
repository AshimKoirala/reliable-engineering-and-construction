"use server"

import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  preferredContact: z.enum(["email", "phone"]),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Log the form data (in a real app, you would send an email or store in a database)
    console.log("Form submission received:", validatedData)

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store the inquiry in a database
    // 3. Create a ticket in your CRM system

    // Simulate a brief delay for the API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    return { success: true, message: "Thank you for your inquiry. We'll contact you soon!" }
  } catch (error) {
    console.error("Form submission error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.errors.map((err) => ({ path: err.path.join("."), message: err.message })),
      }
    }

    return { success: false, message: "An error occurred while submitting the form. Please try again." }
  }
}
