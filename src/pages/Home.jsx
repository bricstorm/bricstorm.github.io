import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import TokenSpecs from '../components/TokenSpecs'
import WhyBricstorm from '../components/WhyBricstorm'
import Roadmap from '../components/Roadmap'
import Community from '../components/Community'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-storm-dark">
      <Navigation />
      <main>
        <HeroSection />
        <TokenSpecs />
        <WhyBricstorm />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  )
}