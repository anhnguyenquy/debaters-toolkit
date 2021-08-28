import { firebaseFirestore } from "../firebase"
export const getTourneyInfo = async (id) => {
    const tournamentsRef = firebaseFirestore.collection('tournaments').doc(id)
    const tournamentData = await tournamentsRef.get();
    if (tournamentData.exists == false) {
        return {}
    }
    else {
        const name = tournamentData.data().name
        const year = tournamentData.data().year
        const format = tournamentData.data().format
        return {
            name, 
            year,
            format
        }
    }
}