import { firebaseFirestore } from '../../../../firebase'
import { useForm } from "../../../../hooks"
import { useEffect, useState, useRef } from 'react'
import { Message } from '../../../../components'
import _ from "lodash"
import './style.scss'
export const AddTournament = () => {
    const { formValue, changeFormValue, resetFormValue } = useForm({ name: "", format: "", year: "" })
    const [saving, setSaving] = useState(false)
    const [sent, setSent] = useState(undefined);
    const submit = async (e) => {
        e.preventDefault()
        setSent(true)
        if (formValue.name != "" && formValue.format != "" && formValue.year != "") {
            setSaving(true)
            try {
                await firebaseFirestore.collection("tournaments").add(formValue)
                const tourneys = await firebaseFirestore.collection("tournaments").where('name', '==', formValue.name).where('format', '==', formValue.format).where('year', '==', formValue.year).get()
                const id = tourneys.docs[0].id
                console.log(id)
                setSaving(false)
                setSent(true)
                resetFormValue()
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
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [selected, setSelected] = useState(false);
    const [tourneys, setTourneys] = useState(undefined)
    const addTournaments = async (e) => {
        e.preventDefault()
        setSent(true)
        setSaving(true)
        try {
            if (!_.isString(tourneys[0].name) || !_.isString(tourneys[0].format) || !_.isString(tourneys[0].year)) {
                alert('Invalid JSON Selected !');
                setSaving(false)
                setSent(false)
                setTimeout(() => { setSent(undefined) }, 1500)
                setSelectedFile(undefined)
                setSelected(false)
                setTourneys(undefined)
            }
            else {
                tourneys.forEach(async (tournament) => {
                    const curTour = { name: tournament.name, format: tournament.format, year: tournament.year }
                    await firebaseFirestore.collection("tournaments").add(curTour)
                })
                setSaving(false)
                setSent(true)
                setSelectedFile(undefined)
                setSelected(false)
                setTourneys(undefined)
                alert("Done !")
            }
        }
        catch (err) {
            setSaving(false)
            setSent(false)
            setTimeout(() => { setSent(undefined) }, 1500)
            setSelectedFile(undefined)
            setSelected(false)
            setTourneys(undefined)
        }
    }
    const fileInput = useRef(null)
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setSelected(true);
    };
    useEffect(() => {
        if (selectedFile != undefined) {
            const reader = new FileReader();
            reader.readAsText(selectedFile);
            reader.onload = (e) => {
                setTourneys(JSON.parse(e.target.result));
            };
        }
    }, [selectedFile])
    return (
        <div className="addTournament">
            <div className="addTournamentTitle">Add Tournament:</div>
            <div className="uploadTournamentsFromJSON">
                <div className="getTournamentJSONFile">
                    <input ref={fileInput} accept=".json" type="file" onChange={changeHandler} style={{ display: "none" }} />
                    <button className="loadTournamentJSONFileButton" onClick={(e) => fileInput.current.click()}>Load JSON</button>
                    <div>
                        {
                            `Current file: ${selectedFile ? selectedFile.name : ""}`
                        }
                    </div>
                </div>
                <div>
                    <button className="uploadTournamentsJSONButton" disabled={selected ? false : true} onClick={addTournaments}>Upload JSON to Firestore</button>
                </div>
            </div>
            <form action="" id="tournamentForm">
                <input type="text" placeholder="Name" value={formValue.name} spellCheck={false} onChange={(e) => { changeFormValue("name", e.target.value) }} />
                <input type="text" placeholder="Format" value={formValue.format} spellCheck={false} onChange={(e) => { changeFormValue("format", e.target.value) }} />
                <input type="text" placeholder="Year" value={formValue.year} spellCheck={false} onChange={(e) => { changeFormValue("year", e.target.value) }} />
                <button onClick={submit} className="addTournamentButton">Add tournament</button>
            </form>
            <div className="tournamentAddingResultContainer">
                {
                    saving ? <div>Loading</div> : <Message status={sent} successMessage={<><div className="successLineOne">TOURNAMENT(S) ADDED</div> <div className="successLineTwo">TOURNAMENT(S) ADDED SUCCESSFULLY</div></>} failureMessage={<><div className="failureLineOne">TOURNAMENT(S) NOT ADDED</div> <div className="failureLineTwo">TOURNAMENT(S) ADDING FAILED. PLEASE TRY AGAIN</div></>} />
                }
            </div>
            <div className="endingLine"></div>
        </div>
    )
}