"use client"

import { useState } from "react"
import { Copy, Mic, Loader } from "lucide-react"
import { generateNameIdeas, type NameIdea } from "@/lib/ai-generation"
import { copyToClipboard } from "@/lib/clipboard"
import CopyButton from "./CopyButton"

interface Phase1InputProps {
  onComplete: (niche: string, selectedName: string) => void
}

export default function Phase1Input({ onComplete }: Phase1InputProps) {
  const [niche, setNiche] = useState("")
  const [names, setNames] = useState<NameIdea[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedName, setSelectedName] = useState<string | null>(null)
  const [isRecording, setIsRecording] = useState(false)

  const handleGenerateNames = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!niche.trim()) return

    setLoading(true)
    try {
      const generatedNames = await generateNameIdeas(niche)
      setNames(generatedNames)
      setSelectedName(null)
    } catch (error) {
      console.error("Error generating names:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleVoiceInput = async () => {
    try {
      setIsRecording(true)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      const chunks: BlobPart[] = []

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data)
      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop())
        // In a real app, you'd send this to a speech-to-text API
        // For now, we'll just show a message
      }

      mediaRecorder.start()

      // Record for 5 seconds
      setTimeout(() => {
        mediaRecorder.stop()
        setIsRecording(false)
      }, 5000)
    } catch (error) {
      console.error("Microphone access denied:", error)
      setIsRecording(false)
    }
  }

  const handleSelectName = (name: string) => {
    setSelectedName(name)
  }

  const handleContinue = () => {
    if (selectedName) {
      onComplete(niche, selectedName)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Input Section */}
      <div className="card-glass mb-12">
        <h2 className="text-2xl font-bold mb-6">Step 1: Describe Your Niche</h2>
        <p className="text-gray-400 mb-6">
          Tell us about your content idea. You can type or use voice input for a quick description.
        </p>

        <form onSubmit={handleGenerateNames} className="space-y-4">
          <div className="relative">
            <textarea
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., 'Fitness coaching for beginners', 'Gaming content', 'Cooking hacks', 'Personal development'..."
              className="input-field min-h-32 resize-none"
            />
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isRecording}
              className={`absolute bottom-4 right-4 p-2 rounded-full transition-smooth ${
                isRecording
                  ? "bg-red-600 text-white animate-pulse"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              title="Voice input (5 seconds)"
            >
              <Mic size={20} />
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || !niche.trim()}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader size={20} className="animate-spin" />
                Generating Ideas...
              </>
            ) : (
              "Generate 10 Account Names 🚀"
            )}
          </button>
        </form>
      </div>

      {/* Names Grid */}
      {names.length > 0 && (
        <div className="animate-slide-up">
          <h3 className="text-xl font-bold mb-6">Choose Your Account Name</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {names.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectName(item.name)}
                className={`
                  relative p-6 rounded-xl border-2 transition-smooth text-left group
                  ${
                    selectedName === item.name
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-gray-700 bg-gray-900/50 hover:border-gray-600"
                  }
                `}
              >
                {item.isRecommended && (
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">
                    AI's Top Choice ⭐
                  </div>
                )}

                <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {item.name}
                </h4>

                {selectedName === item.name && (
                  <div className="text-purple-400 font-semibold flex items-center gap-1">
                    ✓ Selected
                  </div>
                )}
              </button>
            ))}
          </div>

          {selectedName && (
            <button
              onClick={handleContinue}
              className="btn-primary w-full py-4 text-lg font-semibold"
            >
              Continue to Identity Setup →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
"use client"

import { useState } from "react"
import { Copy, Mic, Loader } from "lucide-react"
import { generateNameIdeas, type NameIdea } from "@/lib/ai-generation"
import { copyToClipboard } from "@/lib/clipboard"
import CopyButton from "./CopyButton"

interface Phase1InputProps {
  onComplete: (niche: string, selectedName: string) => void
}

export default function Phase1Input({ onComplete }: Phase1InputProps) {
  const [niche, setNiche] = useState("")
  const [names, setNames] = useState<NameIdea[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedName, setSelectedName] = useState<string | null>(null)
  const [isRecording, setIsRecording] = useState(false)

  const handleGenerateNames = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!niche.trim()) return

    setLoading(true)
    try {
      const generatedNames = await generateNameIdeas(niche)
      setNames(generatedNames)
      setSelectedName(null)
    } catch (error) {
      console.error("Error generating names:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleVoiceInput = async () => {
    try {
      setIsRecording(true)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      const chunks: BlobPart[] = []

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data)
      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop())
        // In a real app, you'd send this to a speech-to-text API
        // For now, we'll just show a message
      }

      mediaRecorder.start()

      // Record for 5 seconds
      setTimeout(() => {
        mediaRecorder.stop()
        setIsRecording(false)
      }, 5000)
    } catch (error) {
      console.error("Microphone access denied:", error)
      setIsRecording(false)
    }
  }

  const handleSelectName = (name: string) => {
    setSelectedName(name)
  }

  const handleContinue = () => {
    if (selectedName) {
      onComplete(niche, selectedName)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Input Section */}
      <div className="card-glass mb-12">
        <h2 className="text-2xl font-bold mb-6">Step 1: Describe Your Niche</h2>
        <p className="text-gray-400 mb-6">
          Tell us about your content idea. You can type or use voice input for a quick description.
        </p>

        <form onSubmit={handleGenerateNames} className="space-y-4">
          <div className="relative">
            <textarea
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., 'Fitness coaching for beginners', 'Gaming content', 'Cooking hacks', 'Personal development'..."
              className="input-field min-h-32 resize-none"
            />
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isRecording}
              className={`absolute bottom-4 right-4 p-2 rounded-full transition-smooth ${
                isRecording
                  ? "bg-red-600 text-white animate-pulse"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              title="Voice input (5 seconds)"
            >
              <Mic size={20} />
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || !niche.trim()}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader size={20} className="animate-spin" />
                Generating Ideas...
              </>
            ) : (
              "Generate 10 Account Names 🚀"
            )}
          </button>
        </form>
      </div>

      {/* Names Grid */}
      {names.length > 0 && (
        <div className="animate-slide-up">
          <h3 className="text-xl font-bold mb-6">Choose Your Account Name</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {names.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectName(item.name)}
                className={`
                  relative p-6 rounded-xl border-2 transition-smooth text-left group
                  ${
                    selectedName === item.name
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-gray-700 bg-gray-900/50 hover:border-gray-600"
                  }
                `}
              >
                {item.isRecommended && (
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">
                    AI's Top Choice ⭐
                  </div>
                )}

                <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {item.name}
                </h4>

                {selectedName === item.name && (
                  <div className="text-purple-400 font-semibold flex items-center gap-1">
                    ✓ Selected
                  </div>
                )}
              </button>
            ))}
          </div>

          {selectedName && (
            <button
              onClick={handleContinue}
              className="btn-primary w-full py-4 text-lg font-semibold"
            >
              Continue to Identity Setup →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
