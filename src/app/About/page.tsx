import React from 'react'
import About from '../component/about'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Abouthome from '../component/abouthome'

const about = () => {
  return (
    <div>
        <Navbar/>
        <Abouthome/>
      <About/>
      <Footer/>
    </div>
  )
}

export default about
