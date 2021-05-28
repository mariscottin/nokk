import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/">
            <Navigation />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
