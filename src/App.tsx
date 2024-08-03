import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"
import { Partners } from "./components/Partners"
import { ServiceSectors } from "./components/ServiceSectors"

export function App() {
  return (
    <>
      <Hero />
      <ServiceSectors id="service-sectors" />
      <Partners />
      <Footer />
    </>
  )
}

