import bannerImage from "../assets/p2.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"], // Strings to display
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex flex-col-reverse md:flex-row items-center justify-between py-10 px-6 sm:px-10 md:px-16"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-white space-y-4 md:space-y-6 mb-6 md:mb-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Hi, I am</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Bhupendra Prasad Gupta</h1>
        <h2 className="text-2xl sm:text-3xl">
          I am <span className="font-bold underline" ref={el}></span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          A passionate Full Stack Developer with a knack for crafting seamless user experiences and robust backend solutions. I thrive on creating innovative, scalable, and efficient web applications, constantly exploring new technologies and pushing the boundaries of web development.
        </p>

        {/* Social Icons */}
        <div className="icons-container flex space-x-3 sm:space-x-5">
          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 sm:px-3 py-2 sm:py-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="https://github.com/bhupendra112"
          >
            <GitHubIcon />
          </a>
          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 sm:px-3 py-2 sm:py-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="https://www.linkedin.com/in/engineerbhupendra/"
          >
            <LinkedInIcon />
          </a>
          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 sm:px-3 py-2 sm:py-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="https://www.instagram.com/developer_bhupendra"
          >
            <InstagramIcon />
          </a>
          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 sm:px-3 py-2 sm:py-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="https://x.com/Bhupend85039267"
          >
            <TwitterIcon />
          </a>
          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 sm:px-3 py-2 sm:py-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="https://www.youtube.com/@engineerbhupendragupta6134"
          >
            <YouTubeIcon />
          </a>
        </div>
        <br />
        <br />

        {/* Contact Button */}
        <a
          className="text-lg sm:text-xl md:text-2xl px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg"
          href="/contact"
        >
          Contact Me
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="rounded-full shadow-lg w-48 sm:w-56 md:w-64 lg:w-72"
          src={bannerImage}
          alt="Bhupendra Prasad Gupta"
        />
      </div>
    </div>
  );
};

export default Banner;
