"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Gallery", link: "/" },
    { name: "Product", link: "/" },
    { name: "Services", link: "/Service" },
    { name: "Blogs", link: "" },
    { name: "Pages", link: "" },
    { name: "Contact", link: "/contact" },
  ];

  let [menuOpen, setMenuOpen] = useState(false);
  let [menuIconOpen, setMenuIconOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [blogOptionsOpen, setBlogOptionsOpen] = useState(false);
  const [pageOptionsOpen, setPageOptionsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setBlogOptionsOpen(false);
    setPageOptionsOpen(false);
  };

  const handleMouseEnter = (linkName) => {
    if (linkName === "Blogs") {
      setBlogOptionsOpen(true);
    } else if (linkName === "Pages") {
      setPageOptionsOpen(true);
    }
  };

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : true;

  const handleMouseLeave = (linkName) => {
    setTimeout(() => {
      if (linkName === "Blogs") {
        setBlogOptionsOpen(false);
      } else if (linkName === "Pages") {
        setPageOptionsOpen(false);
      }
    }, 500);
  };

  return (
    <div className="shadow w-full fixed top-0 left-0 z-[9999]">
      <div className="md:flex items-center justify-between bg-white  md:px-10 px-7 py-9">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link href="/">
            <Image
              src={"/assest/logo-black.png"}
              width={100}
              height={50}
              className="w-[250px] h-[50px]"
            />
          </Link>
        </div>
        <div
          onClick={toggleDrawer}
          className="absolute right-8 top-[2.5rem] cursor-pointer md:hidden lg:hidden w-7 h-7"
        >
          {isOpen ? (
            <GrClose className="text-black" size={20} />
          ) : (
            <SlMenu className="text-black" size={20} />
          )}
        </div>
        <ul
          ref={dropdownRef}
          className={`mt-2 gap-4 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white font-bold md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition duration-500 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              className="md:ml-8 font-semibold md:my-0 my-7 relative"
              key={link.name}
            >
              {link.name === "Pages" ? (
                <div
                  className={`cursor-pointer relative font-bold flex gap-2 ${
                    isMobile ? "" : "hover:cursor-pointer"
                  }`}
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={() => handleMouseLeave(link.name)}
                >
                  Pages
                  <IoIosArrowDown
                    size={20}
                    className={`transform ${
                      pageOptionsOpen ? "rotate-180 " : ""
                    } transition-all  text-[18px]duration-500 mt-1`}
                  />
                  {pageOptionsOpen && (
                    <ul className="absolute left-0 top-7 flex flex-col gap-2 font-semibold shadow-md bg-white border border-gray-300 py-3 px-2 w-[14rem] rounded-md text-[18px] z-10">
                      <Link href="/pricing-plan">
                        <li
                          className="hover:bg-[red] hover:text-white px-5"
                          onClick={closeDropdown}
                        >
                          Pricing Plan
                        </li>
                      </Link>
                      <Link href="/quotes">
                        <li
                          className="hover:bg-[red] hover:text-white px-5"
                          onClick={closeDropdown}
                        >
                          Free Quote
                        </li>
                      </Link>
                      <Link href="/team">
                        <li
                          className="hover:bg-[red] hover:text-white px-5"
                          onClick={closeDropdown}
                        >
                          Our Team
                        </li>
                      </Link>
                      <Link href="/testimonial">
                        <li
                          className="hover:bg-[red] hover:text-white px-5"
                          onClick={closeDropdown}
                        >
                          Testimonial
                        </li>
                      </Link>
                    </ul>
                  )}
                </div>
              ) : link.name === "Blogs" ? (
                <div
                  className={`cursor-pointer text-[18px] relative flex gap-2 ${
                    isMobile ? "" : "hover:cursor-pointer"
                  }`}
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={() => handleMouseLeave(link.name)}
                >
                  Blogs
                  <IoIosArrowDown
                    size={20}
                    className={`transform ${
                      blogOptionsOpen ? "rotate-180 " : ""
                    } transition-all duration-500 mt-1`}
                  />
                  {blogOptionsOpen && (
                    <ul className="absolute left-0 top-7 flex flex-col gap-2 shadow-md bg-white border border-gray-300 py-3 px-2 w-[14rem] rounded-md text-[18px] z-10">
                      <Link href="/blog-grid">
                        <li
                          className="hover:bg-[red] hover:text-white px-5"
                          onClick={closeDropdown}
                        >
                          Blog Grid
                        </li>
                      </Link>
                      <Link href="/blog-detail">
                        <li
                          className="hover:bg-[red] hover:text-white px-5"
                          onClick={closeDropdown}
                        >
                          Blog Details
                        </li>
                      </Link>
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={link.link}>
                  <p className="font-bold text-[18px]" onClick={closeDropdown}>
                    {link.name}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
