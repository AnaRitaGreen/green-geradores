import { Link as ScrollLink } from "react-scroll"
import { FiMenu } from "react-icons/fi"

import { Drawer } from "./Drawer"
import { ContentContainer } from "./ContentContainer"

import BgHero from "../assets/bg-hero.png"
import LogoImg from "../assets/logo-horizontal.png"
import { useState } from "react"

export type NavItem = {
  name: string
  to: string
}

const navItems: NavItem[] = [
  { name: "Setores", to: "service-sectors" },
  { name: "Parceiros", to: "partners" }
]

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleChangeIsMenuOpen() {
    setIsMenuOpen(oldState => !oldState)
  }

  return (
    <div>
      <header>
        <ContentContainer className="header-container">
          <img src={LogoImg} alt="" />


          <nav>
            {navItems.map((navItem) => (
              <ScrollLink to={navItem.to} smooth>{navItem.name}</ScrollLink>
            ))}

            <button>Orçamento</button>
          </nav>

          <div className="menu-hamburger">
            <FiMenu onClick={handleChangeIsMenuOpen} />
          </div>
        </ContentContainer>
        {isMenuOpen && <Drawer changeIsMenuOpen={handleChangeIsMenuOpen} navItems={navItems} />}
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