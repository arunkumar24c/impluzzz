"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Services1 = () => {
  const blogData = [
    {
      id: 1,
      imageSrc: "/assest/blog.jpg",
      title: "15 Years Of Experience In Transportation Servicing",
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 2,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Transportation Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 3,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Transportation Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 4,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of ExpTransportation Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 5,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Tran Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 6,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Transportation  dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      elements: ["element1", "element2", "element3"],
    },
  ];
  const buttonData = [
    {
      id: 1,
      label: "Air Freight",
    },
    {
      id: 2,
      label: "Ocean Freight",
    },
    {
      id: 3,
      label: "Road Freight",
    },
    {
      id: 4,
      label: "Train Freight",
    },
    {
      id: 5,
      label: "Customs Clearance",
    },
    {
      id: 6,
      label: "WareHouse Solution",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(1);

  const handleButtonClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div>
      <div className="bg mt-[5rem] px-10 py-44">
        <h1 className="text-white text-[45px] py-2">Services</h1>
        <div className="text-white flex gap-3">
          <p>Home</p>
          <p>/</p>
          <p>Services</p>
        </div>
      </div>
      <div className="brand-container px-5 py-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[red]">// OUR SERVICES //</h2>
          <h1>Explore Our Services</h1>
          {/* card */}
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-between gap-8 py-16 ">
            {/* 1 section */}
            <div className="flex flex-col gap-2 w-full xl:w-1/2 md:w-full lg:w-1/2">
              {buttonData.map((button) => (
                <button
                  key={button.id}
                  className={`border px-5 py-3 ${
                    selectedCard === button.id ? "bg-[red] text-white" : ""
                  }`}
                  onClick={() => handleButtonClick(button.id)}
                >
                  {button.label}
                </button>
              ))}
            </div>
            {/* 2nd */}
            <div className="w-full xl:w-1/2 md:w-full lg:w-1/2">
              {blogData
                .filter((blog) => blog.id === selectedCard)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-6"
                  >
                    <div className="w-full xl:w-1/2 md:w-full lg:w-1/2">
                      <Image
                        src={blog.imageSrc}
                        width={100}
                        height={100}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full xl:w-1/2 md:w-full lg:w-1/2">
                      <h1 className="text-black font-bold leading-normal ">
                        {blog.title}
                      </h1>
                      <p className="text-[18px]  leading-normal text-justify">
                        {blog.content}
                      </p>
                      <div>
                        {blog.elements.map((element, index) => (
                          <p
                            className="flex gap-2 items-center font-medium"
                            key={index}
                          >
                            <TiTick size={25} className="text-[green]" />
                            {element}
                          </p>
                        ))}
                      </div>
                      <button className="bg-[red] text-white px-5 py-5">
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
