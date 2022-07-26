import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../UI/Button'

import styles from './Nav.module.css'

const Nav = () => {
  return (
    <header className={styles.header}>
        <Link to='/'>
            <h1>FILMICO</h1>
        </Link>
        <ul className={styles.links}>
            <li><Link to='/watchlist'>Watchlist</Link></li>
            <li><Link to='/watched'>Watched Movies</Link></li>
            <li>
                <Link to={'/add'}>
                    <Button type="button" styling={'navButton'} onClick={() => {}}>Search Movies</Button>
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Nav