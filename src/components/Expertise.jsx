import bannerBackground from "../assets/banner_wallpaper.svg";
import { useNavigate } from "react-router-dom";

const Expertise = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/hire");
  };

  return (
    <>
      <div className="mt-2">
        <h1 className="mb-10 text-3xl sm:text-4xl md:text-5xl font-bold underline text-center">
          My Expertise
        </h1>
        
        {/* Box Section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container py-12 px-5 sm:px-10 flex flex-col items-center space-y-10 md:flex-row md:space-y-0"
        >
          {/* Text Container */}
          <div className="text-center text-white md:w-1/2 space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              I love these technologies
            </h1>
            <p className="text-lg sm:text-xl">
              Passionate about building interactive, responsive, and efficient web applications, focusing on user experience, modern design principles, and seamless integration of front-end and back-end technologies.
            </p>
            <button
              onClick={handleSubmit}
              className="text-xl sm:text-2xl px-6 py-3 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Skills Container */}
          <div className="flex justify-center md:w-1/2">
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'MongoDB', 'SQL', 'jQuery', 'Postman'].map((skill, index) => (
                <p key={index} className="bg-gray-300 text-lg px-4 py-2 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
