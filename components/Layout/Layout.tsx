import React from 'react'
import styles from './Layout.module.scss'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  fas,
  faPhoneAlt,
  faAt,
  faGripHorizontal,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { fab, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faSearch, faPhoneAlt, faAt, faGripHorizontal, faTimes)
library.add(fab, faTwitter, faFacebook)

const Layout: React.FC = (props) => {
  return (
    <div className={styles.layout}>
      <Header breakpoints={{ mobileNav: 700 }} />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  )
}

export default Layout
