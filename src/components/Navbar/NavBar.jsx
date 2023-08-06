import React, { useEffect, useState } from "react";

// icons
import { BiMenuAltRight } from "react-icons/bi";

function NavBar() {
  const [openMenu, setOpenmenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // const handleMenu=()=>{
  //   set
  // }
  return (
    <div className="navBar flex justify-between items-center p-3 sm:p-[1.5rem] ">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueclr ">
          <strong>Job</strong>
          Search
        </h1>
      </div>
      <div
        onClick={() => setOpenmenu(!openMenu)}
        className="menu block md:hidden"
      >
        <BiMenuAltRight className="w-[30px] h-[30px] text-textclr" />
      </div>
      <div
        className={`menu ${
          openMenu ? "block" : "hidden"
        }  md:flex absolute md:relative top-[50px] sm:top-20 md:top-0 left-0 w-full md:w-auto  py-5 md:p-0 rounded-b-lg md:rounded-none
         bg-blueclr md:bg-transparent text-sm lg:text-md sm:gap-3 md:gap-4 lg:gap-8 transition-opacity duration-1000 ease-in-out`}
      >
        <li className="menuList py-2 px-10 md:p-0 text-white md:text-[#6f6f6f] hover:text-blueclr hover:bg-white">
          Jobs
        </li>
        <li className="menuList py-2 px-10 md:p-0 text-white md:text-[#6f6f6f] hover:text-blueclr hover:bg-white">
          Companies
        </li>
        <li className="menuList py-2 px-10 md:p-0 text-white md:text-[#6f6f6f] hover:text-blueclr hover:bg-white">
          About
        </li>
        <li className="menuList py-2 px-10 md:p-0 text-white md:text-[#6f6f6f] hover:text-blueclr hover:bg-white">
          Contact
        </li>
        <li className="menuList py-2 px-10 md:p-0 text-white md:text-[#6f6f6f] hover:text-blueclr hover:bg-white">
          Blog
        </li>
        <li className="menuList py-2 px-10 md:p-0 text-white md:text-[#6f6f6f] hover:text-blueclr hover:bg-white">
          Login
        </li>
        <li className="menuList py-2 px-10 md:p-0 text-white md:text-[#6f6f6f] hover:text-blueclr hover:bg-white">
          Register
        </li>
      </div>
    </div>
  );
}

export default NavBar;
