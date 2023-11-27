import {FC, useState} from "react"
import {Link, NavLink} from "react-router-dom"
import classnames from 'classnames'

import Logo from '../../assets/images/togcf.svg'

import './Header.scss'

export const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }
  return (
      <div className='Header--Overlay'>
        <header className='Header'>
      <div className="Header__Media">
        <Link to="/" className='Header__Media-link'>
            <img src={Logo} className='Header__Media-img' alt="logo" width={75} />
        </Link>
      </div>
      <div className='Header__Navs'>
          <a href='#about-us' className='Header__Navs-link'>About Us</a>
          <a href='#events' className='Header__Navs-link'>Events</a>
          <a href='#' className='Header__Navs-link'>Blog</a>
          <a href='#contact-us' className='Header__Navs-link'>Contact Us</a>
      </div>
        <button
            onClick={toggleMenu}
            className={classnames('Header__Navs__burger', {
                'Header__Navs__burger--active': menuOpen,
            })}
        >
            <span className='Header__Navs__burger-line Header__Navs__burger-line--1' />
            <span className='Header__Navs__burger-line Header__Navs__burger-line--2' />
            <span className='Header__Navs__burger-line Header__Navs__burger-line--3' />
        </button>
    </header>
          {
              menuOpen &&
              <div className='Header__burger'>
                  <a href='#about-us' className='Header__Navs-link Header__burger-link'>About Us</a>
                  <a href='#events' className='Header__Navs-link Header__burger-link'>Events</a>
                  <a href='#' className='Header__Navs-link Header__burger-link'>Blog</a>
                  <a href='#contact-us' className='Header__Navs-link Header__burger-link'>Contact Us</a>
              </div>
          }
      </div>
  )
}
