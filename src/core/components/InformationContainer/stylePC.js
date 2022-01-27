import { makeStyles } from '@mui/styles'

export const useStylesPC = makeStyles({
	'informationContainer': {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#282a35 !important',
		height: '38vh',
		minHeight: '14.3rem',
		fontFamily: '"Source Sans Pro", sans-serif',
		marginTop: 'auto',
		'& .topLane': {
			width: '100%',
			height: '20%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'& button': {
				padding: '0.3rem',
				borderRadius: '5px',
				border: '1px solid white',
				backgroundColor: 'transparent',
				fontWeight: 500,
        color: 'white',
				'&:hover': {
					backgroundColor: 'white',
					color: 'black'
				}
			}
		},
		'& .midLane': {
			width: '100%',
			height: '20%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'& button': {
				backgroundColor: '#282a35',
				border: '1px solid white',
				borderRadius: '5px',
				padding: '0.4rem',
				marginLeft: '0.2rem',
				marginRight: '0.2rem',
				'& i': {
					color: 'white',
					fontSize: '2rem'
				},
				'&:hover': {
					backgroundColor: 'white',
					'& i': {
						color: 'black'
					}
				}
			}
		},
		'& .botLane': {
			width: '100%',
			height: '60%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'& .introText': {
				color: 'white !important',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '90%',
				fontSize: '1rem',
				'& div': {
					margin: '0.5rem',
					textAlign: 'center',
					'& a': {
						color: 'white',
						'& span': {
							textDecoration: 'underline',
							'&:hover': {
								color: '#4caf50'
							}
						}
					}

				}
			}
		}
	},
	'@media only screen and (max-width: 379px)': {
		'informationContainer': {
			height: '47vh',
			'& .topLane': {
				height: '12%'
			},
			'& .midLane': {
				height: '10%',
			},
			'& .botLane': {
				height: '78%',
				marginBottom: '0.5rem',
				'& .introText': {
					fontSize: '0.8rem'
				}
			}
		}
	},
	'@media only screen and (max-width: 425px) and (min-width: 380px)': {
		'informationContainer': {
			height: '40vh',
			'& .topLane': {
				height: '17%',
			},
			'& .midLane': {
				height: '13%',
			},
			'& .botLane': {
				height: '70%',
				marginBottom: '0.5rem',
				'& .introText': {
					fontSize: '0.8rem'
				}
			}
		}
	},
	'@media only screen and (max-width: 768px) and (min-width: 426px)': {
		'informationContainer': {
			height: '25vh',
			'& .botLane': {
				'& .introText': {
					fontSize: '0.8rem'
				}
			}
		}
	}
})
