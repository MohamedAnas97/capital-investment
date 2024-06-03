"use client";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src={require("/public/assets/risk-management/banner.png")}
          alt=""
          className=" w-full lg:object-cover"
        />
      </div>
      <div className="mx-[5%] xl:mx-[7%] py-10">
        <h4 className="text-[#36853A] text-[42px] lg:text-[48px] font-[700] font-inter px-0 mx-0 text-center">
          Risk Management
        </h4>
        <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter pt-3">
          At Anza Capital Investment, we recognize that successful investing
          isn&apos;t just about chasing high returns; it&apos;s about safeguarding your
          investments against potential risks. With our robust risk management
          strategies, we&apos;re dedicated to helping our clients navigate the
          complexities of the financial markets with confidence and peace of
          mind.
        </p>
      </div>
      <div className="mx-[5%] xl:mx-[7%] py-5">
        <h4 className="text-[#36853A] text-[42px] lg:text-[48px] font-[700] font-inter px-0 mx-0 text-center">
          Why Risk Management Matters
        </h4>
        <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter pt-3">
          Investing always involves an element of uncertainty. However, by
          understanding and effectively managing risk, investors can protect
          their capital, preserve wealth, and optimize long-term returns. At
          Anza Capital Investment, we believe that a proactive approach to risk
          management is essential for achieving financial success and weathering
          market fluctuations.
        </p>
      </div>
    </div>
  );
};
export default Banner;
