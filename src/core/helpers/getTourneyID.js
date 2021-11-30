import { firebaseFirestore } from "../../firebase"
export const getTourneyID = async (name, year, format) => {
    let tournamentsRef = firebaseFirestore.collection('tournaments').where('name', '==', name)
    if (year != '') {
        tournamentsRef = tournamentsRef.where('year', '==', year)
    }
    if (format != '') {
        tournamentsRef = tournamentsRef.where('format', '==', format)
    }
    const tournamentData = await tournamentsRef.get()
    if (tournamentData.docs.length == 0) {
        await firebaseFirestore.collection("tournaments").add({ name: name, year: year, format: format })
        const newTournamentData = await tournamentsRef.get()
        return newTournamentData.docs[0].id
    }
    else {
        return tournamentData.docs[0].id
    }
}