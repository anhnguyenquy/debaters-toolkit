import './style.css'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { customTheme } from '../../../core/constants'
import { formatList, formatListForPhone } from './formats'
import { useDeviceBreakPoint } from '../../../core/hooks'
import { Placeholder, SingleValue, Option } from '../../../core/components/SelectComponents'
import { formatStyle, formatStyleForPhone, formatStyleForExtraSmall } from './formatStyles'
import { IndicatorsContainer } from './IndicatorsContainers'
export const Timer = (props) => {
    const { format } = props
    const audio = new Audio('/media/bell.m4a')
    const history = useHistory()
    const [running, setRunning] = useState(false)
    const [bell, setBell] = useState(true)
    const [currentPeriod, setCurrentPeriod] = useState(0)
    const [time, setTime] = useState(format.periods[currentPeriod].timeLength) //seconds
    const [minute, setMinute] = useState(Math.floor(time / 60))
    const [second, setSecond] = useState(Math.floor(time % 60))
    const [atInit, setAtInit] = useState(true)
    const [elapsed, setElapsed] = useState(false)
    const [poiCount, setPoiCount] = useState(15)
    const [poiOn, setPoiOn] = useState(false)
    const [bellTimes, setBellTimes] = useState(format.periods[currentPeriod].bellAt)
    const [timeCountUp, setTimeCountUp] = useState(0)
    const [minuteCountUp, setMinuteCountUp] = useState(Math.floor(timeCountUp / 60))
    const [secondCountUp, setSecondCountUp] = useState(Math.floor(timeCountUp % 60))
    const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint()
    const [currentMainScreenStyle, setCurrentMainScreenStyle] = useState({})
    const hasPrep = format.hasPrep
    useEffect(() => {
        totalReset()
    }, [])
    useEffect(() => {
        let timeInterval = undefined
        if (running) {
            if (hasPrep) {
                if (currentPeriod == 0) {
                    timeInterval = setInterval(() => { setTime(prevTime => prevTime - 1) }, 1000)
                    return (() => {
                        clearInterval(timeInterval)
                    })
                }
                else {
                    timeInterval = setInterval(() => { setTimeCountUp(prevTime => prevTime + 1) }, 1000)
                    return (() => {
                        clearInterval(timeInterval)
                    })
                }
            }
            else {
                timeInterval = setInterval(() => { setTimeCountUp(prevTime => prevTime + 1) }, 1000)
                return (() => {
                    clearInterval(timeInterval)
                })
            }
        }
    }, [running])
    useEffect(() => {
        if (bell && running) {
            if (bellTimes.includes(time)) {
                audio.play()
            }
        }
        if (time > 0) {
            setMinute(Math.floor(time / 60))
            if (!atInit) {
                if (second == 0) {
                    setSecond(59)
                }
                else {
                    setSecond(Math.floor(time % 60))
                }
            }
            else {
                setSecond(Math.floor(time % 60))
                setAtInit(false)
            }
        }
        else if (time == 0) {
            audio.play()
            setMinute(0)
            setSecond(0)
            setElapsed(true)
            //background to light-red
            setCurrentMainScreenStyle({ backgroundColor: "#770101" })
        }
        else {
            setMinute(Math.floor(Math.abs(time) / 60))
            if (second == 59) {
                setSecond(0)
            }
            else {
                setSecond(Math.floor(Math.abs(time) % 60))
            }
        }
    }, [time])
    useEffect(() => {
        if (bell && running) {
            if (bellTimes.includes(timeCountUp)) {
                audio.play()
            }
        }
        setMinuteCountUp(Math.floor(timeCountUp / 60))
        setSecondCountUp(Math.floor(timeCountUp % 60))
        if (timeCountUp == format.periods[currentPeriod].timeLength) {
            audio.play()
            setElapsed(true)
            //background to light-red
            setCurrentMainScreenStyle({ backgroundColor: "#770101" })
        }
        if (timeCountUp == format.periods[currentPeriod].bellAt[0]) {
            //background to green
            setCurrentMainScreenStyle({ backgroundColor: "#25541d" })
        }
        if (format.periods[currentPeriod].bellAt.length > 2) {
            if (timeCountUp == format.periods[currentPeriod].bellAt[format.periods[currentPeriod].bellAt.length - 2]) {
                //background to orange
                setCurrentMainScreenStyle({ backgroundColor: "#a14f20" })
            }
        }
    }, [timeCountUp])
    const startOrStop = () => {
        setRunning(prevRunning => !prevRunning)
        poiReset()
    }
    const reset = () => {
        setRunning(false)
        setElapsed(false)
        setAtInit(true)
        poiReset()
        setTime(format.periods[currentPeriod].timeLength)
        setTimeCountUp(0)
        setBellTimes(format.periods[currentPeriod].bellAt)
        setCurrentMainScreenStyle({})
    }
    const next = () => {
        setCurrentPeriod(prevPeriod => prevPeriod + 1)
    }
    const back = () => {
        setCurrentPeriod(prevPeriod => prevPeriod - 1)
    }
    useEffect(() => {
        reset()
    }, [currentPeriod])
    const startOrStopPOI = () => {
        if (running) {
            if (hasPrep) {
                if (currentPeriod != 0) {
                    if (timeCountUp > 60 && timeCountUp < format.periods[currentPeriod].timeLength - 60) {
                        if (poiOn) {
                            setPoiOn(false)
                            setPoiCount(15)
                        }
                        else {
                            setPoiOn(true)
                        }
                    }
                    else if (timeCountUp >= format.periods[currentPeriod].timeLength - 60) {
                        if (poiOn) {
                            setPoiOn(false)
                            setPoiCount(15)
                        }
                    }
                }
            }
            else { //noprep
                if (timeCountUp > 60 && timeCountUp < format.periods[currentPeriod].timeLength - 60) {
                    if (poiOn) {
                        setPoiOn(false)
                        setPoiCount(15)
                    }
                    else {
                        setPoiOn(true)
                    }
                }
                else if (timeCountUp >= format.periods[currentPeriod].timeLength - 60) {
                    if (poiOn) {
                        setPoiOn(false)
                        setPoiCount(15)
                    }
                }
            }
        }
    }
    useEffect(() => {
        if (poiOn) {
            const poiInterval = setInterval(() => {
                setPoiCount(prevPoiCount => prevPoiCount - 1)
            }, 1000)
            return (() => {
                clearInterval(poiInterval)
            })
        }
    }, [poiOn])
    useEffect(() => {
        if (poiCount == 0) {
            setPoiOn(false)
            setPoiCount(15)
        }
    }, [poiCount])
    const poiReset = () => {
        setPoiOn(false)
        setPoiCount(15)
    }
    const totalReset = () => {
        setCurrentPeriod(0)
        reset()
    }
    useEffect(() => {
        let bellInterval = undefined
        if (hasPrep) {
            if (elapsed && bell && running && currentPeriod != 0) {
                bellInterval = setInterval(() => {
                    audio.play()
                }, 15000)
                return (() => {
                    clearInterval(bellInterval)
                })
            }
        }
        else { //noprep
            if (elapsed && bell && running) {
                bellInterval = setInterval(() => {
                    audio.play()
                }, 15000)
                return (() => {
                    clearInterval(bellInterval)
                })
            }
        }
    }, [elapsed, bell, running, currentPeriod])
    const handleRedirect = (option) => {
        history.push(option.value)
    }
    useEffect(() => {
        totalReset()
    }, [window.location.pathname])
    return (
        <div className="timer">
            <div className="topBar">
                <div className="formatName">
                    {
                        format.longTitle //isExtraSmall ? format.title : format.longTitle
                    }
                </div>
                <div className="topBarIcons">
                    <button className="bellButton topBarIcon" onClick={() => { setBell(prevBell => !prevBell) }}>
                        {
                            bell ? <i className="fas fa-bell fa-2x"></i> : <i className="fas fa-bell-slash fa-2x"></i>
                        }
                    </button>
                    <button onClick={totalReset} className="totalReset topBarIcon">
                        <i className="fas fa-redo-alt fa-2x"></i>
                    </button>
                </div>
                <div className="formatSelectorContainer">
                    <Select
                        className={isExtraSmall ? 'extraSmallFormatSelector' : ''}
                        id="formatSelector"
                        theme={customTheme}
                        options={isPhone || isExtraSmall ? formatListForPhone : formatList}
                        onChange={handleRedirect}
                        placeholder='Format'
                        isSearchable={false}
                        components={!isExtraSmall ? { Placeholder, SingleValue, Option } : { Placeholder, SingleValue, Option, IndicatorsContainer }} //{ Placeholder, SingleValue, Option }
                        styles={isPhone ? formatStyleForPhone : isExtraSmall ? formatStyleForExtraSmall : formatStyle} //styles={isPhone ? formatStyleForPhone : formatStyle}
                    />
                </div>
            </div>
            <div className="mainScreen" style={currentMainScreenStyle}>
                <div className="currentPeriod">{format.periods[currentPeriod].name}</div>
                {
                    hasPrep ?
                        <>
                            {
                                currentPeriod == 0 ?
                                    <div className={`timeDisplay ${elapsed ? 'elapsed' : ''}`}>{elapsed ? <>+ </> : <></>}{minute < 10 ? <>0{minute}</> : <>{minute}</>} : {second < 10 ? <>0{second}</> : <>{second}</>}</div>
                                    :
                                    <div className={`timeDisplay ${elapsed ? 'elapsed' : ''}`}>{minuteCountUp < 10 ? <>0{minuteCountUp}</> : <>{minuteCountUp}</>} : {secondCountUp < 10 ? <>0{secondCountUp}</> : <>{secondCountUp}</>}</div>
                            }
                        </>
                        : //noprep
                        <div className={`timeDisplay ${elapsed ? 'elapsed' : ''}`}>{minuteCountUp < 10 ? <>0{minuteCountUp}</> : <>{minuteCountUp}</>} : {secondCountUp < 10 ? <>0{secondCountUp}</> : <>{secondCountUp}</>}</div>
                }
                <div>
                    {
                        format.periods[currentPeriod].hasPOI ? <button className="poiButton" onClick={startOrStopPOI}>{poiOn ? poiCount : 'POI'}</button> : <div className="emptyDiv"></div>
                    }
                </div>
                <div className="bottomTexts">{format.periods[currentPeriod].bottomTexts}</div>
            </div>
            <div className="bottomBar">
                <button className="arrowButton" onClick={back} disabled={currentPeriod == 0 ? true : false}>
                    <i class="fas fa-arrow-left"></i>
                </button>
                <button className="startOrStop actionButton" onClick={startOrStop}>{!running ? 'START' : 'STOP'}</button>
                <button className="resetButton actionButton" onClick={reset}>RESET</button>
                <button className="arrowButton" onClick={next} disabled={currentPeriod == format.periods.length - 1 ? true : false}>
                    <i class="fas fa-arrow-right"></i>
                </button>
                <button className="ringBell" onClick={() => { if (bell) audio.play() }}>
                    <i className="fas fa-bell fa-3x"></i>
                </button>
            </div>
        </div>
    )
}
