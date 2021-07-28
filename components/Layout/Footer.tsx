import React from 'react'

import styles from './Footer.module.scss'
import Image from 'next/image'
import logoWhite from '../../public/images/logo-white.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hightlighted from './../UI/Highlighted';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.details}>
        <a href="https://quanta.sk" className={styles.logo}>
          <Image src={logoWhite}></Image>
        </a>
        <p className={styles['details__text']}>
          Quanta mapuje najnovšie trendy v čiernej a bielej technike, prináša
          zaujímavosti o internete vecí, smart riešeniach, testuje nové produkty
          a poradí vám aj pri ich výbere.
        </p>
        <ul className={styles['details__contact-links']}>
          <li>
            <a href="tel:+421950591531">
              <FontAwesomeIcon className={styles.icon} icon="phone-alt" />
              tel. +421 950 591 531
            </a>
          </li>
          <li>
            <a href="mailto: quanta@quanta.sk">
              <FontAwesomeIcon className={styles.icon} icon="at" />
              quanta@quanta.sk
            </a>
          </li>
          <li>
            <a href="https://twitter.com/quantamagazin">
              <FontAwesomeIcon
                className={styles.icon}
                icon={['fab', 'twitter']}
              />
              @quantamagazin
            </a>
          </li>
          <li>
            <a href="https://twitter.com/quantamagazin">
              <FontAwesomeIcon
                className={styles.icon}
                icon={['fab', 'facebook']}
              />
              @quantamagazin
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.categories}>
        <h4 className={styles['categories__title']}><Hightlighted inverse >POPULÁRNE KATEGÓRIE</Hightlighted></h4>
        <ul className={styles['categories__links']}>
          <li>
            <a href="https://quanta.sk">
              <span>Quanta BLACK</span>
              <span>335</span>
            </a>
          </li>
          <li>
            <a href="https://quanta.sk">
              <span>Quanta SMART</span>
              <span>124</span>
            </a>
          </li>
          <li>
            <a href="https://quanta.sk">
              <span>Quanta WHITE</span>
              <span>43</span>
            </a>
          </li>
          <li>
            <a href="https://quanta.sk">
              <span>Mobily</span>
              <span>27</span>
            </a>
          </li>
          <li>
            <a href="https://quanta.sk">
              <span>Počítače</span>
              <span>68</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
