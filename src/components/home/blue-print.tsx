"use client";
import Image from "next/image";
const Blueprint = () => {
  return (
    <div className="lg:mx-[7%] sm:mx-[6%] mx-[4%] xl:my-32 lg:my-24 sm:my-16 my-12 h-full">
      <div className="flex lg:flex-row flex-col-reverse justify-between h-full">
        <div className="lg:w-[50%] w-full h-auto ">
          <Image
            src={require("/public/assets/home/blueprint.png")}
            alt=""
            className="rounded-lg h-full object-cover"
          />
        </div>
        <div className="lg:w-[48%] w-full 2xl:my-5 xl:my-4 lg:my-0 mb-10 flex  items-center">
          <div>
            <div>
              <h3 className="xl:text-[32px]  lg:text-[22px] text-[28px] 2xl:leading-[38px] leading-[34px] tracking-tight font-semibold font-inter text-[#36853A] lg:mb-0 mb-4">
                Our Blueprint for Sustainable Success
              </h3>
            </div>
            <div className=" xl:py-8 py-6 ">
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#000] 2xl:mb-6 xl:mb-5 mb-4">
                <span className="text-[#36853A]"> Rigorous Analysis: </span>We
                conduct comprehensive market analysis and due diligence to
                identify the most promising investment opportunities across
                diverse industries.
              </h6>
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#000] 2xl:mb-6 xl:mb-5 mb-4">
                <span className="text-[#36853A]">
                  {" "}
                  Strategic Diversification:
                </span>
                By investing in a wide range of sectors, we ensure a balanced
                portfolio that mitigates risk and enhances potential returns.
              </h6>
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#000] 2xl:mb-6 xl:mb-5 mb-4 ">
                <span className="text-[#36853A]">Innovative Thinking: </span>
                We embrace innovation and leverage cutting-edge technology to
                stay ahead of market trends and capitalize on emerging
                opportunities.
              </h6>
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#000] 2xl:mb-6 xl:mb-5 mb-4">
                <span className="text-[#36853A]"> Sustainable Growth: </span>
                Our investment strategy is designed to promote long-term value
                creation, focusing on sustainable and ethical business
                practices.
              </h6>
            </div>
            <div>
              <button className="md:px-[25px] px-[20px] md:py-[13px] py-[11px] bg-[#C4AA49] xl:text-[16px] sm:text-[15px] text-[14px] font-medium text-[#fff] leading-[18px] font-inter rounded-[5px]">
                Claim Your Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blueprint;
