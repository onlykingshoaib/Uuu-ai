import { NextRequest, NextResponse } from "next/server"

/**
 * Generate success pack (caption + hashtags)
 * POST /api/generate/success-pack
 */
export async function POST(request: NextRequest) {
  try {
    const { category, videoAdvice } = await request.json()

    if (!category) {
      return NextResponse.json(
        { error: "Category is required" },
        { status: 400 }
      )
    }

    // TODO: Integrate with OpenAI API
    // For now, return fallback success pack
    const successPack = generateFallbackSuccessPack(category)

    return NextResponse.json(successPack, { status: 200 })
  } catch (error) {
    console.error("Error in /api/generate/success-pack:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

function generateFallbackSuccessPack(category: string) {
  const captions = [
    `🚀 Just dropped something amazing! What are your thoughts? Drop a comment below 👇`,
    `This changed everything for me. Have you tried it? Let me know in the comments! 💬`,
    `If this helps even one person, it's worth sharing. Save this for later! 📌`,
    `The best part? It's actually simpler than you think. Watch till the end! ✨`,
    `POV: You're about to level up your ${category} game 📈`,
  ]

  const hashtagSets = [
    ["viral", "trending", "content", "creator", "explore", "foryou", "growth", "tips"],
    ["tiktok", "reels", "shortvideo", "entertainment", "mustwatch", "recommended", "daily", "follow"],
    ["success", "motivation", "inspiration", "subscribe", "like", "share", "comment", "unlock"],
    ["talent", "skills", "amazing", "awesome", "incredible", "wow", "goals", "inspo"],
    ["newvideo", "uploadnow", "watchthis", "viral", "trending", "popular", "hot", "best"],
  ]

  const captionIdx = Math.floor(Math.random() * captions.length)
  const hashtagIdx = Math.floor(Math.random() * hashtagSets.length)

  return {
    caption: captions[captionIdx],
    hashtags: hashtagSets[hashtagIdx],
  }
}
