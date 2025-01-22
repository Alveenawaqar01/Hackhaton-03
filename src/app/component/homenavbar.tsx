
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { IoSearch } from 'react-icons/io5'
import { BsFillHandbagFill } from 'react-icons/bs'


const Navbar = () => {
  return (
   <header className='w-full h-14 flex justify-between items-center bg-white'>
     {/* logo*/}
         <div> 
               <h1 className='text-3xl text-yellow-500 font-extrabold pl-2 ml-4'>Elite</h1>
         </div>
       {/* Navlinks*/}
       <ul className='hidden md:block'>
        <li className='space-x-5 pr-4 text-black  '>
            <Link href= "/">Home</Link>
            <Link href= "/Menu">Menu</Link>
            <Link href= "/Blogs">Blogs</Link>
            <Link href= "/Chefs">Chef</Link>
            <Link href= "/About">About </Link>
            <Link href= "/Shop">Shop</Link>
            <Link href= "/Checklist">Contact</Link>
          
        </li>
       
       </ul>
       <div className="hidden lg:flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 text-black shadow-sm focus-within:ring-2 ring-yellow-500">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-32 lg:w-64 text-black"
            />
            <IoSearch className="text-xl text-gray-600" />
          </div>

          <BsFillHandbagFill className="text-3xl text-black hover:text-yellow-500 transition-colors duration-300 cursor-pointer " />
        </div>
      

       <Sheet>
  <SheetTrigger className='text-3xl md:hidden text-black  '>
    <Menu/>
    </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <div>
      <li className='flex flex-col gap-y-4 ' >
            <Link href= "/">Home</Link> 
            <Link href= "/Menu">Menu</Link>
            <Link href= "/Blogs">Blogs</Link>
            <Link href= "/Chefs">Chefs</Link>
            <Link href= "/About">About </Link>
            <Link href= "/Shop">Shop</Link>
            <Link href= "/Checklist">Contact</Link>
                      
          
        </li>
       
       </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
       


 
  
     </header>

  
  )
}

export default Navbar
