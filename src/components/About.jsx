import { useState } from "react";
import bannerImage from "../assets/p1.jpg";
import gif from "../assets/gif.gif"

const About = () => {
  const [data] = useState({
    image: gif,
    title: "Full Stack Developer",
    desc1: `I developed my Full Stack Development skills at Apna College, where the structured curriculum provided a solid foundation in both frontend and backend technologies. The hands-on learning experience allowed me to tackle real-world projects, giving me the confidence to build complete web applications from scratch.`,
    desc2: `Under the guidance of Shradha Didi, I gained invaluable insights into the industry’s best practices. Her mentorship not only enhanced my technical knowledge but also inspired me to constantly push my boundaries and stay updated with the latest trends in web development.`,
    actionButton: {
      title: "Read More..",
      link: "https://drive.google.com/file/d/17Z8bOsYiOub0Mv1yQD6AZJ8lGovF0Mxq/view",
    },
  });

  const handleDownloadClick = () => {
    window.open(data.actionButton.link, "_blank");
  };

  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16 text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center flex-col lg:flex-row">
          {/* image container */}
          <div className="w-full flex justify-center mb-8 lg:mb-0 lg:w-1/2">
            <img
              className="w-fit max-w-full h-auto"
              src={data.image}
              alt="Bhupendra Prasad Gupta - Full Stack Developer"
            />
          </div>

          {/* text container */}
          <div className="w-full flex justify-center lg:w-1/2">
            <div className="space-y-5 w-4/5 lg:w-2/3">
              <h1 className="text-5xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button
                onClick={handleDownloadClick}
                className="bg-orange-500 px-5 py-3 text-2xl text-white rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
              >
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
