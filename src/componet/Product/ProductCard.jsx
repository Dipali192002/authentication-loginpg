import React from 'react';
import Button from '../Shared/Button';

const ProductCard = ({ data, onOrderClick }) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className='group'
            key={product._id}
          >
            <div className='relative'>
              <img
                src={product.image}
                alt={product.name}
                className='h-[180px] w-[260px] object-cover rounded-md'
              />
              {/* Hover Button */}
              <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                <Button
                  text={"Order Now"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => onOrderClick(product)} // Pass the product to onOrderClick
                />
              </div>
            </div>
            <div className='leading-7'>
              <h2 className='font-semibold'>{product.name}</h2>
              <h2 className='font-bold'>₹. {product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
