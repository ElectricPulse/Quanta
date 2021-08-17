import React from 'react'
import styles from './category.module.scss'

import Main from 'components/ArticleShowcases/Headline/Headline'
import Category from 'components/ArticleShowcases/Categories/Category'

class Article {
  imageName = 'maxresdefault-15_fk7kka'
  url = 'https://www.google.sk/'
  title: string

  constructor(i: number) {
    this.title = `Title${i}`
  }
}

const categories = ['QUANTA Black', 'QUANTA Smart', 'QUANTA White']

const createArticles = (length: number) => {
  return Array(length)
    .fill(null)
    .map((_, i) => {
      return new Article(i)
    })
}

const Home: React.FC = () => {
  return (
    <>
      <Main articles={createArticles(5)} />
      <section className={styles['articles-sidebar']}>
        <Category
          articles={createArticles(5)}
          name={'Články z kategórie QUANTA White'}
        />
        <Category
          articles={createArticles(5)}
          name={'Články z kategórie QUANTA White'}
        />
      </section>
    </>
  )
}

export default Home
