import React from 'react'

import styles from './Content.module.scss'

interface Props {
  children: React.ReactNode
}

const Content: React.FC<Props> = (props) => {
  return <main className={styles.content}>{props.children}</main>
}

export default Content
