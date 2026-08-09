import { Dictionary } from '@/i18n/types'
import ContactSection from './ContactSection'
import CottageSection from './CottageSection'
import Footer from './Footer'
import GallerySection from './GallerySection'
import Hero from './Hero'
import Navigation from './Navigation'
import PricingSection from './PricingSection'
import StorySection from './StorySection'
import StructuredData from './StructuredData'
import SurroundingsSection from './SurroundingsSection'

export default function LandingPage({ dict }: { dict: Dictionary }) {
  return (
    <>
      <StructuredData dict={dict} />
      <Navigation dict={dict} />
      <main>
        <Hero dict={dict} />
        <CottageSection dict={dict} />
        <StorySection dict={dict} />
        <GallerySection dict={dict} />
        <SurroundingsSection dict={dict} />
        <PricingSection dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  )
}
