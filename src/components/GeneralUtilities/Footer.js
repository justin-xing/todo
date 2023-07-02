import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.footercontainer}>
          <p>&copy; 2023 ToDo</p>
        </div>
    </div>
  )
}

export default Footer