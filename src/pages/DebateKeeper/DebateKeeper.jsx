import { useEffect } from 'react'
import { TimerPC } from './TimerPC'
import { TimerMobile } from './TimerMobile'
import { isBrowser } from 'react-device-detect'
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
} from './TimerPC/formats'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router'
import './style.css'

export const DebateKeeper = () => {
  const history = useHistory()
  useEffect(() => {
    if (window.location.pathname == '/keeper') {
      history.push('/keeper/bp')
    }
  }, [])

  return (
    <div className='debateKeeper'>
      <Switch>
        <Route path='/keeper/bp'>
          {isBrowser ? <TimerPC format={BP} /> : <TimerMobile format={BP} />}
        </Route>
        <Route path='/keeper/wsdc'>
          {isBrowser ? <TimerPC format={WSDC} /> : <TimerMobile format={WSDC} />}
        </Route>
        <Route path='/keeper/ap'>
          {isBrowser ? <TimerPC format={AP} /> : <TimerMobile format={AP} />}
        </Route>
        <Route path='/keeper/australs'>
          {isBrowser ? <TimerPC format={Australs} /> : <TimerMobile format={Australs} />}        
        </Route>
        <Route path='/keeper/bp5min'>
          {isBrowser ? <TimerPC format={BP5min} /> : <TimerMobile format={BP5min} />}
        </Route>
        <Route path='/keeper/cp'>
          {isBrowser ? <TimerPC format={CP} /> : <TimerMobile format={CP} />}        
        </Route>
        <Route path='/keeper/cp_pmre_split_opp'>
          {isBrowser ? <TimerPC format={CP_PMRE_SPLIT_OPP} /> : <TimerMobile format={CP_PMRE_SPLIT_OPP} />}      
        </Route>
        <Route path='/keeper/cp_pmre'>
          {isBrowser ? <TimerPC format={CP_PMRE} /> : <TimerMobile format={CP_PMRE} />}      
        </Route>
        <Route path='/keeper/cp_split_opp'>
          {isBrowser ? <TimerPC format={CP_SPLIT_OPP} /> : <TimerMobile format={CP_SPLIT_OPP} />}      
        </Route>
      </Switch>
    </div>
  )
}
