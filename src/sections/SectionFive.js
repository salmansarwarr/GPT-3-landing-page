import React from 'react';

const SectionFive = () => {
    return (
        <section className="mt-16 lg:mt-7 flex lg:items-end lg:justify-center gap-4">
            <img
                src="./Feature-Image.png"
                alt="feature-image"
                className="hidden lg:block h-[500px] xl:h-[580px]"
            />
            <div className='flex flex-col gap-6 lg:max-w-[479px] lg:gap-3 items-center lg:items-start lg:text-left text-center w-full lg:mb-4'> 
                <p className="text-[#71E5FF] text-[12px] sm:text-[14px] xl:text-[16px] w-full">
                    Request Early Access to Get Started
                </p>
                <p className="text_gradient text-[22px] lg:max-w-[426px] 2sm:text-[25px] sm:text-[30px] lg:text-[33px] xl:text-[35px] text-center lg:text-left font-bold">
                    The possibilities are beyond your imagination
                </p>
                <p className="text-[#81AFDD] md:max-w-[479px] text-[12px] sm:text-[14px] xl:text-[16px] max-w-[334px]">
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <p className="text-[#FF8A71] text-[12px] sm:text-[14px] xl:text-[16px] w-full">
                    Request Early Access to Get Started
                </p>
            </div>
        </section>
    );
};

export default SectionFive;
