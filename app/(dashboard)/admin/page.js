import HomeCard from "./components/home/HomeCard";
import AdminProjectCard from "./projects/components/AdminProjectCard";
import { GiSkills } from "react-icons/gi";
import { MonitorCog } from "lucide-react";
import AboutSection from "./components/home/AboutSection";

const AdminPage = async () => {
  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project`
  );
  const projectLists = await projects.json();
  return (
    <div className="w-full flex flex-col justify-center mt-4 px-8 py-4">
      <div className=" w-full flex flex-col lg:flex-row gap-4">
        <HomeCard title={"Pages"} iconSize={"1.5rem"} count="5" />
        <HomeCard title={"Skills"} icon={<GiSkills />} count="8" />
        <HomeCard title={"Projects"} icon={<MonitorCog />} count="3" />
        <HomeCard title={"Social Links"} iconSize={"1.5rem"} count="4" />
      </div>

      <div className="flex gap-6 mt-8">
        {/* About Data */}
        <AboutSection />

        {/* skill lists */}
        <div className="w-full border rounded-lg p-3 max-h-[765px] overflow-y-auto">
          <h2 className="text-2xl mb-4 font-semibold">Skill Lists</h2>
          <AdminProjectCard
            project={projectLists[0]}
            key={projectLists[0].id}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
