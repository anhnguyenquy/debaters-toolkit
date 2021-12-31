import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import {
  MotionGeneratorIntro,
  MotionDatabaseIntro,
  BreakCalculatorIntro,
  DebateKeeperIntro,
} from './components'
import { InformationContainer, FacebookChat } from '../../core/components'
import MessengerCustomerChat from 'react-messenger-customer-chat'

export const HomePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <div className='homePage'>
      <Helmet>
        <title>Debaters' toolkit</title>
        <meta
          name='description'
          content='Generate a random debate motion, search our database of over 7000 motions, calculate break chances or do debate timekeeping.'
        />
        <link rel='canonical' href='https://www.debaterstoolkit.com/' />
      </Helmet>
      <MessengerCustomerChat
        pageId={process.env.REACT_APP_FB_PAGE_ID}
        appId={process.env.REACT_APP_FB_APP_ID}
      />
      <MotionGeneratorIntro />
      <MotionDatabaseIntro />
      <BreakCalculatorIntro />
      <DebateKeeperIntro />
      <InformationContainer />
    </div>
  )
}
