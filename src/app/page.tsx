import React from 'react'
import Chefdata from './component/chefdata'
import Foodfetch from './component/foodfetch'
import Navbar from './component/navbar'
import Topbar from './component/topbar'
import Hero from './component/hero'
import Food from './component/food'
import Fooditem from './component/fooditem'
import Foodchoose from './component/foodchoose'
import Burger from './component/burger'
import Review from './component/homereview'
import Chef from './component/chef'
import Footer from './component/footer'
import Blog from './component/blog'
const page = () => {
  return (
    <div>
        <Topbar/>
      <Navbar/>
      <Hero/>
      <Foodfetch/>
      <Chefdata/>
       <Food/>
      <Fooditem/>
      <Foodchoose/>
      <Burger/>
      <Chef/>
      <Review/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default page
