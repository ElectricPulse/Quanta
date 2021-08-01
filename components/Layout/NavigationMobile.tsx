import React, { useState } from 'react'
import styles from './NavigationMobile.module.scss'
import joinClasses from 'utils/joinClasses'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoWhite from '../../public/images/logo-white.png'
import SearchPopup from 'components/UI/SearchPopup'

import useToggleState from 'hooks/useToggleState'

interface Props {
  className?: string;
}

const NavigationMobile: React.FC<Props> = (props) => {
  const [menuVis, toggleMenuVis] = useToggleState(false)

  return (
    <>
      <div
        className={`${styles.sidebar} ${
          menuVis ? styles['sidebar--visible'] : styles['sidebar--hidden']
        }`}
      >
        <div className={styles.sidebar__content}>
          <button
            onClick={toggleMenuVis}
            className={`${styles.icon} ${styles['icon__close']}`}
          >
            <FontAwesomeIcon icon={'times'} />
          </button>
          <nav className={styles.links}>
            <a>TESTY</a>
            <a>QUANTA WHITE</a>
            <a>QUANTA BLACK</a>
            <a>QUANTA SMART</a>
            <a>PR SPRÁVY</a>
            <a>O NÁS</a>
          </nav>
        </div>
      </div>

      <div className={joinClasses(styles.navigation, props.className)}>
        <button onClick={toggleMenuVis}>
          <FontAwesomeIcon className={styles.icon} icon={'grip-horizontal'} />
        </button>
        <h1 className={styles.logo}>
          <Image src={logoWhite} layout="responsive" />
        </h1>

        <SearchPopup>
          <FontAwesomeIcon className={styles.icon} icon={'search'} />
        </SearchPopup>
      </div>
    </>
  )
}

export default NavigationMobile
