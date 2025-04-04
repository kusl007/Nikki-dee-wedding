import type React from "react"
import "@/app/globals.css"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"

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
  title: "Our Wedding",
  description: "Join us to celebrate our special day",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${playfair.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'