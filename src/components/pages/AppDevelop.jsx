import React from 'react'
import Appbanner from '../routing_components/Appbanner'
import AppSlider from '../routing_components/AppSlider'
import WebsiteService from '../routing_components/WebsiteService'
import ContactUs from '../ContactUs'
import ScrollToTop from "../ScrollToTop"
const AppDevelop = () => {
  return (
    <>
    <ScrollToTop/>
    <Appbanner/>
    <AppSlider/>
    <WebsiteService/>
    <ContactUs/>
    </>
  )
}

export default AppDevelop