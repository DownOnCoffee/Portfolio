import { BrowserRouter } from "react-router-dom";
import {
  About,
  ExperienceMobile,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  canvas,
} from "./components";
import "./App.css";
import {NextUIProvider} from "@nextui-org/react";
import { useEffect,useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  }, [windowWidth]);
  
  return (
    <>
   
      <BrowserRouter>
        <div className="relative z-0 ">
          <div className="bg-hero-pattern bg-cover bg-repeat bg-center pb-7">
            <Navbar></Navbar>
            <Hero></Hero>
            
          </div>

          <div className="relative z-0 bg-bgcolor">
            <div id="about">
              <About></About>
            </div>
           
            <Tech></Tech>
            {/* {windowWidth<=850 ? (console.log('Rendering Experience') || <Experience /> ):( console.log('Rendering ExperienceMobile') || <ExperienceMobile />)} */}
            {windowWidth <= 850 ? (
              <ExperienceMobile />
            ) : (
              <Experience />
            )}

            <NextUIProvider>
            <Works></Works>
            </NextUIProvider>
            <Feedbacks></Feedbacks> 
            <Contact></Contact>
          </div>

          <div className="relative z-0">
            {/* 
            <StarsCanvas></StarsCanvas> */}
          </div>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
