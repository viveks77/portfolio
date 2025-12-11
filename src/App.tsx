import Navbar from "@components/navbar";
import Home from "./Home.tsx";
import { Route, Switch, useLocation } from "wouter";
import About from "./About.tsx";
import { AnimatePresence } from "framer-motion";
import Work from "./Work.tsx";
import Project from "./Project.tsx";
import Contact from "./Contact.tsx";
import Cursor from "@components/Cursor.tsx";
import { useState, useEffect, Activity } from "react";

const App = () => {
  const [location] = useLocation();

  // Detect if device is mobile (simple check)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
      const checkMobile = () => {
          const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
          setIsMobile(isTouch || window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Activity mode={isMobile ? 'hidden': 'visible'}>
        <Cursor />
      </Activity>
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch location={location} key={location}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
