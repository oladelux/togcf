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
                    Empowering Girls, Nurturing Dreams and Building Futures.
                  </div>
                <div className='Homepage__hero-content--action'>
                  <a href={routes.ngDonate} className='Homepage__hero-content--action-donate'>Donate (Nigeria)</a>
                  <a href={routes.internationalDonate} className='Homepage__hero-content--action-donate'>Donate (International)</a>
                  {/*<Link to={routes.about} className='Homepage__hero-content--action-about'>About Us</Link>*/}
                </div>
              </div>
            <div className='Homepage__hero-media'>
              <img className='Homepage__hero-media-img' alt='girl' src={HeroImage} width={600}/>
              </div>
          </div>
          <InfoSection/>
        <div className='Homepage__blog'>
          <div className='Homepage__blog-title'>Blog</div>
          <div className='Homepage__blog-grid'>
            No blog post available
            {/*<div className='Homepage__blog-grid-card'></div>
            <div className='Homepage__blog-grid-card'></div>
            <div className='Homepage__blog-grid-card'></div>*/}
          </div>
        </div>
        <div className='Homepage__info'>
          <div className='Homepage__info_flex'>
            <div className='Homepage__info_flex-box'>
              <span className='Homepage__info_flex-sign'>"</span>Imagine a world where every girl child has the
              opportunity to reach her full potential.<span className='Homepage__info_flex-sign'>"</span>
            </div>
          </div>
        </div>
       {/* <AboutUs/>*/}
        <Events/>
        <Contact/>
      </div>
    )
}
