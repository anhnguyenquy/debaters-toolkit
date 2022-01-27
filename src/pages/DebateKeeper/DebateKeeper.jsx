import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
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
import { usePageTracker } from '../../core/hooks'
import './style.css'

const CorrespondingTimer = (props) => {
  const { format } = props
  switch (format) {
    case 'bp':
      return <Timer format={BP} />
    case 'wsdc':
      return <Timer format={WSDC} />
    case 'ap':
      return <Timer format={AP} />
    case 'australs':
      return <Timer format={Australs} />
    case 'bp5min':
      return <Timer format={BP5min} />
    case 'cp':
      return <Timer format={CP} />
    case 'cp_pmre_split_opp':
      return <Timer format={CP_PMRE_SPLIT_OPP} />
    case 'cp_pmre':
      return <Timer format={CP_PMRE} />
    case 'cp_split_opp':
      return <Timer format={CP_SPLIT_OPP} />
  }
  return <Navigate to='/keeper/bp' />
}

export const DebateKeeper = () => {
  const { format } = useParams()
  useEffect(() => {
    if (document.getElementById('fb-root')) {
      document.getElementById('fb-root').remove()
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
      <CorrespondingTimer format={format}/>
    </div>
  )
}
