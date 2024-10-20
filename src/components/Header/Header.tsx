import {FC, useState} from "react"
import {Link} from "react-router-dom"
import classnames from 'classnames'
import { routes } from '../../constants/routes';

import Logo from '../../assets/images/logo.png'

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
            <img src={Logo} className='Header__Media-img' alt="logo" width={120} />
        </Link>
      </div>
      <div className='Header__Navs'>
          <Link to={routes.about} className='Header__Navs-link'>About Us</Link>
          <Link to={routes.event} className='Header__Navs-link'>Events</Link>
          <Link to='#' className='Header__Navs-link'>Blog</Link>
          <Link to='#contact-us' className='Header__Navs-link'>Contact Us</Link>
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
                  <Link to={routes.about} className='Header__Navs-link Header__burger-link'>About Us</Link>
                  <Link to={routes.event} className='Header__Navs-link Header__burger-link'>Events</Link>
                  <Link to='#' className='Header__Navs-link Header__burger-link'>Blog</Link>
                  <Link to='#contact-us' className='Header__Navs-link Header__burger-link'>Contact Us</Link>
              </div>
          }
      </div>
  )
}
