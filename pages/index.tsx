import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, fas } from '@fortawesome/free-solid-svg-icons'

import MainArticles from '../components/ArticleShowcases/MainArticles/MainArticles'

library.add(fas, faSearch)

const Home: React.FC = () => {
  return (
    <>
      <MainArticles/>
    </>
  )
}

export default Home
