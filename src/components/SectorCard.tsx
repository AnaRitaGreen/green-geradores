import { HTMLAttributes } from "react"
import { IconType } from "react-icons"

type SectorCardProps = {
  title: string
  icon: IconType
} & HTMLAttributes<HTMLDivElement>

export function SectorCard(props: SectorCardProps) {
  const Icon = props.icon

  return (
    <div {...props} className="sector-card">
      <Icon size={32} />
      <strong>{props.title}</strong>
    </div>
  )
}
