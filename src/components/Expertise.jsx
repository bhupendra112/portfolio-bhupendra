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
        <h1 className="mb-16 text-5xl font-bold underline text-center">
          My Expertise
        </h1>
        {/* Box Section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* Text Container */}
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
              Passionate about building interactive, responsive, and efficient web applications, focusing on user experience, modern design principles, and seamless integration of front-end and back-end technologies.
              </p>
              <button onClick={handleSubmit} className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Skills Container */}
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'MongoDB', 'SQL', 'jQuery', 'Postman'].map((skill, index) => (
                <p key={index} className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
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
