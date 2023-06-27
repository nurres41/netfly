import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      Made With ❤️ &nbsp;
      <Link href="htttp://www.google.com" target="_blank">
        Nuri Onur Kurtuluş
      </Link>
    </footer>
  )
}

export default Footer