import React from 'react'
import Navbar from '../component/navbar'
import Shop from '../component/shop'
import Shophome from '../component/shophome'
import Foodfetch from '../component/foodfetch'

const shop = () => {
  return (
    <div>
      <Navbar/>
      <Shophome/>
      <Shop/>
      <Foodfetch/>
    </div>
  )
}

export default shop
