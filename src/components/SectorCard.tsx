import { IconType } from "react-icons"

type SectorCardProps = {
  title: string
  icon: IconType
}

export function SectorCard(props: SectorCardProps){
  const Icon = props.icon

  return(
    <div className="sector-card"> 
      <Icon size={32} />
      <strong>{props.title}</strong>
    </div>
  )
}
