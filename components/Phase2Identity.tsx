"use client"

import { useState, useEffect } from "react"
import { Loader, ArrowLeft } from "lucide-react"
import { generateIdentity, generateCategories, type Category } from "@/lib/ai-generation"
import CopyButton from "./CopyButton"

interface Phase2IdentityProps {
  niche: string
  selectedName: string
  onComplete: (profilePictureGuide: string, bio: string, categories: Category[]) => void
  onBack: () => void
}

export default function Phase2Identity({
  niche,
  selectedName,
  onComplete,
  onBack,
}: Phase2IdentityProps) {
  const [profileGuide, setProfileGuide] = useState("")
  const [bio, setBio] = useState("")
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true)
      try {
        const [identityData, categoriesData] = await Promise.all([
          generateIdentity(selectedName, niche),
          generateCategories(selectedName, niche),
        ])

        setProfileGuide(identityData.profilePictureGuide)
        setBio(identityData.bio)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error loading identity data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [selectedName, niche])

  const handleContinue = () => {
    if (profileGuide && bio && categories.length > 0) {
      onComplete(profileGuide, bio, categories)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="btn-secondary mb-8 flex items-center gap-2"
      >
        <ArrowLeft size={18} />
        Back to Naming
      </button>

      <h2 className="text-3xl font-bold mb-2">Step 2: Your Identity</h2>
      <p className="text-gray-400 mb-8">
        Account: <span className="text-purple-400 font-semibold">{selectedName}</span>
      </p>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <Loader size={40} className="animate-spin text-purple-500 mx-auto mb-4" />
            <p className="text-gray-400">Generating your identity...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Profile Picture Guide */}
          <div className="card-glass mb-8 animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                📸 Profile Picture Guide
              </h3>
              <CopyButton text={profileGuide} label="Copy" />
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
              {profileGuide}
            </div>
          </div>

          {/* Bio */}
          <div className="card-glass mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                ✍️ Professional Bio
              </h3>
              <CopyButton text={bio} label="Copy" />
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <p className="text-gray-300 whitespace-pre-wrap">{bio}</p>
            </div>
          </div>

          {/* Categories */}
          <div className="card-glass mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              🎯 Content Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category, idx) => (
                <div
                  key={idx}
                  className="glass-effect rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-smooth"
                >
                  <h4 className="font-bold text-lg mb-3 text-purple-400">
                    {idx + 1}. {category.name}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="btn-primary w-full py-4 text-lg font-semibold mb-4"
          >
            Continue to Content Strategy →
          </button>
        </>
      )}
    </div>
  )
}
