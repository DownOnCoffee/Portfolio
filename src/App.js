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
// import './index.css';

import { styles } from "./styles";

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
            <About></About>
            <Tech></Tech>
            {/* <Experience></Experience>
            <Works></Works>*/}
            
            <Feedbacks></Feedbacks> 
          </div>

          <div className="relative z-0">
            {/* <Contact></Contact>
            <StarsCanvas></StarsCanvas> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
