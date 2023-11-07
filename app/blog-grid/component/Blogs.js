import Image from "next/image";
import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

const Blogs = () => {
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
    <div>
      <div className="brand-container py-10 px-5">
        <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row gap-4">
          {/* left */}
          <div className="w-full xl:w-1/2 md:w-full lg:w-1/2">
            <div className="py-10 grid grid-cols-1  xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1 justify-center items-center gap-5 px-10">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center  gap-4"
                >
                  <div>
                    <Image
                      src={post.imgSrc}
                      width={post.imgWidth}
                      height={post.imgHeight}
                      alt="#"
                      className="transition-transform transform scale-100 group-hover:scale-110 cursor-pointer w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center  gap-3 px-2">
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
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="py-5 w-full xl:w-1/2 lg:w-1/2 md:w-full ">
            <div className="flex flex-col gap-4">
              {/* 1 card */}
              <div className=" flex-col flex gap-4">
                <div>
                  <form className="flex w-full">
                    <input
                      type="text"
                      name="text"
                      placeholder="Search.."
                      class="w-full py-4 text-[15px] bg-white pl-4 text-black border border-black/40 focus:outline-none"
                      required
                    />
                    <button class=" text-[15px] bg-[red] text-white focus:outline-none px-5">
                      <ImSearch size={25} className="text-white font-bold" />
                    </button>
                  </form>
                </div>
                {/* 2 p */}
                <div className="flex flex-col gap-6 py-5">
                  <h1>Categories</h1>
                  <div className="px-6 py-4 flex flex-col gap-4">
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Air Freight
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Air Freight
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Air Freight
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Air Freight
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Air Freight
                    </p>
                  </div>
                </div>
                {/* 3rd p */}
                <div>
                  <h1>Recent Post</h1>
                  <div className="flex flex-col gap-4 py-8">
                    {/* 1st */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Freight Payment and Auditing Services</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 2nd */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Freight Payment and Auditing Services</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 3rd */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Freight Payment and Auditing Services</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 4th */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Freight Payment and Auditing Services</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 5th */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Freight Payment and Auditing Services</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4th p */}
                <div>
                  <h2>Tag Cloud</h2>
                  <div className="grid grid-cols-5 gap-4 py-6">
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                    <p className="px-5 py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Development
                    </p>
                  </div>
                </div>
                {/* 5th */}
                <div>
                  <h2 className="py-2">Plain Text</h2>
                  <p className="text-justify leading-normal font-medium">
                    Vero sea et accusam justo dolor accusam lorem consetetur,
                    dolores sit amet sit dolor clita kasd justo, diam accusam no
                    sea ut tempor magna takimata, amet sit et diam dolor ipsum
                    amet diam
                  </p>
                  <p className="bg-[red] w-[9rem] text-center text-white font-semibold px-5 py-3 hover:bg-[#243238] cursor-pointer my-4">
                    Read More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
