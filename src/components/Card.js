import React from 'react';

const Card = ({image}) => {
    return (
        <div className="flex flex-col items-center mt-8 text-center lg:text-left text-white">
            <img src={image} alt="image" className="w-[150px] 2sm:w-[220px] lg:w-[270px]" />
            <div className="flex flex-col gap-4 p-3 w-[150px] 2sm:w-[220px] lg:w-[270px] bg-[#042C54]">
                <p className="text-[9px] 2sm:text-[11px] lg:text-[11.649px]">Sep 28, 2021</p>
                <p className="text-[15px] 2sm:text-[17px] lg:text-[19px]">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className="text-[9px] 2sm:text-[11px] lg:text-[11.649px] mt-6">Read Full Article</p>
            </div>
        </div>
    );
};

export default Card;
