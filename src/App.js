import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import RouteChangeTracker from './RouteChangeTracker'
import {
  HomePage,
  MotionGenerator,
  BreakCalculator,
  MotionDatabase,
  SubmitNewMotion,
  DebateKeeper,
} from './pages'
import { NavBar } from './core/components'
import { useStyles } from './appStyle'

export default function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes['App']}>
        <NavBar />
        <Switch>
          <Route exact={true} path='/'>
            <HomePage />
          </Route>
          <Route path='/generator'>
            <MotionGenerator />
          </Route>
          <Route path='/database'>
            <MotionDatabase />
          </Route>
          <Route path='/new_motion'>
            <SubmitNewMotion />
          </Route>
          <Route path='/break_calculator'>
            <BreakCalculator />
          </Route>
          <Route path='/keeper'>
            <DebateKeeper />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
