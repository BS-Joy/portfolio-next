import About from "./components/about/About";
import ContactSection from "./components/contact/ContactSection";
// import DarkToggleButton from "./components/DarkToggleButton";
import Interest from "./components/interest/Interest";
import SidebarNavbar from "./components/layout/SidebarNavbar";
import Projects from "./components/projects/Projects";
import SkillSection from "./components/skills/SkillSection";
import "./styles/global.css";

export default function Home() {
  return (
    <>
      <SidebarNavbar />
      <main>
        <About />
        <SkillSection />
        <Projects />
        <Interest />
        <ContactSection />
      </main>
    </>
  );
}
