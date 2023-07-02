import React from 'react';
import classes from './Header.module.css';

function Header () {
  return (
    <header className={classes.header}>
    <div className={classes.headercontainer}>
      <p>ToDo</p>
    </div>
  </header>
  )
}

export default Header