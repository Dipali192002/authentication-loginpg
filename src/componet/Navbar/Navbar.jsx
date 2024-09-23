/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaCircleUser } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';

const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },

  {
    id: 2,
    name: 'Shop',
    link: '/shop',
  },

  // {
  //   id: 3,
  //   name: 'About',
  //   link: '/#about',
  // },

  {
    id: 4,
    name: 'Blog',
    link: '/blog',
  },
];
// const DropdownLinks = [
//   {
//     id: 1,
//     name: 'Trending Products',
//     link: '/#',
//   },
//   {
//     id: 2,
//     name: 'Best Selling',
//     link: '/#',
//   },
//   {
//     id: 3,
//     name: 'Top Rated',
//     link: '/#',
//   },
// ];

const navbar = ({ handlerOrderPopup, handleLoginPopup }) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center">
          {/*logo and links section */}
          <div className='flex items-center gap-4'>
            <a href="#"
              className='text-primary
            font-semibold tracking-widerst
            text-2xl uppercase sm:text-3xl'>
              Eshop</a>
            {/*menu item*/}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {
                  // eslint-disable-next-line no-undef, no-unused-vars
                  MenuLinks.map((data, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <li key={index}>
                      <Link to={data.link}
                        className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                      >{data.name}</Link>
                    </li>
                  ))
                }
                {/* Dropdown
                <li className="relative cursor-pointer group">
                  <a href="#" ClassName="flex items-center gap-[2px] front - semibold text-gray-500 dark:hover:text-white py-2">
                  <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                    Quick Links
                  </a>
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                  drop down links
                  <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white '>
                    <ul className='space-y-2'>
                      {
                        DropdownLinks.map((data, index) => (
                          <li key={index}>
                            <a className='text-gray-500 hover:text-black dark:hover:text-wh duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                              href={data.link}>{data.name}</a>


                          </li>
                        ))
                      }
                    </ul>

                  </div>
                </li> */}

              </ul>
            </div>
          </div>
          {/* navbar right section*/}
          <div className='flex justify-between items-center gap-4'>
            {/*Search Bar section*/}
            <div className='relative group hidden sm:block'>
              <input type="text"
                placeholder='Search'
                className='
                Search-bar
                '/>
              <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary: dark:text-gray-400 absolute top-1/2 -translate-y-1/2
              right-3 duration-200 '/>
            </div>
            {/*order-button secton*/}
            <button className='relative p-3' onClick={handlerOrderPopup}>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              
              {/*<div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                4
              </div>*/}

            </button>
            {/*dark mode section*/}
            <div>
              <DarkMode />

            </div>
            <div>
              <button className='relative p-3' onClick={handleLoginPopup}>
                <FaCircleUser className='text-xl text-gray-600 dark:text-gray-400' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
