import Card from '../components/Card';

const SectionSeven = () => {
    return (
        <section className="mt-10 xl:mt-12 flex flex-col items-center lg:items-start lg:px-12 gap-8">
            <p className="text_gradient w-full px-4 xl:px-10 text-[30px] 2sm:text-[35px] sm:text-[45px] lg:text-[56px] xl:text-[60px] sm:max-w-[614px] lg:max-w-[701px] xl:max-w-none font-bold text-center lg:text-left">
                A lot is happening, <br/> We are blogging about it.
            </p>
            <div className="flex gap-8 w-full justify-center">
                <div className="hidden lg:flex flex-col items-center mt-8 text-center lg:text-left text-white">
                    <img
                        src='./Rectangle-1.png'
                        alt="image"
                        className="w-[360px]"
                    />
                    <div className="flex flex-col gap-4 p-3 w-[360px] bg-[#042C54]">
                        <p className="text-[9px] 2sm:text-[11px] lg:text-[11.649px]">
                            Sep 28, 2021
                        </p>
                        <p className="text-[15px] 2sm:text-[17px] lg:text-[19px]">
                            GPT-3 and Open AI is the future. Let us exlore how
                            it is?
                        </p>
                        <p className="text-[9px] 2sm:text-[11px] lg:text-[11.649px] mt-[15.5rem]">
                            Read Full Article
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row sm:gap-8">
                        <Card image={'./Rectangle-2.png'} />
                        <Card image={'./Rectangle-3.png'} />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-8">
                        <Card image={'./Rectangle-4.png'} />
                        <Card image={'./Rectangle-5.png'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionSeven;
