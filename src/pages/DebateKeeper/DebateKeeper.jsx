import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Helmet } from 'react-helmet'
import { Timer } from './Timer'
import {
  BP,
  WSDC,
  AP,
  Australs,
  BP5min,
  CP,
  CP_PMRE_SPLIT_OPP,
  CP_PMRE,
  CP_SPLIT_OPP,
} from './Timer/formats'
import './style.css'
import { usePageTracker } from '../../core/hooks'

export const DebateKeeper = () => {
  const history = useHistory()
  useEffect(() => {
    if (window.location.pathname == '/keeper') {
      history.push('/keeper/bp')
    }
  }, [])
  usePageTracker()
  return (
    <div className='debateKeeper'>
      <Helmet>
        <title>Debate Timekeeper</title>
        <meta name='description' content='Do debate timekeeping online.' />
        <link rel='canonical' href='https://www.debaterstoolkit.com/keeper' />
      </Helmet>
      <Switch>
        <Route path='/keeper/bp'>
          <Timer format={BP} />
        </Route>
        <Route path='/keeper/wsdc'>
          <Timer format={WSDC} />
        </Route>
        <Route path='/keeper/ap'>
          <Timer format={AP} />
        </Route>
        <Route path='/keeper/australs'>
          <Timer format={Australs} />
        </Route>
        <Route path='/keeper/bp5min'>
          <Timer format={BP5min} />
        </Route>
        <Route path='/keeper/cp'>
          <Timer format={CP} />
        </Route>
        <Route path='/keeper/cp_pmre_split_opp'>
          <Timer format={CP_PMRE_SPLIT_OPP} />
        </Route>
        <Route path='/keeper/cp_pmre'>
          <Timer format={CP_PMRE} />
        </Route>
        <Route path='/keeper/cp_split_opp'>
          <Timer format={CP_SPLIT_OPP} />
        </Route>
      </Switch>
    </div>
  )
}
