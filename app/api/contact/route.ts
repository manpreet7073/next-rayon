import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Parse FormData
    const formData = await request.formData()

    // Extract values from FormData
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate the request data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // For development/preview environments, simulate a successful response
    // This allows the form to work in preview mode where external APIs might not be accessible
    if (process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") {
      console.log("Development mode: Simulating successful form submission", { name, email, subject, message })
      return NextResponse.json({ success: true })
    }

    // In production, forward the request to the external API
    // Try with FormData first
    try {
      const apiFormData = new FormData()
      apiFormData.append("name", name)
      apiFormData.append("email", email)
      apiFormData.append("subject", subject)
      apiFormData.append("message", message)

      const response = await fetch("https://api.rayonweb.com/", {
        method: "POST",
        body: apiFormData,
      })

      if (response.ok) {
        return NextResponse.json({ success: true })
      }
    } catch (formDataError) {
      console.error("FormData submission failed, trying JSON:", formDataError)
    }

    // If FormData submission fails, try with JSON
    const jsonResponse = await fetch("https://api.rayonweb.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })

    if (!jsonResponse.ok) {
      const errorText = await jsonResponse.text().catch(() => "Unknown error")
      return NextResponse.json({ error: `API Error: ${errorText}` }, { status: jsonResponse.status })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in contact API route:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    )
  }
}
