import React from 'react'
import styles from './NavigationDesktop.module.scss'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoBlack from '../../public/images/logo-black.png'
import SearchPopup from 'components/UI/SearchPopup'

const NavigationDesktop: React.FC = () => {
  return (
    <>
      <h1 className={styles.logo}>
        <Image src={logoBlack} layout="responsive" />
      </h1>
      <div className={styles.navigation}>
        <nav className={styles.links}>
          <a>TESTY</a>
          <a>
            <span>QUANTA</span> WHITE
          </a>
          <a>
            <span>QUANTA</span> BLACK
          </a>
          <a>
            <span>QUANTA</span> SMART
          </a>
          <a>PR SPRÁVY</a>
          <a>O NÁS</a>
        </nav>
        <SearchPopup>
          <FontAwesomeIcon className={styles.icon} icon={'search'} />
        </SearchPopup>
      </div>
    </>
  )
}

export default NavigationDesktop
