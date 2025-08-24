import React from 'react'
import GovermentBanner from '../routing_components/GovermentBanner'
import GovermentSlider from '../routing_components/GovermentSlider'
import GovermentComondity from '../routing_components/GovermentComondity'
import ContactUs from '../ContactUs'


const GovermentPart = () => {
  return (
    <div>
        <GovermentBanner/>
        <GovermentSlider/>
        <GovermentComondity/>
        <ContactUs/>
    </div>
  )
}

export default GovermentPart