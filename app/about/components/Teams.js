import Image from "next/image";
import React from "react";
import { BsArrowRight, BsInstagram, BsLinkedin } from "react-icons/bs";

const Teams = () => {
  const teamMembers = [
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
    {
      imgSrc: "/assest/img2.jpg",
      imgWidth: 250,
      imgHeight: 300,
      fullName: "Full Name",
      designation: "Designation",
      socialLinks: [
        { icon: BsInstagram, link: "https://www.instagram.com/" },
        { icon: BsLinkedin, link: "https://www.linkedin.com/" },
      ],
    },
  ];

  return (
    <div>
      <div className="brand-container px-5 py-5">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-[red] text-[22px] font-medium">OUR TEAM</p>
            <h1 className="font-bold">Expert Team Members</h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-between gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <div>
                  <Image
                    src={member.imgSrc}
                    width={member.imgWidth}
                    height={member.imgHeight}
                    alt={member.fullName}
                    className="w-full px-5"
                  />
                </div>
                <div className="px-5 flex flex-col gap-2">
                  <p className="text-[22px] font-bold">{member.fullName}</p>
                  <p className="font-medium">{member.designation}</p>
                  <div className="relative cursor-pointer group">
                    <div className="py-3">
                      <div className="flex items-center">
                        <BsArrowRight className="text-primary" size={25} />
                        <div className="absolute text-black py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                          <div className="flex gap-5 items-center py-5">
                            {member.socialLinks.map((link, linkIndex) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
