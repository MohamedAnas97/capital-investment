"use client";
import Image from "next/image";

const Diverse = () => {
  return (
    <div className="xl:mx-[9%] sm:mx-[6%] mx-[4%] xl:my-32 lg:my-24 sm:my-16 my-12">
      <div className="flex lg:flex-row flex-col justify-between ">
        <div className="lg:w-[47%] w-full lg:my-0 mb-10">
          <div>
            <h3 className="2xl:text-[48px] xl:text-[38px] text-[28px] 2xl:leading-[56px] xl:leading-[40px] leading-[30px] tracking-tight font-semibold font-inter text-[#36853A] lg:mb-0 mb-4">
              Diverse Investment Opportunities Across Industries
            </h3>
          </div>
          <div className="lg:py-4">
            <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[24px] leading-[18px] font-normal font-inter text-[#000] pt-2 pb-3">
              We offer targeted investment opportunities across a wide range of
              global industries. Our sector-focused approach allows us to
              identify and capitalize on high-potential areas, fostering growth
              and innovation.
            </h6>
          </div>
          <div className="sm:flex w-full">
            <div className="sm:w-[50%]">
              <ul className="pl-6">
                <li className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-5 xl:mb-4 mb-4 list-disc">
                  Transportation and Industrials
                </li>
                <li className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-5 xl:mb-4 mb-4 list-disc">
                  Telecommunications
                </li>
                <li className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-5 xl:mb-4 mb-4 list-disc">
                  Consumer&Real Estate
                </li>
              </ul>
            </div>
            <div className="sm:w-[50%]">
              <ul className="pl-6">
                <li className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-5 xl:mb-4 mb-4 list-disc">
                  Financial Services
                </li>
                <li className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-5 xl:mb-4 mb-4 list-disc">
                  Technology and Innovation
                </li>
                <li className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-5 xl:mb-4 mb-4 list-disc">
                  Life Science and Agri Food
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-auto ">
          <Image src={require("/public/assets/home/investment.png")} alt="" className="h-full object-cover rounded-lg"/>
        </div>
      </div>
    </div>
  );
};
export default Diverse;
