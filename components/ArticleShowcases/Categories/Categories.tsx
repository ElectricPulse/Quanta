import React from 'react'
import styles from './Categories.module.scss'

import Category from './Category'

const articles = [
  {
    imageName: 'maxresdefault-15_fk7kka',
    url: 'https://www.google.sk/',
    title: 'Preco ceny telefonov stale neustupaju',
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
    title: 'Novy rychlotest na koronavirus od spolocnosti Bosch prinase spolahilve vysledky uz za 39 minut joj to je rychlo wow strasne dlhe je toto'
  },
]

const Categories: React.FC = () => {
  return (
    <section className={styles.categories}>
      <Category name={'Quanta BLACK'} articles={articles} />
      <Category name={'Quanta WHITE'}  articles={articles} />
      <Category name={'Quanta SMART'}  articles={articles} />
    </section>
  )
}

export default Categories
