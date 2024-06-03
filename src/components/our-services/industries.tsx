"use client";
import Card from "@/shared/cards";

const Industries = () => {
  const AllCards = [
    {
      id: 1,
      image: require("/public/assets/our-services/card1.png"),
      content:
        "Real Estate: Invest in dynamic markets with opportunities in residential and commercial developments. Our expertise helps identify promising investments for stable income and long-term appreciation. ",
      title: "Real Estate ",
    },
    {
      id: 2,
      image: require("/public/assets/our-services/card2.png"),
      content:
        "Invest in the future with opportunities in the rapidly evolving technology sector. From innovative startups to established tech giants, technology investments offer the potential for significant growth and disruption across various industries. With our strategic insights and industry expertise, we help our clients navigate the complex technology landscape and capitalize on emerging trends. ",
      title: "Technology ",
    },
    {
      id: 3,
      image: require("/public/assets/our-services/card3.png"),
      content:
        "Capitalizing on the growing demand for healthcare services, investments in the healthcare sector offer opportunities for both financial returns and social impact. From pharmaceuticals and biotechnology to medical devices and healthcare services, the healthcare industry presents diverse investment opportunities driven by innovation and demographic trends. Our healthcare investment strategies are designed to identify promising opportunities and generate positive outcomes for our clients.",
      title: "Healthcare",
    },
    {
      id: 4,
      image: require("/public/assets/our-services/card4.png"),
      content:
        "Support sustainable growth and environmental stewardship through investments in renewable energy. With the transition to clean energy sources gaining momentum globally, renewable energy investments offer opportunities for both financial returns and positive environmental impact. From solar and wind to hydroelectric and geothermal projects, our renewable energy investment strategies aim to drive sustainable growth while delivering attractive returns for our clients.",
      title: "Renewable Energy ",
    },
    {
      id: 5,
      image: require("/public/assets/our-services/card5.png"),
      content:
        "Invest in essential infrastructure projects that drive economic growth and development. Infrastructure investments encompass a wide range of sectors, including transportation, utilities, telecommunications, and more. These investments offer stable cash flows, long-term income generation, and the potential for capital appreciation. Our infrastructure investment strategies focus on identifying projects that address critical infrastructure needs and deliver value for our clients and communities.",
      title: "Infrastructure ",
    },
    {
      id: 6,
      image: require("/public/assets/our-services/card6.png"),
      content:
        "In addition to the key sectors mentioned above, we offer investment opportunities across various industries and asset classes. From consumer goods and financial services to manufacturing and beyond, our investment strategies are designed to capitalize on diverse market opportunities and deliver strong returns for our clients. ",
      title: "And More ",
    },
  ];
  return (
    <div className="mx-[5%] xl:mx-[7%] my-14">
      <h2 className="text-[#36853A] font-[700] text-[38px] lg:text-[48px]">
        Explore Opportunities Across Industries:
      </h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-8 py-5">
        {AllCards?.map((item, index) => (
          <div key={index} className="">
            <Card
              title={item?.title}
              content={item?.content}
              image={item?.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Industries;
