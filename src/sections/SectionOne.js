const SectionOne = () => {
    return (
        <section>
            <div className="p-5 flex lg:justify-center lg:items-center xl:gap-4 lg:mt-2 xl:mt-5">
                <div className="flex flex-col gap-3 items-center w-full lg:w-auto lg:justify-center lg:h-full lg:items-start lg:pl-3">
                    <p className="text_gradient text-[30px] 2sm:text-[35px] sm:text-[45px] lg:text-[56px] xl:text-[60px] sm:max-w-[614px] font-bold text-center lg:text-left">
                        Let's Build Something amazing with GPT-3 Open
                    </p>
                    <p className="text-[#81AFDD] text-[13px] sm:text-[15px] lg:text-[18px] xl:text-[20px] sm:max-w-[554px] text-center lg:text-left">
                        Yet bed any for travelling assistance indulging
                        unpleasing. Not thoughts all exercise blessing.
                        Indulgance wat everything enjoy alteration boisterous
                        the attachment. Party we years to order allow asked of
                    </p>
                    <form className="flex flex-col sm:flex-row sm:mt-3 sm:justify-center lg:justify-start text-white gap-2 sm:gap-0 text-[13px] sm:text-[15px] xl:text-[18px] w-full">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="bg-[#052D56] p-2 sm:p-4 sm:w-[450px] placeholder:text-[13px] sm:placeholder:text-[15px] xl:placeholder:text-[18px] placeholder:text-center placeholder:text-[#3D6184]"
                        />
                        <button className="bg-[#FF4820] p-2 sm:p-4 mx-auto sm:mx-0 w-[174px] font-bold">
                            Get Started
                        </button>
                    </form>
                </div>

                <div className="hidden lg:block max-w-[500px]">
                    <img
                        src="./Face.png"
                        alt="illustration"
                        height="701"
                        width="667"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionOne;
