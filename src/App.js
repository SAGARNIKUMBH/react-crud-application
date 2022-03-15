import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import ViewUser from "./Components/ViewUser";
import LoginForm from "./Components/LoginForm";

import "./App.css";

function App() {
  const [dataSreach, setDataSreach] = useState("");
  const getSreach = (sreachValue) => {
    setDataSreach(sreachValue);
    console.log("sdasd", sreachValue);
  };
  return (
    <>
      <Router>
        <div className="App">
          <Navbar getSreach={getSreach} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home dataSreach={dataSreach} />}
            />
            <Route exact path="LoginForm" component={LoginForm} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={ViewUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
