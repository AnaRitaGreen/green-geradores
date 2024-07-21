type ContentContainerProps = {
  children: React.ReactNode
}

export function ContentContainer(props: ContentContainerProps) {
  return (
    <div className="content-container">
      {props.children}
    </div>
  )
}
