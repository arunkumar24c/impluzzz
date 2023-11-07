import React from 'react'
import Banners from './components/Banners'
import Teams from '../about/components/Teams'
import Testimonialss from './components/Testimonialss'

const page = () => {
  return (
    <div>
      <Banners/>
      <Teams/>
      <Testimonialss/>
    </div>
  )
}

export default page