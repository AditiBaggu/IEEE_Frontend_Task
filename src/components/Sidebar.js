import React, { useState, useEffect } from "react";
import { CiHome } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa6";
import {
  MdOutlineSubscriptions,
  MdOutlineExplore,
  MdOutlineWatchLater,
  MdVideoLibrary,
  MdFeedback,
} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const open = useSelector((store) => store.app.open);
  const [isMobileView, setIsMobileView] = useState(false);

  console.log(open);

  const handleClick = (title) => {
    setSelectedItem(title);
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
      className={`relative w-full md:w-[40%] p-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden ${
        isMobileView ? "hidden" : "block"
      }`}
    >
      {sidebarItem.map((item, index) => {
        return (
          <div key={index} className="flex my-3 ml-2 justify-between">
            <button
              className={`rounded-lg px-1 w-full flex items-center ${
                selectedItem === item.title ? "bg-orange-300" : "bg-white"
              }`}
              onClick={() => handleClick(item.title)}
            >
              <span>{item.icons}</span>
              <span className={`ml-3 ${open ? "" : "hidden"}`}>
                {item.title}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

const sidebarItem = [
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <MdOutlineExplore size="24px" />,
    title: "Explore",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <MdOutlineWatchLater size="24px" />,
    title: "Watch Later",
  },
  {
    icons: <FaHistory size="22px" />,
    title: "History",
  },
  {
    icons: <MdVideoLibrary size="22px" />,
    title: "Library",
  },
  {
    icons: <IoSettingsOutline size="24px" />,
    title: "Settings",
  },
  {
    icons: <FaRegFlag size="24px" />,
    title: "Report",
  },
  {
    icons: <IoMdHelpCircleOutline size="24px" />,
    title: "Help",
  },
  {
    icons: <MdFeedback size="24px" />,
    title: "Send Feedback",
  },
];

export default Sidebar;
