import { useRef } from 'react'
import About from "../Components/About";
import ProgressBar from "react-scroll-progress-bar";
import Contact from "../Components/Contact";
import Footer from "../Components/footer/footer.js";
import Hero from "../Components/Hero";
import NavBar from "../Components/Navbar";

import Portfolios from "../Components/Portfolios";
import Resume from "../Components/Resume";
const Main = () => {


  const hero = useRef(null)
  const goToHero = () => {
    hero.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  const about = useRef(null)
  const goToAbout = () => {
    about.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const portfolio = useRef(null)
  const goToPortfolio = () => {
    portfolio.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const resume = useRef(null)
  const goToResume = () => {
    resume.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const contact = useRef(null)
  const goToContact = () => {
    contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (
    <>
      <ProgressBar className="bar" />
      <NavBar hero={goToHero} about={goToAbout} portfolio={goToPortfolio} resume={goToResume} contact={goToContact} />

      <div ref={hero}><Hero goToContact={goToContact} /></div>
      <div ref={about}><About /></div>
      <div ref={portfolio}><Portfolios /></div>
      <div ref={resume}><Resume /></div>
      <div ref={contact}><Contact /></div>
      <Footer />
    </>
  );
};

export default Main;
