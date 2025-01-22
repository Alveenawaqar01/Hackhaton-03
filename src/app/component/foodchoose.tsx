import Image from "next/image";
import { BiCookie } from "react-icons/bi";
import { GiWineGlass } from "react-icons/gi";
import { PiHamburger } from "react-icons/pi";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center px-6 lg:px-20 py-10 gap-10">
      
      {/* Left Section (Images Grid) */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        <Image
          src="/lemon.jpeg"
          alt="Fresh Lemon Dish"
          width={250}
          height={180}
          className="rounded-lg object-cover w-full"
        />
        <Image
          src="/burger.jpeg"
          alt="Tasty Burger"
          width={250}
          height={180}
          className="rounded-lg object-cover w-full"
        />
        <Image
          src="/chicken.jpeg"
          alt="Crispy Chicken Dish"
          width={250}
          height={180}
          className="rounded-lg object-cover w-full"
        />
        <Image
          src="/burger2.png"
          alt="Delicious Burger"
          width={250}
          height={180}
          className="rounded-lg object-cover w-full"
        />
      </div>

      {/* Right Section (Text and Features) */}
      <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
        {/* Section Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Ordinary Taste
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Extra And
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Experienced
          </h1>
        </div>

        {/* Paragraph Text */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Enjoy the finest dishes crafted with passion and expertise Quisque diam pellentesque bibendum non dui
          volutpat fringilla bibendum Experience the joy of food like never before
        </p>

        {/* Features with Icons */}
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 p-4 rounded-full">
              <GiWineGlass className="text-4xl text-black" />
            </div>
            <p className="text-gray-300 mt-2 text-sm md:text-base">Dinner</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 p-4 rounded-full">
              <BiCookie className="text-4xl text-black" />
            </div>
            <p className="text-gray-300 mt-2 text-sm md:text-base">Lunch</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 p-4 rounded-full">
              <PiHamburger className="text-4xl text-black" />
            </div>
            <p className="text-gray-300 mt-2 text-sm md:text-base">Fast Food</p>
          </div>
        </div>

        {/* Highlighted Statistic */}
        <div className="bg-yellow-400 text-black font-extrabold text-xl md:text-2xl rounded-lg px-4 py-4 inline-block sm:text-2xl">
          30+ Years of Experience
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
