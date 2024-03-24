import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const FormCard = () => {
  return (
    <div className="bg-white border mt-5 rounded-lg shadow-lg overflow-hidden mb-10 p-4 sm:mr-5 sm:ml-5">
      {/* First Row */}
      <div className="flex items-center p-2 border-gray-200">
        <div>
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src="https://imgs.search.brave.com/p3AvRgqD2Ya2sFXS5kKR4SQt3TIVLOw7y_jTJtv-jpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzI1Mi0y/NTI0Njk1X2R1bW15/LXByb2ZpbGUtaW1h/Z2UtanBnLWhkLXBu/Zy1kb3dubG9hZC5w/bmc"
            alt="Avatar"
          />
        </div>
        <div className="flex pr-1 ml-2 justify-between">
          <div className="lg:text-xl text-md font-semibold">Lorem Ipsum</div>
          <div className="bg-blue-500 text-white rounded-2xl sm:ml-4 ml-3 px-2">
            Section 2
          </div>
          <div className="text-blue-500 sm:ml-40 ml-8">2mins ago</div>
        </div>
      </div>
      {/* Second Row */}
      <div className=" border-gray-200">
        <p className="text-gray-700 ml-20 text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
          vitae sequi. Quasi facilis qui laudantium?
        </p>
      </div>
      {/* Third Row */}
      <div className="flex items-center ml-20 mt-4 justify-between">
        <div className="flex items-center">
          <FaRegHeart className="mr-1" /> 2k
        </div>
        <div className="flex items-center">
          <LuEye className="mr-1" /> 2k
        </div>
        <div className="flex items-center">
          <FaRegCommentAlt className="mr-1" /> 2k comments
        </div>
        <div className="flex items-center">
          <IoShareSocialOutline className="mr-1" /> share
        </div>
      </div>
    </div>
  );
};

export default FormCard;
