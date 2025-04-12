// InfoSection.jsx
import React from "react";
import { IoIosSend } from "react-icons/io";
import { Button } from "../components/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function InfoSection({ trip }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.img
        variants={itemVariants}
        src="/placeholder.jpeg"
        alt="placeholder img"
        className="h-[365px] w-full object-cover rounded-xl"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <motion.div
        className="flex justify-between items-baseline"
        variants={itemVariants}
      >
        <div className="my-5 flex flex-col gap-2">
          <motion.h2
            className="font-bold text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {trip?.userSelection?.location?.label || "Maharashtra , India"}
          </motion.h2>
          <motion.div
            className="flex gap-5 font-bold"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md"
              whileHover={{ scale: 1.05 }}
            >
              📅 {trip?.userSelection?.noOfDays} Days
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md"
              whileHover={{ scale: 1.05 }}
            >
              💰 {trip?.userSelection?.budget} Budget
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md"
              whileHover={{ scale: 1.05 }}
            >
              ✈️ No. of Travellers : {trip?.userSelection?.travelers}
            </motion.div>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button>
            <IoIosSend />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default InfoSection;
