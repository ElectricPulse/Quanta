import React from 'react'
import styles from './Main.module.scss'

import Article, { Article as ArticleType } from './Article'
import split from 'utils/split'

interface Props {
  articles: ArticleType[]
}

const Main: React.FC<Props> = ({ articles }) => {
  const articleChunks = split<ArticleType>(articles, 2)
  return (
    <section className={styles.section}>
      {articleChunks.map((articleChunk) => {
          <div className={styles.column}>
              {articleChunk.map((article) => {
                  <Article article={article}/>
              })}
          </div>
      })}
    </section>
  )
}

export default Main