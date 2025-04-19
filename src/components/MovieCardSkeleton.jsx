import React from "react";

const MovieCardSkeleton = () => {
  return (
    <div
      role="status"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full animate-pulse gap-4"
    >
      <div className="w-62 h-80 bg-gray-300 rounded-t-lg md:rounded-none md:rounded-s-lg" />

      <div className="flex flex-col justify-between w-full">
        <div className="h-6 bg-gray-200 rounded-full w-2/3 mb-4" />{" "}
        {/* Title */}
        <div className="flex gap-4 mb-4">
          <div className="h-4 bg-gray-200 rounded-full w-24" /> {/* Release */}
          <div className="h-4 bg-gray-200 rounded-full w-24" /> {/* Rating */}
          <div className="h-4 bg-gray-200 rounded-full w-32" /> {/* Size */}
        </div>
        <div className="pr-4">
          <div className="h-4 bg-gray-200 rounded-full w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded-full w-5/6 mb-2" />
          <div className="h-4 bg-gray-200 rounded-full w-4/6 mb-4" />{" "}
        </div>
        {/* Description */}
        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4" />{" "}
        {/* Category */}
        <div className="h-10 bg-gray-300 rounded w-24" /> {/* Button */}
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
