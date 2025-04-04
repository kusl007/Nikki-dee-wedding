"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isPassed, setIsPassed] = useState(false)

  useEffect(() => {
    // Set wedding date - April 13th of the current year
    const currentYear = new Date().getFullYear()
    const weddingDate = new Date(`April 13, ${currentYear} 00:00:00`)

    // If the date has already passed this year, set it to next year
    if (weddingDate.getTime() < Date.now()) {
      weddingDate.setFullYear(currentYear + 1)
    }

    const timer = setInterval(() => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setIsPassed(true)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="py-4 bg-white/80 backdrop-blur-sm w-full">
      <div className="container mx-auto px-8">
        <div className="text-center">
          {isPassed ? (
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-serif text-pink-500">
              We got married! Thank you for being part of our special day.
            </motion.h2>
          ) : (
            <>
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-serif mb-2"
              >
                Counting down to our special day
              </motion.h3>
              <div className="flex justify-center items-center space-x-4 md:space-x-8">
                {timeUnits.map((unit) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-pink-50 rounded-lg border border-pink-200 shadow-sm">
                      <span className="text-2xl md:text-3xl font-serif text-pink-500">
                        {unit.value < 10 ? `0${unit.value}` : unit.value}
                      </span>
                    </div>
                    <span className="text-xs mt-1 text-gray-600 uppercase tracking-wider">{unit.label}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

