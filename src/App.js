import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.js'
import { HomePage, MotionGenerator, AdminPage, BreakCalculator, MotionDatabase, SubmitNewMotion, DebateKeeper, About } from './pages';
import { NavBar } from './core/components'
import React from 'react';
export default function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact={true} path="/">
              <HomePage />
            </Route>
            <Route path="/generator">
              <MotionGenerator />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/database">
              <MotionDatabase />
            </Route>
            <Route path="/new_motion">
              <SubmitNewMotion />
            </Route>
            <Route path="/break_calculator">
              <BreakCalculator />
            </Route>
            <Route path="/keeper">
              <DebateKeeper />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

