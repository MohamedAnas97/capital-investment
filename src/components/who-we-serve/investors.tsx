"use client";
import Image from "next/image";

const investors = () => {
  return (
    <div className="mx-[5%] xl:mx-[7%]">
      {/* box 1 */}
      <div className="lg:flex lg:justify-between  my-16">
        <div className="lg:w-[47%]">
          <Image
            src={require("/public/assets/who-we-serve/card4.png")}
            alt=""
            className="h-full"
          />
        </div>
        <div className="lg:w-[50%] pt-5 lg:pt-0">
          {/* box 1 */}
          <div className="">
            <h4 className="text-[#36853A] text-[42px] lg:text-[48px] font-inter px-0 mx-0 leading-[60px]">
              Individual Investors & Financial Advisors:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[30px] font-inter px-1 py-1">
              Wealth Preservation: Robust wealth preservation strategies to
              safeguard assets from market volatility, inflation, and unforeseen
              life events, preserving capital for future generations and
              charitable giving.
            </p>
          </div>
          {/* box 2 */}
          <div className="py-5">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-[400] font-inter px-0 mx-0">
              Financial Planning:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[30px] font-inter px-1 py-1">
              Holistic financial planning services encompassing cash flow
              analysis, retirement planning, tax optimization, insurance
              coverage assessment, and legacy planning to achieve comprehensive
              financial security and peace of mind.
            </p>
          </div>
          {/* box 3 */}
          <div>
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-[400] font-inter px-0 mx-0">
              Specialized Client Services:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] font-[400] leading-[30px] font-inter px-1 py-1">
              Holistic financial planning services encompassing cash flow
              analysis, retirement planning, tax optimization, insurance
              coverage assessment, and legacy planning to achieve comprehensive
              financial security and peace of mind.
            </p>
          </div>
        </div>
      </div>
      {/* box 2 */}
      <div className="lg:flex lg:justify-between  mt-20 mb-20 lg:mb-36">
        <div className="lg:w-[47%]">
          <Image
            src={require("/public/assets/who-we-serve/card5.png")}
            alt=""
            className="h-full"
          />
        </div>
        <div className="lg:w-[50%] pt-5 lg:pt-0">
          {/* box 1 */}
          <div className="">
            <h4 className="text-[#36853A] text-[42px] lg:text-[48px] font-inter px-0 mx-0 leading-[60px]">
              Insurance:
            </h4>
          </div>
          {/* box 2 */}
          <div className="pt-2">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-[400] font-inter px-0 mx-0">
              Annuity Providers:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[30px] font-inter px-1 py-1">
              Investment solutions tailored to support annuity products,
              including fixed annuities, variable annuities, and indexed
              annuities, to generate stable income streams and mitigate
              longevity risk for policyholders.
            </p>
          </div>
          {/* box 3 */}
          <div className="py-5">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-[400] font-inter px-0 mx-0">
              Health Insurance Companies:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[30px] font-inter px-1 py-1">
              Strategic asset allocation strategies to manage investment income
              volatility and regulatory capital requirements, ensuring the
              financial stability and solvency of health insurance portfolios
              amid changing market conditions.
            </p>
          </div>
          {/* box 3 */}
          <div>
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-[400] font-inter px-0 mx-0">
              Global Reinsurers:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] font-[400] leading-[30px] font-inter px-1 py-1">
              Collaborative risk transfer solutions and asset management
              services to optimize capital efficiency, enhance underwriting
              capacity, and protect against catastrophic losses, strengthening
              the resilience and competitiveness of global reinsurance
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default investors;
