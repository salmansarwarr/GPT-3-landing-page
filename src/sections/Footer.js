import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#031B34] text-white mt-16 sm:mt-20 pt-12 sm:pt-16 pb-6 flex flex-col items-center">
            <p className="text_gradient w-full px-4 xl:px-10 text-[30px] 2sm:text-[35px] sm:text-[45px] lg:text-[56px] xl:text-[60px] sm:max-w-[614px] lg:max-w-[701px] xl:max-w-[821px] font-bold text-center">
                Do you want to step in to the future before others
            </p>
            <button className="border border-white border-solid text-[12px] p-2 mt-6 sm:mt-12">
                Request Early Access
            </button>
            <div className="mt-8 items-center sm:mt-16 lg:mt-24 xl:mt-32 text-center sm:text-left flex flex-row justify-between lg:w-full px-16 xl:px-24">
                <div className="hidden lg:flex flex-col gap-6">
                    <img src="./GPT-3.svg" alt="logo" className="h-[30px] ml-[-23px]" />
                    <p className="text-[11px] sm:text-[12px] w-[168px]">
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-8 sm:gap-16'>
                    <ul className="flex flex-col gap-1 sm:gap-3 max-w-[116px]">
                        <li className="text-[12px] sm:text-[14px] mb-2 sm:mb-3 font-bold">
                            Links
                        </li>
                        <li className="text-[11px] sm:text-[12px]">Overons</li>
                        <li className="text-[11px] sm:text-[12px]">
                            Social Media
                        </li>
                        <li className="text-[11px] sm:text-[12px]">Counters</li>
                        <li className="text-[11px] sm:text-[12px]">Contact</li>
                    </ul>
                    <ul className="flex flex-col gap-1 sm:gap-3 max-w-[116px]">
                        <li className="text-[12px] sm:text-[14px] mb-2 sm:mb-3 font-bold">
                            Company
                        </li>
                        <li className="text-[11px] sm:text-[12px]">
                            Terms & Conditions
                        </li>
                        <li className="text-[11px] sm:text-[12px]">
                            Privacy Policy
                        </li>
                        <li className="text-[11px] sm:text-[12px]">Contact</li>
                    </ul>
                    <ul className="flex flex-col gap-1 sm:gap-3 max-w-[116px]">
                        <li className="text-[12px] sm:text-[14px] mb-2 sm:mb-3 font-bold">
                            Get in touch
                        </li>
                        <li className="text-[11px] sm:text-[12px]">
                            Crechterwoord K12 182 DK Alknjkcb
                        </li>
                        <li className="text-[11px] sm:text-[12px]">
                            085-132567
                        </li>
                        <li className="text-[11px] sm:text-[12px]">
                            info@payme.net
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-[11px] sm:text-[12px] mt-12 sm:mt-14 lg:mt-20 xl:mt-24">
                © 2021 GPT-3. All rights reserved.
            </p>
        </footer>
    );
};
export default Footer;
