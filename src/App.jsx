import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './hooks/scrollToTop';

import Main from './pages/Main';
import Hackathon from './pages/Hackathon';
import Prize from './pages/Prize';
import Staff from './pages/Staff';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/timetable" component={Hackathon} />
        <Route exact path="/hackathon" component={Prize} />
        <Route exact path="/staff" component={Staff} />
      </Switch>
    </HashRouter>
  );
};

export default App;
