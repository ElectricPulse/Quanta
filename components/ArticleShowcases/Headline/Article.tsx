import React from 'react'
import styles from './Article.module.scss'

import ExternalImage from '../../UI/ExternalImage'

export interface Article {
  imageName: string
  url: string
  title: string
}

const Article: React.FC<{
  article: Article
  aspectRatio?: string
  size: 'big' | 'small'
}> = ({ aspectRatio, article, size }) => {
  let ArticleTitle: keyof JSX.IntrinsicElements;

  switch (size) {
    case 'big':
      ArticleTitle = 'h2' 
      break
    case 'small':
      ArticleTitle = 'h3'
      break
  }

  return (
    <a href={article.url} className={styles.article}>
      <div className={styles.details}>
        <ArticleTitle>{article.title}</ArticleTitle>
      </div>
      <ExternalImage
        imageName={article.imageName}
        className={styles.image}
        aspectRatio={aspectRatio && aspectRatio}
      />
    </a>
  )
}

export default Article
