"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { copyToClipboard } from "@/lib/clipboard"

interface CopyButtonProps {
  text: string
  label?: string
  className?: string
}

export default function CopyButton({ text, label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg
        bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm font-medium
        transition-smooth
        ${copied ? "bg-green-600 text-white" : ""}
        ${className}
      `}
    >
      {copied ? (
        <>
          <Check size={16} />
          Copied!
        </>
      ) : (
        <>
          <Copy size={16} />
          {label}
        </>
      )}
    </button>
  )
}
