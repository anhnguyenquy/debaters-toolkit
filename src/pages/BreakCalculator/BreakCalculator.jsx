import './style.css'
import Select from 'react-select'
import { useState } from 'react'
import { Result } from './Result'
import { Placeholder, SingleValue, Option } from '../../core/components/SelectComponents'
import { customTheme } from '../../core/constants'
import { formatStyle } from './formatStyle'
import { calculateBreaks } from '../../core/helpers'
export const BreakCalculator = () => {
    const [format, setFormat] = useState('')
    const [teamNumber, setTeamNumber] = useState(undefined)
    const [roundNumber, setRoundNumber] = useState(undefined)
    const [breakNumber, setBreakNumber] = useState(undefined)
    const [result, setResult] = useState({})
    const [hasResult, setHasResult] = useState(false)
    const changeFormat = (val) => {
        setFormat(val.value)
    }
    const calculate = () => {
        if (format != '' && teamNumber != undefined && roundNumber != undefined && breakNumber != undefined) {
            if (teamNumber > 500 || roundNumber > 500 || breakNumber > 500) {
                alert("Please enter smaller input!")
                setTeamNumber(undefined)
                setRoundNumber(undefined)
                setBreakNumber(undefined)
                setHasResult(false)
            }
            else {
                setResult(calculateBreaks({ format, teamNumber, roundNumber, breakNumber }))
                setHasResult(true)
            }
        }
    }
    return (
        <div className="breakCalculator">
            <div className="breakCalculatorTitle">Break Calculator</div>
            <div className="inputs">
                <input className="inputItem" type="number" placeholder="Number of teams" value={teamNumber} onChange={(e) => { setTeamNumber(parseInt(e.target.value, 10)) }} />
                <input className="inputItem" type="number" placeholder="Number of breaking teams" value={breakNumber} onChange={(e) => { setBreakNumber(parseInt(e.target.value, 10)) }} />
                <input className="inputItem" type="number" placeholder="Number of rounds" value={roundNumber} onChange={(e) => { setRoundNumber(parseInt(e.target.value, 10)) }} />
                <Select className="formatSelector"
                    theme={customTheme}
                    placeholder="Choose Format"
                    options={[{ value: 'ap', label: 'AP/WSDC' }, { value: 'bp', label: 'BP' }]}
                    onChange={changeFormat}
                    components={{ Placeholder, SingleValue, Option }}
                    styles={formatStyle}
                    isSearchable={false}
                />
            </div>
            <button onClick={calculate}>Calculate Break</button>
            {
                hasResult &&
                <div className="displayResults">
                    <div className="resultTitle">Breaking teams composition for the two extreme cases:</div>
                    <div className="caseContainer">
                        <div className="case">
                            <div className="line1">All Pull-ups Lose</div>
                            <Result result={result.pullUpLose} />
                        </div>
                        <div className="case">
                            <div className="line1">All Pull-ups Win</div>
                            <Result result={result.pullUpWin} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}