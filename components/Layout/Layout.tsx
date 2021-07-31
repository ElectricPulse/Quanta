import React from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout: React.FC = (props) => {
  return (
    <>
      <Header mobileNavBp={700} />
      <Content>{props.children}</Content>
      <Footer />
    </>
  )
}

export default Layout
