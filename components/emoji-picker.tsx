"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Smile } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import the Emoji Picker with no SSR
const EmojiPickerComponent = dynamic(() => import("@emoji-mart/react").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="h-[350px] w-[352px] flex items-center justify-center">Loading...</div>
})

interface EmojiPickerProps {
  onChange: (value: string) => void
}

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Handle hydration issues by only rendering client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Popover>
      <PopoverTrigger>
        <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
      </PopoverTrigger>
      <PopoverContent side="right" sideOffset={40} className="bg-transparent border-none shadow-none drop-shadow-none mb-16">
        <EmojiPickerComponent
          data={async () => {
            const emojiData = await import("@emoji-mart/data")
            return emojiData.default
          }}
          theme={resolvedTheme || "dark"}
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  )
}
