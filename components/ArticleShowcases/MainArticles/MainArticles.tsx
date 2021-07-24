import React from 'react'

import styles from './MainArticles.module.scss'

import Article from '../../ArticlePreview/ArticlePreview'

import ArticleGrid from '../ArticleGrid'

const articles = [
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title',
  },
]

const MainArticles: React.FC = () => {
  return (
    <section className={styles['main-articles']}>
      <ArticleGrid cols={2} rows={1}>
        <Article article={articles[0]} />
        <ArticleGrid cols={2} rows={2}>
          <Article article={articles[1]} />
          <Article article={articles[2]} />
          <Article article={articles[3]} />
          <Article article={articles[4]} />
        </ArticleGrid>
      </ArticleGrid>
    </section>
  )
}

{
}

export default MainArticles
