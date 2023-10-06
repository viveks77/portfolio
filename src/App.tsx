import Navbar from "@components/navbar";
import Home from "./Home.tsx";
import { Route, Switch, useLocation } from "wouter";
import About from "./About.tsx";
import { AnimatePresence } from "framer-motion";
import Work from "./Work.tsx";
import Project from "./Project.tsx";
import Contact from "./Contact.tsx";

const App = () => {
  const [location] = useLocation();

  return (
    <>
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
