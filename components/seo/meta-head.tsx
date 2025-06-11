import { Metadata } from "next"

type MetaHeadProps = {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
}

export function constructMetadata({
  title = "Dico - Modern Discord Clone",
  description = "A fully responsive real-time chat application inspired by Discord, featuring clean UI, intuitive navigation, and seamless user experience.",
  keywords = "discord, chat, real-time, messaging, voice, video, clone",
  ogImage = "/discord-clone-og.jpg",
  ogUrl = "https://discord-clone-omega-bice.vercel.app/"
}: MetaHeadProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "Minh Huy" }],
    openGraph: {
      title,
      description,
      url: ogUrl,
      siteName: "Dico",
      images: [{ url: ogImage }],
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    },
    metadataBase: new URL("https://your-site-url.com"),
    themeColor: "#5865F2", // Discord's primary color
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png"
    },
    robots: {
      index: true,
      follow: true
    }
  }
}
