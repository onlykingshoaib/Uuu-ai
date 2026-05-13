"use client"

import { useState } from "react"
import Phase1Input from "./Phase1Input"
import Phase2Identity from "./Phase2Identity"
import Phase3Content from "./Phase3Content"

export type WizardStep = "phase1" | "phase2" | "phase3"

interface WizardState {
  niche: string
  selectedName: string
  profilePictureGuide: string
  bio: string
  categories: Array<{ name: string; description: string }>
}

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState<WizardStep>("phase1")
  const [state, setState] = useState<WizardState>({
    niche: "",
    selectedName: "",
    profilePictureGuide: "",
    bio: "",
    categories: [],
  })

  const handlePhase1Complete = (niche: string, selectedName: string) => {
    setState((prev) => ({
      ...prev,
      niche,
      selectedName,
    }))
    setCurrentStep("phase2")
  }

  const handlePhase2Complete = (
    profilePictureGuide: string,
    bio: string,
    categories: Array<{ name: string; description: string }>
  ) => {
    setState((prev) => ({
      ...prev,
      profilePictureGuide,
      bio,
      categories,
    }))
    setCurrentStep("phase3")
  }

  const handleBackToPhase1 = () => {
    setCurrentStep("phase1")
  }

  const handleBackToPhase2 = () => {
    setCurrentStep("phase2")
  }

  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Social Media Account Planner</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            AI-powered wizard to launch your winning social media strategy
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {(["Phase 1: Brainstorm", "Phase 2: Identity", "Phase 3: Strategy"] as const).map(
              (label, idx) => (
                <div key={label} className="flex items-center">
                  <button
                    onClick={() => {
                      if (idx === 0) handleBackToPhase1()
                      else if (idx === 1 && state.selectedName) handleBackToPhase2()
                    }}
                    className={`
                      w-10 h-10 rounded-full font-bold transition-smooth flex items-center justify-center
                      ${
                        idx === 0 && currentStep === "phase1"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : idx === 1 && currentStep === "phase2"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                            : idx === 2 && currentStep === "phase3"
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                              : idx < (currentStep === "phase1" ? 1 : currentStep === "phase2" ? 2 : 3)
                                ? "bg-green-600 text-white cursor-pointer hover:bg-green-700"
                                : "bg-gray-800 text-gray-400"
                      }
                    `}
                    disabled={idx > (currentStep === "phase1" ? 1 : currentStep === "phase2" ? 2 : 3)}
                  >
                    {idx + 1}
                  </button>
                  {idx < 2 && (
                    <div
                      className={`w-12 h-1 mx-2 rounded-full transition-smooth ${
                        idx < (currentStep === "phase1" ? 0 : currentStep === "phase2" ? 1 : 2)
                          ? "bg-green-600"
                          : "bg-gray-800"
                      }`}
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Phase Content */}
        <div className="animate-fade-in">
          {currentStep === "phase1" && <Phase1Input onComplete={handlePhase1Complete} />}
          {currentStep === "phase2" && (
            <Phase2Identity
              niche={state.niche}
              selectedName={state.selectedName}
              onComplete={handlePhase2Complete}
              onBack={handleBackToPhase1}
            />
          )}
          {currentStep === "phase3" && (
            <Phase3Content
              niche={state.niche}
              selectedName={state.selectedName}
              categories={state.categories}
              onBack={handleBackToPhase2}
            />
          )}
        </div>
      </div>
    </div>
  )
}
"use client"

import { useState } from "react"
import Phase1Input from "./Phase1Input"
import Phase2Identity from "./Phase2Identity"
import Phase3Content from "./Phase3Content"

export type WizardStep = "phase1" | "phase2" | "phase3"

interface WizardState {
  niche: string
  selectedName: string
  profilePictureGuide: string
  bio: string
  categories: Array<{ name: string; description: string }>
}

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState<WizardStep>("phase1")
  const [state, setState] = useState<WizardState>({
    niche: "",
    selectedName: "",
    profilePictureGuide: "",
    bio: "",
    categories: [],
  })

  const handlePhase1Complete = (niche: string, selectedName: string) => {
    setState((prev) => ({
      ...prev,
      niche,
      selectedName,
    }))
    setCurrentStep("phase2")
  }

  const handlePhase2Complete = (
    profilePictureGuide: string,
    bio: string,
    categories: Array<{ name: string; description: string }>
  ) => {
    setState((prev) => ({
      ...prev,
      profilePictureGuide,
      bio,
      categories,
    }))
    setCurrentStep("phase3")
  }

  const handleBackToPhase1 = () => {
    setCurrentStep("phase1")
  }

  const handleBackToPhase2 = () => {
    setCurrentStep("phase2")
  }

  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Social Media Account Planner</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            AI-powered wizard to launch your winning social media strategy
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {(["Phase 1: Brainstorm", "Phase 2: Identity", "Phase 3: Strategy"] as const).map(
              (label, idx) => (
                <div key={label} className="flex items-center">
                  <button
                    onClick={() => {
                      if (idx === 0) handleBackToPhase1()
                      else if (idx === 1 && state.selectedName) handleBackToPhase2()
                    }}
                    className={`
                      w-10 h-10 rounded-full font-bold transition-smooth flex items-center justify-center
                      ${
                        idx === 0 && currentStep === "phase1"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : idx === 1 && currentStep === "phase2"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                            : idx === 2 && currentStep === "phase3"
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                              : idx < (currentStep === "phase1" ? 1 : currentStep === "phase2" ? 2 : 3)
                                ? "bg-green-600 text-white cursor-pointer hover:bg-green-700"
                                : "bg-gray-800 text-gray-400"
                      }
                    `}
                    disabled={idx > (currentStep === "phase1" ? 1 : currentStep === "phase2" ? 2 : 3)}
                  >
                    {idx + 1}
                  </button>
                  {idx < 2 && (
                    <div
                      className={`w-12 h-1 mx-2 rounded-full transition-smooth ${
                        idx < (currentStep === "phase1" ? 0 : currentStep === "phase2" ? 1 : 2)
                          ? "bg-green-600"
                          : "bg-gray-800"
                      }`}
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Phase Content */}
        <div className="animate-fade-in">
          {currentStep === "phase1" && <Phase1Input onComplete={handlePhase1Complete} />}
          {currentStep === "phase2" && (
            <Phase2Identity
              niche={state.niche}
              selectedName={state.selectedName}
              onComplete={handlePhase2Complete}
              onBack={handleBackToPhase1}
            />
          )}
          {currentStep === "phase3" && (
            <Phase3Content
              niche={state.niche}
              selectedName={state.selectedName}
              categories={state.categories}
              onBack={handleBackToPhase2}
            />
          )}
        </div>
      </div>
    </div>
  )
}
