"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WeddingDetails() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div variants={fadeIn} className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-serif mb-6">KRISTY & KEN</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When Kristy & Ken first met, they knew they had found something special. Their journey began with a
                chance encounter that blossomed into a beautiful relationship filled with love, laughter, and
                unforgettable moments.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                After five years of dating, Ken proposed during a romantic weekend getaway to the mountains. The
                breathtaking views provided the perfect backdrop for this milestone in their love story.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Now they're ready to take the next step and begin their forever together. They would be honored to have
                you join them in celebrating this special occasion.
              </p>

              <div className="inline-block border border-gray-200 px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors cursor-pointer">
                Read More
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="md:w-1/2">
              <Image
                src="/images/couple.jpg"
                alt="Kristy and Ken"
                width={500}
                height={700}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

