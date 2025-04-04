import type React from "react"
import "@/app/globals.css"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import Preloader from "@/components/preloader"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata = {
  title: "Niki & Rounak's Wedding",
  description: "Join us to celebrate our special day",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${playfair.variable} ${cormorant.variable}`}>
        <Preloader />
        {children}
      </body>
    </html>
  )
}

