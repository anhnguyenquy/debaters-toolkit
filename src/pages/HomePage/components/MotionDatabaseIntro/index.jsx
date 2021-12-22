import { useHistory } from 'react-router-dom'
import './style.scss'

export const MotionDatabaseIntro = () => {
  const history = useHistory()
  return (
    <div className='motionDatabaseInfo'>
      <div className='motionDatabaseTitle'>Motion Database</div>
      <div className='motionDatabaseSubHeader'>
        Over 900 debate tournaments and 7000 motions
      </div>
      <button onClick={() => { history.push('/database') }}>Go to database</button>
    </div>
  )
}
