"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const portfolioItems = [
  {
    id: "01",
    title: "Engagement",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: "02",
    title: "The Venue",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: "03",
    title: "Ceremony",
    image: "/images/portfolio-3.jpg",
  },
]

export default function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-serif tracking-widest uppercase mb-4">
            Portfolio
          </motion.h2>
          <motion.div variants={fadeIn} className="w-16 h-0.5 bg-pink-300 mx-auto mb-2" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-serif text-gray-400 mb-1">{item.id}</h3>
                <p className="text-sm uppercase tracking-widest text-gray-600">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

