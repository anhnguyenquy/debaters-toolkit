import { useHistory } from 'react-router-dom'
import './style.scss'

export const DebateKeeperIntro = () => {
  const history = useHistory()
  return (
    <div className='debateKeeperInfo'>
      <div className='debateKeeperTitle'>Timekeeper</div>
      <div className='debateKeeperSubHeader'>
        Debate timekeeping tool, no downloading required
      </div>
      <button onClick={() => { history.push('/keeper') }}>Debate Keeper</button>
    </div>
  )
}
