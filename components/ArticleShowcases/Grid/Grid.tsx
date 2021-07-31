import React from 'react'
import styles from './Grid.module.scss'

import Article, { Article as ArticleType } from './Article'
import split from 'utils/split'

interface Props {
  articles: ArticleType[]
}

const Grid: React.FC<Props> = (props) => {
  const articleChunks = split<ArticleType>(props.articles, 4)

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Novinky z <a href={'https://www.startstop.sk/'}>STARTSTOP.sk</a>
      </h2>
      <div className={styles.articles}>
        {articleChunks.map((articleChunk) => {
          return (
            <div key={Math.random()}>
              {articleChunk.map((article) => {
                return <Article key={article.title} article={article} />
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Grid
