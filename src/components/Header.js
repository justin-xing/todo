import React from 'react';
import './Header.css'

function Header () {
  return (
    <div className='header'>
      <div className='header-container'>
        <h1 className='logo'>ToDo</h1>
        <ul className='menu'>
          <li>Home</li>
        </ul>
      </div>
    </div>
  )
}

export default Header