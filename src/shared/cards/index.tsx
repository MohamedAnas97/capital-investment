"use client";
import Image from "next/image";

interface CardInterface {
  title: any;
  content: any;
  image: any;
}

const Card: React.FC<CardInterface> = ({ title, content, image }) => {
  return (
    <div>
      <div>
        <Image src={image} alt="" className="rounded-[8px]" />
      </div>
      <div>
        <h5 className="py-2 text-[28px] lg:text-[32px] text-[#131313] font-[500] font-inter">
          {title}
        </h5>
        <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter">
          {content}
        </p>
      </div>
    </div>
  );
};
export default Card;
