import React from 'react'

import Navigation from './Navigation'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
