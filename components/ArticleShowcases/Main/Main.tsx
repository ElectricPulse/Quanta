import React from 'react'
import styles from './Main.module.scss'

import Article, { Article as ArticleType } from './Article'

interface Props {
  articles: ArticleType[]
}

const Main: React.FC<Props> = (props) => {
  return (
    <section className={styles.grid}>
      <Article size="big" aspectRatio={'3/2'} article={props.articles[0]} />
      <div className={`${styles.subgrid}`}>
        <Article size="small" article={props.articles[1]} />
        <Article size="small" article={props.articles[2]} />
        <Article size="small" article={props.articles[3]} />
        <Article size="small" article={props.articles[4]} />
      </div>
    </section>
  )
}

export default Main
