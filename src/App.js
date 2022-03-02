import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// auth page
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "../src/pages/home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
