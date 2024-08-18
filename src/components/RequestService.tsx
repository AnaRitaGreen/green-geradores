import { FaWhatsapp } from "react-icons/fa";
import { ContentContainer } from "./ContentContainer";

type RequestServiceProps = {} & React.HTMLAttributes<HTMLDivElement>

export function RequestService(props: RequestServiceProps) {
  return (
    <div {...props} className="request-service">
      <ContentContainer className="request-service-contact">
        <strong>Solicite já seu atendimento</strong>
        <div>
          <FaWhatsapp size={29} />
          (17) 39999999
        </div>
      </ContentContainer>
    </div>
  )
}