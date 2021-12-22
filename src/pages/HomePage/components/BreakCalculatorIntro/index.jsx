import { useHistory } from 'react-router-dom'
import './style.scss'

export const BreakCalculatorIntro = () => {
  const history = useHistory()
  return (
    <div className='breakCalculatorInfo'>
      <div className='breakCalculatorTitle'>Break Calculator</div>
      <div className='breakCalculatorSubHeader'>
        Calculate break for BP, AP and WSDC
      </div>
      <button onClick={() => { history.push('/break_calculator') }}>Calculate Break</button>
    </div>
  )
}
