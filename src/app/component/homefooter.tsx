import React from "react";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white px-8 py-10 md:px-[135px] md:py-[50px]">
        <div className="text-black md:w-[50%] w-[100%]">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            Its worth making a smart logical quote here Its pretty easy
          </p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-green-300 text-black py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
          />
          <button className="bg-green-800 text-white py-1.5 px-4 md:py-3 md:px-8 rounded-lg">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-8 md:mx-[135px]" />

      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-[135px] py-6 lg:py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="mb-6 text-[24px] font-semibold uppercase text-black">About Us</h2>
          <ul className="text-black font-medium">
            <li className="mb-4">
              <p className="text-black text-[16px] font-normal hover:underline">
                Corporate clients and leisure travelers rely on Groundlink for dependable safe and professional chauffeured car service in major cities worldwide
              </p>
            </li>
            <li className="flex gap-[16.5px]">
              <div className="bg-green-800 flex justify-center items-center w-[72px] h-[72px]">
                <PiClockClockwiseBold className="text-white text-[40px]" />
              </div>
              <div className="ml-1">
                <h2 className="text-[16px] text-black font-normal">Opening Hours</h2>
                <h3 className="text-[10px] font-normal text-black">Mon Sat 8am  6pm</h3>
                <h3 className="text-[10px] font-normal text-black">Sunday Closed</h3>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-[24px] font-semibold uppercase text-black">Useful Links</h2>
          <ul className="text-black font-medium">
            <li className="mb-4"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">News</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Partner</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Team</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Menu</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="mb-6 text-[24px] font-semibold uppercase text-black">Help</h2>
          <ul className="text-green-800 dark:text-gray-400 font-medium">
            <li className="mb-4"><a href="#" className="hover:underline">FAQ</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Reporting</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Documentation</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Support Policy</a></li>
            <li className="mb-4"><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="mb-6 text-[24px] font-semibold uppercase text-black">Recent Post</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="flex gap-[16.5px]">
              <img src="/blog1.png" alt="blog" className="w-[60px] h-[60px] object-cover rounded" />
              <div>
                <p className="text-black text-[14px]">Latest Blog Post</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-4 py-6 bg-green-950 border-t dark:bg-[#4F4F4F] md:flex md:items-center md:justify-between">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">
          2023 <a href="#">Flowbite</a> All Rights Reserved
        </span>

        <div className="flex justify-center gap-[14px] ">
          <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaFacebookF /></div>
          <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
          <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaInstagram /></div>
          <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
          <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
