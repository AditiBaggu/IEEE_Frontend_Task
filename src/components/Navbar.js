import React, { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn, CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import logo from "./IEEE VIDEOS.jpg";

const Navbar = ({ handleSearch, toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.reload(); // Reload the entire page
  };

  return (
    <div
      className={`flex fixed top-0 justify-between items-center w-full z-16 bg-white ${
        isMobileView ? "flex-col" : ""
      }`}
    >
      <div
        className={`flex ${
          isMobileView
            ? "w-full justify-between px-2"
            : "w-[96%] justify-between px-5"
        } py-3 items-center`}
      >
        <div className="flex items-center">
          <button
            className={`focus:outline-none mr-2 ${
              isMobileView ? "block" : "hidden"
            }`}
            onClick={toggleSidebar} // Toggle the sidebar visibility
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            </svg>
          </button>
          <img
            className={`${isMobileView ? "px-2" : "px-4"} h-12 cursor-pointer`}
            src={logo}
            alt="IEEE video"
            onClick={handleLogoClick} // Reloads the entire page on logo click
          />
        </div>
        <div
          className={`flex ${
            isMobileView ? "w-full mt-2 px-2" : "w-[40%]"
          } items-center justify-end`}
        >
          <div
            className={`w-full py-1 px-1 ml-12 border border-gray-400 rounded-full flex items-center justify-${
              isMobileView ? "end" : "between"
            }`}
          >
            <input
              type="text"
              placeholder=" Search "
              className={`w-${isMobileView ? "full" : "4/5"} outline-none ${
                isMobileView ? "text-sm" : ""
              }`}
              value={searchQuery}
              onChange={handleChange}
            />
            <button
              className={`py-2 px-3 ml-2 bg-gray-100 rounded-full`}
              onClick={handleSearchClick}
            >
              <CiSearch size={isMobileView ? "15px" : "24px"} />
            </button>
          </div>
        </div>
        <div
          className={`flex justify-between items-center ${
            isMobileView ? "mt-2 w-full px-2" : "w-[10%]"
          }`}
        >
          <IoIosNotificationsOutline
            size={isMobileView ? "20px" : "24px"}
            className={"cursor-pointer " + (isMobileView ? "ml-10" : "mr-2")}
          />
          <CiVideoOn
            size={isMobileView ? "20px" : "24px"}
            className={"cursor-pointer " + (isMobileView ? "ml-2" : "mr-2")}
          />
          <Avatar
            src="https://cdn4.sharechat.com/img_7170528894_435735_291ad095_1663762433294_sc.webp?tenant=sc&referrer=pwa-sharechat-service&f=94_sc.webp"
            size={isMobileView ? 30 : 35}
            round={isMobileView ? "25px" : "30px"}
            className={"mr-" + (isMobileView ? "1" : "2")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
