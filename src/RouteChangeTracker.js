import React from 'react'
import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID_WEB)
const RouteChangeTracker = ({ history }) => {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
  })

  return <></>
}

export default withRouter(RouteChangeTracker)
