type ContentContainerProps = {
  children: React.ReactNode
}

export function ContentContainer(props: ContentContainerProps) {
  return (
    <div className="teste">
      {props.children}
    </div>
  )
}
