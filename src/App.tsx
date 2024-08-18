import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"
import { Partners } from "./components/Partners"
import { ServiceSectors } from "./components/ServiceSectors"
import { RequestService } from "./components/RequestService"
import { OurStory } from "./components/OurStory"

export function App() {
  return (
    <>
      <Hero />
      <ServiceSectors id="service-sectors" />
      <Partners id="partners" />
      <RequestService />
      <OurStory />
      <Footer />
    </>
  )
}

