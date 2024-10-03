import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Process from "./Components/Process";
import Testimonials from "./Components/Testimonials";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easeing: "ease-i-sine,",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Process />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
