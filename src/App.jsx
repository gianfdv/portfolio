import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Resume } from "./components/Resume/Resume";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  

  return (
    <>
      <div className = {styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Resume/>
        <Projects/>
        <Contact/>
        <ScrollToTopButton/>
      </div>
    </>
  );
}

export default App
