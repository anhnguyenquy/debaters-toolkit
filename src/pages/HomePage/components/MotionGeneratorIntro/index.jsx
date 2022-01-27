import { useNavigate } from 'react-router-dom'
import './style.scss'

export const MotionGeneratorIntro = () => {
  const navigate = useNavigate()
  return (
    <div className='motionGeneratorInfo'>
      <div className='motionGeneratorTitle'>Motion Generator</div>
      <div className='motionGeneratorSubHeader'>
        Get 1 random motion from over 7000
      </div>
      <button onClick={() => { navigate('/generator') }}>Get a motion</button>
    </div>
  )
}
