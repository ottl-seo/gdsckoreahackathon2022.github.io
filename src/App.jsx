import React, { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './hooks/scrollToTop';

import Main from './pages/Main';
import Hackathon from './pages/Hackathon';
import Prize from './pages/Prize';
import Staff from './pages/Staff';
import Navigation from './components/Navigation';
import Winner from './pages/Winner';

const App = () => {
  useEffect(() => {
    const widthValue = screen.width;
    if (widthValue <= 700) {
      alert('Mobile 환경을 지원하지 않습니다. 원활한 환경을 위하여 PC사용을 권장드립니다.');
    }
  });
  return (
    <HashRouter>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/timetable" component={Hackathon} />
        <Route exact path="/hackathon" component={Prize} />
        <Route exact path="/prize" component={Winner} />
        <Route exact path="/staff" component={Staff} />
      </Switch>
    </HashRouter>
  );
};

export default App;
