import React from "react";

const PageLoading = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default PageLoading;
