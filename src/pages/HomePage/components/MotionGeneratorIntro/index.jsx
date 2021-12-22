import { useHistory } from 'react-router-dom'
import './style.scss'

export const MotionGeneratorIntro = () => {
  const history = useHistory()
  return (
    <div className='motionGeneratorInfo'>
      <div className='motionGeneratorTitle'>Motion Generator</div>
      <div className='motionGeneratorSubHeader'>
        Get 1 random motion from over 7000
      </div>
      <button onClick={() => { history.push('/generator') }}>Get a motion</button>
    </div>
  )
}
