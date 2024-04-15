import { FC } from 'react'

import PhoneLogo from '../../assets/images/phone.png'
import InstagramLogo from '../../assets/images/instagram.png'
import EmailLogo from '../../assets/images/mail.png'

import './contact.scss'

export const Contact: FC = () => {
    return (
        <div className='contact'>
            <div className='contact__overview'>
                <div className='contact__overview-title'>Contact</div>
                <div className='contact__overview-content'>
                    <div className='contact__overview-content--item'>
                        <span className='contact__overview-content--item-span'>
                            <img src={EmailLogo} alt='email'/>
                        </span>
                        hello@togcf.org
                    </div>
                    <div className='contact__overview-content--item'>
                        <span className='contact__overview-content--item-span'>
                            <img src={InstagramLogo} alt='instagram'/>
                        </span>
                        @togc_foundation
                    </div>
                    <div className='contact__overview-content--item'>
                        <span className='contact__overview-content--item-span'>
                            <img src={PhoneLogo} alt='mobile'/>
                        </span>
                        08188205025, 08136327351
                    </div>
                </div>
            </div>
        </div>
    )
}
