import React from 'react'
import Bloghome from '../component/bloghome'
import Navbar from '../component/navbar'
import Blogcard1 from '../component/blogcard1'
import Blogcard2 from '../component/blogcard2'
import Footer from '../component/footer'

const page = () => {
  return (
    <div>
        <Navbar/>
      <Bloghome/>
      <Blogcard1/>
      <Blogcard2/>
      <Footer/>
    </div>
  )
}

export default page
