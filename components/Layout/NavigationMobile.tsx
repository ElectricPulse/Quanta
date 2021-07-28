import React from 'react'
import styles from './NavigationDesktop.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoWhite from '../../public/images/logo-white.png'

const Menu: React.FC = () => {
  return (
      <nav className={styles.links}>
        <a>DOMOV</a>
        <a>TESTY</a>
        <a>QUANTA WHITE</a>
        <a>QUANTA BLACK</a>
        <a>QUANTA SMART</a>
        <a>PR SPRÁVY</a>
        <a>O NÁS</a>
      </nav>

  )
}

const NavigationMobile: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <button>
        <FontAwesomeIcon
          className={styles.icon}
          icon={'grip-horizontal'}
        />
      </button>
      <h1 className={styles.logo}>
        <Image
          src={logoWhite}
          alt="quanta"
          width={272}
          height={90}
          layout="responsive"
        />
      </h1>

      <button>
        <FontAwesomeIcon className={styles.icon} icon={'search'} />
      </button>
    </div>
  )
}

export default NavigationMobile
