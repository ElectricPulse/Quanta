import React from 'react'
import Article, { Props as ArticleType } from './Article'
import styles from './Category.module.scss'
import Hightlighted from './../../UI/Highlighted'

interface Props {
  className?: string
  articles: ArticleType[]
  name: string
}

const Category: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.category} ${props.className && props.className}`}>
      <h4 className={styles.title}>
        <Hightlighted>{props.name}</Hightlighted>
      </h4>
      <ul className={`${props.className} ${styles.list}`}>
        {props.articles.map((article) => {
          return <Article key={article.title} {...article} />
        })}
      </ul>
    </div>
  )
}
export default Category
