// eslint-disable-next-line no-unused-vars
import React from 'react';
import Heading from '../Shared/Heading';

const AboutUsData = [
    {
        title: "Welcome to Eshop!",
        subtitle: "At Eshop, we are passionate about providing top-quality fashion, delivering innovative tech solutions. Founded in 2024, our journey began with a simple mission: to make high-quality fashion accessible to everyone or bring the latest technology to your doorstep",
        aosDelay: "0",
    },
]

const About = () => {
    return (
        <div className='my-12'>
            <div className="container">
                {/*header section*/}
                <Heading title="About Us" subtitle={"Know more about us"} />
                <div className=''>
                    {AboutUsData.map((data) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.title} className='bg-white dark:bg-gray-900'>
                            {/*contet section*/}
                            <div className='space-y-2'>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
