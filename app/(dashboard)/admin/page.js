import { AdminSidebar } from "./components/AdminSidebar";
import HomeCard from "./components/home/HomeCard";

const AdminPage = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <HomeCard title={"Pages"} count="4" />
        <HomeCard title={"Skills"} count="6" />
        <HomeCard title={"Projects"} count="3" />
      </div>
    </div>
  );
};

export default AdminPage;
