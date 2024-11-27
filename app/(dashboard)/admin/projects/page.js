import React from "react";
import ProjectLists from "./components/ProjectLists";
import AddProject from "./components/AddProject";
import { getUser } from "@/app/actions/cookieActions";

const Page = async () => {
  const user = await getUser();

  return (
    <div className="w-full p-4">
      <div className="flex gap-5 mt-6">
        <ProjectLists />
        <AddProject user={user} />
      </div>
    </div>
  );
};

export default Page;
