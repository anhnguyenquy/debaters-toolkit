import { useEffect } from 'react'
import ReactGA from 'react-ga'

export const usePageTracker = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
}