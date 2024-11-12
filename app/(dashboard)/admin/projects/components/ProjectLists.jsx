import AdminProjectCard from "./AdminProjectCard";

const ProjectLists = () => {
  return (
    <div className="w-full border rounded-lg p-3 max-h-[765px] overflow-y-auto">
      <h2 className="text-2xl mb-4 font-semibold">Project Lists</h2>
      <AdminProjectCard />
      <AdminProjectCard />
      <AdminProjectCard />
      <AdminProjectCard />
      <AdminProjectCard />
    </div>
  );
};

export default ProjectLists;
