"use client";
import Image from "next/image";

const CapitalApproch = () => {
  return (
    <div className="xl:mx-[9%] sm:mx-[6%] mx-[4%] xl:my-32 lg:my-24 sm:my-16 my-12">
      <div className="flex lg:flex-row flex-col-reverse justify-between ">
        <div className="lg:w-[48%] w-full ">
          <Image src={require("/public/assets/home/approch.png")} alt="" />
        </div>
        <div className="lg:w-[50%] flex items-center 2xl:my-5 xl:my-4 lg:my-0 mb-10">
          <div>
            <div className="mb-5">
              <h3 className="2xl:text-[48px] xl:text-[38px] lg:text-[32px] text-[28px] 2xl:leading-[56px] leading-[42px] tracking-tight font-semibold font-inter text-[#36853A] ">
                Anza Capital Approach
              </h3>
            </div>
            <div>
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-6 xl:mb-5 mb-4">
                Strategic Partnerships <br />
                <span className="text-[#000] font-normal">
                  Collaborating with industry leaders for market analysis and
                  business insights.
                </span>
              </h6>
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-6 xl:mb-5 mb-4">
                Tactical Opportunities
                <br />
                <span className="text-[#000] font-normal">
                  Identifying and capitalizing on short-term market fluctuations
                  and emerging trends.
                </span>{" "}
              </h6>
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-6 xl:mb-5 mb-4">
                Infrastructure Investments <br />
                <span className="text-[#000] font-normal">
                  {" "}
                  Supporting projects that drive economic growth and
                  development.
                </span>{" "}
              </h6>
              <h6 className="2xl:text-[16px] xl:text-[15px] text-[14px] xl:leading-[22px] leading-[18px] font-medium font-inter text-[#36853A] 2xl:mb-6 xl:mb-5 mb-4">
                Insurance Solutions
                <br />
                <span className="text-[#000] font-normal">
                  Providing tailored insurance products to reduce risks and
                  protect investments.
                </span>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CapitalApproch;
