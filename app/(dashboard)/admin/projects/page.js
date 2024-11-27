import React from "react";
import ProjectLists from "./components/ProjectLists";
import AddProject from "./components/AddProject";
import { getUser } from "@/app/actions/cookieActions";
import { cookies } from "next/headers";

const Page = async () => {
  const user = await getUser();

  // const userCookie = (await cookies()).get("user")?.value;

  // console.log(userCookie);

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
