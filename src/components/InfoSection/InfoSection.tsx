import { FC } from "react"

import CampaignIcon from '../../assets/images/campaign.png'
import CooperationIcon from '../../assets/images/cooperation.png'
import VolunteerIcon from '../../assets/images/volunteer.png'
import DonationIcon from '../../assets/images/donation.png'

import './InfoSection.scss'

const InfoSectionItems = [
    {
        img: CooperationIcon,
        value: '100+',
        title: 'Girls Reached'
    },
    {
        img: CampaignIcon,
        value: '3+',
        title: 'Successful Campaign'
    },
    {
        img: DonationIcon,
        value: '300k+',
        title: 'Donation received'
    },
    {
        img: VolunteerIcon,
        value: '10+',
        title: 'Volunteers'
    }
]

export const InfoSection: FC = () => {
    return (
        <div className='Info-section--overlay'>
            <div className='Info-section'>
                {InfoSectionItems.map(item =>
                    <div key={item.title} className='Info-section__item'>
                        <div className='Info-section__item-media'>
                            <img src={item.img} alt='section-img' />
                        </div>
                        <div className='Info-section__item-title'>
                            <div className='Info-section__item-title--value'>{item.value}</div>
                            <div className='Info-section__item-title--text'>{item.title}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
