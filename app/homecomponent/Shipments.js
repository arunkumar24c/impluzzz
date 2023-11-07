"use client"
import { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BsTrainFreightFront } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";
import { FcOnlineSupport } from "react-icons/fc";
import { motion, useAnimation } from "framer-motion";


const Shipments = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const givenCount = 1234;

    const timer = setInterval(() => {
      if (count < givenCount) {
        setCount(count + 1);
      } else {
        clearInterval(timer);
      }
    }, 1);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="brand-container px-5 py-16">
      <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-center items-center gap-5">
        {/* 1 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full xl:w-1/2 lg:w-1/2 md:w-full"
        >
          <div className="flex flex-col gap-3">
            <p className="text-[18px] font-medium text-[red]">SOME FACTS</p>
            <div>
              <h1 className="text-[25px] font-bold text-black leading-normal">
                #1 Place To Manage All Of Your Shipments
              </h1>
              <h1 className="text-[25px] font-bold text-black leading-normal">
                {" "}
                Shipments
              </h1>
            </div>
            <p className="text-justify font-medium text-[18px] leading-normal">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex gap-2 items-center py-7"
            >
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
            </motion.div>
          </div>
        </motion.div>
        {/* 2 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full xl:w-1/2 lg:w-1/2 md:w-full"
        >
          <motion.div
            className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
          >
            {/* 1 */}
            <motion.div
              className="flex-col flex gap-4 bg-[green] text-white px-4 py-3"
              variants={cardVariants}
            >
              <p>
                <BsTrainFreightFront size={35} />
              </p>
              <motion.h1 variants={countVariants}>{count}</motion.h1>
              <p>happy client</p>
            </motion.div>
            {/* 2 */}
            <motion.div
              className="flex-col flex gap-4 bg-[blue] text-white px-4 py-3"
              variants={cardVariants}
            >
              <p>
                <AiFillContacts size={35} />
              </p>
              <motion.h1 variants={countVariants}>{count}</motion.h1>
              <p>support</p>
            </motion.div>
            {/* 3 */}
            <motion.div
              className="flex-col flex gap-4 bg-[orange] text-white px-4 py-3"
              variants={cardVariants}
            >
              <p>
                <FiPhoneCall size={35} />
              </p>
              <motion.h1 variants={countVariants}>{count}</motion.h1>
              <p>Telephone</p>
            </motion.div>
            {/* 4 */}
            <motion.div
              className="flex-col flex gap-4 bg-[yellow] text-white px-4 py-3"
              variants={cardVariants}
            >
              <p>
                <FcOnlineSupport size={35} />
              </p>
              <motion.h1 variants={countVariants}>24/7</motion.h1>
              <p>Telephone support</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shipments;

// Framer Motion Variants
const cardVariants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const countVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
