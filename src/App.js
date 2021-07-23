import { render } from "react-dom";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import Scene from "./Scene";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/main/">
          <Scene />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>);
};

render(<App />, document.getElementById("root"));
