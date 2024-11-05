import { IoHome } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FaFutbol } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const sidebarMenuItems = [
  {
    title: "about",
    icon: IoHome,
  },
  {
    title: "skills",
    icon: GiSkills,
  },
  {
    title: "projects",
    icon: FaLaptopCode,
  },
  {
    title: "interests",
    icon: FaFutbol,
  },
  {
    title: "contacts",
    icon: FaPhone,
  },
];

const SidebarItems = () => {
  return (
    <ul className="menu">
      {sidebarMenuItems?.map((item) => (
        <li key={item.title} className="menu-list">
          <a className="nav-link" href={`#${item.title}`}>
            <item.icon size={"1.1rem"} />
            <p className="nav-list-item">{item.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SidebarItems;
