import { firebaseFirestore } from '../../firebase'
import { useState, useEffect } from 'react'
export const DisplayTournament = (props) => {
    const { id } = props
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    async function getTournament(id) {
        const tournamentDataRaw = await firebaseFirestore.collection('tournaments').doc(id).get()
        const response = tournamentDataRaw.data()
        if (response) {
            setName(response.name)
            setYear(response.year)
        }
    }
    useEffect(() => {
        getTournament(id)
    }, [])
    return (
        <>
            {
                name && year &&
                <>
                    {name} {`${year}`}
                </>
            }
        </>
    )
}