import React from 'react'
import styles from './Article.module.scss'

import ExternalImage from '../../UI/ExternalImage'

export interface Article {
  imageName: string
  url: string
  title: string
}

interface Props {
  article: Article
}

const Article: React.FC<Props> = ({ article }) => {
  return (
    <a href={article.url} className={styles.article}>
      <div className={styles.details}>
        <h2>{article.title}</h2>
      </div>
      <ExternalImage
        imageName={article.imageName}
        className={styles.image}
        aspectRatio={'3 / 2'}
      />
    </a>
  )
}

export default Article
