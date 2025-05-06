import { NextResponse } from "next/server"
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

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the form data
    const validatedData = contactFormSchema.parse(body)

    // In a real application, you would:
    // 1. Send an email notification using a service like SendGrid, Mailgun, etc.
    // 2. Store the inquiry in a database
    // 3. Integrate with a CRM or ticketing system

    console.log("Contact form submission:", validatedData)

    // Return a success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. We'll contact you soon!",
    })
  } catch (error) {
    console.error("Contact form error:", error)

    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors.map((err) => ({ path: err.path.join("."), message: err.message })),
        },
        { status: 400 },
      )
    }

    // Return a generic error response
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 },
    )
  }
}
