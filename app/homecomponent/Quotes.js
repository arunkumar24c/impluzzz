"use client";
import React, { useState } from "react";

import { FiPhoneCall } from "react-icons/fi";


const Quotes = () => {
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
    <div className="brand-container px-5 py-16">
      <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-center items-center gap-5 ">
        {/* 1 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full ">
          <div className="flex flex-col gap-3">
            <p className="text-[18px] font-medium text-[red]">GET A QUOTE</p>
            <div>
              <h1 className="text-[25px] font-bold text-black leading-normal">
                Request A Free <span className="text-[red]">Quote</span>!
              </h1>
            </div>
            <p className="text-justify font-medium text-[18px] leading-normal">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <div className="flex gap-2 items-center py-7">
              <p className="bg-[red] p-4 text-white">
                <FiPhoneCall size={35} />
              </p>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-[18px] text-[red]">
                  Call for any query!
                </p>
                <p className="font-bold text-[22px] text-[black]">
                  + 0000000000
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full bg-[#05103b] px-5 py-10 ">
          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  className="form-control text-white border-b-2 bg-transparent px-2 py-2 outline-none"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control text-white border-b-2 bg-transparent px-2 py-2 outline-none"
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
                  className="form-control text-white border-b-2 bg-transparent px-2 py-2 outline-none"
                  placeholder="Your Mobile"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <select
                  className="form-select border-b-2 bg-transparent text-white px-2 py-2 outline-none"
                  value={formData.freight}
                  onChange={handleChange}
                  name="freight"
                >
                  <option
                    value="Select A Freight"
                    className="bg-blue text-black"
                  >
                    Select A Freight
                  </option>
                  <option value="Freight 1" className="bg-blue text-black">
                    Freight 1
                  </option>
                  <option value="Freight 2" className="bg-blue text-black">
                    Freight 2
                  </option>
                  <option value="Freight 3" className="bg-blue text-black">
                    Freight 3
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  className="form-control text-white border-b-2 bg-transparent px-2 py-2 outline-none w-full"
                  name="message"
                  placeholder="Special Note"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
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
  );
};

export default Quotes;
