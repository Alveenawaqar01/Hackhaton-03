import React from 'react'
import Checkout from '../component/checkout'
import Topbar from '../component/topbar'
import Checkhome from '../component/checkhome'
import Footer from '../component/footer'

const page = () => {
  return (
    <div>
        <Topbar/>
        <Checkhome/>
      <Checkout/>
      <Footer/>
    </div>
  )
}

export default page
