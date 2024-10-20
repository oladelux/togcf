import AboutUsIcon from "../../assets/images/about-us.jpg"
import './AboutUsView.scss'

export const AboutUsView = () => {
  return (
    <div className='About-us-view'>
      <div className='About-us-view__header'>
        <div className='About-us-view__header-title'>About Us</div>
      </div>
      <div className='About-us-view__content'>
        <div>
          <img className='About-us-view__content--img' src={AboutUsIcon} alt='about-us' width={350} />
        </div>
        <div className='About-us-view__content-text'>
          <div>
            <b>TOGC Foundation</b> is a non-profit organization dedicated to empowering girls and young women. We believe in the transformative power
            of education, mentorship, and opportunity to unlock their full potential and build brighter futures.
            <br/>Through our key initiatives; Pad a Girl, Edu License and Health2Education’, we provide essential resources and support, fostering their leadership
            skills, nurturing their dreams, and equipping them with the tools to thrive in all aspects of life. Our mission is to improve the overall quality of
            life for the girl child by addressing key barriers in education, health, and personal development.<br/>To improve the lives and provide comfort to disad- vantaged girl child through the use education,
            health, fitness and socialevents. To Initiate and Advocate Entrepreneurial and creative skills for the girl child. To create a world where every girl
            has the chance to reach her full potential, leading to a more equitable and empowered society for all.
          </div>
        </div>
      </div>
    </div>
  )
}
