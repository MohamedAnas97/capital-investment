"use client";
import Image from "next/image";

const Industries = () => {
  return (
    <div className="mx-[5%] xl:mx-[7%] mb-20">
      <div>
        <h2 className="text-[#36853A] font-[700] text-[38px] lg:text-[48px] font-inter">
          The Anza Capital Investment Advantage
        </h2>{" "}
      </div>
      <div className="lg:flex lg:justify-between py-4">
        <div className="lg:w-[50%]">
          <Image
            src={require("/public/assets/our-services/advantage.png")}
            alt=""
            className="h-full"
          />
        </div>
        <div className="lg:w-[48%] pt-5 lg:pt-0">
          {/* box 1 */}
          <div className="">
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Custom Solutions Tailored to Your Needs:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              No two investors are alike, which is why we offer personalized
              investment solutions tailored to your unique financial objectives,
              risk tolerance, and time horizon. Whether you&apos;re a seasoned
              investor or just starting out, our team of experienced advisors is
              here to help you navigate the complexities of the financial
              markets and make informed investment decisions.
            </p>
          </div>
          {/* box 2 */}
          <div className=" py-8">
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Proven Results:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              At Anza Capital Investment, we&apos;re committed to delivering superior
              investment performance and helping our clients achieve their
              financial goals. With a track record of success and a focus on
              long-term value creation, we&apos;re dedicated to generating strong
              returns for our clients while managing risk effectively.
            </p>
          </div>
          {/* box 3 */}
          <div>
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Risk Management:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Investing involves risk, but with Anza Capital Investment, you can
              invest with confidence knowing that your investments are managed
              by seasoned professionals who prioritize risk management and
              capital preservation. From diversification to asset allocation and
              portfolio rebalancing, we employ a disciplined approach to
              managing risk and optimizing returns for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Industries;
