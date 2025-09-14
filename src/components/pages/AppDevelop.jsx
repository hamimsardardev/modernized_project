import React from 'react'
import Appbanner from '../routing_components/Appbanner'
import WebsiteService from '../routing_components/WebsiteService'
import ContactUs from '../ContactUs'
import ScrollToTop from "../ScrollToTop"
const AppDevelop = () => {
  return (
    <>
    <ScrollToTop/>
    <Appbanner/>
    <WebsiteService/>
    <ContactUs/>
    </>
  )
}

export default AppDevelop