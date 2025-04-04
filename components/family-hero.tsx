"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FamilyHero() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background image */}
      <Image src="/images/family-hero.jpg" alt="Family gathering" fill className="object-cover" priority />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Loved Ones</h1>
            <p className="text-xl md:text-2xl font-light">The wonderful people who shared in our special day</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

