"use client";
import Image from "next/image";
const OurInvestment = () => {
  const data = [
    {
      id: 1,
      image: require("/public/assets/home/image1.png"),
      content: "Private Equity ",
      spancontent: "Funds ",
    },
    {
      id: 2,
      image: require("/public/assets/home/image3.png"),
      content: "Venture ",
      spancontent: "Capital Funds ",
    },
    {
      id: 3,
      image: require("/public/assets/home/image4.png"),
      content: "Real Estate",
      spancontent: "Investments",
    },
    {
      id: 4,
      image: require("/public/assets/home/image5.png"),
      content: "Infrastructure",
      spancontent: "Funds ",
    },
    {
      id: 5,
      image: require("/public/assets/home/image6.png"),
      content: "Hedge",
      spancontent: "Funds ",
    },
    {
      id: 6,
      image: require("/public/assets/home/image7.png"),
      content: "Fixed Income ",
      spancontent: "Funds ",
    },
    {
      id: 7,
      image: require("/public/assets/home/image8.png"),
      content: " Mutual Funds  ",
      spancontent: "",
    },
    {
      id: 8,
      image: require("/public/assets/home/image9.png"),
      content: "Insurance-",
      spancontent: "Linked Securities  ",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="xl:text-[48px] lg:text-[38px] md:text-[32px] text-[30px] xl:leading-[52px] md:leading-[42px] leading-[32px] text-center font-semibold font-inter text-[#C4AA49] ">
          Our Investment Vehicles
        </h1>
      </div>
      <div className="xl:pt-20 2xl:pb-8 xl:pb-4 pt-12 pb-2 xl:mx-[11%] lg:mx-[9%] sm:mx-[6%] mx-[4%] grid sm:grid-cols-2 lg:grid-cols-4 gap-x-16 xl:gap-x-24 gap-y-8 xl:gap-y-12 ">
        {data?.map((items, index) => (
          <div key={index}>
            <div>
              <Image src={items?.image} alt="" />
            </div>
            <h3 className="2xl:text-[32px] lg:text-[25px] text-[22px] text-center font-semibold font-inter text-[#000] leading-[25px] lg:leading-[32px] 2xl:leading-[39px] tracking-tight pt-2">
              {items?.content} <br /> <span>{items?.spancontent}</span>{" "}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurInvestment;
