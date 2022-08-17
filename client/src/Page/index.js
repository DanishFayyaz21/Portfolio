import { useRef } from 'react'
import About from "../Components/About";
import ProgressBar from "react-scroll-progress-bar";
import Contact from "../Components/Contact";
import Footer from "../Components/footer/footer.js";
import Hero from "../Components/Hero";
import Portfolios from "../Components/Portfolios";
import Resume from "../Components/Resume";
const Main = () => {

  const contact = useRef(null)
  const goToContact = () => {
    console.log(contact);
    contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <ProgressBar className="bar" />
      <Hero goToContact={goToContact} />
      <About />
      <Portfolios />
      <Resume />
      <div ref={contact}><Contact /></div>
      <Footer />
    </>
  );
};

export default Main;
