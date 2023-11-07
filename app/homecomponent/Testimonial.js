"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import "glider-js/glider.min.css";

const data = [
  {
    name: "TRANSPORT & LOGISITICS SOLUTION",
    Founder: "FAST AND MORE TRUSTED ",
    Founders:"TRANSPORT",
    span:"SERVICES",

    content:
      "Sometimes the challenges we face with our pets may seem overwhelming.  Sometimes we feel helpless and hopeless. ",
    url: "/assest/slider-1.gif",
    button: "Read More ",
    button1: "Free Quotes",
  },
  {
    name: "TRANSPORT & LOGISITICS SOLUTION",
    Founder: "FAST AND MORE TRUSTED ",
    Founders:"TRANSPORT",
    span:"SERVICES",

    content:
      "Sometimes the challenges we face with our pets may seem overwhelming.  Sometimes we feel helpless and hopeless. ",
    url: "/assest/slider-1.gif",
    button: "Read More ",
    button1: "Free Quotes",
  },

  {
    name: "TRANSPORT & LOGISITICS SOLUTION",
    Founder: "FAST AND MORE TRUSTED ",
    Founders:"TRANSPORT",
    span:"SERVICES",

    content:
      "Sometimes the challenges we face with our pets may seem overwhelming.  Sometimes we feel helpless and hopeless. ",
    url: "/assest/slider-3.jpg",
    button: "Read More ",
    button1: "Free Quotes",
  },
];

const Testimonial = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="relative  py-16 ">
      <Glider
        className="glider-container"
        draggable
        hasDots={false}
        slidesToShow={1}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.55,
            },
          },
        ]}
      >
        {data.map((values, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard {...values} />
          </div>
        ))}
      </Glider>
      <div className="relative">
        <div className="glider-arrows flex flex-col items-center justify-center gap-3">
          <button
            className=" absolute right-[5.5rem] bottom-[19rem] glider-arrow  bg-transparent border text-white px-3 py-3 rounded-2xl hover:bg-[red]/70"
            onClick={handleGliderPrev}
          >
            <GoArrowLeft size={32} />
          </button>
          <button
            className="absolute right-[5.5rem]  bottom-[23rem] glider-arrow   bg-transparent border text-white px-3 py-3 rounded-2xl hover:bg-[red]/70"
            onClick={handleGliderNext}
          >
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-[80vh] py-10"
    >
      <div className=" py-28 px-10">
        <div className="text-white py-16 flex flex-col gap-6 justify-start items-start  px-10">
          {/* text */}
          <h1 className="text-[24px] font-bold text-[red]">{props.name}</h1>
          <h1 className="text-[35px] text-white ">{props.Founder}</h1>
          <h1 className="text-[35px] text-[red] flex gap-2 ">
            {props.Founders} <span className="text-white">{props.span}</span>
          </h1>
          <p className="leading-normal text-justify text-[18px] xl:w-[32rem] lg:w-[28rem] md:w-[28rem] w-full">
            {props.content}
          </p>
          {/* button  */}
          <div className="flex gap-4 ">
            <button className="bg-[red] px-5 py-3 hover:bg-[red]/60">
              {props.button}
            </button>
            <button className="bg-[#05103b] px-5 py-3 hover:bg-[#05103b]/60">
              {props.button1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
