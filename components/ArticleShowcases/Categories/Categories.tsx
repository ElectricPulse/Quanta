import React from 'react'
import styles from './Categories.module.scss'

import Category from './Category'
import { Props as ArticleType } from './Article'

interface Props {
  categories: { category: string; articles: ArticleType[] }[]
}

const Categories: React.FC<Props> = (props) => {
  return (
    <section className={styles.categories}>
      {props.categories.map(({ category, articles }) => {
        return <Category key={category} name={category} articles={articles} />
      })}
    </section>
  )
}

export default Categories
