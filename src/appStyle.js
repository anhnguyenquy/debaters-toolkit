import { isBrowser } from 'react-device-detect'
import { makeStyles } from '@mui/styles'

const style = !isBrowser
  ? {
      'App': {
        fontFamily: "'Lora', serif",
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        '&::selection': {
          background: '#282a35',
          color: 'white',
        },
      },
    }
  : {
      'App': {
        fontFamily: "'Lora', serif",
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        '&::selection': {
          background: '#282a35',
          color: 'white',
        },
        '&::-webkit-scrollbar': {
          backgroundColor: '#F1F1F1 !important',
          width: '0.75rem',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          backgroundColor: '#C1C1C1',
          minHeight: '24px',
          border: '3px solid #F1F1F1',
          '&:hover': {
            backgroundColor: '#A8A8A8',
          },
          '&:active': {
            backgroundColor: '#787878',
          },
        },
      },
    }

export const useStyles = makeStyles(style)
