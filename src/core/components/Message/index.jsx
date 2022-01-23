import './style.css'
import { useState, useEffect } from 'react';
export const Message = (props) => {
    const { status, successMessage, failureMessage } = props;
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (status != undefined) {
            setShow(true)
        }
    }, [status])
    useEffect(() => {
        const resetShow = () => { setShow(false) }
        if (show) setTimeout(resetShow, 1500)
        return(() => {
            clearTimeout(resetShow)
        })
    }, [show])
    return (
        <>
            {show &&
                <div className='message'>
                    {
                        <div>{status == true ? <i className="fas fa-check-circle statusIcon" id="successIcon" color="#abe491" /> : <i className="fas fa-times-circle statusIcon" id="failureIcon" color="#e49191" />}</div>
                    }
                    <div className="messageBox">
                        {
                            <div>{
                                status == true ?
                                    <div>
                                        <div>{successMessage}</div>
                                    </div>
                                    :
                                    <div>
                                        <div>{failureMessage}</div>
                                    </div>
                            }</div>

                        }
                    </div>
                </div>
            }
        </>
    )
}