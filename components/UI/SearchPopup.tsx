import React, { useState } from 'react'
import styles from './SearchPopup.module.scss'

import { useDetectClickOutside } from 'react-detect-click-outside'
import useToggleState from './../../hooks/useToggleState'

const SearchPopup: React.FC = (props) => {
  const [searchVis, toggleSearchVis, setSearchVis] = useToggleState(false)
  const searchRef = useDetectClickOutside({ onTriggered: setSearchVis.bind(null, false) })

  return (
    <>
      <div ref={searchRef}>
        <button onClick={toggleSearchVis}>{props.children}</button>
        {searchVis && (
          <div className={styles.search}>
            <input type="text" />
            <span>Vyhľadávať</span>
          </div>
        )}
      </div>
    </>
  )
}

export default SearchPopup
