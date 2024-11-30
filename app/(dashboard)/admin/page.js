import HomeCard from "./components/home/HomeCard";
import { GiSkills } from "react-icons/gi";
import { MonitorCog } from "lucide-react";
import AboutSection from "./components/home/AboutSection";
import Image from "next/image";
import UploadImage from "./components/UploadImage";
import SocialLinkCard from "./components/SocialLinkCard";
import SocialLinkLists from "./components/SocialLinkLists";

const AdminPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`);

  const aboutData = await res.json();

  return (
    <div className="w-full flex flex-col justify-center mt-4 px-8 py-4">
      <div className=" w-full flex flex-col lg:flex-row gap-4">
        <HomeCard title={"Pages"} iconSize={"1.5rem"} count="5" />
        <HomeCard title={"Skills"} icon={<GiSkills />} count="8" />
        <HomeCard title={"Projects"} icon={<MonitorCog />} count="3" />
        <HomeCard title={"Social Links"} iconSize={"1.5rem"} count="4" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* About Data */}
        <AboutSection aboutData={aboutData} />

        {/* skill lists */}
        <div className="flex w-full flex-col items-center gap-4 justify-between border rounded-lg p-3 max-h-[280px] overflow-y-auto">
          <Image
            alt="profile image"
            width={200}
            height={200}
            src={aboutData?.ppUrl}
            className="rounded-full"
          />

          <UploadImage userData={aboutData} />
        </div>

        {/* social link lists */}
        <SocialLinkLists />
      </div>
    </div>
  );
};

export default AdminPage;
