// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../../componet/Shared/Button.jsx";

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/*first col*/}
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-white/100 text-white rounded-3xl relative h-[320px] flex items-end '>
               <div >
                <div  className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40'>Game Set</p>
                    <a href='/shop?type=Game Set' className={`bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</a>
                </div>
            </div>
            <img src={Image1} alt="" 
            className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'/>
            </div>

            {/*second col*/}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-strat '>
               <div>
                <div  className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>VR</p>
                    <a href='/shop?type=VR' className={`bg-white text-brandGreen cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</a>
                </div>
            </div>
            <img src={Image2} alt="" 
            className='w-[320px] absolute bottom-0'/>
            </div>
            {/*third col*/}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start '>
               <div>
                <div  className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p>
                    <a href='/shop?type=Speaker' className={`bg-white text-brandBlue cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</a>
                </div>
            </div>
            <img src={Image3} alt="" 
            className='w-[200px] absolute bottom-0 right-0'/>
            </div>



            </div>
        </div>
    </div>
  );
};

export default Category;
