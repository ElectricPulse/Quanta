import React from 'react'
import ExternalImage from './../../UI/ExternalImage'
import styles from './Article.module.scss'

export interface Article {
  title: string
  url: string
  imageName: string
}

const Article: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div>
      <a href={article.url}>
        <ExternalImage aspectRatio="1 / 1" imageName={article.imageName} />

        <h3>{article.title}</h3>
      </a>
    </div>
  )
}

export default Article
