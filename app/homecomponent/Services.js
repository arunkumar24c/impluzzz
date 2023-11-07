import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  const serviceData = [
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
  ];

  return (
    <div>
      <div className="brand-container px-5 py-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-xl text-[red] ">OUR SERVICES</h1>
          <h1 className="text-3xl font-semibold">Explore Our Services</h1>

          <div className="py-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 justify-center gap-8 px-5">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5"
              >
                <div>
                  <Image
                    src={service.imgSrc}
                    width={service.imgWidth}
                    height={service.imgHeight}
                    alt="#"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold">{service.title}</h1>
                  <p>{service.content}</p>
                  <div className="relative cursor-pointer group">
                    <div className="mt-2">
                      <p className="flex items-center">
                        <BsArrowRight className="" size={25} />
                        <span className="absolute text-black py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                          Read more
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
