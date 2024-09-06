import { useState } from "react";
import bannerImage from "../assets/project1.png";
import bannerImage4 from "../assets/project2.png";
import bannerImag3 from "../assets/project3.png";
import bannerImage1 from "../assets/traveling.png";
import bannerImage2 from "../assets/images.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Projects
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i className=" text-5xl fa-brands fa-aws"></i>
            <img src={bannerImage} alt="" />
            <p>Developing an engaging e-learning platform to make education accessible, interactive, and personalized for all</p>
            {/* <h1 className="text-4xl">Web Development</h1> */}

            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p> */}
            <div className="project-tech-stack">
            <br />
            <b>Tech Stack:</b> MERM
          </div>
            <button className="project-github">
            <a href="https://github.com/Ermanishmishra/CraftHub_Project" target="_blank"
              className="px-3 py-2 bg-orange-500 text-2xl m-3 rounded-full shadow-lg">
              Code&nbsp;&nbsp;<GitHubIcon/>
            </a>
          </button>
          <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
            <a href="https://craftshub.netlify.app/" target="_blank" className="small-btn button project-deployed-link">
              Live&nbsp;&nbsp;<FiberSmartRecordIcon/>
            </a>
          </button>
            
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
          <img src={bannerImage4} alt="" />
          <p>Built a responsive Airbnb clone with property listings, user authentication, and dynamic search.</p>
            {/* <i className=" text-5xl fa-solid fa-mobile"></i> */}
            {/* <h1 className="text-4xl">Android Development</h1> */}
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p> */}
            <div className="project-tech-stack">
            <br />
            <b>Tech Stack:</b> MERM
          </div>
            <button className="project-github">
            <a href="https://github.com/Ermanishmishra/CraftHub_Project" target="_blank"
              className="px-3 py-2 bg-orange-500 text-2xl m-3 rounded-full shadow-lg">
              Code&nbsp;&nbsp;<GitHubIcon/>
            </a>
          </button>
          <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
            <a href="https://craftshub.netlify.app/" target="_blank" className="small-btn button project-deployed-link">
              Live&nbsp;&nbsp;<FiberSmartRecordIcon/>
            </a>
          </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
          <img src={bannerImag3} alt="" />
          <p>Created a Smart Traveling website with interactive trip planning, real-time updates, and personalized travel recommendations.</p>
            {/* <h1 className="text-4xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p> */}
            <div className="project-tech-stack">
            <br />
            <b>Tech Stack:</b> MERM
          </div>
            <button className="project-github">
            <a href="https://github.com/Ermanishmishra/CraftHub_Project" target="_blank"
              className="px-3 py-2 bg-orange-500 text-2xl m-3 rounded-full shadow-lg">
              Code&nbsp;&nbsp;<GitHubIcon/>
            </a>
          </button>
          <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
            <a href="https://craftshub.netlify.app/" target="_blank" className="small-btn button project-deployed-link">
              Live&nbsp;&nbsp;<FiberSmartRecordIcon/>
            </a>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;