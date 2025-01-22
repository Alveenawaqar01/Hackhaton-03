"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { IoSearch } from 'react-icons/io5';
import { BsFillHandbagFill } from 'react-icons/bs';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample fast food products
  const fastFoodProducts = [
    { name: 'Burger', id: 1 },
    { name: 'Pizza', id: 2 },
    { name: 'Chicken Wings', id: 3 },
    { name: 'Fries', id: 4 },
    { name: 'Shawarma', id: 5 },
    { name: 'Hot Dog', id: 6 },
    { name: 'Tacos', id: 7 },
    { name: 'Fried Chicken', id: 8 },
  ];

  // Filter fast food products based on search query
  const filteredProducts = fastFoodProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className='w-full h-14 flex justify-between items-center bg-black'>
      {/* Logo */}
      <div> 
        <h1 className='text-3xl text-yellow-500 font-extrabold pl-2 ml-4'>Elite</h1>
      </div>

      {/* Navlinks */}
      <ul className='hidden md:block'>
        <li className='space-x-5 pr-4 text-white'>
          <Link href="/">Home</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/Blogs">Blogs</Link>
          <Link href="/Chefs">Chefs</Link>
          <Link href="/About">About</Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/Checklist">Contact</Link>
        </li>
      </ul>

      {/* Search Bar with Fast Food Filtering */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 text-black shadow-sm focus-within:ring-2 ring-yellow-500">
          <input
            type="text"
            placeholder="Search for Fast Food..."
            className="bg-transparent outline-none text-sm w-32 lg:w-64 text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearch className="text-xl text-gray-600" />
        </div>

        {/* Cart Icon */}
        <BsFillHandbagFill className="text-3xl text-white hover:text-yellow-500 transition-colors duration-300 cursor-pointer" />
      </div>

      {/* Search Results Sheet (Only visible when search query matches items) */}
      {searchQuery && filteredProducts.length > 0 && (
        <Sheet>
          <SheetTrigger className='text-3xl md:hidden text-white'>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Search Results</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-y-4">
                  {filteredProducts.map((product) => (
                    <li key={product.id}>
                      <Link href={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className='text-3xl md:hidden text-white'>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <div>
                <li className='flex flex-col gap-y-4'>
                  <Link href="/">Home</Link>
                  <Link href="/Menu">Menu</Link>
                  <Link href="/Blogs">Blogs</Link>
                  <Link href="/Chefs">Chefs</Link>
                  <Link href="/About">About</Link>
                  <Link href="/Shop">Shop</Link>
                  <Link href="/Checklist">Contact</Link>
                </li>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
