import { useState } from "react";

const Header = ({ onScrollToSection }) => {
  const [brandName, setBrandName] = useState("Bhupendra Prasad Gupta");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      id: 1,
      section: "home",
    },
    {
      title: "About",
      id: 2,
      section: "about",
    },
    {
      title: "Project",
      id: 3,
      section: "project",
    },
    {
      title: "Skill",
      id: 4,
      section: "skill",
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "https://drive.google.com/file/d/17Z8bOsYiOub0Mv1yQD6AZJ8lGovF0Mxq/view",
  });

  const handleDownloadClick = () => {
    window.open(actionButton.link, "_blank");
  };

  return (
    <div className="h-20 border-b flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-24 bg-gray-100">
      {/* Brand Name */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">{brandName}</h1>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-4 sm:space-x-6">
        {menuLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onScrollToSection(link.section)}
            className="hover:text-orange-600 text-sm sm:text-base"
          >
            {link.title}
          </button>
        ))}
      </div>

      {/* Action Button */}
      <div>
        <button
          onClick={handleDownloadClick}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-orange-500 shadow rounded-full text-sm sm:text-base text-white"
        >
          {actionButton.title}
        </button>
      </div>
    </div>
  );
};

export default Header;
