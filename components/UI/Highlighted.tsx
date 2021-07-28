import React from 'react'

import styles from './Highlighted.module.scss'
interface Props {
  inverse?: true
  children: React.ReactNode
}

const Hightlighted: React.FC<Props> = (props) => {
  return (
    <mark className={props.inverse ? styles.inverse : styles.normal}>
      {props.children}
    </mark>
  )
}

export default Hightlighted
