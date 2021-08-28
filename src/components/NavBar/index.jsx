import './style.css'
import { useState, useEffect } from 'react'
import { NavBarItem } from './navBarItem'
const navBarConfig = [
    {
        tabID: 'home', to: '/', specificTabName: "home", children:
            <>
                <i class="fas fa-home"></i>
            </>
    },
    {
        tabID: 'motionGenerator', to: '/generator', children:
            <>
                <div>Motion </div>
                <div>Generator</div>
            </>
    },
    {
        tabID: 'database', to: '/database', children:
            <>
                <div>Motion </div>
                <div>Database</div>
            </>
    },
    // {
    //     tabID: 'submit', to: '/new_motion', children:
    //         <>
    //             <div>Submit</div>
    //             <div>new motion</div>
    //         </>
    // },
    {
        tabID: 'breakCalc', to: '/break_calculator', children:
            <>
                <div>Break</div>
                <div>Calculator</div>
            </>
    },
    {
        tabID: 'keeper', to: '/keeper/bp', children:
            <>
                <div>Timekeeper</div>
            </>
    },
    // {tabID:'admin', to:'/admin', children:
    // <>
    //     <div>Admin</div>
    // </>
    // },

]
export const NavBar = () => {
    const [activeTab, setActiveTab] = useState(``)
    useEffect(() => {
        setActiveTab(window.location.pathname)
    }, [window.location.pathname])
    return (
        <div className="navBar">
            {navBarConfig.map(config => {
                return (
                    <NavBarItem specificTabName={config.specificTabName} isActive={activeTab === config.to} to={config.to} tabID={config.tabID} setActiveTab={setActiveTab}>{config.children}</NavBarItem>
                )
            })}
        </div>
    )
}