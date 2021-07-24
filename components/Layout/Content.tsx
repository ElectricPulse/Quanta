import React from 'react'



interface Props {
  children: React.ReactNode
}

const Content: React.FC<Props> = (props) => {
  return <main>{props.children}</main>
}
