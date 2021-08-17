import React from 'react'
import ExternalImage from '../../UI/ExternalImage'

import styles from './Article.module.scss'

export interface Props {
  title: string
  url: string
  imageName: string
}

const Article: React.FC<Props> = ({ title, imageName, url }) => {
  return (
    <li>
      <a className={styles.article} href={url}>
        <ExternalImage aspectRatio={'3 / 2'} imageName={imageName} />
        <h3>{title}</h3>
      </a>
    </li>
  )
}

export default Article
