import About from "../Components/About/index.js";
import ProgressBar from "react-scroll-progress-bar";
import Contact from "../Components/Contact/index.js";
import Footer from "../Components/footer/footer.js";
import Hero from "../Components/Hero/index.js";
import Portfolios from "../Components/Portfolios/index.js";
import Resume from "../Components/Resume/index";
const Main = () => {
  return (
    <>
      <ProgressBar className="bar" />
      <Hero />
      <About />
      <Portfolios />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
