import { NextRequest, NextResponse } from "next/server"

/**
 * Generate account name ideas
 * POST /api/generate/names
 */
export async function POST(request: NextRequest) {
  try {
    const { niche } = await request.json()

    if (!niche || niche.trim().length === 0) {
      return NextResponse.json(
        { error: "Niche is required" },
        { status: 400 }
      )
    }

    // TODO: Integrate with OpenAI API
    // For now, return fallback names
    const names = generateFallbackNames(niche)

    return NextResponse.json(names, { status: 200 })
  } catch (error) {
    console.error("Error in /api/generate/names:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

function generateFallbackNames(niche: string) {
  const prefixes = ["The", "Pro", "Elite", "Master", "Peak", "Ultra"]
  const suffixes = ["Hub", "Zone", "Lab", "Studio", "Central", "Pro"]

  const names = [
    `${prefixes[0]} ${niche} ${suffixes[0]}`,
    `${prefixes[1]} ${niche} ${suffixes[1]}`,
    `${prefixes[2]} ${niche} ${suffixes[2]}`,
    `${niche} Mastery`,
    `${niche} Creators`,
    `The ${niche} Movement`,
    `${niche} Academy`,
    `${niche} Chronicles`,
    `${niche} Unleashed`,
    `Next Level ${niche}`,
  ]

  return names.map((name, idx) => ({
    name,
    isRecommended: idx === 0,
  }))
}
