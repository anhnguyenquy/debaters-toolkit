import './style.css'
import Select from 'react-select'
import { useState, useRef } from 'react'
import { firebaseFirestore } from '../../../../firebase'
import { topics, languages, customTheme, topicsForMotions } from '../../../../helpers/data'
import tournamentOptions from '../../../../helpers/data/tournamentOptions.json'
import { useDeviceBreakPoint } from '../../../../hooks'
import { TablePC, TablePhone, TableTablet } from './components/tables'
import DownloadLink from 'react-download-link'
import _ from 'lodash'

export const LoadMotions = () => {
    const { isPhone, isTablet } = useDeviceBreakPoint()
    const [topic, setTopic] = useState([])
    const [language, setLanguage] = useState('')
    const [tournamentID, setTournamentID] = useState('')
    const [motionID, setMotionID] = useState('')
    const [max, setMax] = useState(10)
    const [motions, setMotions] = useState([])
    const [loading, setLoading] = useState(false)
    const tournamentRef = useRef(null)
    function changeTopic(val) {
        if (val.length == 0) {
            setTopic([])
        }
        else {
            val.forEach(obj => {
                setTopic([...topic, obj.value])
            })
        }
    }
    function changeLanguage(val) {
        if (val == null) {
            setLanguage('');
        }
        else {
            setLanguage(val.value);
        }
    }
    function changeTournament(val) {
        if (val == null) {
            setTournamentID('');
        }
        else {
            setTournamentID(val.value);
        }
    }
    function changeTournamentID(e) {
        setTournamentID(e.target.value)
        let newOption
        tournamentOptions.forEach(option => {
            if (option.value == e.target.value) {
                newOption = tournamentOptions[tournamentOptions.indexOf(option)]
            }
        })
        if (newOption != undefined) {
            tournamentRef.current.select.setValue(newOption)
        }
        else {
            tournamentRef.current.select.setValue('')
        }
    }
    const changeMax = (e) => {
        if (e.target.value == "") {
            setMax(10)
        }
        else {
            setMax(e.target.value)
        }
    }
    const loadMotions = async () => {
        let motionsRef = firebaseFirestore.collection('motions')
        setLoading(true)
        if (language != '') {
            motionsRef = motionsRef.where('language', '==', language)
        }
        if (tournamentID != '') {
            motionsRef = motionsRef.where('tournamentID', '==', tournamentID)
        }
        if (motionID != '') {
            motionsRef = motionsRef.doc(motionID)
        }
        if (topic != []) {
            topic.forEach(key => {
                motionsRef = motionsRef.where(`topic.${key}.check`, '==', true)
            })
        }
        if (motionID == '') {
            const motionDataRaw = await motionsRef.limit(max).get();
            const motionData = []
            motionDataRaw.forEach(doc => {
                let loadedTopicTemp = { ...doc.data() }
                let tempTopics = []
                for (const key in loadedTopicTemp.topic) {
                    tempTopics.push(loadedTopicTemp.topic[key]['title'])
                }
                motionData.push({ ...doc.data(), id: doc.id, topicList: tempTopics })
            })
            let motionDataSorted = []
            const preliminaryMotions = []
            const octofinals = []
            const semifinals = []
            const quarterfinals = []
            const finals = []
            const theRest = []
            motionData.forEach(motion => {
                if (!isNaN(motion.round)) {
                    preliminaryMotions.push(motion)
                }
                else if (motion.round.includes("Octofinals")) {
                    octofinals.push(motion)
                }
                else if (motion.round.includes("Semifinals")) {
                    semifinals.push(motion)
                }
                else if (motion.round.includes("Quarterfinals")) {
                    quarterfinals.push(motion)
                }
                else if (motion.round.includes("Final")) {
                    finals.push(motion)
                }
                else {
                    theRest.push(motion)
                }
            })
            preliminaryMotions.sort((a, b) => (a.round > b.round) ? 1 : -1)
            octofinals.sort((a, b) => (a.round > b.round) ? 1 : -1)
            semifinals.sort((a, b) => (a.round > b.round) ? 1 : -1)
            quarterfinals.sort((a, b) => (a.round > b.round) ? 1 : -1)
            finals.sort((a, b) => (a.round > b.round) ? 1 : -1)
            theRest.sort((a, b) => (a.round > b.round) ? 1 : -1)
            motionDataSorted = motionDataSorted.concat(preliminaryMotions, octofinals, semifinals, quarterfinals, finals, theRest)
            setMotions(motionDataSorted)
            setLoading(false)
        }
        else {
            const motionDataRaw = await motionsRef.get();
            if (motionDataRaw.exists == true) {
                const content = motionDataRaw._delegate._document.data.value.mapValue.fields.content.stringValue
                const division = motionDataRaw._delegate._document.data.value.mapValue.fields.division.stringValue
                const infoSlide = motionDataRaw._delegate._document.data.value.mapValue.fields.infoSlide.stringValue
                const language = motionDataRaw._delegate._document.data.value.mapValue.fields.language.stringValue
                const link = motionDataRaw._delegate._document.data.value.mapValue.fields.link.stringValue
                const round = motionDataRaw._delegate._document.data.value.mapValue.fields.round.stringValue
                const tournamentID = motionDataRaw._delegate._document.data.value.mapValue.fields.tournamentID.stringValue
                const topic = motionDataRaw._delegate._document.data.value.mapValue.fields.topic.mapValue
                const motionData = []
                motionData.push({ content: content, division: division, infoSlide: infoSlide, language: language, link: link, round: round, tournamentID: tournamentID, topic: topic, id: motionID })
                console.log(motionData)
                setMotions(motionData)
                setLoading(false)
            }
            else {
                setLoading(false)
                setMotions([])
            }
        }
    }
    const del = async (id) => {
        await firebaseFirestore.collection("motions").doc(id).delete();
        await loadMotions();
    }
    const updateMotion = async (fieldName, newValue, id) => {
        if (newValue != undefined && newValue != null) {
            const motionsRef = firebaseFirestore.collection('motions').doc(id)
            await motionsRef.update({
                [fieldName]: newValue
            })
        }
    }
    const downloadJSON = async () => {
        let motionsRef = firebaseFirestore.collection('motions')
        const motionDataRaw = await motionsRef.get()
        const motionData = []
        motionDataRaw.forEach(doc => { motionData.push({ ...doc.data(), id: doc.id }) })
        return JSON.stringify(motionData)
    }
    const getDefaultTopic = (topicMap) => {
        const items = []
        for (const [key, value] of Object.entries(topicMap)) {
            for (let i = 0; i < topicsForMotions.length; i++) {
                if (value.title == topicsForMotions[i].label) {
                    items.push(topicsForMotions[i])
                }
            }
        }
        return items
    }
    const tableProps = { updateMotion, del, motions, getDefaultTopic }
//---------------------------------------------------------------------------------------------------------
    const script = async () => {
        
    }
//---------------------------------------------------------------------------------------------------------
    return (
        <div className="loadMotions">
            <div className="loadedMotionsHeaderContainer">
                <div className="motionsListTitle">Existing motions: </div>
                <button id="fetchMotionsButton" onClick={() => { loadMotions() }}>Refresh</button>
            </div>
            <div className="filterMotions">
                <Select className="motionFilterItem"
                    theme={customTheme}
                    placeholder="Topic"
                    isSearchable={true}
                    options={topics}
                    onChange={changeTopic}
                    isMulti={true}
                />
                <Select className="motionFilterItem"
                    theme={customTheme}
                    placeholder="Language"
                    options={languages}
                    onChange={changeLanguage}
                />
                <Select className="motionFilterItem"
                    theme={customTheme}
                    placeholder="Tournament"
                    options={tournamentOptions}
                    onChange={changeTournament}
                    isClearable={true}
                    ref={tournamentRef}
                />
                <input className="motionFilterItem motionFilterItemBox" spellCheck={false} type="text" placeholder="Tournament ID" value={tournamentID} onChange={changeTournamentID} />
                <input className="motionFilterItem motionFilterItemBox" spellCheck={false} type="text" placeholder="Motion ID" defaultValue={motionID} onChange={(e) => { setMotionID(e.target.value) }} />
                <input className="motionFilterItem motionFilterItemBox inputMax" spellCheck={false} type="number" placeholder="Display at max? (Default: 10)" onChange={changeMax} />
            </div>
            <div className="downloadMotionsJSONButtonContainer">
                <DownloadLink
                    className="downloadMotionsJSON"
                    label="Download JSON"
                    tagName="button"
                    filename="motionsFromDatabase.json"
                    style={{}}
                    exportFile={downloadJSON}
                />
            </div>
{/*--------------------------------------Hide-this-by-default-------------------------------------------------*/}
            {/* <div className="motionScriptContainer">
                <button className="runMotionScript" onClick={script}>Run Script</button>
            </div> */}
{/*--------------------------------------Ultra-Dangerous-Hidden-Dark-Magic------------------------------------*/}
            <div className="displayExistingMotions">
                {
                    loading ? <div className="loadingMotionMessage">Loading</div> :
                        <div className="motionsTableContainer">
                            {
                                isPhone ? <TablePhone {...tableProps} /> :
                                    <>
                                        {
                                            isTablet ? <TableTablet {...tableProps} /> : <TablePC {...tableProps} />
                                        }
                                    </>
                            }
                        </div>
                }
            </div>
        </div>

    )
}