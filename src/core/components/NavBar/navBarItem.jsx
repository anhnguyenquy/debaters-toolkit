import { Link } from 'react-router-dom'

export const NavBarItem = (props) => {
	const { to, tabID, setActiveTab, children, isActive, specificTabName } = props // setActiveTab(to) 
	return (
		<Link to={to} className={`anchor ${specificTabName} ${isActive ? 'active' : ''}`} id={tabID} onClick={() => { setActiveTab(to) }}>
			{children}
		</Link>
	)
}