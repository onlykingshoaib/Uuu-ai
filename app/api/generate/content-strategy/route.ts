import { NextRequest, NextResponse } from "next/server"

/**
 * Generate content strategy for a specific category
 * POST /api/generate/content-strategy
 */
export async function POST(request: NextRequest) {
  try {
    const { accountName, niche, category } = await request.json()

    if (!accountName || !niche || !category) {
      return NextResponse.json(
        { error: "Account name, niche, and category are required" },
        { status: 400 }
      )
    }

    // TODO: Integrate with OpenAI API
    // For now, return fallback content strategy
    const strategy = generateFallbackContentStrategy(category)

    return NextResponse.json(strategy, { status: 200 })
  } catch (error) {
    console.error("Error in /api/generate/content-strategy:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

function generateFallbackContentStrategy(category: string) {
  const strategies: Record<string, { query: string; advice: string }> = {
    default: {
      query: `How to create viral ${category} content 2024`,
      advice: `Start with a hook in the first 0.5 seconds. Use trending sounds. Keep videos between 15-60 seconds. 
• Open with a question or surprising statement
• Use B-roll and transitions to maintain retention
• Include text overlays for clarity
• End with a strong call-to-action
• Post consistently during peak hours (6-10 PM)`,
    },
  }

  const categoryKey = Object.keys(strategies).find((key) =>
    category.toLowerCase().includes(key.toLowerCase())
  ) || "default"

  const baseStrategy = strategies[categoryKey]

  return {
    category,
    youtubeQuery: baseStrategy.query,
    videoAdvice: baseStrategy.advice,
  }
}
