import React from 'react'
import { buildUrl } from 'cloudinary-build-url'
import Image from 'next/image'
import styles from './ExternalImage.module.scss'
import joinClasses from './../../utils/joinClasses';

type Props = {
  imageName: string
  className?: string
  aspectRatio?: string;
}

const ExternalImage: React.FC<Props> = (props) => {
  const imageUrl = buildUrl(props.imageName, {
    cloud: {
      cloudName: 'dpki8ezpl',
    },
  })

  return (
    <div className={styles['image-container']} style={{aspectRatio: props.aspectRatio}}>
      <Image
        src={imageUrl}
        layout="fill"
        className={joinClasses(props.className, styles.image)}
      />
    </div>
  )
}

export default ExternalImage
