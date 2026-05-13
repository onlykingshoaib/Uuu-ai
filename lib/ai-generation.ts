/**
 * AI Generation Functions
 * Handles API calls to generate content for the social media account planner
 */

export interface NameIdea {
  name: string
  isRecommended: boolean
}

export interface Category {
  name: string
  description: string
}

export interface ContentStrategy {
  category: string
  youtubeQuery: string
  videoAdvice: string
}

export interface SuccessPack {
  caption: string
  hashtags: string[]
}

/**
 * Generate 10 unique account name ideas based on niche
 */
export async function generateNameIdeas(niche: string): Promise<NameIdea[]> {
  try {
    const response = await fetch("/api/generate/names", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ niche }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating names:", error)
    return generateFallbackNames(niche)
  }
}

/**
 * Generate profile picture guide and bio
 */
export async function generateIdentity(accountName: string, niche: string) {
  try {
    const response = await fetch("/api/generate/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountName, niche }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating identity:", error)
    return generateFallbackIdentity(accountName, niche)
  }
}

/**
 * Generate 3 categories for the account
 */
export async function generateCategories(accountName: string, niche: string): Promise<Category[]> {
  try {
    const response = await fetch("/api/generate/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountName, niche }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating categories:", error)
    return generateFallbackCategories(niche)
  }
}

/**
 * Generate content strategy for a specific category
 */
export async function generateContentStrategy(
  accountName: string,
  niche: string,
  category: string
): Promise<ContentStrategy> {
  try {
    const response = await fetch("/api/generate/content-strategy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountName, niche, category }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating content strategy:", error)
    return generateFallbackContentStrategy(category)
  }
}

/**
 * Generate success pack (caption + hashtags) for a category
 */
export async function generateSuccessPack(
  category: string,
  videoAdvice: string
): Promise<SuccessPack> {
  try {
    const response = await fetch("/api/generate/success-pack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, videoAdvice }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating success pack:", error)
    return generateFallbackSuccessPack()
  }
}

// ============ FALLBACK GENERATORS FOR DEMO ============

function generateFallbackNames(niche: string): NameIdea[] {
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

function generateFallbackIdentity(accountName: string, niche: string) {
  return {
    profilePictureGuide: `Create a professional, modern profile picture featuring:
• Bold, vibrant colors that represent your ${niche} niche
• Clear, recognizable logo or personal branding
• High contrast for visibility on mobile devices
• Minimalist design that works at small sizes
• Your unique personality or brand mascot`,
    bio: `${accountName} | 📱 ${niche} Creator | 🚀 Growth Hacks & Tips
💡 Daily insights to level up your ${niche} game
🎯 Subscribe for exclusive tutorials & strategies`,
  }
}

function generateFallbackCategories(niche: string): Category[] {
  return [
    {
      name: `${niche} Tips & Tricks`,
      description: `Share quick, actionable tips specific to ${niche}. Focus on daily value and practical advice.`,
    },
    {
      name: `Behind-the-Scenes`,
      description: `Show your process, setup, and journey. Build authentic connection with your audience.`,
    },
    {
      name: `Trends & Challenges`,
      description: `Participate in trending sounds and challenges with a ${niche} twist. Stay relevant.`,
    },
  ]
}

function generateFallbackContentStrategy(category: string) {
  return {
    category,
    youtubeQuery: `How to create viral ${category} content 2024`,
    videoAdvice: `Start with a hook in the first 0.5 seconds. Use trending sounds. Keep videos between 15-60 seconds. End with a strong CTA.`,
  }
}

function generateFallbackSuccessPack() {
  return {
    caption: `🚀 Just dropped something amazing! What are your thoughts? Drop a comment below 👇`,
    hashtags: ["#viral", "#trending", "#foryou", "#explore", "#creator", "#growth", "#tiktok", "#newvideo"],
  }
}
/**
 * AI Generation Functions
 * Handles API calls to generate content for the social media account planner
 */

export interface NameIdea {
  name: string
  isRecommended: boolean
}

export interface Category {
  name: string
  description: string
}

export interface ContentStrategy {
  category: string
  youtubeQuery: string
  videoAdvice: string
}

export interface SuccessPack {
  caption: string
  hashtags: string[]
}

/**
 * Generate 10 unique account name ideas based on niche
 */
export async function generateNameIdeas(niche: string): Promise<NameIdea[]> {
  try {
    const response = await fetch("/api/generate/names", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ niche }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating names:", error)
    // Fallback names for demo
    return generateFallbackNames(niche)
  }
}

/**
 * Generate profile picture guide and bio
 */
export async function generateIdentity(accountName: string, niche: string) {
  try {
    const response = await fetch("/api/generate/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountName, niche }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating identity:", error)
    return generateFallbackIdentity(accountName, niche)
  }
}

/**
 * Generate 3 categories for the account
 */
export async function generateCategories(accountName: string, niche: string): Promise<Category[]> {
  try {
    const response = await fetch("/api/generate/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountName, niche }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating categories:", error)
    return generateFallbackCategories(niche)
  }
}

/**
 * Generate content strategy for a specific category
 */
export async function generateContentStrategy(
  accountName: string,
  niche: string,
  category: string
): Promise<ContentStrategy> {
  try {
    const response = await fetch("/api/generate/content-strategy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountName, niche, category }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating content strategy:", error)
    return generateFallbackContentStrategy(category)
  }
}

/**
 * Generate success pack (caption + hashtags) for a category
 */
export async function generateSuccessPack(
  category: string,
  videoAdvice: string
): Promise<SuccessPack> {
  try {
    const response = await fetch("/api/generate/success-pack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, videoAdvice }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating success pack:", error)
    return generateFallbackSuccessPack()
  }
}

// ============ FALLBACK GENERATORS FOR DEMO ============

function generateFallbackNames(niche: string): NameIdea[] {
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

function generateFallbackIdentity(accountName: string, niche: string) {
  return {
    profilePictureGuide: `Create a professional, modern profile picture featuring:
• Bold, vibrant colors that represent your ${niche} niche
• Clear, recognizable logo or personal branding
• High contrast for visibility on mobile devices
• Minimalist design that works at small sizes
• Your unique personality or brand mascot`,
    bio: `${accountName} | 📱 ${niche} Creator | 🚀 Growth Hacks & Tips
💡 Daily insights to level up your ${niche} game
🎯 Subscribe for exclusive tutorials & strategies`,
  }
}

function generateFallbackCategories(niche: string): Category[] {
  return [
    {
      name: `${niche} Tips & Tricks`,
      description: `Share quick, actionable tips specific to ${niche}. Focus on daily value and practical advice.`,
    },
    {
      name: `Behind-the-Scenes`,
      description: `Show your process, setup, and journey. Build authentic connection with your audience.`,
    },
    {
      name: `Trends & Challenges`,
      description: `Participate in trending sounds and challenges with a ${niche} twist. Stay relevant.`,
    },
  ]
}

function generateFallbackContentStrategy(category: string) {
  return {
    category,
    youtubeQuery: `How to create viral ${category} content 2024`,
    videoAdvice: `Start with a hook in the first 0.5 seconds. Use trending sounds. Keep videos between 15-60 seconds. End with a strong CTA.`,
  }
}

function generateFallbackSuccessPack() {
  return {
    caption: `🚀 Just dropped something amazing! What are your thoughts? Drop a comment below 👇`,
    hashtags: ["#viral", "#trending", "#foryou", "#explore", "#creator", "#growth", "#tiktok", "#newvideo"],
  }
}
