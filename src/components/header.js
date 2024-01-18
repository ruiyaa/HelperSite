import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <div className='headhome'>
          ホーム
        </div>
      </Link>
    </div>
  )
}

export default Header
