import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  fas,
  faPhoneAlt,
  faAt,
  faGripHorizontal,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { fab, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Main from '../components/ArticleShowcases/Main/Main'
import Categories from '../components/ArticleShowcases/Categories/Categories'
import Grid from '../components/ArticleShowcases/Grid/Grid'

library.add(fas, faSearch, faPhoneAlt, faAt, faGripHorizontal, faTimes)
library.add(fab, faTwitter, faFacebook)

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
      <Categories
        categories={Array(3)
          .fill(null)
          .map((_, i: number) => {
            const category = categories[i]

            return { category, articles: createArticles(4) }
          })}
      />
      <Grid articles={createArticles(8)} />
    </>
  )
}

export default Home
