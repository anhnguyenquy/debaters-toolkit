import './style.css'
import { useState, useEffect } from 'react'
import { firebaseFirestore } from '../../../../firebase'
import { topics, formats } from '../../../../core/constants'
import { getFormattedTopicsFromValues, getTourneyID } from '../../../../core/helpers'
import { useDeviceBreakPoint } from "../../../../core/hooks"
import { TablePC, TablePhone, TableTablet } from './components/tables'
export const PendingRequests = () => {
    const { isPhone, isTablet } = useDeviceBreakPoint()
    const [requests, setRequests] = useState([])
    const loadRequests = async () => {
        const requestDataRaw = await firebaseFirestore.collection("requests").get()
        const requestData = []
        requestDataRaw.forEach(doc => requestData.push({ ...doc.data(), id: doc.id }))
        setRequests(requestData)
    }
    const del = (id) => {
        firebaseFirestore.collection("requests").doc(id).delete()
        const newRequests = requests.filter(request => {
            return (request.id !== id)
        })
        setRequests(newRequests)
    }
    useEffect(() => {
        loadRequests()
    }, [])
    const updateRequest = async (fieldName, newValue, id) => {
        if (newValue != undefined && newValue != null) {
            const requestsRef = firebaseFirestore.collection('requests').doc(id)
            await requestsRef.update({
                [fieldName]: newValue
            })
        }
    }
    const getDefaultTopic = (topicArray) => {
        let defaultTopics = []
        topicArray.forEach(topic => {
            for (let i = 0; i < topics.length; i++) {
                if (topics[i].value == topic) {
                    defaultTopics.push(topics[i])
                }
            }
        })
        return defaultTopics
    }
    const getDefaultFormat = (format) => {
        let returnValue
        for (let i = 0; i < formats.length; i++) {
            if (formats[i].value == format) {
                returnValue = formats[i]
            }
        }
        return returnValue
    }
    const addToDatabase = async (request) => {
        const name = request.tournamentName
        const year = request.year
        const format = request.format
        let id = await getTourneyID(name, year, format)
        if (id == "") { //no existing tournament
            let tournamentFormValue = {
                name: name,
                format: format,
                year: year
            }
            await firebaseFirestore.collection("tournaments").add(tournamentFormValue)
            id = await getTourneyID(name, year, format)
        }
        console.log(id)
        let motionFormValue = {
            content: request.motion,
            infoSlide: request.infoSlide,
            topic: getFormattedTopicsFromValues(request.topic),
            language: request.language,
            division: request.division,
            tournamentID: id,
            round: request.round,
            link: request.link
        }
        firebaseFirestore.collection("motions").add(motionFormValue)
        del(request.id)
    }
    const tableProps = { updateRequest, del, requests, getDefaultFormat, getDefaultTopic, addToDatabase }
    return (
        <div className="pendingRequests">
            <div className="pendingMotionRequestTitle">Pending motion requests:</div>
            <div className="requestsTableContainer">
                {
                    requests.length != 0 ?
                        isTablet ?
                            <TableTablet {...tableProps} />
                            :
                            <>
                                {
                                    isPhone ? <TablePhone {...tableProps} /> : <TablePC {...tableProps} />
                                }
                            </>
                        :
                        <></>
                }
            </div>
        </div>
    )
}