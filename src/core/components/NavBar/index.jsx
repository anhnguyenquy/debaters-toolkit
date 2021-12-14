import { useState, useEffect } from 'react'
import { NavBarItem } from './navBarItem'
import { isBrowser } from 'react-device-detect'
import { useStylesPC } from './stylePC'
import { useStylesMobile } from './styleMobile'

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
	}
]
export const NavBar = () => {
	const [activeTab, setActiveTab] = useState(`/`)
	useEffect(() => {
		setActiveTab(window.location.pathname)
	}, [window.location.pathname])
	const classesPC = useStylesPC()
	const classesMobile = useStylesMobile()
	return (
		<div className={isBrowser ? classesPC.navBar : classesMobile.navBar}>
			{navBarConfig.map(config => {
				return (
					<NavBarItem specificTabName={config.specificTabName} isActive={activeTab === config.to} to={config.to} tabID={config.tabID} setActiveTab={setActiveTab}>{config.children}</NavBarItem>
				)
			})}
		</div>
	)
}