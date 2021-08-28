import './style.scss'
export const BreakCalculatorIntro = () => {
    return (
        <div className="breakCalculatorInfo">
            <div className="breakCalculatorTitle">Break Calculator</div>
            <div className="breakCalculatorSubHeader">Calculate break for BP, AP and WSDC</div>
            <a href="/break_calculator"><button>Calculate Break</button></a>
        </div>
    )
}