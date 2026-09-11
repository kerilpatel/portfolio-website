import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Recognition,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Recognition />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
