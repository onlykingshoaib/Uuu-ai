import { NextRequest, NextResponse } from "next/server"

/**
 * Generate 3 content categories
 * POST /api/generate/categories
 */
export async function POST(request: NextRequest) {
  try {
    const { accountName, niche } = await request.json()

    if (!accountName || !niche) {
      return NextResponse.json(
        { error: "Account name and niche are required" },
        { status: 400 }
      )
    }

    // TODO: Integrate with OpenAI API
    // For now, return fallback categories
    const categories = generateFallbackCategories(niche)

    return NextResponse.json(categories, { status: 200 })
  } catch (error) {
    console.error("Error in /api/generate/categories:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

function generateFallbackCategories(niche: string) {
  return [
    {
      name: `${niche} Tips & Tricks`,
      description: `Share quick, actionable tips specific to ${niche}. Focus on daily value and practical advice that your audience can implement immediately. Use trending sounds and keep content under 60 seconds.`,
    },
    {
      name: `Behind-the-Scenes`,
      description: `Show your process, setup, and journey. Build authentic connection with your audience. Share your struggles, wins, and daily routine. This builds trust and loyalty with your followers.`,
    },
    {
      name: `Trends & Challenges`,
      description: `Participate in trending sounds and challenges with a ${niche} twist. Stay relevant and increase discoverability. Put your unique spin on trending formats to showcase your personality while riding the algorithm.`,
    },
  ]
}
