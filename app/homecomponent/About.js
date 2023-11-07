import Image from "next/image";
import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";

const About = () => {
  return (
    <div className="brand-container px-5 py-16 ">
      <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-between gap-5 ">
        {/* 1 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full ">
          <Image
            src={"/assest/img1.jpg"}
            width={300}
            height={100}
            alt="#"
            className=" w-full h-[700px] cursor-pointer"
          />
        </div>
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-4">
          <div>
            <h2 className="text-[red] text-[27px] font-medium">ABOUT US</h2>
            <h1 className="text-[45px] pr-5 leading-normal font-bold">
              We Are Expert <span className="text-[red] "> For Logistics</span>{" "}
              Solutions
            </h1>
          </div>
          <p className="leading-normal text-justify text-[18px] text-black font-medium">
            Impulzz cosmo impex Pvt Limited is ruling the roost with a presence
            of over many years. The company is strategically located in
            Coimbatore, in the peninsular region of India, to serve its clients
            across worldwide. Our parent company was established in 2008.
            Along-standing presence for over one decade in the region is a
            testimony of the company’s passion for quality.
          </p>
          <p className="leading-normal text-justify text-[18px] text-black font-medium">
            impulzz cosmo impex Pvt Limited is an established Exports & Imports
            Oriented Company recognized by the Government of INDIA with a
            Strength of 100+ Regular & Part time employees and over 1000+
            exclusive contract farmers. Our Core team is a mix of budding,
            well-informed, full of life, steadfast professionals who can deliver
            clientele with groundbreaking solutions to their requirements.
          </p>
          <p className="leading-normal text-justify text-[18px] text-black font-medium">
            With over 15+ years of experience in farm produce exports & imports,
            our sole moto has been to provide better-quality products at
            competitive prices, ensuring complete fulfillment to our esteemed
            customers. We are of the belief that it is our customer oriented
            strategies that has brought years of reliability along with amazing
            growth. Our mission is to Grow, Process, Preserve and Export Agro
            Products confirming to all- encompassing quality standards which
            triumphs the confidence of our esteemed customers.
          </p>
        </div>
      </div>
      {/* full */}
      <div >
        <p className="leading-normal text-justify text-[18px] text-black font-medium">
          We shall provide products and services that meet or exceed the
          expectations of our clients, while maintaining standards that are in
          compliance with the existing and envisaged quality benchmarks We offer
          our services as international brokers and consultants to our clients.
          As advisers we study price movements in the global markets, product
          trends, and conduct significant research on statistical data. This
          valuable information helps our clients in taking prompt and strategic
          business decisions. Our major strength lies in our knowledge of the
          global agriculture market which we have gathered for generations.
          Presenting our clients with different business opportunities from all
          corners help expand their product portfolio which would enable them to
          remain competitive in every market. Our ability to correctly and
          promptly assess global market psychology gives us the edge over our
          competitors. We also provide our foreign clients with comprehensive
          information about our local markets and also markets worldwide.
        </p>
        <p className="leading-normal text-justify text-[18px] text-black font-medium py-5">
          impulzz Cosmo impex Pvt Ltd has built it's connections across world
          wide markets to help you source the “right produce at the right
          quality and price“. We Invite You to Join the Path to Prosperity,
          Profit , Perfection and Peace Thank you.
        </p>
        <button className="bg-[red] text-white py-3 px-8">Explore More</button>
      </div>
    </div>
  );
};

export default About;








