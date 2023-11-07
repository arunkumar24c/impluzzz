import Image from "next/image";
import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";

const Company = () => {
  return (
    <div className="brand-container px-5 py-10 ">
      <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-between gap-5 ">
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-8 py-4">
          <div>
            <h1>We Are Trusted Logistics Company Since 1990</h1>
          </div>
          <div className="flex flex-col justify-between gap-8">
            {/* 1st */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <BsTruck size={45} />
                </p>
              </div>
              <div>
                <h2>Worldwide Service</h2>
                <p>
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <BsTruck size={45} />
                </p>
              </div>
              <div>
                <h2>Worldwide Service</h2>
                <p>
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>
            {/* 3rd */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <BsTruck size={45} />
                </p>
              </div>
              <div>
                <h2>Worldwide Service</h2>
                <p>
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[red] text-white py-3 px-8">
              Explore More
            </button>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full ">
          <Image
            src={"/assest/img1.jpg"}
            width={300}
            height={100}
            alt="#"
            className=" w-full h-[500px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
