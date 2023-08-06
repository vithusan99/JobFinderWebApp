import React from "react";

// react icons
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Search() {
  return (
    <div className="searchDiv grid gap-10 bg-grayVithu rounded-[10px] p-[1.5rem] ">
      <form action="#">
        <div className="firstDiv flex flex-wrap justify-center md:justify-between items-center rounded-[8px] gap-2 lg:gap-10 bg-white p-5 shadow-lg shadow-grayVithu-700  ">

          <div className="flex py-1 md:p-0 max-w-[175px] gap-2 items-center">
            <AiOutlineSearch className=" text-[25px] icon" />
            <input
              type="text"
              className=" bg-transparent text-blue-500 
             focus:outline-none w-[100%] "
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6] hover:text-textclr icon " />
          </div>

          <div className="flex py-1 md:p-0 max-w-[175px] gap-2 items-center">
            <BsHouseDoor className=" text-[25px] icon" />
            <input
              type="text"
              className=" bg-transparent text-blue-500 
             focus:outline-none w-[100%] "
              placeholder="Search by company..."
            />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6] hover:text-textclr icon " />
          </div>

          <div className="flex pt-1 md:p-0 max-w-[175px] gap-2 items-center">
            <CiLocationOn className=" text-[25px] icon" />
            <input
              type="text"
              className=" bg-transparent text-blue-500 
             focus:outline-none w-[100%] "
              placeholder="Search Jby location..."
            />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6] hover:text-textclr icon " />
          </div>

          <button className="bg-blueclr min-w-[100px] mt-1 md:m-0 h-full p-2 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>
        </div>
      </form>
      <div className="secDiv flex flex-wrap items-center justify-center gap-2 lg:gap-10 ">

        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="relevance" className="text-[#808080] font-medium">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className=" bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="type" className="text-[#808080] font-medium">
            Type:
          </label>
          <select
            name=""
            id="type"
            className=" bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Hybrid</option>
            <option value="">Part-time</option>
            <option value="">Contract</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="level" className="text-[#808080] font-medium">
            Level:
          </label>
          <select
            name=""
            id="level"
            className=" bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Associate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className="clear text-[#a1a1a1] cursor-pointer">Clear All</span>
      </div>
    </div>
  );
}

export default Search;
