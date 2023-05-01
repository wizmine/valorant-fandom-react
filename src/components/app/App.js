import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import EndpointsSection from "../endpointsSection/EndpointsSection";
import { MapPage, AgentPage } from "../pages";

import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <EndpointsSection />
          <Switch>
            <Route exact path="/">
              <AgentPage />
            </Route>
            <Route exact path="/map">
              <MapPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
