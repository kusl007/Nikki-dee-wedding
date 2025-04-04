"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurStory() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-serif mb-4">
            Our Love Story
          </motion.h2>
          <motion.div variants={fadeIn} className="w-24 h-0.5 bg-pink-300 mx-auto mb-6" />
          <motion.p variants={fadeIn} className="text-gray-600">
            Every love story is beautiful, but ours is our favorite. Here's how our journey began and led us to this
            special day.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* First story item */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row items-start">
              <motion.div variants={fadeIn} className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/story-1.jpg"
                  alt="How We Met"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover shadow-md"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="md:w-1/2 md:pl-16 relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-pink-200 hidden md:block"></div>

                <div className="absolute left-0 top-0 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-pink-100 border-2 border-pink-300"></div>
                </div>

                <span className="text-pink-400 block mb-2">May 2020</span>
                <h3 className="text-2xl font-serif mb-4">How We Met</h3>
                <div className="w-6 h-6 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#f9a8d4"
                    stroke="#f9a8d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We first met at a mutual friend's birthday party. What started as a casual conversation turned into
                  hours of talking and laughing.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Second story item */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row-reverse items-start">
              <motion.div variants={fadeIn} className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/story-2.jpg"
                  alt="First Date"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover shadow-md"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="md:w-1/2 md:pr-16 relative">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-pink-200 hidden md:block"></div>

                <div className="absolute right-0 top-0 transform translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-pink-100 border-2 border-pink-300"></div>
                </div>

                <span className="text-pink-400 block mb-2">December 2021</span>
                <h3 className="text-2xl font-serif mb-4">First Date</h3>
                <div className="w-6 h-6 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#f9a8d4"
                    stroke="#f9a8d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  After months of friendship, we finally went on our first official date to a cozy Italian restaurant
                  followed by a walk under the stars.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Third story item */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <div className="flex flex-col md:flex-row items-start">
              <motion.div variants={fadeIn} className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/story-3.jpg"
                  alt="The Proposal"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover shadow-md"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="md:w-1/2 md:pl-16 relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-pink-200 hidden md:block"></div>

                <div className="absolute left-0 top-0 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-pink-100 border-2 border-pink-300"></div>
                </div>

                <span className="text-pink-400 block mb-2">July 2023</span>
                <h3 className="text-2xl font-serif mb-4">The Proposal</h3>
                <div className="w-6 h-6 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#f9a8d4"
                    stroke="#f9a8d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  During a weekend getaway to the mountains, surrounded by breathtaking views, the perfect moment
                  arrived for a heartfelt proposal.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

