import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  HomePage,
  MotionGenerator,
  AdminPage,
  BreakCalculator,
  MotionDatabase,
  SubmitNewMotion,
  DebateKeeper,
  About
} from './pages'
import { NavBar } from './core/components'
import { useStyles } from './appStyle'

export default function App() {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes['App']}>
        <NavBar />
        <Routes>
          <Route exact={true} path='/' element={<HomePage />} />
          <Route exact={true} path='generator' element={<MotionGenerator />} />
          <Route exact={true} path='admin' element={<AdminPage />} />
          <Route exact={true} path='database' element={<MotionDatabase />} />
          <Route exact={true} path='new_motion' element={<SubmitNewMotion />} />
          <Route exact={true} path='break_calculator' element={<BreakCalculator />} />
          <Route path='keeper' element={<DebateKeeper />}>
            <Route path=':format' element={<DebateKeeper />} />
          </Route>
          <Route exact={true} path='about' element={<About />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
   </BrowserRouter>
  )
}
