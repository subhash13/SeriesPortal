import Navbar from "./navbar"
import Home from "./Home";
import Footer from "./footer"
import About from "./about";
import AddSeries from "./addSeries";
import PageNotFound from "./404";
import Favourites from "./favourites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/addSeries">
            <AddSeries />
          </Route>
          <Route exact path="/favourites">
            <Favourites/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
