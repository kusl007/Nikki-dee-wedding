import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FamilyHero from "@/components/family-hero"
import FamilyMembers from "@/components/family-members"

export default function FamilyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FamilyHero />
      <FamilyMembers />
      <Footer />
    </main>
  )
}

