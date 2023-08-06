import React from "react";
// icons
import { BiTimeFive } from "react-icons/bi";
// logos images
import logo1 from "../../assets/pngaaa.com-1703594.png";
import logo2 from "../../assets/pngaaa.com-1703649.png";
import logo3 from "../../assets/pngaaa.com-2572030.png";
import logo4 from "../../assets/pngaaa.com-2826036.png";
import logo5 from "../../assets/pngaaa.com-2956186.png";
import logo6 from "../../assets/pngaaa.com-2956212.png";
import logo7 from "../../assets/pngaaa.com-2956259.png";
import logo8 from "../../assets/pngaaa.com-2956295.png";
import logo9 from "../../assets/pngaaa.com-2956296.png";
import logo10 from "../../assets/pngaaa.com-2956311.png";


const CompanyData = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Sri Lanka",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Full-Stack Developer",
    time: "1 week",
    location: "New York",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 3,
    image: logo3,
    title: "UI Designer",
    time: "Now",
    location: "Canada",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 4,
    image: logo4,
    title: "Node JS Developer",
    time: "12Hrs",
    location: "New York",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 5,
    image: logo5,
    title: "Digital Martketing Executive",
    time: "Now",
    location: "Sans-francisco",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 6,
    image: logo6,
    title: "React Developer",
    time: "1 month",
    location: "New York",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 8,
    image: logo8,
    title: "UI Engineer",
    time: "3Hrs",
    location: "New York",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 9,
    image: logo9,
    title: "Front-End Developer",
    time: "Now",
    location: "Sri Lanka",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 10,
    image: logo10,
    title: "MERN Developer",
    time: "Now",
    location: "Austria",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
  {
    id: 7,
    image: logo7,
    title: "Project manager",
    time: "Now",
    location: "New York",
    description:
      "up to date, audited 299 packages in 2s 96 packages are looking for funding run `npm fund` for details",
    company: "Company loc Co.",
  },
];

function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

       {
        CompanyData?.map(({id,image,title,time,location,description,company})=>{
          return(
            <div id={id} key={id} className="group group/item singleJob w-[270px] p-[20px] transition-all duration-700 ease-in-out bg-white rounded-[10px] hover:bg-blueclr shadow-lg shadow-grayVithu-400/700 hover:shadow-lg">
            <span className="flex justify-between items-center gap-4 ">
              <h1 className="font-medium text-[16px] text-textclr group-hover:text-white">
               {title}
              </h1>
              <span className=" flex flex-wrap min-w-[70px] items-center text-[#ccc] gap-1">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className=" text-[13px] text-center sm:text-left text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {description}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="Company logo" className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>
            <button
              className=" border-[2px] rounded-[10px] block h-[35px] w-full text-[14px] font-medium text-textclr
                 group-hover/item:text-textclr hover:bg-white transition-all duration-700 ease-in-out"
            >
              Apply Now
            </button>
          </div>
          )
        })
       }

      </div>
    </div>
  );
}

export default Jobs;
