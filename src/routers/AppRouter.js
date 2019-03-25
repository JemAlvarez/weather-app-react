import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Weather from '../components/Weather'
import About from '../components/About'
import Help from '../components/Help'
import NotFound from '../components/NotFound'


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div id="app-wrapper">
      <Navbar />
      <Switch>
        <Route path="/" component={Weather} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
