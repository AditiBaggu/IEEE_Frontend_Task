import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import VideoCart from "./VideoCart";

const VideoContainer = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://ypapi.formz.in/api/public/videos"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setVideos(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchVideos();
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
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

  let filteredVideos = videos;

  if (selectedCategory !== "All") {
    filteredVideos = videos.filter(
      (video) => video.category === selectedCategory
    );
  }

  if (searchQuery) {
    filteredVideos = filteredVideos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (loading) {
    return (
      <div className="text-center">
        <Spin />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="py-4">
        {["All", ...new Set(videos.map((video) => video.category))].map(
          (category, index) => (
            <button
              key={index}
              className={`bg-gray-200 font-medium mx-2 px-4 py-1 rounded-lg ${
                selectedCategory === category ? "bg-orange-300" : ""
              }`}
              onClick={() => handleCategoryFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        )}
      </div>
      <div
        className={`grid ${
          isMobileView ? "grid-cols-1 gap-4" : "grid-cols-4 gap-3"
        }`}
      >
        {filteredVideos.map((video) => (
          <VideoCart
            key={video.id}
            channelName={video.channelName}
            category={video.category}
            channelPicture={video.channelPicture}
            duration={video.duration}
            thumbnail={video.thumbnail}
            title={video.title}
            uploadedDateTime={video.uploadedDateTime}
            views={video.views}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default VideoContainer;
