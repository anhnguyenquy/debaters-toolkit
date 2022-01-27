import { useNavigate } from 'react-router-dom'
import './style.scss'

export const BreakCalculatorIntro = () => {
  const navigate = useNavigate()
  return (
    <div className='breakCalculatorInfo'>
      <div className='breakCalculatorTitle'>Break Calculator</div>
      <div className='breakCalculatorSubHeader'>
        Calculate break for BP, AP and WSDC
      </div>
      <button onClick={() => { navigate('/break_calculator') }}>Calculate Break</button>
    </div>
  )
}