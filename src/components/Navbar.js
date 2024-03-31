import React, { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn, CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import logo from "./IEEE VIDEOS.jpg";
import Sidebar from "./Sidebar";

const Navbar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
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

  return (
    <div
      className={`flex fixed top-0 justify-between items-center w-full z-16 bg-white ${
        isMobileView ? "flex-col" : ""
      }`}
    >
      <div
        className={`flex ${
          isMobileView
            ? "w-full justify-between px-3"
            : "w-[96%] justify-between px-5"
        } py-3 items-center`}
      >
        <div className="flex items-center">
          <button
            className={`focus:outline-none mr-2 ${
              isMobileView ? "block" : "hidden"
            }`}
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6 fill-current"
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
            className={`${isMobileView ? "px-2" : "px-4"}`}
            width={isMobileView ? "60px" : "120px"}
            src={logo}
            alt="IEEE video"
          />
        </div>
        <div
          className={`flex ${
            isMobileView ? "w-full mt-2 px-2" : "w-[40%]"
          } items-center`}
        >
          <div
            className={`w-full py-2 px-1 border border-gray-400 rounded-full flex items-center`}
            style={{
              maxWidth: isMobileView ? "80%" : "none",
              padding: isMobileView ? "6px 10px" : "6px 12px",
            }}
          >
            <input
              type="text"
              placeholder=" Search "
              className={`w-full outline-none ${isMobileView ? "text-sm" : ""}`}
              value={searchQuery}
              onChange={handleChange}
            />
            <button
              className={`py-1.5 border border-gray-400 rounded-full px-4 ${
                isMobileView ? "15px" : ""
              } ml-2`}
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
            className="cursor-pointer"
          />
          <CiVideoOn
            size={isMobileView ? "20px" : "24px"}
            className="cursor-pointer"
          />
          <Avatar
            src="https://cdn4.sharechat.com/img_7170528894_435735_291ad095_1663762433294_sc.webp?tenant=sc&referrer=pwa-sharechat-service&f=94_sc.webp"
            size={isMobileView ? 30 : 35}
            round={isMobileView ? "25px" : "30px"}
          />
        </div>
      </div>
      {isMobileView && showSidebar && (
        <div className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white shadow-lg z-20 px-6 overflow-y-auto">
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
