import './style.css'
import Select from 'react-select'
import DownloadLink from 'react-download-link'
import { useState, useRef } from 'react'
import { firebaseFirestore } from '../../../../firebase'
import { formats, customTheme } from '../../../../core/constants'
import tournamentOptions from '../../../../core/constants/tournamentOptions.json'
import { useDeviceBreakPoint } from '../../../../core/hooks'
import { TablePC, TablePhone, TableTablet } from './components/tables'
export const LoadTournaments = () => {
    const { isPhone, isTablet } = useDeviceBreakPoint()
    const [year, setYear] = useState('')
    const [format, setFormat] = useState('')
    const [id, setID] = useState('')
    const [loading, setLoading] = useState(false)
    const [tournaments, setTournaments] = useState([])
    const [max, setMax] = useState(10)
    const tournamentRef = useRef(null)
    const loadTournaments = async () => {
        let tournamentsRef = firebaseFirestore.collection('tournaments')
        setLoading(true)
        let tournamentDataRaw = undefined
        if (id == '') {
            if (format != '') {
                tournamentsRef = tournamentsRef.where('format', '==', format)
            }
            if (year != '') {
                tournamentsRef = tournamentsRef.where('year', '==', year)
            }
            tournamentDataRaw = await tournamentsRef.limit(max).get()
            const tournamentData = []
            tournamentDataRaw.forEach(doc => { tournamentData.push({ ...doc.data(), id: doc.id }) })
            setTournaments(tournamentData)
            setLoading(false)
        }
        else {
            tournamentDataRaw = await tournamentsRef.doc(id).get()
            if (tournamentDataRaw.exists == true) {
                const name = tournamentDataRaw._delegate._document.data.value.mapValue.fields.name.stringValue
                const year = tournamentDataRaw._delegate._document.data.value.mapValue.fields.year.stringValue
                const format = tournamentDataRaw._delegate._document.data.value.mapValue.fields.format.stringValue
                const tournamentData = []
                tournamentData.push({ name: name, year: year, format: format, id: id })
                setTournaments(tournamentData)
                setLoading(false)
            }
            else {
                setLoading(false)
                setTournaments([])
            }
        }

    }
    function changeTournament(val) {
        if (val == null) {
            setID('')
        }
        else {
            setID(val.value)
        }
    }
    function changeTournamentID(e) {
        setID(e.target.value)
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
    const del = (id) => {
        firebaseFirestore.collection("tournaments").doc(id).delete()
        const newTournaments = tournaments.filter(tournament => {
            return (tournament.id !== id)
        })
        setTournaments(newTournaments)
    }
    function changeFormat(val) {
        setFormat(val.value)
    }
    const updateTournament = async (fieldName, newValue, id) => {
        const tournamentsRef = firebaseFirestore.collection('tournaments').doc(id)
        const response = await tournamentsRef.update({
            [fieldName]: newValue
        })
    }
    const downloadJSON = async () => {
        let tournamentsRef = firebaseFirestore.collection('tournaments')
        const tournamentDataRaw = await tournamentsRef.get()
        const tournamentData = []
        tournamentDataRaw.forEach(doc => { tournamentData.push({ ...doc.data(), id: doc.id }) })
        return JSON.stringify(tournamentData)
    }
    const tableProps = { updateTournament, del, tournaments }
    //---------------------------------------------------------------------------------------------------------
    const script = async () => {
        const tournamentsRef = firebaseFirestore.collection('tournaments')
        const tournamentDataRaw = await tournamentsRef.get()
        const tournamentData = []
        tournamentDataRaw.forEach(doc => {
            tournamentData.push({ ...doc.data(), id: doc.id })
        })
        tournamentData.forEach(async (doc) => {
            const name = doc.name
            const firstFour = name.slice(0, 4)
            if (!isNaN(firstFour)) {
                const newName = name.slice(5)
                await tournamentsRef.doc(doc.id).update({ name: newName })
            }
        })
        alert("Done !")
    }
    //---------------------------------------------------------------------------------------------------------
    return (
        <div className="loadTournaments">
            <div className="loadedTournamentsHeaderContainer">
                <div className="tournamentsListTitle">Existing tournaments: </div>
                <button id="fetchTournamentsButton" onClick={loadTournaments}>Refresh</button>
            </div>
            <div className="filterTournaments">
                <Select className="tournamentFilterItem"
                    theme={customTheme}
                    placeholder="Format"
                    options={formats}
                    onChange={changeFormat}
                />
                <input className="tournamentFilterItem tournamentFilterItemBox" spellCheck={false} type="text" placeholder="Year" onChange={(e) => { setYear(e.target.value) }} />
                <Select className="tournamentFilterItem"
                    theme={customTheme}
                    placeholder="Tournament"
                    options={tournamentOptions}
                    onChange={changeTournament}
                    isClearable={true}
                    ref={tournamentRef}
                />
                <input className="tournamentFilterItem tournamentFilterItemBox" spellCheck={false} type="text" placeholder="ID" value={id} onChange={changeTournamentID} />
                <input className="tournamentFilterItem tournamentFilterItemBox maxNum" spellCheck={false} type="text" placeholder="Display at max? (Default: 10)" onChange={changeMax} />
            </div>
            <div className="downloadTournamentsJSONButtonContainer">
                <DownloadLink
                    className="downloadTournamentsJSON"
                    label="Download JSON"
                    tagName="button"
                    filename="tournamentsFromDatabase.json"
                    style={{}}
                    exportFile={downloadJSON}
                />
            </div>
            {/*--------------------------------------Hide-this-by-default-------------------------------------------------*/}
            {/* <div className="tournamentScriptContainer"> 
                <button className="runTournamentScript" onClick={script}>Run Script</button>
            </div>  */}
            {/*--------------------------------------Ultra-Dangerous-Hidden-Dark-Magic------------------------------------*/}
            <div className="displayExistingTournaments">
                {
                    loading ? <div className="loadingTournamentMessage">Loading</div> :
                        <div className="tournamentsTableContainer">
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