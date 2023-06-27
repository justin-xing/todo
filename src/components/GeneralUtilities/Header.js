import React from 'react';
import './Header.css';

function Header () {
  return (
    <header className="site-header">
    <div className="wrapper site-header__wrapper">
      <a className="ToDo" href="/monkey">Todo</a>
      <a className="button button--icon" aria-label="Add">
        <span>Add</span>
      </a>
    </div>
  </header>
  )
}

export default Header

