"use client";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src={require("/public/assets/who-we-serve/banner.png")}
          alt=""
          className=" w-full lg:object-cover"
        />
      </div>
      <div className="mx-[5%] xl:mx-[7%] py-10">
        <h4 className="text-[#36853A] text-[42px] lg:text-[48px] font-[700] font-inter px-0 mx-0 text-center">
          Who We Serve
        </h4>
        <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter pt-3">
          With fifty years of experience in the GCC, Anza Group has become a
          renowned name and has made a substantial impact on the UAE&apos;s evolving
          business market. Over the years, we&apos;ve developed strong connections,
          gained local knowledge, and grasped the market trends in the region.
          This extensive experience has allowed us to effortlessly adjust to the
          changing economic and regulatory environment, establishing us as a
          reliable and influential presence in both local and global markets.
          Our long-standing authority in the UAE has helped us build trust
          within the community. It has also positioned us as leaders who
          understand the details of doing business in the region. By staying
          updated with the market changes and embracing innovation, we continue
          to do our best as we move ahead in the ever-changing UAE and beyond.
        </p>
      </div>
    </div>
  );
};
export default Banner;
