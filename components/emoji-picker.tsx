"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Smile } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface EmojiPickerProps {
  onChange: (value: string) => void
}

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [Picker, setPicker] = useState<any>(null)

  useEffect(() => {
    setIsMounted(true)

    const loadEmoji = async () => {
      const data = await import("@emoji-mart/data")
      const picker = (await import("@emoji-mart/react")).default
      setPicker(() => picker)
    }

    loadEmoji()
  }, [])

  if (!isMounted) return null

  return (
    <Popover>
      <PopoverTrigger>
        <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
      </PopoverTrigger>
      <PopoverContent side="right" sideOffset={40} className="bg-transparent border-none shadow-none drop-shadow-none mb-16">
        {Picker && <Picker data={import("@emoji-mart/data")} theme={resolvedTheme || "dark"} onEmojiSelect={(emoji: any) => onChange(emoji.native)} />}
      </PopoverContent>
    </Popover>
  )
}
