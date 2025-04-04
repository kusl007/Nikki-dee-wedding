"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function WeddingDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
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
              <h2 className="text-3xl font-serif mb-6">KRISTY &amp; KEN</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When Kristy &amp; Ken first met, they knew they had found something special. Their journey began with a
                chance encounter that blossomed into a beautiful relationship filled with love, laughter, and
                unforgettable moments.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                After five years of dating, Ken proposed during a romantic weekend getaway to the mountains. The
                breathtaking views provided the perfect backdrop for this milestone in their love story.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Join us on April 13th</strong> as we take the next step and begin our forever together. We would
                be honored to have you join us in celebrating this special occasion.
              </p>

              <button
                onClick={openModal}
                className="inline-block border border-gray-200 px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Read More
              </button>
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

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal header */}
              <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-2xl font-serif">Our Love Story</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
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
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <Image
                      src="/images/couple-2.jpg"
                      alt="Kristy and Ken"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-4">How We Met</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      It was a crisp autumn evening at a mutual friend&rsquo;s dinner party when Kristy and Ken first
                      locked eyes across the room. Ken, immediately captivated by Kristy&rsquo;s warm smile, found an
                      excuse to strike up a conversation about their shared love for classic films.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      What started as a casual conversation turned into hours of talking and laughing, discovering their
                      many shared interests and complementary differences. By the end of the night, they had exchanged
                      numbers and Ken promised to call for a proper date.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      True to his word, Ken called the very next day, and they arranged to meet at a quaint café
                      downtown. That first date lasted nearly six hours as they lost track of time, sharing stories and
                      dreams for the future.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-serif mb-4">Our Journey Together</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Over the next five years, Kristy and Ken built a relationship founded on mutual respect, unwavering
                    support, and a deep understanding of one another. They traveled to twelve countries together,
                    adopted their beloved golden retriever Max, and moved into their first home.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Through life&rsquo;s ups and downs, they&rsquo;ve been each other&rsquo;s constant. When Ken was
                    offered a job across the country, Kristy supported his dream and they navigated the challenges of a
                    long-distance relationship for eight months. When Kristy&rsquo;s mother fell ill, Ken was by her
                    side every step of the way, showing the depth of his commitment not just to her, but to her family
                    as well.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-serif mb-4">The Proposal</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      After five wonderful years together, Ken planned a weekend getaway to the mountains where they had
                      shared their first vacation. Under the guise of a simple hiking trip, he led Kristy to a
                      breathtaking viewpoint overlooking the valley.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      As the sun began to set, painting the sky in brilliant hues of pink and gold, Ken got down on one
                      knee. With tears in his eyes, he spoke from the heart about his love for Kristy and his desire to
                      spend the rest of his life by her side.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Kristy, overcome with emotion, said &quot;yes&quot; without hesitation. They celebrated with
                      champagne and a private dinner under the stars, arranged by Ken with the help of their closest
                      friends.
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/images/proposal.jpg"
                      alt="The Proposal"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-serif mb-4">Wedding Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h5 className="font-serif text-lg mb-2">Ceremony</h5>
                      <p className="text-gray-600 mb-2">April 13th, 2025 at 2:00 PM</p>
                      <p className="text-gray-600 mb-2">St. Mary&rsquo;s Cathedral</p>
                      <p className="text-gray-600">123 Church Street, Anytown</p>
                    </div>
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h5 className="font-serif text-lg mb-2">Reception</h5>
                      <p className="text-gray-600 mb-2">April 13th, 2025 at 5:00 PM</p>
                      <p className="text-gray-600 mb-2">Grand Ballroom, Riverside Hotel</p>
                      <p className="text-gray-600">456 River Road, Anytown</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 italic">
                    &quot;We can&rsquo;t wait to celebrate our love with all of our favorite people in the world. Your
                    presence on our special day would mean everything to us.&quot;
                  </p>
                  <p className="mt-4 text-gray-600 font-semibold">— Kristy &amp; Ken</p>
                </div>
              </div>

              {/* Modal footer */}
              <div className="border-t border-gray-100 px-6 py-4 flex justify-end sticky bottom-0 bg-white">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition-colors text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
