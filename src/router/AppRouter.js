import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Gifs from './../views/Gifs';

const Approuter = () => {
  return (
    <Router>
      <Navbar />
      <>
        <Switch>
          <Route exact path='/trending' component={Gifs} />
          <Route exact path='/' component={Gifs} />
        </Switch>
      </>
    </Router>
  );
};
export default Approuter;
