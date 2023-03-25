import React from 'react';

const SectionSix = () => {
    return (    
        <section className='p-4 mt-12 lg:mt-18 xl:mt-20 md:px-8 lg:px-10 xl:px-28'>
            <div
                style={{
                    background:
                        'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
                }}
                className='flex flex-col items-center md:px-10 md:justify-between text-center md:text-left md:flex-row gap-4 py-6 md:py-10 rounded-md'
            >
                <div className='flex flex-col gap-3 md:gap-1'>
                    <p className='text-[#0E0E0E] text-[10px] md:text-[12px]'>Request Early Access to Get Started</p>
                    <p className='font-bold text-[20px] sm:text-[22px] xl:text-[24px]'>
                        Register today & start exploring the endless
                        possiblities.
                    </p>
                </div>
                <button className='px-3 py-2 lg:px-5 rounded-2xl text-[12px] lg:text-[15px] xl:text-[18px] bg-black text-white'>Get Started</button>
            </div>
        </section>
    );
};

export default SectionSix;
