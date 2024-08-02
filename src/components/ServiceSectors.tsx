import { PiSirenFill } from "react-icons/pi";
import { FaCashRegister, FaGlassCheers, FaShoppingCart, FaTractor } from "react-icons/fa";

import { SectorCard } from "./SectorCard";
import { ContentContainer } from "./ContentContainer";

export function ServiceSectors() {
  return (
    <div className="service-sectors">
      <ContentContainer>
        <h1>Alguns setores que atendemos</h1>
        <div className="sectors-cards-container">
          <SectorCard title="Agronegócio" icon={FaTractor} />
          <SectorCard title="Eventos" icon={FaGlassCheers} />
          <SectorCard title="Mercados" icon={FaShoppingCart} />
          <SectorCard title="Comércios" icon={FaCashRegister} />
          <SectorCard title="Emergências" icon={PiSirenFill} />
        </div>
      </ContentContainer>
    </div>
  )
}