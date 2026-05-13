/**
 * Clipboard utility functions
 */

export async function copyToClipboard(text: string, onSuccess?: () => void) {
  try {
    await navigator.clipboard.writeText(text)
    onSuccess?.()
    return true
  } catch (error) {
    console.error("Failed to copy to clipboard:", error)
    // Fallback for older browsers
    try {
      const textarea = document.createElement("textarea")
      textarea.value = text
      textarea.style.position = "fixed"
      textarea.style.left = "-999999px"
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      onSuccess?.()
      return true
    } catch {
      return false
    }
  }
}

/**
 * Format audio blob to base64
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = (reader.result as string).split(",")[1]
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

/**
 * Record audio from microphone
 */
export async function startAudioRecording(): Promise<{
  stop: () => Promise<Blob>
  cancel: () => void
}> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  const mediaRecorder = new MediaRecorder(stream)
  const chunks: BlobPart[] = []

  mediaRecorder.ondataavailable = (e) => chunks.push(e.data)

  mediaRecorder.start()

  return {
    stop: () =>
      new Promise((resolve) => {
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/webm" })
          stream.getTracks().forEach((track) => track.stop())
          resolve(blob)
        }
        mediaRecorder.stop()
      }),
    cancel: () => {
      mediaRecorder.stop()
      stream.getTracks().forEach((track) => track.stop())
    },
  }
}
