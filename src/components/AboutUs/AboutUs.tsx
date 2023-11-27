import {FC} from "react";

import AboutUsIcon from "../../assets/images/about-us.jpg"

import './AboutUs.scss'

export const AboutUs: FC = () => {
    return (
        <div className='About-us' id='about-us'>
            <div className='About-us__content'>
                <div className='About-us__content-text'>
                    <div className='About-us__content-text--title'>About Us</div>
                    <div className='About-us__content-text--content'>
                        We are committed to empowering young girls and improving their overall quality of lives. We are dedicated to removing barriers and ensuring access to education, healthcare, safety, and essential sanitary products.
                        <br />By providing life skills, leadership training and essential hygiene support, we empower girls to thrive and create a brighter future. Join us in our mission to uplift and empower every girl to reach her full potential.
                        <br />In a nutshell our goal is to empower the Girl child by nurturing their dreams and building their future.
                    </div>
                </div>
                <div className='About-us__content-media'>
                    <img className='About-us__content-media--img' src={AboutUsIcon} width={350} alt='about-us' />
                </div>
            </div>
        </div>
    )
}
