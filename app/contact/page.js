import React from "react";
import { BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
const page = () => {
  return (
    <div>
      <div className="bg mt-[6rem] px-10 py-44 ">
        <h1 className="text-white text-[45px] py-5">Contact us</h1>
        <div className="text-white flex gap-3">
          {" "}
          <p>Home</p>
          <p>/</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="brand-container px-5 ">
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-between gap-5 items-center ">
          <section className="bg-white w-full xl:w-1/2 lg:w-1/2 md:w-full  ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="text-[red] text-[20px] py-3 font-bold">
                GET IN TOUCH
              </h2>
              <h2 className="text-black text-[28px] py-3 font-bold">
                Contact For Any Query
              </h2>
              <p className="leading-normal py-3 text-justify">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done. Download
                Now.
              </p>
              <form action="#" className="space-y-8 py-10">
                <div className="flex gap-2 flex-col xl:flex-row lg:flex-row md:flex-col">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="john"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us share"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 bg-[red] text-white px-5 text-sm font-medium text-center w-full "
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
          <section className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4417316688!2d76.8848339633056!3d11.014126294919281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699274239441!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex gap-5 items-center py-5">
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href=" " target="_blank">
                  <BsInstagram size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href=" " target="_blank">
                  <RiTwitterXLine size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href="" target="_blank">
                  <BsLinkedin size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href="" target="_blank">
                  <BsYoutube size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href="" target="_blank">
                  <BsWhatsapp size={25} />
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
