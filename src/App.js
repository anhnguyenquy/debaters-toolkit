import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import {
  HomePage,
  MotionGenerator,
  AdminPage,
  BreakCalculator,
  MotionDatabase,
  SubmitNewMotion,
  DebateKeeper,
  About,
} from './pages'
import { NavBar } from './core/components'
import { useStyles } from './appStyle'

export default function App() {
  const classes = useStyles()
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
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
          <Route path='/admin'>
            <AdminPage />
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
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
