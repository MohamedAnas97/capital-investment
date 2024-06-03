"use client";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#36853A]">
      <div className="sm:mx-[5%] mx-[4%] lg:py-16 sm:py-12 py-10">
        <div className="pb-8">
          <Image
            src={require("/public/assets/home/logofooter.png")}
            alt=""
            className="h-[40px] w-fit"
          />
        </div>
        <div className="border-b-[1px] border-[#fff]">
          <ul className="flex sm:flex-row flex-col pb-10">
            <li className="text-[16px] font-semibold leading-[24px] text-[#fff] sm:mr-4 cursor-pointer font-roboto ">
              Link One
            </li>
            <li className="text-[16px] font-semibold leading-[24px] text-[#fff] sm:mx-4 sm:mt-0 mt-3 cursor-pointer font-roboto" >
              Link Two
            </li>
            <li className="text-[16px] font-semibold leading-[24px] text-[#fff] sm:mx-4 sm:mt-0 mt-3 cursor-pointer font-roboto">
              Link Three
            </li>
            <li className="text-[16px] font-semibold leading-[24px] text-[#fff] sm:mx-4 sm:mt-0 mt-3 cursor-pointer font-roboto">
              Link Four
            </li>
            <li className="text-[16px] font-semibold leading-[24px] text-[#fff] sm:ml-4 sm:mt-0 mt-3 cursor-pointer font-roboto">
              Link Five
            </li>
          </ul>
        </div>
        <div className="flex sm:flex-row flex-col justify-between pt-10">
          <div>
            <ul className="flex sm:flex-row flex-col">
              <li className="text-[14px] font-normal leading-[21px] text-[#fff] sm:mr-4  underline cursor-pointer font-roboto">
                Privacy Policy
              </li>
              <li className="text-[14px] font-normal leading-[21px] text-[#fff] sm:ml-4 sm:mt-0 mt-3 underline cursor-pointer font-roboto">
                Terms of Service
              </li>
            </ul>
          </div>
          <div className="sm:mt-0 mt-3">
            <h6 className="text-[14px] font-normal leading-[21px] text-[#fff] font-roboto">
              © 2024 ANZA. All rights reserved.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
