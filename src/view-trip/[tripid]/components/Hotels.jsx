// Hotels.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const hotelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hotels({ trip }) {
  const hotels = trip?.tripData?.hotelOptions || [];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="font-bold text-xl mt-8">Hotel Recommendations</h2>
        <p className="text-sm text-gray-600 mt-1">
          Showing {hotels.length} hotel{hotels.length !== 1 ? "s" : ""}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:py-10 flex-col my-2">
        {hotels.map((hotel, index) => (
          <motion.div
            key={index}
            variants={hotelVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                (hotel?.HotelName || "") + " ," + (hotel?.HotelAddress || "")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="cursor-pointer group relative flex flex-col shadow-md hover:shadow-xl rounded-2xl overflow-hidden bg-white transition-all duration-300 ease-in-out border hover:border-blue-500 transform hover:-translate-y-1"
                whileHover={{ boxShadow: "0px 10px 15px rgba(0,0,0,0.1)" }}
              >
                <motion.div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={hotel?.image || "/placeholder.jpeg"}
                    alt={hotel?.HotelName}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {hotel?.isPopular && (
                    <motion.div
                      className="absolute top-2 right-2 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      Popular
                    </motion.div>
                  )}
                </motion.div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-bold mb-1 text-gray-800 truncate">
                    🏨 {hotel?.HotelName || "Unnamed Hotel"}
                  </h3>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
                    <svg
                      className="w-4 h-4 mt-0.5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0C6.486 0 3 3.487 3 7.5c0 5.25 7 12.5 7 12.5s7-7.25 7-12.5C17 3.487 13.514 0 10 0zm0 11a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                    </svg>
                    <span>
                      {hotel?.HotelAddress || "Address not available"}
                    </span>
                  </div>
                  <div className="text-sm">
                    💰 {hotel?.Price || "Not listed"}
                  </div>
                  <div className="text-sm">⭐ {hotel?.rating || "N/A"}</div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Hotels;
