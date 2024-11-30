import Image from "next/image";
import myThumbnail from "@/public/images/me2.jpg";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <div>
      <section className="sidebar">
        <div className="sidebar-top">
          <Image className="profile-pic" src={myThumbnail} alt="profile" />
        </div>
        <SidebarItems />
        {/* <footer>copyright © 2022 all right reserved</footer> */}
      </section>
    </div>
  );
};

export default Sidebar;
