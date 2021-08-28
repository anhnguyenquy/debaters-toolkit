import './style.css'
import { AddTournament } from './components/AddTournament'
import { AddMotion } from './components/AddMotion'
import { LoadTournaments } from './components/LoadTournaments'
import { PendingRequests } from './components/PendingRequests'
import { LoadMotions } from './components/LoadMotions'
import { SignIn } from './components/SignIn'
import { useState } from 'react'
export const AdminPage = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="admin" style={!loggedIn ? { height: "93vh" } : { height: "100%" }}>
            {
                loggedIn ?
                    <>
                        <AddTournament />
                        <AddMotion />
                        <PendingRequests />
                        <LoadTournaments />
                        <LoadMotions />
                    </> : <SignIn auth={setLoggedIn} />
            }
        </div>
    )
}