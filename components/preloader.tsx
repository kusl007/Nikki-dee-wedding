"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a timeout to hide the preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pink-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl font-serif text-pink-500 mb-2"
              >
                #NikiKiRounak
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="relative w-40 h-40 mx-auto"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border-2 border-pink-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-serif text-gray-700">Niki</div>
                      <div className="text-sm text-pink-400">&</div>
                      <div className="text-xl font-serif text-gray-700">Rounak</div>
                    </div>
                  </div>
                </div>

                {/* Animated ring */}
                <motion.div
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 4,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    },
                  }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full rounded-full border-2 border-pink-300 border-dashed"></div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center items-center space-x-2"
            >
              <div className="w-2 h-2 rounded-full bg-pink-300 animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div
                className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-pink-500 animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

