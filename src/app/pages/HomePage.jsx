import React from 'react'
import ABoutUs from '../components/AboutUs/ABoutUs'
import CompanySkill from '../components/CompanySkills/CompanySkill'
import FactInfo from '../components/FactInfo/FactInfo'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import Advisor from '../components/Advisor/Advisor'
import Feature from '../components/Features/Feature'
import Articles from '../components/Aticles/Articles'
import WatchVideo from '../components/WatchVideo/WatchVideo'

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <ABoutUs />
      <WatchVideo />
      <Feature />
      <WhatWeDo />
      <FactInfo />
      <Advisor />
      <CompanySkill />
      <Articles />
      <Footer />
    </>
  )
}

export default HomePage