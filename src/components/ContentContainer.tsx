type ContentContainerProps = {} & React.HTMLAttributes<HTMLDivElement>

export function ContentContainer(props: ContentContainerProps) {
  return (
    <div {...props} className={props.className ? `content-container ${props.className}` : "content-container"}>
      {props.children}
    </div>
  )
}
