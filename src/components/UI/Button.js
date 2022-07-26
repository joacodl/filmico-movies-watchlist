import React, {useContext} from 'react'
import MoviesContext from '../../Store/moviesContext';

import styles from './Button.module.css';

const Button = (props) => {
  
  return (
    <button type={props.type} className={`${styles[props.styling]} ${styles.button}`} onClick={props.handler}>
      {props.children}
    </button>
  )
}

export default Button