"use client";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-full">
      <div className="flex lg:flex-row flex-col justify-between lg:mx-0 mx-[5%] z-20 h-full">
        <div className="lg:ml-[7%] lg:mr-[3%] lg:w-[38%] md:w-[90%] w-full xl:pt-5 sm:pt-10 pt-8 z-20 relative">
          <div className="lg:mb-0 ">
            <h1 className="2xl:text-[64px] xl:text-[54px] md:text-[48px] text-[38px] lg:text-right text-left font-bold font-inter 2xl:leading-[60px] xl:leading-[52px] leading-[48px]  text-[#36853A]">
              Achieve <br className="2xl:block hidden" /> Financial{" "}
              <br className="xl:block hidden" /> Success with{" "}
              <br className="2xl:block hidden" /> Bespoke{" "}
              <br className="xl:block hidden" /> Investment{" "}
              <br className="2xl:block hidden" />
              Strategies
            </h1>
          </div>
          <div className="flex lg:justify-end justify-start">
            <div className="w-[95%] 2xl:py-8 py-5">
              <p className="2xl:text-[16px] xl:text-[15px] text-[14px] lg:text-right text-left font-normal font-inter xl:leading-[24px] leading-[18px] text-[#000000] z-20">
                Welcome to Anza Capital Investment, your pathway to financial
                success. With a commitment to excellence and a wealth of
                experience spanning decades, we specialize in empowering both
                individuals and institutions with bespoke investment strategies
                and expert guidance. Our mission is simple: to help you navigate
                the path to financial success with unwavering confidence. Let us
                be your partner in achieving your financial goals, today and for
                years to come.
              </p>
            </div>
          </div>
          <div className="flex lg:justify-end justify-start ">
            <button className="md:px-[25px] px-[20px] md:py-[13px] py-[11px] bg-[#C4AA49] lg:text-[16px] sm:text-[15px] text-[14px] font-medium text-[#fff] leading-[18px] font-inter rounded-[5px] mb-5 lg:mb-0">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-[60%] w-full h-auto z-20 relative">
          <Image
            src={require("/public/assets/home/section-banner.png")}
            alt=""
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className="h-full absolute sm:top-0 top-20">
        <Image
          src={require("/public/assets/home/home-banner.png")}
          alt=""
          className="sm:mt-0 mt-10 "
        />
      </div>
    </div>
  );
};
export default Banner;
