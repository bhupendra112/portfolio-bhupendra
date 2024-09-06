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
    // You might want to handle the file download logic here
    // For instance, you can redirect to the file URL for viewing
    window.open(actionButton.link, '_blank');
  };

  return (
    <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
      <div>
        <h1 className="text-2xl font-bold">{brandName}</h1>
      </div>

      <div className="space-x-6">
        {menuLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onScrollToSection(link.section)}
            className="hover:text-orange-600"
          >
            {link.title}
          </button>
        ))}
      </div>

      <div>
        <button
          onClick={handleDownloadClick}
          className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-white"
        >
          {actionButton.title}
        </button>
      </div>
    </div>
  );
};

export default Header;
