import React, { useState } from "react";
import VideoContainer from "./components/VideoContainer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} handleSearch={handleSearch} />
      <div className="flex mt-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="ml-5 mr-5">
          <VideoContainer searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
