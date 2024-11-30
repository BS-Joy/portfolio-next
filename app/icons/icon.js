import dynamic from "next/dynamic";

export const dashboardIcons = {
  Pages: {
    icon: "RiPagesLine",
    size: "1.5rem",
    library: "react-icons/ri",
  },
  Skills: {
    icon: "GiSkills",
    library: "react-icons/gi",
  },
  Projects: {
    icon: "MonitorCog",
    library: "lucide-react",
  },
  "Social Links": {
    icon: "IoShareSocialSharp",
    size: "1.5rem",
    library: "react-icons/io5",
  },
};

const getDashboardIcon = (cardTitle) => {
  let Icon;

  switch (cardTitle) {
    case "Pages":
      Icon = dynamic(() =>
        import("react-icons/ri").then(
          (mod) => mod[dashboardIcons[cardTitle].icon]
        )
      );
      break;
    case "Skills":
      Icon = dynamic(() =>
        import("react-icons/gi").then(
          (mod) => mod[dashboardIcons[cardTitle].icon]
        )
      );
      break;
    case "Projects":
      Icon = dynamic(() =>
        import("lucide-react").then(
          (mod) => mod[dashboardIcons[cardTitle].icon]
        )
      );
      break;
    case "Social Links":
      Icon = dynamic(() =>
        import("react-icons/io5").then(
          (mod) => mod[dashboardIcons[cardTitle].icon]
        )
      );
      break;
    default:
      throw new Error(`Icon for ${cardTitle} not found.`);
  }

  return Icon;
};

export default getDashboardIcon;
