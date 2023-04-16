import React from 'react'
import styles from './styles.module.css'

export default function Book(props) {
  const { url, alt = 'Book Cover' } = props
  return (
    <div className={styles.bookContainer}>
      <div className={styles.book}>
        <img src={url} alt={alt} />
      </div>
    </div>
  )
}
