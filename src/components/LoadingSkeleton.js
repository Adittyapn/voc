import React from "react";

function LoadingSkeleton() {
  return (
    <>
      <div className="animate-pulse bg-white h-auto rounded-[15px] overflow-hidden shadow-md">
        <div className="bg-gray-200 h-48"></div>
        <div className="p-4">
          <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2"></div>
        </div>
      </div>
      <div className="animate-pulse bg-white h-auto rounded-[15px] overflow-hidden shadow-md">
        <div className="bg-gray-200 h-48"></div>
        <div className="p-4">
          <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2"></div>
        </div>
      </div>
      <div className="animate-pulse bg-white h-auto rounded-[15px] overflow-hidden shadow-md">
        <div className="bg-gray-200 h-48"></div>
        <div className="p-4">
          <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2"></div>
        </div>
      </div>
    </>
  );
}

export default LoadingSkeleton;
