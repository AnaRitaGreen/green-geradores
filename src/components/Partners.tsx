import GremioNovorizontinoImg from "../assets/gremio-logo.png"
import UsinaEstivaImg from "../assets/usina-estiva-logo.png"
import UsinaSantaIsabelImg from "../assets/grupo-santa-isabel-logo.png"
import EnergisaImg from "../assets/grupo-energisa-logo.png"
import SabespImg from "../assets/sabesp.png"

import { ContentContainer } from "./ContentContainer"

type PartnersProps = {} & React.HTMLAttributes<HTMLDivElement>

export function Partners(props: PartnersProps) {
  return (
    <div {...props} className="partners">
      <ContentContainer>
        <h1>Parceiros</h1>
        <div className="partners-container">
          <img src={GremioNovorizontinoImg} alt="" />
          <img src={UsinaEstivaImg} alt="" />
          <img src={SabespImg} alt="" />
          <img src={UsinaSantaIsabelImg} alt="" />
          <img src={EnergisaImg} alt="" />
        </div>
      </ContentContainer>
    </div>
  )
}