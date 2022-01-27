import { useNavigate } from 'react-router-dom'
import './style.scss'

export const MotionDatabaseIntro = () => {
  const navigate = useNavigate()
  return (
    <div className='motionDatabaseInfo'>
      <div className='motionDatabaseTitle'>Motion Database</div>
      <div className='motionDatabaseSubHeader'>
        Over 900 debate tournaments and 7000 motions
      </div>
      <button onClick={() => { navigate('/database') }}>Go to database</button>
    </div>
  )
}
