import { BrowserRouter } from "react-router-dom";
import {
  About,
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

function App() {
  return (
    <>
   
      <BrowserRouter>
        <div className="relative z-0 ">
          <div className="bg-hero-pattern bg-cover bg-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
            
          </div>
          <div className="relative z-0 bg-bgcolor">
            <div id="about">
              <About></About>

            </div>
           
            <Tech></Tech>
            <Experience></Experience>
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
