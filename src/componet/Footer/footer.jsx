// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileButton } from 'react-icons/fa6';

const footerLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/blog",
    },
];

const footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/*compnany details*/}
            <div className='py-8 px-4'>
            <a href="#"
            className='text-primary
            font-semibold tracking-widerst
            text-2xl uppercase sm:text-3xl'>
              Eshop</a>
              <p className='text-gray-600 dark:text-white lg:pr-24 pt-3'>made with love by the Dipali and Jeel</p>
              <p className='text-gray-500 mt-4'>dipaligangajaliya@gmail.com</p>
              <p className='text-gray-500 mt-4'>jeelvyas3597@gmail.com</p>
            </div>
            {/*footer links*/}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-2 md:pl-20'>
            <div className='py-8 px-4'>
                <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                <ul className='space-y-3'>
                    {footerLinks.map((data, index) => (
                        <li key={index}>
                            <a href={data.link}
                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                {data.title}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
            {/* secound links
            <div className='py-8 px-4'>
                <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                <ul className='space-y-3'>
                    {footerLinks.map((data, index) => (
                        <li key={index}>
                            <a href={data.link}
                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                {data.title}
                            </a>
                        </li>
                    ))}
                </ul>

            </div> */}
            {/*company address*/}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                <div>
                    <div className='flex items-center gap-3'>
                     <FaLocationArrow/>
                     <p>JVIMS, Jamnagar</p>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                     <FaMobileButton/>
                     <p>+91 1234567890</p>
                    </div>
                </div>
                       {/*social links*/}
            <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href="#">
                    <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href="#">
                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                </a>
            </div>
            </div>
         
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
