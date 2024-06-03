"use client";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      {/* desktop */}
      <div className="w-full relative">
        <div className="relative">
          {" "}
          <div className="absolute mx-[5%] xl:mx-[7%] bottom-5 md:bottom-10">
            <h1 className="text-[27px] md:text-[45px] xl:text-[64px] font-bold text-[#fff] uppercase xl:leading-[60px] leading-[50px]">
              Key Investment Sectors
            </h1>
          </div>
          <Image
            src={require("/public/assets/our-services/service-banner.png")}
            alt=""
            className=" w-full lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
