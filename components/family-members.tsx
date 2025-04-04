"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Sample data - replace with actual wedding attendees
const brideFamily = [
  {
    id: 1,
    name: "Sarah Johnson",
    relation: "Mother of the Bride",
    photo: "/images/family/bride-mother.jpg",
    description: "Sarah has been the bride's rock throughout her life, offering wisdom and unconditional love.",
  },
  {
    id: 2,
    name: "Robert Johnson",
    relation: "Father of the Bride",
    photo: "/images/family/bride-father.jpg",
    description: "Robert couldn't be prouder to walk his daughter down the aisle on her special day.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    relation: "Sister of the Bride",
    photo: "/images/family/bride-sister.jpg",
    description: "As maid of honor, Emily has been by her sister's side through every wedding planning moment.",
  },
  {
    id: 4,
    name: "Michael Johnson",
    relation: "Brother of the Bride",
    photo: "/images/family/bride-brother.jpg",
    description: "Michael shares a special bond with his sister and couldn't be happier for her new journey.",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    relation: "Best Friend",
    photo: "/images/family/bride-friend.jpg",
    description: "Jessica and the bride have been inseparable since college, sharing countless memories together.",
  },
  {
    id: 6,
    name: "David & Martha Wilson",
    relation: "Grandparents",
    photo: "/images/family/bride-grandparents.jpg",
    description: "With 55 years of marriage, they've been an inspiration for the couple's relationship.",
  },
]

const groomFamily = [
  {
    id: 1,
    name: "Patricia Smith",
    relation: "Mother of the Groom",
    photo: "/images/family/groom-mother.jpg",
    description: "Patricia welcomed the bride into the family with open arms and has been incredibly supportive.",
  },
  {
    id: 2,
    name: "James Smith",
    relation: "Father of the Groom",
    photo: "/images/family/groom-father.jpg",
    description: "James taught his son everything about respect and love, values he brings to his marriage.",
  },
  {
    id: 3,
    name: "Thomas Smith",
    relation: "Brother of the Groom",
    photo: "/images/family/groom-brother.jpg",
    description: "As best man, Thomas has stood by his brother through thick and thin.",
  },
  {
    id: 4,
    name: "Daniel Roberts",
    relation: "Childhood Friend",
    photo: "/images/family/groom-friend.jpg",
    description: "Daniel and the groom have been friends since elementary school, sharing a lifetime of adventures.",
  },
  {
    id: 5,
    name: "Elizabeth & John Smith",
    relation: "Grandparents",
    photo: "/images/family/groom-grandparents.jpg",
    description: "Their love story continues to inspire the family after 60 wonderful years together.",
  },
  {
    id: 6,
    name: "Sophia Smith",
    relation: "Cousin",
    photo: "/images/family/groom-cousin.jpg",
    description: "Sophia and the groom grew up together and share countless childhood memories.",
  },
]

export default function FamilyMembers() {
  const [activeTab, setActiveTab] = useState("bride") // 'bride' or 'groom'

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
          <motion.h2 variants={fadeIn} className="text-3xl font-serif mb-4">
            The People Who Made Our Day Special
          </motion.h2>
          <motion.div variants={fadeIn} className="w-24 h-0.5 bg-pink-300 mx-auto mb-6" />
          <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
            We're blessed to have such wonderful family and friends who joined us to celebrate our love. Here are the
            special people who attended our wedding.
          </motion.p>
        </motion.div>

        {/* Custom tabs using only Tailwind CSS */}
        <div className="flex space-x-1 rounded-xl bg-pink-50 p-1 max-w-md mx-auto mb-12">
          <button
            onClick={() => setActiveTab("bride")}
            className={`w-full rounded-lg py-3 text-sm font-medium leading-5 focus:outline-none ${
              activeTab === "bride"
                ? "bg-white shadow text-pink-600"
                : "text-gray-600 hover:bg-white/[0.12] hover:text-pink-500"
            }`}
          >
            Bride's Side
          </button>
          <button
            onClick={() => setActiveTab("groom")}
            className={`w-full rounded-lg py-3 text-sm font-medium leading-5 focus:outline-none ${
              activeTab === "groom"
                ? "bg-white shadow text-pink-600"
                : "text-gray-600 hover:bg-white/[0.12] hover:text-pink-500"
            }`}
          >
            Groom's Side
          </button>
        </div>

        {/* Tab content */}
        <div className="mt-8">
          {activeTab === "bride" && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {brideFamily.map((person) => (
                <FamilyMemberCard key={person.id} person={person} />
              ))}
            </motion.div>
          )}

          {activeTab === "groom" && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {groomFamily.map((person) => (
                <FamilyMemberCard key={person.id} person={person} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

function FamilyMemberCard({ person }: { person: any }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-72">
        <Image
          src={person.photo || "/placeholder.svg?height=400&width=300"}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif mb-1">{person.name}</h3>
        <p className="text-pink-500 text-sm mb-3">{person.relation}</p>
        <p className="text-gray-600 text-sm">{person.description}</p>
      </div>
    </motion.div>
  )
}

