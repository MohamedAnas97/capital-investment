"use client";
import Image from "next/image";

const Management = () => {
  const AllCards = [
    {
      id: 1,
      image: require("/public/assets/risk-management/card1.png"),
      content:
        "At Anza Capital Investment, we believe that informed investors are empowered investors. That&apos;s why we&apos;re committed to providing our clients with transparent and accessible information about our risk management practices and investment strategies. Through educational resources, timely market updates, and personalized guidance, we empower our clients to make well-informed decisions that align with their financial goals and risk tolerance.",
      title: "Empowering Investors Through Education and Transparency ",
    },
    {
      id: 2,
      image: require("/public/assets/risk-management/card2.png"),
      content:
        "Whether you&apos;re a high-net-worth individual, institutional investor, or financial advisor, Anza Capital Investment is your trusted partner for effective risk management and prudent investing. With our proven track record, transparent approach, and unwavering commitment to client satisfaction, we&apos;re here to help you navigate the complexities of the financial markets and achieve your long-term investment objectives.",
      title: "Partner With Us for Peace of Mind ",
    },
  ];
  return (
    <div>
      <div className="mx-[5%] xl:mx-[7%] my-14">
        <div className="lg:flex lg:justify-between py-2">
          <div className="lg:w-[48%]">
            <Image
              src={require("/public/assets/risk-management/card3.png")}
              alt=""
              className="h-full"
            />
          </div>
          <div className="lg:w-[50%] pt-5 lg:pt-0">
            {/* box 1 */}
            <div className="">
              <h4 className="text-[#36853A] text-[42px] lg:text-[48px] font-[700] font-inter px-0 mx-0 leading-[60px]">
                Our Comprehensive Risk Management Framework
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                Wealth Preservation: Robust wealth preservation strategies to
                safeguard assets from market volatility, inflation, and
                unforeseen life events, preserving capital for future
                generations and charitable giving.
              </p>
            </div>
            {/* box 1 */}
            <div className="pt-3">
              <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
                Thorough Risk Assessment:
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                We conduct rigorous risk assessments to identify potential
                threats to our clients&apos; investment portfolios. By analyzing
                factors such as market volatility, credit quality, and
                liquidity, we gain a comprehensive understanding of the risks
                inherent in each investment opportunity.
              </p>
            </div>
            {/* box 2 */}
            <div className=" py-4">
              <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
                Specialized Client Services:
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                Holistic financial planning services encompassing cash flow
                analysis, retirement planning, tax optimization, insurance
                coverage assessment, and legacy planning to achieve
                comprehensive financial security and peace of mind.
              </p>
            </div>
            {/* box 3 after xl */}
            <div className="hidden 2xl:block pt-5 2xl:pt-0">
              <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
                Diversification Strategies:
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                We believe in the power of diversification to help spread risk
                across different asset classes, sectors, and geographic regions.
                Our diversified investment approach aims to reduce portfolio
                volatility and minimize the impact of adverse market movements.
              </p>
            </div>
            {/* box 4 */}
            <div className="3xl:pt-6 hidden 3xl:block">
              <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
                Active Monitoring and Adjustment:
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                Markets are constantly evolving, and so are our risk management
                strategies. We actively monitor market trends, economic
                indicators, and geopolitical developments to identify emerging
                risks and adjust our investment allocations accordingly.
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* box 3 only for xl*/}
          <div className="block 2xl:hidden lg:py-5 pb-6">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Diversification Strategies:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              We believe in the power of diversification to help spread risk
              across different asset classes, sectors, and geographic regions.
              Our diversified investment approach aims to reduce portfolio
              volatility and minimize the impact of adverse market movements.
            </p>
          </div>
          {/* box 4 */}
          <div className="2xl:pt-4 block 3xl:hidden">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Active Monitoring and Adjustment:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Markets are constantly evolving, and so are our risk management
              strategies. We actively monitor market trends, economic
              indicators, and geopolitical developments to identify emerging
              risks and adjust our investment allocations accordingly.
            </p>
          </div>
          {/* box 5 */}
          <div className="py-6">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Stress Testing and Scenario Analysis:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              We utilize advanced risk modeling techniques, including stress
              testing and scenario analysis, to assess the potential impact of
              extreme market events on our clients&apos; portfolios. By stress
              testing our investment strategies under various scenarios, we can
              better prepare for adverse market conditions and mitigate downside
              risk.
            </p>
          </div>
          {/* box 7 */}
          <div>
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Compliance and Regulatory Oversight:
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Regulatory compliance is a critical component of our risk
              management framework. We adhere to strict regulatory standards and
              conduct regular audits to ensure compliance with applicable laws
              and regulations.
            </p>
          </div>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-8 pt-20 pb-12">
          {AllCards?.map((item, index) => (
            <div key={index}>
              <div>
                <Image src={item?.image} alt="" className="" />
              </div>
              <div>
                <h5 className="py-3 text-[22px] lg:text-[24px] text-[#36853A] font-[500] font-inter">
                  {item?.title}
                </h5>
                <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter">
                  {item?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* banner */}
      <div className="w-full bg-[green] py-11">
        <div className="mx-[5%] xl:mx-[7%] ">
          <p className="font-[700] text-[24px] leading-[30px] text-white text-center lg:text-left">
            Ready to take control of your investment risks? Contact us today to
            learn more about our risk management solutions and how we can help
            you build a resilient investment portfolio for the future.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-20 lg:mb-32">
        <button className="px-[25px] py-[13px] bg-[#C4AA49] text-[16px] font-medium text-[#fff] leading-[18px] font-inter rounded-[3px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};
export default Management;
