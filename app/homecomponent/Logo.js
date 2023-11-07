"use client";
import React, { useRef, useCallback, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Glider from "react-glider";
import "glider-js/glider.min.css";
import Image from "next/image";

const INTERVAL = 2000; // Adjust as needed
const MAX = 3; // Adjust as needed

const Logo = () => {
  const intervalRef = useRef(null);

  const startAutoScroll = useCallback((glider) => {
    if (glider) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          let index = glider.page;
          if (index < MAX) {
            index += 1;
          } else {
            index = 0;
          }
          glider.scrollItem(index, false);
        }, INTERVAL);
      }
    }
  }, []);
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="brand-container  px-5 py-10">
      <Glider
        className="glider-container"
        draggable
        
        slidesToShow={1}
        scrollLock
        ref={startAutoScroll}
        options={{
          scrollLock: true,
          draggable: true,
          rewind: true,
        }}
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
            breakpoint: 875,
            settings: {
              slidesToShow: "3",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 475,
            settings: {
              slidesToShow: "3",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
        ]}
      >
        <div>
          <Image
            src={"/assest/logo1.png"}
            width={300}
            height={100}
            alt="#"
            className=" cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={"/assest/logo1.png"}
            width={300}
            height={100}
            alt="#"
            className=" cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={"/assest/logo1.png"}
            width={300}
            height={100}
            alt="#"
            className=" cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={"/assest/logo1.png"}
            width={300}
            height={100}
            alt="#"
            className=" cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={"/assest/logo1.png"}
            width={300}
            height={100}
            alt="#"
            className=" cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={"/assest/logo1.png"}
            width={300}
            height={100}
            alt="#"
            className=" cursor-pointer"
          />
        </div>
        
      </Glider>
    </div>
  );
};

export default Logo;
