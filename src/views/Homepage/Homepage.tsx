import { FC } from "react"
import { Link } from 'react-router-dom'

import {routes} from "../../constants/routes"

import {InfoSection} from "../../components/InfoSection/InfoSection"
import {AboutUs} from "../../components/AboutUs/AboutUs"
import {Events} from "../../components/Events/Events"
import {Contact} from "../../components/Contact/contact"

import './Homepage.scss'

import HeroImage from '../../assets/images/hero.jpg'

export const Homepage:FC = () => {
    return (
      <div className='Homepage'>
          <div className='Homepage__hero'>
              <div className='Homepage__hero-content'>
                  <div className='Homepage__hero-content--title'>
                      Improving the overall quality of life of the <br/>girl child.
                  </div>
                  <div className='Homepage__hero-content--sub-text'>
                      Empowering african girls, nurturing dreams and building futures.
                  </div>
                  <div className='Homepage__hero-content--action'>
                      <a href={routes.donate} className='Homepage__hero-content--action-donate'>Donate Now</a>
                      <Link to='#about-us' className='Homepage__hero-content--action-about'>About Us</Link>
                  </div>
              </div>
              <div className='Homepage__hero-media'>
                  <img className='Homepage__hero-media-img' alt='girl' src={HeroImage} width={600}/>
              </div>
          </div>
          <InfoSection/>
          <AboutUs/>
          <Events/>
          <Contact/>
      </div>
    )
}
