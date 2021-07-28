import React from 'react'

import Article from './Article'
import styles from './Grid.module.scss'

const articles = [
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title1',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title2',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title3',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title4',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title5',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title6',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title7',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title8',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title9',
  },
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Title10',
  },
]

const Grid: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Novinky z <a href={'https://www.startstop.sk/'}>STARTSTOP.sk</a>
      </h2>
      <div className={styles.grid}>
        {articles.map((article) => {
          return <Article key={article.title} {...article} />
        })}
      </div>
    </section>
  )
}

export default Grid
