"use client";
import Image from "next/image";

const Industries = () => {
  return (
    <div className="mx-[5%] xl:mx-[7%] my-14">
      <div>
        <h2 className="text-[#36853A] font-[700] text-[38px] lg:text-[48px] font-inter">
          Our Investment Vehicles:
        </h2>{" "}
        <p className="text-[20px] text-[#000000] font-[400px] py-4 font-inter">
          We offer a diverse range of investment vehicles tailored to meet the
          unique needs and goals of our clients. Each vehicle is designed to
          provide strategic opportunities for growth, risk management, and value
          creation.
        </p>
      </div>
      <div className="lg:flex lg:justify-between py-2">
        <div className="lg:w-[48%]">
          <Image
            src={require("/public/assets/our-services/investment.png")}
            alt=""
            className="h-full"
          />
        </div>
        <div className="lg:w-[48%] pt-5 lg:pt-0">
          {/* box 1 */}
          <div className="">
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              1. Private Equity Funds
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Our private equity funds focus on acquiring significant equity
              stakes in high-potential companies across various sectors. We work
              closely with management teams to drive operational improvements,
              strategic growth, and value enhancement.
            </p>
          </div>
          {/* box 2 */}
          <div className=" py-8">
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              2. Venture Capital Funds
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Targeting early-stage companies with innovative business models
              and technologies, our venture capital funds provide the capital
              and expertise needed to accelerate growth and bring breakthrough
              ideas to market.
            </p>
          </div>
          {/* box 3 */}
          <div>
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              3. Real Estate Investments
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              We invest in prime real estate properties and development projects
              that offer attractive returns and capital appreciation. Our
              portfolio includes commercial, residential, and mixed-use
              properties in high-demand locations.
            </p>
          </div>
          {/* box 4 after xl */}
          <div className="hidden 2xl:block pt-8">
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              4. Infrastructure Funds
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Our infrastructure funds are dedicated to investing in essential
              infrastructure projects such as transportation, energy, and
              telecommunications. These investments are aimed at fostering
              sustainable economic growth and development.
            </p>
          </div>
          {/* box 5 */}
          <div className="3xl:pt-8 hidden 3xl:block">
            <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              5. Hedge Funds
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Our infrastructure funds are dedicated to investing in essential
              infrastructure projects such as transportation, energy, and
              telecommunications. These investments are aimed at fostering
              sustainable economic growth and development.
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* box 4 only for xl*/}
        <div className="block 2xl:hidden py-6">
          <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
            4. Infrastructure Funds
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Our infrastructure funds are dedicated to investing in essential
            infrastructure projects such as transportation, energy, and
            telecommunications. These investments are aimed at fostering
            sustainable economic growth and development.
          </p>
        </div>
        {/* box 5 */}
        <div className="2xl:pt-6 block 3xl:hidden">
          <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
            5. Hedge Funds
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Our infrastructure funds are dedicated to investing in essential
            infrastructure projects such as transportation, energy, and
            telecommunications. These investments are aimed at fostering
            sustainable economic growth and development.
          </p>
        </div>
        {/* box 6 */}
        <div className="py-8">
          <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
            6. Fixed Income Funds
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Focusing on bonds and other fixed income securities, our fixed
            income funds provide stable returns and income generation. These
            funds are ideal for investors seeking lower volatility and capital
            preservation.
          </p>
        </div>
        {/* box 7 */}
        <div>
          <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
            7. Mutual Funds
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Our mutual funds offer diversified exposure to various asset
            classes, including equities, fixed income, and commodities. Managed
            by experienced professionals, these funds cater to different risk
            appetites and investment horizons.
          </p>
        </div>
        {/* box 8 */}
        <div className="headline py-8">
          <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
            8. Insurance-Linked Securities
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            We offer investment opportunities in insurance-linked securities
            (ILS) that provide returns uncorrelated with traditional financial
            markets. These securities allow investors to gain exposure to the
            insurance risk market.
          </p>
        </div>
        {/* box 9 */}
        <div className="headline">
          <h4 className="text-[#131313] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
            9. Impact Investment Funds
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Dedicated to generating positive social and environmental impact
            alongside financial returns, our impact investment funds support
            projects and businesses that contribute to sustainable development
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Industries;
