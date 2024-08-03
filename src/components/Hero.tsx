import { Link as ScrollLink } from "react-scroll"
import { ContentContainer } from "./ContentContainer"

import BgHero from "../assets/bg-hero.png"
import LogoImg from "../assets/logo-horizontal.png"

export function Hero() {
  return (
    <div>
      <header>
        <ContentContainer className="header-container">
          <img src={LogoImg} alt="" />

          <nav>
            <ScrollLink to="service-sectors" smooth>Setores</ScrollLink>
            <button>Orçamento</button>
          </nav>
        </ContentContainer>
      </header>
      <main>
        <img src={BgHero} alt="" />
        <ContentContainer className="hero-container">
          {/* <img src="" alt="" /> */}
          <div>
            <h1>Locação de geradores</h1>
            <p>Precisa de energia em seu estabelecimento, sua festa ou é uma emergência?</p>
            <button>Orçamento</button>
          </div>
        </ContentContainer>
      </main>
    </div>
  )
}