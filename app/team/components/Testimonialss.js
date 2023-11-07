"use client";
import React, { useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsArrowRight, BsInstagram, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import "glider-js/glider.min.css";

const teamMembers = [
  {
    imgSrc: "/assest/img2.jpg",
    imgWidth: 250,
    imgHeight: 300,
    fullName: "Full Name 2",
    designation: "Designation 2",
    socialLinks: [
      { icon: BsInstagram, link: "https://www.instagram.com/" },
      { icon: BsLinkedin, link: "https://www.linkedin.com/" },
    ],
  },
  {
    imgSrc: "/assest/img2.jpg",
    imgWidth: 250,
    imgHeight: 300,
    fullName: "Full Name 2",
    designation: "Designation 2",
    socialLinks: [
      { icon: BsInstagram, link: "https://www.instagram.com/" },
      { icon: BsLinkedin, link: "https://www.linkedin.com/" },
    ],
  },
  {
    imgSrc: "/assest/img2.jpg",
    imgWidth: 250,
    imgHeight: 300,
    fullName: "Full Name 2",
    designation: "Designation 2",
    socialLinks: [
      { icon: BsInstagram, link: "https://www.instagram.com/" },
      { icon: BsLinkedin, link: "https://www.linkedin.com/" },
    ],
  },
  {
    imgSrc: "/assest/img2.jpg",
    imgWidth: 250,
    imgHeight: 300,
    fullName: "Full Name 2",
    designation: "Designation 2",
    socialLinks: [
      { icon: BsInstagram, link: "https://www.instagram.com/" },
      { icon: BsLinkedin, link: "https://www.linkedin.com/" },
    ],
  },
  {
    imgSrc: "/assest/img2.jpg",
    imgWidth: 250,
    imgHeight: 300,
    fullName: "Full Name 2",
    designation: "Designation 2",
    socialLinks: [
      { icon: BsInstagram, link: "https://www.instagram.com/" },
      { icon: BsLinkedin, link: "https://www.linkedin.com/" },
    ],
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
      
      <Glider
        className="glider-container"
        draggable
        hasDots={true}
        slidesToShow={3}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.55,
            },
          },
        ]}
      >
        {teamMembers.map((teamMember, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard teamMember={teamMember} />
          </div>
        ))}
      </Glider>
      <div className="glider-arrows flex items-center justify-center gap-3 relative">
        <button
          className="glider-arrow absolute -top-[50rem] right-[5rem]"
          onClick={handleGliderPrev}
        >
          <GoArrowLeft size={32} />
        </button>
        <button
          className="glider-arrow absolute -top-[50rem] right-[2rem]"
          onClick={handleGliderNext}
        >
          <GoArrowRight size={32} />
        </button>
      </div>
    </div>
  );
};

const PopularDestinationCard = ({ teamMember }) => {
  return (
    <div className="brand-container py-5 mt-5 px-5 hover:shadow-lg shadow-md border">
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 transition duration-300">
        <div>
          <Image
            src={teamMember.imgSrc}
            width={teamMember.imgWidth}
            height={teamMember.imgHeight}
            alt={teamMember.fullName}
            className="w-full px-5"
          />
        </div>
        <div className="px-5 flex flex-col gap-2">
          <p className="text-[22px] font-bold">{teamMember.fullName}</p>
          <p className="font-medium">{teamMember.designation}</p>
          <div className="relative cursor-pointer group">
            <div className="py-3">
              <div className="flex items-center">
                <BsArrowRight className="text-primary" size={25} />
                <div className="absolute text-black py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                  <div className="flex gap-5 items-center py-5">
                    {teamMember.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.link}
                        target="_blank"
                        className="text-[#6b7280] cursor-pointer hover:text-primary rounded-md"
                      >
                        <link.icon size={25} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
