import React, { ReactNode } from 'react'

import Headline from '../components/ArticleShowcases/Headline/Headline'
import Categories from '../components/ArticleShowcases/Categories/Categories'
import Grid from '../components/ArticleShowcases/Grid/Grid'
import deepMap from './../utils/deepMap'

const array = [
  [
    ['hey 2', 'this', 'should'],
    ['is', 'that', 'working'],
    ['yes', 'it', 'is'],
  ],
  [
    ['hey 1', 'this', 'should'],
    ['is', 'that', 'working'],
    ['yes', 'it', 'is'],
  ],
]

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


      <Headline articles={createArticles(5)} />
      <Categories
        categories={Array(3)
          .fill(null)
          .map((_, i: number) => {
            const category = categories[i]

            return { category, articles: createArticles(4) }
          })}
      />
      <Grid articles={createArticles(8)}>
        
        Novinky z <a href={'https://www.startstop.sk/'}>STARTSTOP.sk</a>
      </Grid>
    </>
  )
}

export default Home
