import React from 'react'
import Image from 'next/image'
import styles from './ArticlePreview.module.scss'

interface Props {
  article: {
    imageName: string
    url: string
    title: string
  }
}

import { buildUrl } from 'cloudinary-build-url'

const ArticlePreview: React.FC<Props> = (props) => {
  const { title, imageName, url } = props.article

  const imageUrl = buildUrl(imageName, {
    cloud: {
      cloudName: 'dpki8ezpl',
    },
  })
  return (
    <div className={styles.article}>
      <a href={url}>
        <h2>{title}</h2>
      </a>
      <Image className={styles.image} layout="fill" src={imageUrl} />
    </div>
  )
}

export default ArticlePreview
