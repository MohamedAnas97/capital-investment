"use client";
import Image from "next/image";
import { title } from "process";
const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      image: require("/public/assets/home/operator1.png"),
      title: "1. Expert Team ",
      content:
        "Our team of seasoned professionals brings a wealth of experience from diverse backgrounds in finance, economics, and strategic planning. This multidisciplinary approach allows us to provide well-rounded investment strategies tailored to your needs.",
    },
    {
      id: 2,
      image: require("/public/assets/home/operator2.png"),
      title: "2. Bespoke Strategies ",
      content:
        "We understand that each investor's goals and risk tolerance are unique. That's why we offer  bespoke investment strategies designed to align with your specific objectives, ensuring your portfolio is optimized for growth and stability.",
    },
    {
      id: 3,
      image: require("/public/assets/home/operator3.png"),
      title: "3. Global Reach ",
      content:
        "With a network that spans across major financial markets worldwide, we are well-positioned to capitalize on global opportunities. Our international presence allows us to diversify portfolios and mitigate regional risks.",
    },
    {
      id: 4,
      image: require("/public/assets/home/operator4.png"),
      title: "4. Transparent Practices ",
      content:
        "We prioritize transparency and open communication. Our clients are kept informed every step of the way, ensuring complete confidence and trust in our management of their investments.",
    },
  ];
  return (
    <div className="xl:mx-[9%] sm:mx-[6%] mx-[4%] lg:flex justify-between mt-4 lg:mb-24 sm:mb-16 mb-12">
      <div className="lg:w-[30%] 2xl:w-[20%] flex items-center">
        <div>
          <div className="mb-10">
            <h2 className="2xl:text-[48px] xl:text-[42px] md:text-[36px] text-[32px] 2xl:leading-[56px] leading-[46px] text-[#C4AA49] font-semibold font-inter ">
              Why Choose Us?
            </h2>
          </div>
          <div>
            <p className="lg:text-[24px] md:text-[20px] text-[18px] md:leading-[32px] leading-[24px] text-[#000] font-normal font-inter ">
              We pride ourselves on our unwavering commitment to excellence and
              our proven track record of delivering results for our clients.
              With a team of seasoned professionals and a client-centric
              approach, we&apos;re dedicated to providing personalized service
              and strategic guidance that empowers you to achieve your financial
              goals.
            </p>
          </div>
        </div>
      </div>
      <div className=" lg:w-[65%] 2xl:w-[75%] lg:mt-0 mt-10">
        <div className="grid md:grid-cols-2 gap-8  ">
          {data?.map((items, index) => (
            <div
              key={index}
              className="border-[1px] border-[#E8E8E8] rounded-[10px]"
            >
              <div>
                <Image src={items?.image} alt="" />
              </div>
              <div className="px-4 pb-4">
                <h6 className="lg:text-[20px] text-[17px] leading-[24px] text-[#131313] font-normal font-inter py-2">
                  {items?.title}
                </h6>
                <p className="lg:text-[16px] md:text-[15px] text-[14px] leading-[20px] lg:leading-[24px] text-[#606060] font-normal font-inter">
                  {items?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
