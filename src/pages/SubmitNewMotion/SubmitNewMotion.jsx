import { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Select from 'react-select'
import { useForm } from '../../core/hooks'
import { firebaseFirestore } from '../../firebase'
import { Message } from '../../core/components'
import { topics, languages, formats, customTheme } from '../../core/constants'
import TextareaAutosize from 'react-textarea-autosize'
import './style.css'

export const SubmitNewMotion = () => {
  const { formValue, changeFormValue, resetFormValue } = useForm({
    motion: '',
    infoSlide: '',
    topic: [],
    language: '',
    division: '',
    tournamentName: '',
    year: '',
    round: '',
    format: '',
    link: '',
  })
  const [sent, setSent] = useState(undefined)
  const [saving, setSaving] = useState(false)
  const topicRef = useRef(null)
  const languageRef = useRef(null)
  const formatRef = useRef(null)
  const submit = async (e) => {
    e.preventDefault()
    setSent(true)
    if (
      formValue.motion != '' &&
      formValue.topic != [] &&
      formValue.tournamentName != ''
    ) {
      setSaving(true)
      try {
        await firebaseFirestore.collection('requests').add(formValue)
        setSaving(false)
        setSent(true)
        resetFormValue()
        languageRef.current.select.setValue('')
        topicRef.current.select.setValue([])
        formatRef.current.select.setValue('')
      } catch (err) {
        setSent(false)
        setTimeout(() => {
          setSent(undefined)
        }, 2000)
      }
    } else {
      setSent(false)
      setTimeout(() => {
        setSent(undefined)
      }, 2000)
    }
  }
  function changeTopic(val) {
    if (val.length == 0) {
      changeFormValue('topic', [])
    } else {
      val.forEach((valItem) => {
        changeFormValue('topic', [...formValue.topic, valItem.value])
      })
    }
  }
  function changeLanguage(val) {
    if (val == null) {
      changeFormValue('language', '')
    } else {
      changeFormValue('language', val.value)
    }
  }
  function changeFormat(val) {
    if (val == null) {
      changeFormValue('format', '')
    } else {
      changeFormValue('format', val.value)
    }
  }
  
  return (
    <div className='submitNewMotion'>
      <Helmet>
        <title>Submit new motions</title>
        <meta name='description' content='Submit a new motion.' />
        <link
          rel='canonical'
          href='https://www.debaterstoolkit.com/new_motion'
        />
      </Helmet>
      <div className='top-text'>
        Submit a request for a motion to be added to our Database
      </div>
      <div className='details'>
        <TextareaAutosize
          className='detail inputBox'
          id='largeInputBox'
          maxlength='2000'
          spellCheck={false}
          value={formValue.motion}
          type='text'
          placeholder='Motion'
          onChange={(e) => {
            changeFormValue('motion', e.target.value)
          }}
        />
        <TextareaAutosize
          className='detail inputBox'
          id='largeInputBox'
          maxlength='2000'
          spellCheck={false}
          value={formValue.infoSlide}
          type='text'
          placeholder='Info Slide (Optional)'
          onChange={(e) => {
            changeFormValue('infoSlide', e.target.value)
          }}
        />
        <Select
          className='detail selectTopic'
          placeholder='Topic'
          isSearchable={true}
          options={topics}
          onChange={changeTopic}
          theme={customTheme}
          isMulti={true}
          isClearable={true}
          ref={topicRef}
        />
        <Select
          className='detail selectLanguage'
          placeholder='Language (Optional)'
          isSearchable={true}
          options={languages}
          onChange={changeLanguage}
          theme={customTheme}
          isClearable={true}
          ref={languageRef}
        />
        <input
          className='detail inputBox'
          type='text'
          spellCheck={false}
          value={formValue.division}
          placeholder='Division (Optional)'
          maxlength='20'
          onChange={(e) => {
            changeFormValue('division', e.target.value)
          }}
        />
        <input
          className='detail inputBox'
          type='text'
          spellCheck={false}
          value={formValue.tournamentName}
          placeholder="Tournament's name"
          maxlength='100'
          onChange={(e) => {
            changeFormValue('tournamentName', e.target.value)
          }}
        />
        <input
          className='detail inputBox'
          type='text'
          spellCheck={false}
          value={formValue.year}
          placeholder='Year (XXXX) (Optional)'
          maxlength='4'
          onChange={(e) => {
            changeFormValue('year', e.target.value)
          }}
        />
        <input
          className='detail inputBox'
          type='text'
          spellCheck={false}
          value={formValue.round}
          placeholder='Round (Optional)'
          maxlength='20'
          onChange={(e) => {
            changeFormValue('round', e.target.value)
          }}
        />
        <Select
          className='detail selectFormat'
          placeholder='Format (Optional)'
          isSearchable={true}
          options={formats}
          onChange={changeFormat}
          theme={customTheme}
          isClearable={true}
          ref={formatRef}
        />
        <input
          className='detail inputBox'
          type='text'
          spellCheck={false}
          value={formValue.link}
          placeholder='Link to match footage (Optional)'
          maxlength='100'
          onChange={(e) => {
            changeFormValue('link', e.target.value)
          }}
        />
      </div>
      <button id='motionSubmitButton' onClick={submit}>
        Submit motion
      </button>
      <div className='submitStatus'>
        {saving ? (
          <div>Loading</div>
        ) : (
          <Message
            status={sent}
            successMessage={
              <>
                <div className='successLineOne'>MOTION SUBMITTED!</div>{' '}
                <div className='successLineTwo'>
                  YOUR MOTION HAS BEEN SUBMITTED SUCCESSFULLY
                </div>
              </>
            }
            failureMessage={
              <>
                <div className='failureLineOne'>MOTION NOT SUBMITTED!</div>{' '}
                <div className='failureLineTwo'>
                  MOTION SUBMISSION FAILED. PLEASE TRY AGAIN
                </div>
              </>
            }
          />
        )}
      </div>
    </div>
  )
}
