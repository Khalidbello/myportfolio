import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import SideNav from "@/components/side-nav";

const Portfolio = () => {
  return (
    <div className="w-full h-full bg-bg1 relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <SideNav />
    </div>
  );
};


export default Portfolio;