import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  fas,
  faPhoneAlt,
  faAt,
  faGripHorizontal,
} from '@fortawesome/free-solid-svg-icons'
import { fab, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Main from '../components/ArticleShowcases/Main/Main'
import Categories from '../components/ArticleShowcases/Categories/Categories'
import Grid from '../components/ArticleShowcases/Grid/Grid'

library.add(fas, faSearch, faPhoneAlt, faAt, faGripHorizontal)
library.add(fab, faTwitter, faFacebook)

const article = {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title',
}

const Home: React.FC = () => {
  return (
    <>
      <Main articles={Array(5).fill(article)} />
      <Categories />
      <Grid />
    </>
  )
}

export default Home
