import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@material-ui/core'
function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__icon'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png'
          alt=''
        />
      </Link>
      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
