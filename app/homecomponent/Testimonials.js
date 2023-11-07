"use client"
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsStarFill, BsStar } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";
import "glider-js/glider.min.css";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    stars: 3,
    location: "New York",
    quote:
      "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet, Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
  },
  {
    id: 2,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem nec varius consectetur.",
  },
  {
    id: 3,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem nec varius consectetur.",
  },
  {
    id: 4,
    name: "Jane Smith",
    stars: 3,
    location: "Los Angeles",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem nec varius consectetur.",
  },
  {
    id: 5,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem nec varius consectetur.",
  },
  {
    id: 6,
    name: "Jane Smith",
    stars: 2,
    location: "Los Angeles",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem nec varius consectetur.",
  },
  {
    id: 7,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem nec varius consectetur.",
  },
];

const Testimonials = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="relative container mx-auto py-16 mt-10">
      <div className="py-10">
        <p className="font-bold text-[20px] text-[red] text-center mb-3">
          Testimonials
        </p>
        <h1 className="text-[24px] font-bold text-center">Our Clients Say!</h1>
      </div>
      <Glider
        className="glider-container"
        draggable
        hasDots={true}
        slidesToShow={1}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "3",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "2",
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
        {testimonialData.map((testimonial) => (
          <div className="mx-2" key={testimonial.id}>
            <PopularDestinationCard {...testimonial} />
          </div>
        ))}
      </Glider>
      <div className="glider-arrows flex items-center justify-center gap-3 relative">
        <button
          className="glider-arrow absolute bottom-[18rem] right-[5rem]"
          onClick={handleGliderPrev}
        >
          <GoArrowLeft size={32} />
        </button>
        <button
          className="glider-arrow absolute bottom-[18rem] right-[2rem]"
          onClick={handleGliderNext}
        >
          <GoArrowRight size={32}  />
        </button>
      </div>
    </div>
  );
};

const PopularDestinationCard = ({ id, name, stars, location, quote }) => {
  return (
    <div className="brand-container py-5 mt-5 px-5 hover:shadow-lg shadow-md border ">
      <div className="relative">
        <div className="flex flex-col gap-4 px-5 py-7">
          <div className="flex items-center gap-2">
            <Image
              src="/assest/testimonial.jpg"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <div className="flex gap-2">
                <p>{name}</p>
                {Array.from({ length: stars }, (_, i) => (
                  <p className="text-[red]" key={i}>
                    <BsStarFill />
                  </p>
                ))}
                {Array.from({ length: 5 - stars }, (_, i) => (
                  <p key={i}>
                    <BsStar />
                  </p>
                ))}
              </div>
              <p>{location}</p>
            </div>
          </div>
          <div>
            <p>{quote}</p>
          </div>
        </div>
        <div className="absolute -top-[44px] right-4">
          <ImQuotesRight size={45} className="text-[red]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
