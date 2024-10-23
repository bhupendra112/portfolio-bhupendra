import { useState } from "react";
import bannerImage from "../assets/Banner12.png";
import bannerImage4 from "../assets/project2.png";
import bannerImag3 from "../assets/project3.png";
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
    <div className="main-container py-14">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center underline">
        My Projects
      </h1>
      
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-10 mt-12">
        
        {/* Project 1 */}
        <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
          <img className="mx-auto h-48 w-full object-cover" src={bannerImag3} alt="E-learning Project" />
          <p>Developing an engaging e-learning platform to make education accessible, interactive, and personalized for all</p>
          <div className="project-tech-stack">
            <b>Tech Stack:</b> MERN
          </div>
          <div className="flex justify-center space-x-3">
            <a
              href="https://github.com/Ermanishmishra/CraftHub_Project"
              target="_blank"
              className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg flex items-center space-x-2"
            >
              <span>Code</span> <GitHubIcon />
            </a>
            <a
              href="https://craftshub.netlify.app/"
              target="_blank"
              className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg flex items-center space-x-2"
            >
              <span>Live</span> <FiberSmartRecordIcon />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
          <img className="mx-auto h-48 w-full object-cover" src={bannerImage4} alt="Airbnb Clone" />
          <p>Built a responsive Airbnb clone with property listings, user authentication, and dynamic search.</p>
          <div className="project-tech-stack">
            <b>Tech Stack:</b> MERN
          </div>
          <div className="flex justify-center space-x-3">
            <a
              href="https://github.com/Ermanishmishra/CraftHub_Project"
              target="_blank"
              className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg flex items-center space-x-2"
            >
              <span>Code</span> <GitHubIcon />
            </a>
            <a
              href="https://craftshub.netlify.app/"
              target="_blank"
              className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg flex items-center space-x-2"
            >
              <span>Live</span> <FiberSmartRecordIcon />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
          <img className="mx-auto h-48 w-full object-cover" src={bannerImage} alt="stuffing solution" />
          <p>providing stuffing services and contact to manager and deal with them</p>
          <div className="project-tech-stack">
            <b>Tech Stack:</b> MERN
          </div>
          <div className="flex justify-center space-x-3">
            <a
              href="https://github.com/bhupendra112/SkillTalent"
              target="_blank"
              className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg flex items-center space-x-2"
            >
              <span>Code</span> <GitHubIcon />
            </a>
            <a
              href="https://skilltalents.co.in/"
              target="_blank"
              className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg flex items-center space-x-2"
            >
              <span>Live</span> <FiberSmartRecordIcon />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
