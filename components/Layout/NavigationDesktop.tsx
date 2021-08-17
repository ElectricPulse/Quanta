import React from 'react'
import styles from './NavigationDesktop.module.scss'
import joinClasses from 'utils/joinClasses'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchPopup from 'components/UI/SearchPopup'

interface Props {
  className?: string
}

const NavigationDesktop: React.FC<Props> = (props) => {
  return (
    <div className={joinClasses(styles.navigation, props.className)}>
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
  )
}

export default NavigationDesktop
