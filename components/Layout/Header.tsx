import React from 'react'

import styles from './Header.module.scss'

import NavigationDesktop from './NavigationDesktop'
import useMediaQuery from 'hooks/useMediaQuery'

import  NavigationMobile  from './NavigationMobile';









const Header: React.FC = () => {
  const smallScreen = useMediaQuery('700px')

  return <header className={styles.header}>
    {smallScreen ? <NavigationMobile/> : <NavigationDesktop/>}
  </header>
}

export default Header
