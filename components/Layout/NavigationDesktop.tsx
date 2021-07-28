import React from 'react'
import styles from './NavigationDesktop.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoBlack from '../../public/images/logo-black.png'
const NavigationDesktop: React.FC = () => {
  return (
    <>
      <h1 className={styles.logo}>
        <Image
          src={logoBlack}
          alt="quanta"
          width={272}
          height={90}
          layout="responsive"
        />
      </h1>
      <div className={styles.navigation}>
        <nav className={styles.links}>
          <a>DOMOV</a>
          <a>TESTY</a>
          <a>QUANTA WHITE</a>
          <a>QUANTA BLACK</a>
          <a>QUANTA SMART</a>
          <a>PR SPRÁVY</a>
          <a>O NÁS</a>
        </nav>
        <button>
          <FontAwesomeIcon className={styles['search-icon']} icon={'search'} />
        </button>
      </div>
    </>
  )
}

export default NavigationDesktop
