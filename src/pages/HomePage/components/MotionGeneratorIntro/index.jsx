import './style.scss'
export const MotionGeneratorIntro = () => {
    return (
        <div className="motionGeneratorInfo">
            <div className="motionGeneratorTitle">Motion Generator</div>
            <div className="motionGeneratorSubHeader">Get 1 random motion from over 7000</div>
            <a href="/generator"><button>Get a motion</button></a>
        </div>
    )
}