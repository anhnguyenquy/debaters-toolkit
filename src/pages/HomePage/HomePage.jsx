import { MotionGeneratorIntro, MotionDatabaseIntro, BreakCalculatorIntro, DebateKeeperIntro } from './components'
import { InformationContainer } from '../../core/components'

export const HomePage = () => {
	return (
		<div className='homePage'>
			<MotionGeneratorIntro />
			<MotionDatabaseIntro />
			<BreakCalculatorIntro />
			<DebateKeeperIntro />
			<InformationContainer />
		</div>
	)
}