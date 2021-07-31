import React from 'react'
import styles from './Header.module.scss'

import  NavigationMobile  from './NavigationMobile';
import NavigationDesktop from './NavigationDesktop'

import useMediaQuery from 'hooks/useMediaQuery'

interface Props {
  mobileNavBp: number;
}

const Header: React.FC<Props> = (props) => {
  const smallScreen = useMediaQuery(`${props.mobileNavBp}px`)

  return <header className={styles.header}>
    {smallScreen ? <NavigationMobile/> : <NavigationDesktop/>}
  </header>
}

export default Header
