import AdminProjectCard from "./AdminProjectCard";

const ProjectLists = async () => {
  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project`
  );
  const projectLists = await projects.json();

  return (
    <div className="w-full border rounded-lg p-3 max-h-[765px] overflow-y-auto">
      <h2 className="text-2xl mb-4 font-semibold">Project Lists</h2>
      {projectLists?.map((project) => (
        <AdminProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectLists;
