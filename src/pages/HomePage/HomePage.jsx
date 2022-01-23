import { Helmet } from 'react-helmet'
import {
  MotionGeneratorIntro,
  MotionDatabaseIntro,
  BreakCalculatorIntro,
  DebateKeeperIntro,
} from './components'

export const HomePage = () => {
  
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
      <MotionGeneratorIntro />
      <MotionDatabaseIntro />
      <BreakCalculatorIntro />
      <DebateKeeperIntro />
    </div>
  )
}
