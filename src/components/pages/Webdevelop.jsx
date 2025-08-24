import React from 'react'
import WebBanner from '../routing_components/WebBanner'
import Webmarket from '../routing_components/Webmarket'
import WebApplication from '../routing_components/WebApplication'
import WebsiteService from '../routing_components/WebsiteService'
import ContactUs from '../ContactUs'



const Webdevelop = () => {
  return (
    <div>
        <WebBanner/> 
        <Webmarket/>
        <WebApplication/>
        <WebsiteService/>
        <ContactUs/>
    </div>
  )
}

export default Webdevelop