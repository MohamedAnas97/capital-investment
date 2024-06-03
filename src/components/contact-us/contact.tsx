"use client";
import Image from "next/image";

const Management = () => {
  return (
    <div>
      <div className="">
        <div className="contact-banner-bg py-20">
          <div className="mx-[5%] xl:mx-[7%] ">
            <div className="w-[100%] lg:w-[60%] xl:w-[55%] wxl:w-[40%] 3xl:w-[40%] bg-[#00000066] p-5 rounded-[5px]">
              {/* box 1 */}
              <div className="">
                <h4 className="text-[#fff] text-[42px] lg:text-[48px] font-[700] font-inter px-0 mx-0 leading-[60px] text-left font-inter">
                  Contact Us
                </h4>
                <p className="text-[16px] text-[#fff] font-[400] leading-[24px] font-inter px-1 py-5 text-left font-inter">
                  Contact Us Today: Have questions about our investment
                  strategies or want to explore partnership opportunities? Our
                  team is here to assist you. Reach out using the information
                  below
                </p>
              </div>
              {/* box 1 */}
              <div className="">
                <h4 className="text-[#fff] text-[24px] font-[500] font-inter px-0 mx-0 font-inter">
                  Our Contact Information:
                </h4>
              </div>
              {/* box 2 */}
              <div className="pt-3 flex flex-col md:flex-row md:items-center px-2">
                <h4 className="text-[#fff] text-[16px] font-inter px-0 mx-0 font-inter">
                  Address:
                </h4>
                <p className="text-[16px] text-[#fff] font-[400] leading-[24px] font-inter md:px-3 md:pt-1 pt-2 font-inter">
                  EMAAR Square, Building #1, 5th Floor, Office #503, Dubai, UAE
                </p>
              </div>
              {/* box 3 */}
              <div className="pt-3 flex flex-col md:flex-row md:items-center px-2">
                <h4 className="text-[#fff] text-[16px] font-inter px-0 mx-0 font-inter">
                  Phone:
                </h4>
                <p className="text-[16px] text-[#fff] font-[400] leading-[24px] font-inter md:px-3 md:pt-1 pt-2 font-inter">
                  +971 54 701 6344
                </p>
              </div>
              {/* box 4 */}
              <div className="pt-3 flex flex-col md:flex-row md:items-center px-2">
                <h4 className="text-[#fff] text-[16px] font-inter px-0 mx-0 font-inter">
                  Email:
                </h4>
                <p className="text-[16px] text-[#fff] font-[400] leading-[24px] font-inter md:px-3 md:pt-1 pt-2 font-inter">
                  sales@anzagt.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[5%] lg:mx-[7%]">
          <div className="pt-10 pb-6">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0 font-inter">
              Client Services:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1 font-inter">
              For general inquiries, please email [General Inquiry Email
              Address].
            </p>
          </div>
          <div className="">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0 font-inter">
              Media Inquiries:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1 font-inter">
              For media inquiries or interview requests, please contact our
              Media Relations team at [Media Inquiry Email Address].
            </p>
          </div>
          <div className="pt-6">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0 font-inter">
              Stay Connected:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1 font-inter">
              Follow us on social media to stay updated on the latest news,
              market insights, and investment trends:
            </p>
          </div>
          <div className="pt-6 flex items-center">
            <div>
              <Image
                src={require("/public/assets/contact-us/facebook.png")}
                alt=""
                className="h-[22px] w-[22px]"
              />
            </div>
            <div className="mx-3 sm:mx-5">
              <Image
                src={require("/public/assets/contact-us/instagram.png")}
                alt=""
                className="h-[20px] w-[20px]"
              />
            </div>
            <div>
              <Image
                src={require("/public/assets/contact-us/twitter.png")}
                alt=""
                className="h-[20px] w-[20px]"
              />
            </div>
            <div className="mx-3 sm:mx-5">
              <Image
                src={require("/public/assets/contact-us/linkedIn.png")}
                alt=""
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="w-full bg-[green] py-11 mt-10 mb-32">
        <div className="mx-[5%] xl:mx-[7%] ">
          <p className="font-[700] text-[24px] leading-[30px] text-white text-center font-inter">
            Thank you for considering Anza Capital Investment. We look forward
            to hearing from you and assisting you with your investment needs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Management;
