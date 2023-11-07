"use client"
import Image from "next/image";
import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Blog = () => {
  const blogPosts = [
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "How to build a website",
      content:
        "Dolor et eos labore stet justo sed, est sed sed sed dolor stet amet",
    },
  ];

  return (
    <div className="mt-[5rem]">
      <div className="brand-container py-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[red] font-semibold text-[24px] text-center">
            LATEST BLOG
          </h1>
          <h1 className="leading-normal text-black font-bold text-[35px] text-center ">
            Read The Latest Articles from
          </h1>
          <h1 className="leading-normal text-black font-bold text-[35px] text-center ">
            Our Blog Post
          </h1>
          <div className="py-10 grid grid-cols-1  xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-3 justify-center items-center gap-5 px-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-center gap-4"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <Image
                    src={post.imgSrc}
                    width={post.imgWidth}
                    height={post.imgHeight}
                    alt="Image Alt Text"
                    className="transition-transform transform scale-100 group-hover:scale-110 cursor-pointer w-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-3 px-2">
                  <div className="flex gap-3">
                    <p className="flex gap-2 items-center">
                      <AiFillContacts className="text-[red]" /> {post.author}
                    </p>
                    <p className="flex gap-2 items-center">
                      <AiFillContacts className="text-[red]" /> {post.date}
                    </p>
                  </div>
                  <h1 className="text-[black] font-bold">{post.title}</h1>
                  <p className="text-[18px] flex justify-center leading-normal">
                    {post.content}
                  </p>
                  <p className="flex gap-2 text-[18px] items-center text-[red]">
                    Read More
                    <BsArrowRight />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
