"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { ImSearch } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";


const Blog = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    freight: "Select A Freight",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <div>
      <div className="brand-container px-5 py-10">
        {/* container */}
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-7 justify-center">
          {/* left container */}
          <div className="py-5 w-full xl:w-1/2 lg:w-1/2 md:w-full ">
            <div className="flex flex-col gap-4">
              {/* 1st */}
              <div className="flex flex-col gap-6">
                <Image
                  src={"/assest/blogdetail.jpg"}
                  width={200}
                  height={500}
                  className="w-full "
                  alt="img"
                />
                <h1 className="text-justify leading-normal font-bold">
                  Diam dolor est labore duo ipsum clita sed et lorem tempor duo
                </h1>
                <p className="text-justify leading-normal font-medium">
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p className="text-justify leading-normal font-medium">
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p className="text-justify leading-normal font-medium">
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p className="text-justify leading-normal font-medium">
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
              </div>
              {/* 2nd */}
              <div className="flex flex-col gap-3">
                <h1>3 Comments</h1>
                {/* 1st reply */}
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/assest/profile.jpg"}
                      width={100}
                      height={100}
                      alt="#"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3>John Doe 01 Jan 2022</h3>
                    <p className="text-justify leading-normal">
                      Diam amet duo labore stet elitr invidunt ea clita ipsum
                      voluptua, tempor labore accusam ipsum et no at. Kasd diam
                      tempor rebum magna dolores sed eirmod
                    </p>
                    <button className="shadow-md border px-4 py-2 my-4">
                      Reply
                    </button>
                  </div>
                </div>
                {/* 2nd reply */}
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/assest/profile.jpg"}
                      width={100}
                      height={100}
                      alt="#"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3>John Doe 01 Jan 2022</h3>
                    <p className="text-justify leading-normal">
                      Diam amet duo labore stet elitr invidunt ea clita ipsum
                      voluptua, tempor labore accusam ipsum et no at. Kasd diam
                      tempor rebum magna dolores sed eirmod
                    </p>
                    <button className="shadow-md border px-4 py-2 my-4">
                      Reply
                    </button>
                  </div>
                </div>
                {/* 3rd reply */}
                <div className="flex gap-4 px-8">
                  <div>
                    <Image
                      src={"/assest/profile.jpg"}
                      width={100}
                      height={100}
                      alt="#"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3>John Doe 01 Jan 2022</h3>
                    <p className="text-justify leading-normal">
                      Diam amet duo labore stet elitr invidunt ea clita ipsum
                      voluptua, tempor labore accusam ipsum et no at. Kasd diam
                      tempor rebum magna dolores sed eirmod
                    </p>
                    <button className="shadow-md border px-4 py-2 my-4">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div>
                <h1 className="py-6">Leave A Comment</h1>
                <form onSubmit={handleSubmit} className="px-5 py-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        className="form-control text-white border border-black/40 w-full bg-transparent px-2 py-2 outline-none"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control text-white border border-black/40 w-full bg-transparent px-2 py-2 outline-none"
                        placeholder="Your Email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control text-white border border-black/40 w-full bg-transparent px-2 py-2 outline-none"
                        placeholder="Your Mobile"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <textarea
                      className="form-control text-black border border-black/40 bg-transparent px-2 py-2 outline-none w-full"
                      name="message"
                      placeholder="Special Note"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="py-5">
                    <button
                      className="btn rounded-md bg-[red]  text-white w-full py-3"
                      name="submit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Right container */}
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
                  <h2 className='py-2'>Plain Text</h2>
                  <p className='text-justify leading-normal font-medium'>
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
}

export default Blog