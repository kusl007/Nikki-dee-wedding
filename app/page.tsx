import HeroSlider from "@/components/hero-slider"
import OurStory from "@/components/our-story"
import WeddingDetails from "@/components/wedding-details"
import VideoGallery from "@/components/video-gallery"
import Portfolio from "@/components/portfolio"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
        <CountdownTimer />
      <Portfolio />
      <WeddingDetails />
      <OurStory />
      <VideoGallery />
      <Footer />
    </main>
  )
}

