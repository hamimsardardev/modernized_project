import React from 'react'
import SocialMediabanner from '../routing_components/SocialMediabanner'
import SocialMarketing from '../routing_components/SocialMarketing'
import Socialpackage from '../routing_components/Socialpackage'
import ContactUs from '../ContactUs'


const SocialMedia = () => {
  return (
    <div>
        <SocialMediabanner/>
        <SocialMarketing/>
        <Socialpackage/>
        <ContactUs/>
    </div>
  )
}

export default SocialMedia