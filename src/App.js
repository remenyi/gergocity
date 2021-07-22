import { render } from "react-dom";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import WelcomePage from "./WelcomePage";

const App = () => {
  return (
  <Router>
    <Switch>
      <Route path="/main/">
        <MainPage />
      </Route>
      <Route path="/">
        <WelcomePage />
      </Route>
    </Switch>
  </Router>);
};

render(<App />, document.getElementById("root"));
