const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10 lg:px-72">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>
            &copy; 2023 Bhupendra Prasad Gupta <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5 flex flex-wrap justify-center sm:justify-end">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/licensing" className="hover:underline">
            Licensing
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
