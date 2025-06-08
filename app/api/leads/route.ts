import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send to CRM webhook
    // 4. Send confirmation email

    console.log("New lead:", body)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully",
    })
  } catch (error) {
    console.error("Error processing lead:", error)
    return NextResponse.json({ success: false, message: "Failed to submit demo request" }, { status: 500 })
  }
}
