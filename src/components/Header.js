import React from 'react';
import './Header.css'
import './Menu.js'

function Header () {
  return (
    <header className="site-header">
    <div className="wrapper site-header__wrapper">
      <nav className="nav">
        <button className="nav__toggle" aria-expanded="false" type="button">
          Lists
        </button>
        <ul className="nav__wrapper">
          <li className="nav__item"><a>PlaceholderA</a></li>
          <li className="nav__item"><a>PlaceholderB</a></li>
          <li className="nav__item"><a>PlaceholderC</a></li>
          <li className="nav__item"><a>PlaceholderD</a></li>
          <li className="nav__item"><a>PlaceholderE</a></li>
        </ul>
      </nav>
      <a className="ToDo">Todo</a>
      <a className="button button--icon" aria-label="Add">
        <span>Add</span>
      </a>
    </div>
  </header>
  )
}

export default Header

