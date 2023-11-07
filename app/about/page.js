import React from 'react'
import Abouts from './components/Abouts'
import About from '../homecomponent/About'
import Shipments from '../homecomponent/Shipments'
import Company from '../homecomponent/Company'
import Teams from './components/Teams'



const page = () => {
  return (
    <div>
      <Abouts/>
      <About/>
      <Shipments/>
      <Company/>
      <Teams/>
     
    </div>
  )
}

export default page