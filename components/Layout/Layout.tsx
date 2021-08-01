import React from 'react'
import styles from './Layout.module.scss'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout: React.FC = (props) => {
  return (
    <div className={styles.Layout}>
      <Header breakpoints={{stickyNavScroll: 50, mobileNav: 700}}/>
      <Content>{props.children}</Content>
      <Footer />
    </div>
  )
}

export default Layout
