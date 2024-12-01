import Image from "next/image";
import myThumbnail from "@/public/images/me2.jpg";
import SidebarItems from "./SidebarItems";
import { getAboutData } from "@/queries";

const Sidebar = async () => {
  const { ppUrl } = await getAboutData();
  return (
    <div>
      <section className="sidebar">
        <div className="sidebar-top">
          <Image
            className="profile-pic"
            width={200}
            height={200}
            src={ppUrl}
            alt="profile"
          />
        </div>
        <SidebarItems />
        {/* <footer>copyright © 2022 all right reserved</footer> */}
      </section>
    </div>
  );
};

export default Sidebar;
