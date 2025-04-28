"use client";

import React from "react";
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import { css, User, Badge } from "@nextui-org/react";

const SearchBar = () => {
  return (
    <section className="search-bar w-full px-2 py-1 shadow-md text-slate-600 flex flex-row items-center">
      {/* <div className="">
        <MdMenu
          className="rounded-full border  hover:bg-teal-700 hover:text-white border-gray-500 text-gray-500 p-1 shadow-md cursor-pointer"
          size={32}
        />
      </div> */}
      {/* <div className="relative block w-1/2 pl-3">
        <span className="absolute inset-y-0 left-5 text-gray-500 flex items-center pl-2">
          <FiSearch />
        </span>
        <input
          className="placeholder:text-gray-500 block bg-gray-100 w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-800 focus:ring-gray-400 focus:ring-1 sm:text-sm"
          type="text"
          name="search"
          placeholder="Search..."
        />
      </div> */}
      <div className="w-full flex justify-end items-center">
        <FiSearch className="text-gray-500 mr-2" size={20} />
        {/* Notification Bell */}
        <Badge color="error" content="" shape="circle" variant="dot" size="sm">
          <IoNotificationsOutline className="text-gray-500" size={24} />
        </Badge>
        <div>
          <User
            size="lg"
            bordered
            zoomed
            src={"./assets/images/user-pic.jpg"}
            name="Jeffrey Wattson"
            description="Admin"
            css={{ borderColor: "$pink800" }}
          ></User>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
