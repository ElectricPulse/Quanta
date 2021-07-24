import React from 'react'
import styles from './ArticleGrid.module.scss'

interface Props {
  cols: number
  rows: number
  children: React.ReactNode
}

const ArticleGrid: React.FC<Props> = (props) => {
  const style = {
    gridTemplateColumns: ' 1fr'.repeat(props.cols),
    gridTemplateRows:' 1fr'.repeat(props.rows),
  }

  return (
    <div className={styles['article-grid']} style={style}>
      {props.children}
    </div>
  )
}

export default ArticleGrid
