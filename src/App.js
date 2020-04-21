import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/resume'>
        <Resume />
      </Route>
      <Route path='/portfolio'>
        <Portfolio />
      </Route>
      <Route path='/contacts'>
        <Contacts />
      </Route>
    </>
  );
}

export default App;
