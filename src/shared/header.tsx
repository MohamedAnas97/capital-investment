"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import AnimateHeight from "react-animate-height";

const Header = () => {
  const [height, setHeight]: any = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="border-b-[1px] border-[#D0D0D0] relative">
      <div className="mx-[5%] lg:mx-[7%] flex items-center justify-between py-5">
        <div>
          <Image
            src={require("/public/assets/home/logo.png")}
            alt=""
            className="sm:h-[40px] h-[35px] w-fit cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        <div className="lg:block hidden">
          <ul className="flex ">
            <li
              className={`text-[16px] font-medium leading-[22px] text-[#36853A] border-b-[3px] font-inter cursor-pointer mr-4 ${
                pathname === "/" ? "border-[#36853A] " : "border-[#fff]"
              }`}
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </li>
            <li
              className={`text-[16px] font-medium leading-[22px] text-[#36853A] border-b-[3px] font-inter cursor-pointer mx-4 ${
                pathname === "/our-services"
                  ? "border-[#36853A]"
                  : "border-[#fff]"
              }`}
              onClick={() => {
                router.push("/our-services");
              }}
            >
              Our Services
            </li>
            <li
              className={`text-[16px] font-medium leading-[22px] text-[#36853A] border-b-[3px] font-inter cursor-pointer mx-4 ${
                pathname === "/about-us" ? "border-[#36853A]" : "border-[#fff]"
              }`}
              onClick={() => {
                router.push("/about-us");
              }}
            >
              About Us
            </li>
            <li
              className={`text-[16px] font-medium leading-[22px] text-[#36853A] border-b-[3px] font-inter cursor-pointer mx-4 ${
                pathname === "/who-we-serve"
                  ? "border-[#36853A]"
                  : "border-[#fff]"
              }`}
              onClick={() => {
                router.push("/who-we-serve");
              }}
            >
              Who We Serve
            </li>
            <li
              className={`text-[16px] font-medium leading-[22px] text-[#36853A] border-b-[3px] font-inter cursor-pointer mx-4 ${
                pathname === "/risk-management"
                  ? "border-[#36853A]"
                  : "border-[#fff]"
              }`}
              onClick={() => {
                router.push("/risk-management");
              }}
            >
              Risk Management
            </li>
          </ul>
        </div>
        <div className="lg:block hidden">
          <button
            className={`px-[25px] py-[13px] bg-[#C4AA49] text-[16px] font-medium text-[#fff] leading-[18px] font-inter rounded-[3px]`}
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Contact Us
          </button>
        </div>
        <div className="block lg:hidden flex items-center ">
          <div
            aria-expanded={height !== 0}
            aria-controls="panel"
            onClick={() => setHeight(height === 0 ? "auto" : 0)}
            className="cursor-pointer mb-1"
          >
            <Image
              src={require("/public/assets/home/hamburger.png")}
              alt=""
              className="w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
      <AnimateHeight
        id="panel"
        className="w-full left-0 absolute top-0 z-50"
        duration={500}
        height={height}
      >
        <div className="w-full flex flex-col justify-between h-[100vh] bg-[#36853A] p-6 ">
          <div className="flex justify-between ">
            <ul className="pt-10">
              <li
                className={`text-[18px] py-2 font-medium  roboto-font cursor-pointer ${
                  pathname === "/" ? "text-[#F2BD00]" : "text-[#fff]"
                }`}
                onClick={() => {
                  router.push("/");
                  setHeight(0);
                }}
              >
                Home
              </li>
              <li
                className={`text-[18px] py-2  font-medium roboto-font cursor-pointer ${
                  pathname === "/our-services"
                    ? "text-[#F2BD00]"
                    : "text-[#fff]"
                }`}
                onClick={() => {
                  router.push("/our-services");
                  setHeight(0);
                }}
              >
                Our Services
              </li>
              <li
                className={`text-[18px] py-2  font-medium roboto-font cursor-pointer ${
                  pathname === "/about-us" ? "text-[#F2BD00]" : "text-[#fff]"
                }`}
                onClick={() => {
                  router.push("/about-us");
                  setHeight(0);
                }}
              >
                About Us
              </li>
              <li
                className={`text-[18px] py-2  font-medium roboto-font cursor-pointer ${
                  pathname === "/who-we-serve"
                    ? "text-[#F2BD00]"
                    : "text-[#fff]"
                }`}
                onClick={() => {
                  router.push("/who-we-serve");
                  setHeight(0);
                }}
              >
                Who We Serve
              </li>
              <li
                className={`text-[18px] py-2  font-medium roboto-font cursor-pointer ${
                  pathname === "/risk-management"
                    ? "text-[#F2BD00]"
                    : "text-[#fff]"
                }`}
                onClick={() => {
                  router.push("/risk-management");
                  setHeight(0);
                }}
              >
                Risk Management
              </li>
              <li
                className={`text-[18px] py-2  font-medium roboto-font cursor-pointer ${
                  pathname === "/contact-us" ? "text-[#F2BD00]" : "text-[#fff]"
                }`}
                onClick={() => {
                  router.push("/contact-us");
                  setHeight(0);
                }}
              >
                Contact Us
              </li>
            </ul>
            <div
              className="text-[18px] font-semibold font-normal roboto-font cursor-pointer"
              onClick={() => setHeight(0)}
            >
              <Image
                src={require("/public/assets/home/Union.png")}
                alt=""
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};
export default Header;
