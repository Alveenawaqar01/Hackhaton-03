import React from 'react'
import Homenavbar from '../component/homenavbar'
import Homehero from '../component/Homehero'
import Homefood from '../component/homefood'
import Homefooditem from '../component/homefooditem'
import Homechoose from '../component/homechoose'
import Homeitems from '../component/homeitems'
import Homereview from '../component/homereview'
import Homeblog from '../component/homeblog'
import Homelogo from '../component/homelogo'
import Homefooter from '../component/homefooter'
import Chefdata from '../component/chefdata'


const page = () => {
  return (
    <div>
      <Homenavbar/>
    <Homehero/>
    <Homefood/>
    <Homefooditem/>
    <Homechoose/>
    <Homeitems/>
    <Chefdata/>
    <Homereview/>
    <Homeblog/>
    <Homelogo/>
    <Homefooter/>
  
    </div>
  )
}

export default page
