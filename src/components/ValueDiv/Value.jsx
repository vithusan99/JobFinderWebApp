import React from "react";

// images
import power from "../../assets/electrical.png";
import love from "../../assets/heart.png";
import secure from "../../assets/shield.png";

function Value() {
  return (
    <div className="mb-[4rem] mt-[2rem]">
      <h1 className="block text-center md:text-left text-textclr text-[25px] py-[2rem] pb-[3rem] font-semibold mx-auto sm:mx-0 w-[90%] md:w-[500px] ">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-[1rem] md:gap-[2rem] lg:gap-[7rem] grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 items-center">

        <div className="singleGrid rounded-[10px] transition-all duration-500 ease-in-out hover:bg-[#dedef8] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={power} alt="company" className="w-[70%]" />
            </div>
            <span className="font-medium text-textclr text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="font-medium text-[13px] text-textclr opacity-[.7] py-[1rem] ">
            Thinks being made beautiful simple are at the bottom of the heart of
            everything we do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] transition-all duration-500 ease-in-out hover:bg-[#f7d1e1] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={love} alt="company" className="w-[70%]" />
            </div>

            <span className="font-medium text-textclr text-[18px]">
              Relaible
            </span>
          </div>
          <p className="font-medium text-[13px] text-textclr opacity-[.7] py-[1rem] ">
            It encourages us to strive for excellence, to be responsible for our
            decisions.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] transition-all duration-500 ease-in-out hover:bg-[#f3f2ad] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={secure} alt="company" className="w-[70%]" />
            </div>

            <span className="font-medium text-textclr text-[18px]">
              Security
            </span>
          </div>
          <p className="font-medium text-[13px] text-textclr opacity-[.7] py-[1rem] ">
            Ensuring the safety and protection of employees is essential for the
            growth and success of the organization.
          </p>
        </div>
      </div>

      <div className="card text-center sm:text-left mt-5 block sm:flex items-center justify-between bg-blueclr p-6  md:p-20 rounded-3xl ">
        <div>
          <h1 className=" text-blueclr text-[30px] font-bold">
            Ready switch a career
          </h1>
          <h2 className=" text-textclr text-[25px] font-bold">
            Let's get start!
          </h2>
        </div>
        <button
          className=" border-2 rounded-md py-1 mt-7 md:mt-0 md:h-16 px-2 md:px-10 text-[18px] font-medium
         text-blueclr hover:text-white hover:bg-blueclr border-blueclr transition-all duration-700 ease-in-out"
        >
          Get Start
        </button>
      </div>
    </div>
  );
}

export default Value;
