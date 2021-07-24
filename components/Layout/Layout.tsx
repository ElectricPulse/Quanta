import React from 'react'

import Navigation from './Header'
import Content from './Content'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Navigation />
      <Content>{props.children}</Content>
      <Footer />
    </>
  )
}

export default Layout
