"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Sample video data - replace with your actual videos
const videos = [
  {
    id: 1,
    title: "Our Engagement",
    thumbnail: "/images/video-thumb-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=AR6eQCi_Me4&t=321s&ab_channel=ChaiaurCode",
    description: "Highlights from our beautiful engagement day",
  },
  {
    id: 2,
    title: "Pre-Wedding Shoot",
    thumbnail: "/images/video-thumb-2.jpg",
    videoUrl: "/videos/pre-wedding.mp4",
    description: "Magical moments from our pre-wedding photoshoot",
  },
  {
    id: 3,
    title: "Our Journey",
    thumbnail: "/images/video-thumb-3.jpg",
    videoUrl: "/videos/journey.mp4",
    description: "A look back at our relationship milestones",
  },
]

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const handleVideoClick = (id: number) => {
    setActiveVideo(id)
    setIsPlaying(true)

    // Give time for the modal to render before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 100)
  }

  const closeVideo = () => {
    setActiveVideo(null)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-serif mb-4">
            Our Special Moments
          </motion.h2>
          <motion.div variants={fadeIn} className="w-24 h-0.5 bg-pink-300 mx-auto mb-6" />
          <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
            Relive some of our most cherished memories through these videos that capture the essence of our love story.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={fadeIn}
              className="group cursor-pointer"
              onClick={() => handleVideoClick(video.id)}
            >
              <div className="relative overflow-hidden rounded-sm shadow-md">
                <div className="aspect-video bg-gray-200 relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-500 ml-1"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-serif mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="relative">
              <video
                ref={videoRef}
                src={videos.find((v) => v.id === activeVideo)?.videoUrl}
                className="w-full rounded-sm"
                controls={false}
                onEnded={() => setIsPlaying(false)}
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                <button
                  onClick={togglePlayPause}
                  className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-500"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-500 ml-0.5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

