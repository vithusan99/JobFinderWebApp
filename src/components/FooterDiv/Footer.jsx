import React from "react";

// icons
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer p-3 lg:p-[5rem] mb-4 bg-blueclr rounded-[10px] gap-3 lg:gap-8 grid md:grid-cols-2 lg:grid-cols-5 m-auto items-center justify-center ">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem] ">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className=" text-white pb-[13px] opacity-70 leading-7 ">
          We always make our seekers and companies find the best jobs and
          employees find the best candidates.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-medium pb-[1.5rem] text-white ">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100 ">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100 ">Features</li>
          <li className="text-white opacity-70 hover:opacity-100 ">News</li>
          <li className="text-white opacity-70 hover:opacity-100 ">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-medium pb-[1.5rem] text-white ">
          Resource
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100 ">Account</li>
          <li className="text-white opacity-70 hover:opacity-100 ">
            Support center
          </li>
          <li className="text-white opacity-70 over:opacity-100 ">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100 ">Contacts</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-medium pb-[1.5rem] text-white ">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100 ">Events</li>
          <li className="text-white opacity-70 hover:opacity-100 ">Promo</li>
          <li className="text-white opacity-70 hover:opacity-100 ">Req Demo</li>
          <li className="text-white opacity-70 hover:opacity-100 ">Careers</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-medium pb-[1.5rem] text-white ">
          Conatct Info
        </span>
        <div className="grid gap-3">
          <small className="text-[14px] text-white">facejobfinder@gg.fb</small>
          <div className="icons flex gap-4 py-[1rem] ">
            <AiFillFacebook className=" bg-white hover:bg-blueclr hover:text-white transition-all duration-700 ease-in-out p-1 h-[35px] w-[35px] rounded-full icon text-blueclr " />
            <AiFillMail className=" bg-white hover:bg-blueclr hover:text-white transition-all duration-700 ease-in-out p-1 h-[35px] w-[35px] rounded-full icon text-blueclr " />
            <AiFillInstagram className=" bg-white hover:bg-blueclr hover:text-white transition-all duration-700 ease-in-out p-1 h-[35px] w-[35px] rounded-full icon text-blueclr " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
