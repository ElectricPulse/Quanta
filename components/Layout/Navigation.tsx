import React from 'react'

import styles from './Navigation.module.scss'

const Navigation: React.FC = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <a>DOMOV</a>
        <a>TESTY</a>
        <a>QUANTA WHITE</a>
        <a>QUANTA BLACK</a>
        <a>QUANTA SMART</a>
        <a>PR SPRÁVY</a>
        <a>O NÁS</a>
      </nav>
    </header>
  )
}

export default Navigation
