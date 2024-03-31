import React from "react";
import Avatar from "react-avatar";

const formatViews = (views) => {
  if (views >= 1000 && views < 1000000) {
    return `${(views / 1000).toFixed(1)}k`;
  } else if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else {
    return views;
  }
};

const calculateUploadTime = (uploadedDateTime) => {
  const currentDate = new Date();
  const uploadedDate = new Date(uploadedDateTime);
  const timeDifference = currentDate - uploadedDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (days === 0) {
    return "Today";
  } else if (days === 1) {
    return "Yesterday";
  } else if (days < 7) {
    return `${days} days ago`;
  } else if (days < 30) {
    return `${Math.floor(days / 7)} weeks ago`;
  } else if (days < 365) {
    return `${Math.floor(days / 30)} months ago`;
  } else {
    return `${Math.floor(days / 365)} years ago`;
  }
};

const VideoCart = ({
  category,
  channelName,
  channelPicture,
  duration,
  thumbnail,
  title,
  uploadedDateTime,
  views,
}) => {
  return (
    <div className="w-full cursor-pointer shadow-md rounded-xl overflow-hidden relative">
      <img className="w-full h-auto" src={thumbnail} alt={title} />
      <span className="absolute top-2 right-2 text-xs text-white bg-gray-800 px-2 py-1 rounded-md">
        {duration}
      </span>
      <div className="p-3">
        <div className="flex items-center mb-2">
          <Avatar src={channelPicture} size="35" round={true} />
          <div className="ml-3">
            <p className="font-semibold text-sm text-gray-800">{channelName}</p>
            <p className="text-xs text-gray-500">
              {calculateUploadTime(uploadedDateTime)} • {formatViews(views)}{" "}
              views
            </p>
          </div>
        </div>
        <p className="font-semibold text-sm text-gray-800 mb-1">{title}</p>
      </div>
    </div>
  );
};

export default VideoCart;
