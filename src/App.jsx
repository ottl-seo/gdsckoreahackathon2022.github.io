import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './hooks/scrollToTop';

import Main from './pages/Main';
import Topic from './pages/Topic';
import Rule from './pages/Rule';
import Staff from './pages/Staff';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/topic" component={Topic} />
        <Route exact path="/rule" component={Rule} />
        <Route exact path="/staff" component={Staff} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
