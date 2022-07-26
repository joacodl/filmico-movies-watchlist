import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <span>Built by <a href="https://joaquin-porfolio.vercel.app/">Joaquín Dominguez Lodeiro</a></span>
        <div className={styles.social}>
            <a href="https://www.linkedin.com/in/joaqu%C3%ADn-dominguez-lodeiro/">Linkedin</a>
            <a href="https://github.com/joacodl">Github</a>
        </div>
    </div>
  )
}

export default Footer