"use client"

import { useState, useEffect } from "react"
import { Loader, ArrowLeft, ExternalLink } from "lucide-react"
import {
  generateContentStrategy,
  generateSuccessPack,
  type Category,
  type ContentStrategy,
  type SuccessPack,
} from "@/lib/ai-generation"
import CopyButton from "./CopyButton"

interface Phase3ContentProps {
  niche: string
  selectedName: string
  categories: Category[]
  onBack: () => void
}

interface StrategyWithSuccessPack extends ContentStrategy {
  successPack: SuccessPack
}

export default function Phase3Content({
  niche,
  selectedName,
  categories,
  onBack,
}: Phase3ContentProps) {
  const [strategies, setStrategies] = useState<StrategyWithSuccessPack[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStrategies = async () => {
      setLoading(true)
      try {
        const strategyPromises = categories.map(async (category) => {
          const strategy = await generateContentStrategy(
            selectedName,
            niche,
            category.name
          )
          const successPack = await generateSuccessPack(
            category.name,
            strategy.videoAdvice
          )

          return {
            ...strategy,
            successPack,
          }
        })

        const loadedStrategies = await Promise.all(strategyPromises)
        setStrategies(loadedStrategies)
      } catch (error) {
        console.error("Error loading strategies:", error)
      } finally {
        setLoading(false)
      }
    }

    loadStrategies()
  }, [selectedName, niche, categories])

  const handleYouTubeSearch = (query: string) => {
    const encodedQuery = encodeURIComponent(query)
    window.open(`https://www.youtube.com/results?search_query=${encodedQuery}`, "_blank")
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="btn-secondary mb-8 flex items-center gap-2"
      >
        <ArrowLeft size={18} />
        Back to Identity
      </button>

      <h2 className="text-3xl font-bold mb-2">Step 3: Content & Strategy</h2>
      <p className="text-gray-400 mb-8">
        Account: <span className="text-purple-400 font-semibold">{selectedName}</span> | Niche:{" "}
        <span className="text-pink-400 font-semibold">{niche}</span>
      </p>

      {loading ? (
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <Loader size={40} className="animate-spin text-purple-500 mx-auto mb-4" />
            <p className="text-gray-400">Generating your content strategy...</p>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {strategies.map((strategy, idx) => (
            <div
              key={idx}
              className="card-glass animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="mb-8 pb-6 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-2">
                  📺 {strategy.category}
                </h3>
                <p className="text-gray-400">Content strategy for maximum engagement</p>
              </div>

              {/* YouTube Research Query */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-2">
                      🔍 YouTube Research Query
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Search this on YouTube to find trending content ideas
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <CopyButton text={strategy.youtubeQuery} label="Copy" />
                    <button
                      onClick={() => handleYouTubeSearch(strategy.youtubeQuery)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-red-600 hover:bg-red-700 text-white text-sm font-medium
                        transition-smooth"
                    >
                      <ExternalLink size={16} />
                      Search
                    </button>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 text-gray-200">
                  {strategy.youtubeQuery}
                </div>
              </div>

              {/* Video Content Advice */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-purple-400">
                    💡 Video Content Advice
                  </h4>
                  <CopyButton text={strategy.videoAdvice} label="Copy" />
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 text-gray-300 leading-relaxed">
                  {strategy.videoAdvice}
                </div>
              </div>

              {/* Success Pack Section */}
              <div className="pt-8 border-t border-gray-800">
                <h4 className="text-lg font-bold mb-6 text-pink-400">
                  🎯 Success Pack
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Caption */}
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <label className="font-semibold text-gray-300">
                        📝 Engaging Caption
                      </label>
                      <CopyButton text={strategy.successPack.caption} label="Copy" />
                    </div>
                    <textarea
                      readOnly
                      value={strategy.successPack.caption}
                      className="w-full h-32 bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-gray-100 text-sm focus:outline-none resize-none"
                    />
                  </div>

                  {/* Hashtags */}
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <label className="font-semibold text-gray-300">
                        #️⃣ Hashtag Set
                      </label>
                      <CopyButton
                        text={strategy.successPack.hashtags.join(" ")}
                        label="Copy All"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 p-4 bg-gray-900/50 border border-gray-800 rounded-lg min-h-32">
                      {strategy.successPack.hashtags.map((hashtag, hIdx) => (
                        <button
                          key={hIdx}
                          onClick={() => copyHashtag(hashtag)}
                          className="px-3 py-2 bg-purple-900/50 hover:bg-purple-800 border border-purple-700/50 rounded-lg text-purple-300 text-sm font-medium transition-smooth flex items-center gap-2 group"
                        >
                          {hashtag}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                            📋
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final CTA */}
          <div className="card-glass text-center py-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-4">🚀 You're All Set!</h3>
            <p className="text-gray-400 mb-6">
              You now have a complete roadmap for your social media account. Start creating content with
              confidence!
            </p>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Go to TikTok <ExternalLink size={18} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

function copyHashtag(hashtag: string) {
  navigator.clipboard.writeText(hashtag)
}
