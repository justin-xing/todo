import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.footercontainer}>
          <p>&copy; 2023 ToDo</p>
        </div>
    </footer>
  )
}

export default Footer