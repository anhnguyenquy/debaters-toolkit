import './style.css'
import Select from 'react-select'
import { firebaseFirestore } from '../../../../firebase'
import { useForm } from '../../../../core/hooks'
import { topics, languages, customTheme } from '../../../../core/constants'
import tournamentOptions from '../../../../core/constants/tournamentOptions.json'
import { Message } from '../../../../core/components'
import { useEffect, useState, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { getTourneyID } from '../../../../core/helpers/getTourneyID'
import _ from 'lodash'
export const AddMotion = () => {
    const [sent, setSent] = useState(undefined)
    const [saving, setSaving] = useState(false)
    const topicRef = useRef(null)
    const tournamentRef = useRef(null)
    const { formValue, changeFormValue, resetFormValue } = useForm({ content: "", infoSlide: "", topic: {}, language: "English", division: "", tournamentID: "", round: "", link: "" })
    const submit = async (e) => {
        e.preventDefault()
        setSent(true)
        if (formValue.content != "" && formValue.tournamentID != "" && formValue.topic != {}) {
            setSaving(true)
            try {
                await firebaseFirestore.collection("motions").add(formValue)
                setSaving(false)
                setSent(true)
                resetFormValue()
                topicRef.current.select.setValue([])
                tournamentRef.current.select.setValue('')
            }
            catch (err) {
                setSent(false)
                setTimeout(() => { setSent(undefined) }, 1500)
            }
        }
        else {
            setSent(false)
            setTimeout(() => { setSent(undefined) }, 1500)
        }
    }
    function changeTopic(val) {
        val.forEach(obj => {
            changeFormValue('topic', { ...formValue.topic, [obj.value]: { check: true, title: obj.label } })
        })
    }
    function changeLanguage(val) {
        if (val != null && val != undefined && val != "") {
            changeFormValue('language', val.value)
        }
    }
    function changeTournament(val) {
        if (val != null && val != undefined && val != "") {
            changeFormValue('tournamentID', val.value)
        }
    }
    function changeTournamentID(e) {
        changeFormValue("tournamentID", e.target.value)
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
    const fileInput = useRef(null)
    const [selectedFile, setSelectedFile] = useState(undefined)
    const [selected, setSelected] = useState(false)
    const [motions, setMotions] = useState(undefined)
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0])
        setSelected(true)
    }
    useEffect(() => {
        if (selectedFile != undefined) {
            const reader = new FileReader()
            reader.readAsText(selectedFile)
            reader.onload = (e) => {
                setMotions(JSON.parse(e.target.result))
            }
        }
    }, [selectedFile])
    const addMotions = async (e) => {
        e.preventDefault()
        setSent(true)
        setSaving(true)
        try {
            if (!_.isString(motions[0].tournament) || !_.isString(motions[0].content) || !_.isString(motions[0].year)) {
                alert('Invalid JSON Selected !')
                setSaving(false)
                setSent(false)
                setTimeout(() => { setSent(undefined) }, 1500)
                setSelectedFile(undefined)
                setSelected(false)
                setMotions(undefined)
            }
            else {
                motions.forEach(async (motion) => {
                    const tournament = motion.tournament
                    const year = motion.year
                    const format = motion.format
                    const id = await getTourneyID(tournament, year, format)
                    let infoSlide = ""
                    if (motion.infoSlide != undefined) {
                        infoSlide = motion.infoSlide
                    }
                    let round
                    if (!_.isString(motion.round)) {
                        round = motion.round.toString()
                    }
                    else {
                        round = motion.round
                    }
                    const curMot = { content: motion.content, infoSlide: infoSlide, division: '', language: motion.language, link: '', round: round, topic: motion.topic, tournamentID: id }
                    await firebaseFirestore.collection("motions").add(curMot)
                    //test first b4 uploading
                })
                setSaving(false)
                setSent(true)
                setSelectedFile(undefined)
                setSelected(false)
                setMotions(undefined)
                alert("Done !")
            }
        }
        catch (err) {
            setSaving(false)
            setSent(false)
            setTimeout(() => { setSent(undefined) }, 1500)
            setSelectedFile(undefined)
            setSelected(false)
            setMotions(undefined)
        }
    }
    //---------------------------------------------------------------------------------------------------------
    return (
        <div className="addMotion">
            <div className="addMotionTitle">Add Motion:</div>
            <div className="uploadMotionsFromJSON">
                <div className="getMotionJSONFile">
                    <input ref={fileInput} accept=".json" type="file" onChange={changeHandler} style={{ display: "none" }} />
                    <button className="loadMotionJSONFileButton" onClick={(e) => fileInput.current.click()}>Load JSON</button>
                    <div>
                        {
                            `Current file: ${selectedFile ? selectedFile.name : ""}`
                        }
                    </div>
                </div>
                <div>
                    <button className="uploadMotionsJSONButton" disabled={selected ? false : true} onClick={addMotions}>Upload JSON to Firestore</button>
                </div>
            </div>
            <form action="" id="motionForm">
                <TextareaAutosize type="text" spellCheck={false} className="motionInfoItem largeTextBox" minRows="5" placeholder="Content" value={formValue.content} onChange={(e) => { changeFormValue("content", e.target.value) }} />
                <TextareaAutosize type="text" spellCheck={false} className="motionInfoItem largeTextBox" minRows="5" placeholder="Info Slide" value={formValue.infoSlide} onChange={(e) => { changeFormValue("infoSlide", e.target.value) }} />
                <Select className="motionInfoItem motionAttributeSelect"
                    placeholder="Topic"
                    isSearchable={true}
                    options={topics}
                    onChange={changeTopic}
                    theme={customTheme}
                    isMulti={true}
                    ref={topicRef}
                />
                <Select className="motionInfoItem motionAttributeSelect"
                    placeholder="Language"
                    isSearchable={false}
                    options={languages}
                    onChange={changeLanguage}
                    theme={customTheme}
                    isMulti={false}
                    defaultValue={{ value: "English", label: "English" }}
                />
                <input type="text" className="motionInfoItem inputMotionBox" spellCheck={false} placeholder="Division" value={formValue.division} onChange={(e) => { changeFormValue("division", e.target.value) }} />
                <input type="text" className="motionInfoItem inputMotionBox" spellCheck={false} placeholder="Round" value={formValue.round} onChange={(e) => { changeFormValue("round", e.target.value) }} />
                <Select className="motionInfoItem motionAttributeSelect"
                    placeholder="Tournament"
                    isSearchable={true}
                    options={tournamentOptions}
                    onChange={changeTournament}
                    theme={customTheme}
                    isMulti={false}
                    ref={tournamentRef}
                />
                <input type="text" className="motionInfoItem inputMotionBox" spellCheck={false} placeholder="Tournament ID" value={formValue.tournamentID} onChange={changeTournamentID} />
                <input type="text" className="motionInfoItem inputMotionBox" spellCheck={false} placeholder="Reference Video URL" value={formValue.link} onChange={(e) => { changeFormValue("link", e.target.value) }} />
                <button onClick={submit} className="addMotionButton">Add motion</button>
            </form>
            <div className="motionAddingResultContainer">
                {
                    saving ? <div>Loading</div> : <Message status={sent} successMessage={<><div className="successLineOne">MOTION ADDED</div> <div className="successLineTwo">MOTION ADDED SUCCESSFULLY</div></>} failureMessage={<><div className="failureLineOne">MOTION NOT ADDED</div> <div className="failureLineTwo">MOTION ADDING FAILED. PLEASE TRY AGAIN</div></>} />
                }
            </div>
        </div>
    )
}