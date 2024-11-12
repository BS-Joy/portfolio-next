import React from "react";
import ProjectLists from "./components/ProjectLists";
import AddProject from "./components/AddProject";

const Page = () => {
  return (
    <div className="w-full p-4">
      <div className="flex gap-5 mt-6">
        <ProjectLists />
        <AddProject />
      </div>
    </div>
  );
};

export default Page;
