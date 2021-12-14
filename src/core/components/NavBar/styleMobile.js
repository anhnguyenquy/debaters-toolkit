import { makeStyles } from '@mui/styles'

export const useStylesMobile = makeStyles({
	'navBar': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#282a35',
		fontFamily: '"Source Sans Pro", sans-serif',
		height: '7vh',
		width: '100%',
		'& .anchor': {
			color: 'white',
			textDecoration: 'none',
			display: 'flex',
			fontWeight: 'bolder',
			fontSize: '0.8rem',
			height: '100%',
			width: '24vw',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			'&:hover': {
				backgroundColor: '#000000'
			}
		},
		'& .home': {
			width: '4vw !important',
			'& i': {
				fontSize: '1.2rem'
			}
		},
		'& .active': {
			backgroundColor: '#000000'
		}
	},
	'@media only screen and (max-width: 379px)': {
		'navBar': {
			'& .anchor': {
				fontSize: '0.7rem',
				width: '22vw',
			},
			'& .home': {
				width: '12vw !important',
				'& i': {
					fontSize: '1rem !important'
				}
			}
		}
	},
	'@media only screen and (max-width: 425px) and (min-width: 380px)': {
		'navBar': {
			'& .anchor': {
				fontSize: '0.8rem',
				width: '22vw'
			},
			'& .home': {
				width: '12vw !important',
			}
		}
	},
	'@media only screen and (max-width: 768px) and (min-width: 426px)': {
		'navBar': {
			'& .anchor': {
				fontSize: '1.1rem',
				width: '22.5vw',
			},
			'& .home': {
				width: '10vw !important',
				'& i': {
					fontSize: '2rem !important'
				}
			}
		}
	}
})