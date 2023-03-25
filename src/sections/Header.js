'use client';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <>
            <header
                className={`w-full p-5 pt-6 lg:pt-10 md:px-10 xl:px-20 text-white`}
            >
                <div className="flex justify-between">
                    <div className="flex text-center items-center gap-3 lg:gap-5 xl:gap-10">
                        <img
                            className="w-[62.56px] h-[16.02px] mt-1"
                            src="./GPT-3.png"
                        />
                        <IconButton
                            onClick={() => setShowNav((prev) => !prev)}
                            color="inherit"
                            className="p-0 lg:hidden"
                        >
                            <ReorderIcon />
                        </IconButton>
                        <ul
                            className={`hidden lg:flex justify-around w-[566px] text-[18px]`}
                        >
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">What is GPT?</a>
                            </li>
                            <li>
                                <a href="#">Open AI</a>
                            </li>
                            <li>
                                <a href="#">Case Studies</a>
                            </li>
                            <li>
                                <a href="#">Library</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-white text-[14px] 2sm:text-[16px] sm:text-[18px] text-center gap-2 2sm:flex-row 2sm:gap-6">
                        <button>Sign In</button>
                        <button className="bg-[#FF4820] py-1 px-2 rounded-sm 2sm:p-3">
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>

            {showNav && (
                <div
                    className={`text-white text-[15px] bg-[#FF4820] py-2 px-1 rounded-sm 2sm:text-[18px] text-sm absolute top-16 left-16 text-center`}
                >
                    <ul>
                        <li className="border-b-2 mb-1 pb-1 px-2">
                            <a href="#">Home</a>
                        </li>
                        <li className="border-b-2 mb-1 pb-1 px-2">
                            <a href="#">What is GPT?</a>
                        </li>
                        <li className="border-b-2 mb-1 pb-1 px-2">
                            <a href="#">Open AI</a>
                        </li>
                        <li className="border-b-2 mb-1 pb-1 px-2">
                            <a href="#">Case Studies</a>
                        </li>
                        <li>
                            <a href="#">Library</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
