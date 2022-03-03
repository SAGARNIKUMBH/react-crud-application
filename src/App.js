import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import AddUser from "./Components/AddUser";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/users/add" component={AddUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
