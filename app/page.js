import About from "./components/about/About";
import ContactSection from "./components/contact/ContactSection";
import Interest from "./components/interest/Interest";
import SidebarNavbar from "./components/layout/SidebarNavbar";
import Projects from "./components/projects/Projects";
import SkillSection from "./components/skills/SkillSection";
import SkillSection2 from "./components/skills/SkillSection2";
import "./styles/global.css";

export default async function Home() {
  const abouts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`);
  const aboutData = await abouts.json();

  const socials = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/social`);
  const socialLinks = await socials.json();
  return (
    <>
      <SidebarNavbar />
      <main>
        <About
          name={aboutData?.name}
          designation={aboutData?.designation}
          bio={aboutData?.bio}
        />
        <SkillSection />
        {/* <SkillSection2 /> */}
        <Projects />
        <Interest interests={aboutData?.interests} />
        <ContactSection socialLinks={socialLinks} />
      </main>
    </>
  );
}
