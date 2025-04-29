import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import SideNav from "@/components/side-nav";
import Footer from "@/components/footer";

const Portfolio = () => {
  return (
    <div className="w-full h-full bg-bg1 relative text-gray-200">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SideNav />
      <Footer />
    </div>
  );
};

export default Portfolio;
