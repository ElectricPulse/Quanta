import React from 'react'
import ExternalImage from './../../UI/ExternalImage'
import styles from './Article.module.scss'

export interface Props {
  title: string
  url: string
  imageName: string
}

const Article: React.FC<Props> = ({ title, url, imageName }) => {
  return (
    <div>
      <a href={url}>
        <div className={styles['image-container']}>
          <ExternalImage aspectRatio='1 / 1' imageName={imageName} />
        </div>

        <h3>{title}</h3>
      </a>
    </div>
  )
}

export default Article
