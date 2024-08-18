import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"
import { LiaPhoneSolid } from "react-icons/lia"

import LogoImg from "../assets/green-geradores-logo.png"

import { ContentContainer } from "./ContentContainer"

export function Footer() {
  return (
    <footer>
      <div className="footer-contact-container">
        <ContentContainer className="footer-contact-container-content">
          <div className="footer-contacts-container">
            <div><FaWhatsapp /> 17999459999</div>
            <div><FaWhatsapp /> 17999459999</div>
            <div><FaWhatsapp /> 17999459999</div>
            <div><LiaPhoneSolid /> 17 9994-9999</div>
            <div><TfiEmail /> green@gmail.com</div>
          </div>

          <img src={LogoImg} alt="" />
        </ContentContainer>
      </div>
      <ContentContainer>
        <div className="footer-social-media-container">
          <span>Todos os direitos reservados - Green Geradores</span>
          <div className="footer-social-media-icons-container">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </ContentContainer>
    </footer>
  )
}
