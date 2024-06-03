"use client";
import Card from "@/shared/cards";

const Clients = () => {
  const AllCards = [
    {
      id: 1,
      image: require("/public/assets/who-we-serve/card1.png"),
      content:
        "Partnering with endowments and foundations to align investment strategies with organizational goals, ensuring sustainable funding for charitable initiatives and mission-driven activities.",
      title: "Endowments & Foundations: ",
    },
    {
      id: 2,
      image: require("/public/assets/who-we-serve/card2.png"),
      content:
        "Proven expertise in managing public pension assets to meet long-term obligations, with a focus on prudent risk management, asset diversification, and performance benchmarking against industry peers.",
      title: "Public Pension Plans: ",
    },
    {
      id: 3,
      image: require("/public/assets/who-we-serve/card3.png"),
      content:
        "Customized treasury management solutions to optimize cash flows, maximize returns on excess liquidity, and mitigate financial risks, supporting corporate growth objectives and capital allocation priorities.",
      title: "Corporate Treasury Departments:",
    },
  ];
  return (
    <div className="mx-[5%] xl:mx-[7%] my-10">
      <h2 className="text-[#36853A] font-[700] text-[42px] lg:text-[48px] text-center">
        Institutional Clients:
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-8 py-5">
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
export default Clients;
