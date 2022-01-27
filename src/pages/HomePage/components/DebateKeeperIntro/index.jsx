import { useNavigate } from 'react-router-dom'
import './style.scss'

export const DebateKeeperIntro = () => {
  const navigate = useNavigate()
  return (
    <div className='debateKeeperInfo'>
      <div className='debateKeeperTitle'>Timekeeper</div>
      <div className='debateKeeperSubHeader'>
        Debate timekeeping tool, no downloading required
      </div>
      <button onClick={() => { navigate('/keeper') }}>Debate Keeper</button>
    </div>
  )
}
