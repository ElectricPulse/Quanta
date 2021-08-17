import React from 'react'
import styles from './Header.module.scss'

import Image from 'next/image'
import logoBlack from '../../public/images/logo-black.png'
import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'

import useMediaQuery from 'hooks/useMediaQuery'
import useScroll from 'hooks/useScroll'

interface Props {
  breakpoints: {
    mobileNav: number
  }
}

const Mobile: React.FC = () => {
  return (
    <>
      <NavigationMobile className={styles.navigation} />
    </>
  )
}

const Desktop: React.FC = () => {
  return (
    <>
      <h1 className={styles['desktop__logo']}>
        <Image src={logoBlack} layout="responsive" />
      </h1>
      <NavigationDesktop className={styles.navigation} />
    </>
  )
}

const Header: React.FC<Props> = ({ breakpoints }) => {
  const smallScreen = useMediaQuery(breakpoints.mobileNav + 'px')

  return <>{smallScreen ? <Mobile /> : <Desktop />}</>
}

export default Header
