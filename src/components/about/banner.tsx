"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="mx-[5%] xl:mx-[7%] my-8">
        <div>
          <h2 className="text-[#36853A] font-[700] text-[38px] lg:text-[48px] font-inter text-center">
            About Us
          </h2>{" "}
        </div>
        <div className="lg:flex lg:justify-between pt-5">
          <div className="lg:w-[46%]">
            <Image
              src={require("/public/assets/about-us/banner.png")}
              alt=""
              className="h-full"
            />
          </div>
          <div className="lg:w-[50%] pt-5 lg:pt-1">
            {/* box 1 */}
            <div className="">
              <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
                Who We Are
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                Anza Capital Investment is a leading provider of wealth
                management and investment solutions, dedicated to helping
                clients achieve their financial goals with confidence. With a
                team of experienced professionals and a commitment to
                excellence, we offer personalized service and tailored
                investment strategies that empower our clients to navigate the
                complexities of the financial markets and achieve long-term
                success.
              </p>
            </div>
            {/* box 2 */}
            <div className=" py-8">
              <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
                Mission:
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                Empowering prosperity through strategic investments, integrity,
                and bespoke solutions for long-term growth
              </p>
            </div>
            {/* box 3 */}
            <div>
              <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
                Vision:
              </h4>
              <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
                To be a premier investment firm, renowned for innovation,
                excellence, and ethical leadership, and the trusted partner for
                growth and financial security.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-20">
            <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-inter px-0 mx-0">
              Venture Investing Beyond Tradition
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              At Anza Capital Investment, we believe in pushing the boundaries
              of traditional investment. Our approach extends far beyond mere
              financial backing, we are committed to nurturing early-stage
              ventures and guiding them towards sustainable growth and success.
              Here&apos;s how we do it:
            </p>
          </div>
          <div className="pt-8">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Investing in Early-Stage Ventures
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              We are dedicated to supporting the dreams of global entrepreneurs
              by providing seed funding and strategic guidance to promising
              startups. Our comprehensive approach and diverse resources empower
              budding businesses to navigate the challenges of the early stages
              of their journey. Whether it&apos;s capital infusion or
              mentorship, we&apos;re here to fuel the aspirations of visionary
              founders and transform innovative ideas into reality.
            </p>
          </div>
          <div className="py-3">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Guidance and Growth
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Our seasoned team goes beyond just providing financial support; we
              offer incubation and active management services aimed at
              developing the skills of founders, shaping effective strategies,
              and fostering meaningful connections. Through personalized
              mentorship and strategic guidance, we empower entrepreneurs to
              overcome obstacles and achieve sustainable growth. At Anza Capital
              Investment, we believe in becoming partners in our investors&apos;
              journeys, guiding them every step of the way towards success.
            </p>
          </div>
          <div className="py-3">
            <h4 className="text-[#36853A] text-[22px] lg:text-[24px] font-inter px-0 mx-0">
              Facilitating Market Access
            </h4>
            <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
              Breaking into the market can be challenging for new businesses,
              but with Anza Capital Investment, you&apos;ll be poised to lead
              the UAE market in no time. Our objective is to champion every
              unique idea until it thrives in the market. Leveraging our
              extensive industry networks and market expertise, we provide our
              portfolio companies with unparalleled access to resources,
              partnerships, and opportunities. From market research to strategic
              introductions, we help our startups overcome barriers and reach
              their target markets faster, setting them up for long-term
              success.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <Image
          src={require("/public/assets/about-us/image2.png")}
          alt=""
          className="h-full"
        />
      </div>
      <div className="mx-[5%] xl:mx-[7%]">
        <div className="pt-7">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Our Key Focus
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Anza Capital Investment is significantly committed to ideations and
            ventures that make profound differences in society.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza Investments
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Anza Investments leads the Anza Group&apos;s projects by finding
            exciting business opportunities. We dedicate our time and effort to
            new and unique business projects to help them grow. Our goal is to
            help emerging entrepreneurs and businesses reach their target goals,
            improve the economy, and make a positive impact through innovation.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza GT
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Specializing in petroleum products trading and involvement in the
            oil and gas sector, Anza GT is committed to distributing
            petrochemicals and commodities worldwide. Our affiliation with the
            prestigious ANZA Investment Group shows our commitment to growth in
            the industry.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza Real Estate
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            With our innovative &apos;Own Now, Pay Later&apos; model, Anza Real
            Estate transforms property ownership. We help individuals to own
            properties through flexible payment options, such as Pay as You
            Earn, making real estate investment accessible and achievable for a
            broader population.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza Events & Expo
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Anza Events & Expo is known for organizing events and exhibitions to
            create memorable experiences for attendees and clients alike. We
            carefully plan and carry out our events to ensure they are
            successful and have a big impact on the audience.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza Sports Management
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Anza Sports Management is dedicated to nurturing athletic talent and
            organizing sporting events that inspire and engage audiences. With a
            focus on professionalism and integrity, we support athletes in
            reaching their full potential.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza Tour and Travels
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Anza Tour and Travels handles a range of travel services so that
            every part of your travel, from booking flights to reserving hotel
            and tour packages, is simple without added burden. We want to make
            travel planning easy and enjoyable for our clients.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza Exchange
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Anza Exchange simplifies currency exchange and international
            remittance services, providing customers with competitive rates and
            efficient transaction processing. With a focus on convenience and
            reliability, we aim to simplify financial transactions for both
            individual investors and businesses.
          </p>
        </div>
        <div className="pt-10">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Anza Business Setup
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Anza Business Setup is introduced to make the process of starting
            and expanding businesses easy by offering comprehensive consulting
            and support services. From company registration to operational
            setup, we guide entrepreneurs every step of the way.
          </p>
        </div>
        <div className="pt-10 pb-28">
          <h4 className="text-[#36853A] text-[32px] lg:text-[36px] font-[700] font-inter px-0 mx-0">
            Kelorax Energy
          </h4>
          <p className="text-[16px] text-[#606060] font-[400] leading-[24px] font-inter px-1 py-1">
            Kelorax Energy FZE is committed to leading the market with
            sustainable energy solutions. From sourcing petroleum products to
            consultancy services in the oil and gas industry, we uphold
            principles of Responsible Care and continuous improvement,
            delivering value to customers while ensuring energy security.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
