import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage';
import Gallery1 from './components/carousel1';
import Gallery2 from './components/carousel2';
import Gallery3 from './components/carousel3';
import Gallery4 from './components/carousel4';
import Gallery5 from './components/carousel5';
import Quiz from './components/Quiz';

import Nav from './components/Nav';
import Button from './buttons/Button.svg';

const ArtRoulette = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/carousel1" component={Gallery1} />
        <Route exact path="/carousel2" component={Gallery2} />
        <Route exact path="/carousel3" component={Gallery3} />
        <Route exact path="/carousel4" component={Gallery4} />
        <Route exact path="/carousel5" component={Gallery5} />
      </Switch>
    </BrowserRouter>
  );
};

export default ArtRoulette;
