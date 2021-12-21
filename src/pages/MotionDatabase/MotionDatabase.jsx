import Select from 'react-select'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import { firebaseFirestore } from '../../firebase'
import TextareaAutosize from 'react-textarea-autosize'
import {
  Placeholder,
  SingleValue,
  Option,
  Input,
} from '../../core/components/SelectComponents'
import { Table } from '../../core/components'
import { languageStyle, topicStyle, tournamentStyle } from './styles'
import { getTourneyInfo } from '../../core/helpers'
import {
  tableClassNames,
  topics,
  languages,
  customTheme,
} from '../../core/constants'
import tournamentOptions from '../../core/constants/tournamentOptions.json'
import './style.css'

export const MotionDatabase = () => {
  const [topic, setTopic] = useState('')
  const [language, setLanguage] = useState('English')
  const [tournament, setTournament] = useState('')
  const [max, setMax] = useState(10)
  const [motions, setMotions] = useState([])
  const [motionData, setMotionData] = useState([])
  const [configJustChanged, setConfigJustChanged] = useState(true)
  const [loading, setLoading] = useState(false)
  function changeTopic(val) {
    setConfigJustChanged(true)
    if (val == null) {
      setTopic('')
    } else {
      setTopic(val.value)
    }
  }
  function changeLanguage(val) {
    setConfigJustChanged(true)
    if (val == null) {
      setLanguage('')
    } else {
      setLanguage(val.value)
    }
  }
  function changeTournament(val) {
    setConfigJustChanged(true)
    if (val == null) {
      setTournament('')
    } else {
      setTournament(val.value)
    }
  }
  const changeMax = (e) => {
    setConfigJustChanged(true)
    if (e.target.value == '') {
      setMax(10)
    } else {
      setMax(e.target.value)
    }
  }
  async function loadMotions() {
    if (configJustChanged) {
      setLoading(true)
      let motionsRef = firebaseFirestore.collection('motions')
      if (language != '') {
        motionsRef = motionsRef.where('language', '==', language)
      }
      if (topic != '') {
        motionsRef = motionsRef.where(`topic.${topic}.check`, '==', true)
      }
      if (tournament != '') {
        motionsRef = motionsRef.where('tournamentID', '==', tournament)
      }
      let motionDataRaw = await motionsRef.limit(max).get()
      let motionDataSorted = []
      const preliminaryMotions = []
      const octofinals = []
      const semifinals = []
      const quarterfinals = []
      const finals = []
      const theRest = []
      motionDataRaw.forEach((motion) => {
        if (!isNaN(motion.data().round)) {
          preliminaryMotions.push(motion)
        } else if (motion.data().round.includes('Octofinals')) {
          octofinals.push(motion)
        } else if (motion.data().round.includes('Semifinals')) {
          semifinals.push(motion)
        } else if (motion.data().round.includes('Quarterfinals')) {
          quarterfinals.push(motion)
        } else if (motion.data().round.includes('Final')) {
          finals.push(motion)
        } else {
          theRest.push(motion)
        }
      })
      preliminaryMotions.sort((a, b) =>
        a.data().round > b.data().round ? 1 : -1
      )
      octofinals.sort((a, b) => (a.data().round > b.data().round ? 1 : -1))
      semifinals.sort((a, b) => (a.data().round > b.data().round ? 1 : -1))
      quarterfinals.sort((a, b) => (a.data().round > b.data().round ? 1 : -1))
      finals.sort((a, b) => (a.data().round > b.data().round ? 1 : -1))
      theRest.sort((a, b) => (a.data().round > b.data().round ? 1 : -1))
      motionDataSorted = motionDataSorted.concat(
        preliminaryMotions,
        octofinals,
        semifinals,
        quarterfinals,
        finals,
        theRest
      )
      motionDataSorted.forEach(async (doc) => {
        const loadedTopicTemp = { ...doc.data() }
        const tempTopics = []
        for (const key in loadedTopicTemp.topic) {
          tempTopics.push(loadedTopicTemp.topic[key]['title'])
        }
        const { name, year } = await getTourneyInfo(doc.data().tournamentID)
        setMotionData([
          ...motionData,
          {
            ...doc.data(),
            topicList: tempTopics,
            tournament: name,
            year: year,
          },
        ])
      })
      setLoading(false)
      setConfigJustChanged(false)
      setMotionData([])
    }
  }
  useEffect(() => {
    setMotions([])
    motionData.forEach((motion) => {
      setMotions([...motions, motion])
    })
  }, [motionData])
  return (
    <div className={`motionDatabase ${motions == [] ? 'notLoaded' : ''}`}>
      <Helmet>
        <title>Motion Database</title>
        <meta
          name='description'
          content='Search our database of over 7000 motions.'
        />
        <link rel='canonical' href='https://www.debaterstoolkit.com/database' />
      </Helmet>
      <div className='pageTitle'>Search for motions from our database:</div>
      <div className='motionFilters'>
        <Select
          className='motionFilter'
          theme={customTheme}
          placeholder='Topic'
          isSearchable={false}
          options={topics}
          onChange={changeTopic}
          isMulti={false}
          components={{ Placeholder }}
          styles={topicStyle}
          isClearable={true}
        />
        <Select
          className='motionFilter'
          theme={customTheme}
          placeholder='Language'
          options={languages}
          onChange={changeLanguage}
          isClearable={true}
          components={{ Placeholder, SingleValue, Option }}
          styles={languageStyle}
          isSearchable={false}
          defaultValue={{ value: 'English', label: 'English' }}
        />
        <Select
          className='motionFilter'
          theme={customTheme}
          placeholder='Tournament'
          options={tournamentOptions}
          onChange={changeTournament}
          isClearable={true}
          components={{ Placeholder, SingleValue, Option, Input }}
          styles={tournamentStyle}
        />
        <input
          type='number'
          className='motionFilter queryBox maxBox'
          placeholder='How many to display at max? (Default: 10)'
          onChange={changeMax}
          spellCheck={false}
        />
      </div>
      <button
        id='searchMotionsButton'
        onClick={() => {
          loadMotions()
        }}
      >
        Search
      </button>
      <div
        style={
          loading
            ? {
                display: 'flex',
                margin: '1rem',
                width: '100%',
                justifyContent: 'center',
              }
            : { display: 'none' }
        }
      >
        Loading
      </div>
      <div className='displayMotionDatabase'>
        <Table
          columns={[
            {
              name: 'Content',
              width: '33%',
              render: (motion) => {
                return <>{motion.content}</>
              },
            },
            {
              name: 'Infoslide',
              width: '33%',
              render: (motion) => {
                return <>{motion.infoSlide}</>
              },
            },
            {
              name: 'Tournament',
              width: '33%',
              render: (motion) => {
                return (
                  <TextareaAutosize
                    value={`${motion.tournament} ${motion.year} (Round: ${motion.round})`}
                    disabled={true}
                    style={{
                      border: '1px solid transparent',
                      outline: 'none',
                      padding: '0.4rem',
                      width: '100%',
                      height: '100%',
                      fontFamily: '"Lora", serif',
                      resize: 'none',
                      overflow: 'hidden',
                      backgroundColor: 'transparent',
                      color: 'black',
                      fontSize: '0.9rem',
                      textAlign: 'center',
                    }}
                  />
                )
              },
            },
          ]}
          dataSource={motions}
          names={tableClassNames.userLoadMotions}
          showActions={false}
        />
      </div>
      <div className='submitNewMotionNotification'>
        <div>Can't find your favourite motion?</div>
        <a href='/new_motion'>
          <button>Submit it</button>
        </a>
      </div>
    </div>
  )
}
