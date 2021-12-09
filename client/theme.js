import { createTheme } from '@mui/material/styles'
import { pink } from '@mui/material/colors'


const theme = createTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#5c67a3',
      main: '#3f4771',
      dark: '#2e355b',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
      openTitle: '#fff',
      protectedTitle: pink['400'],
      type: 'dark',
      mode: 'dark',
      background: {
        default: '#151515',
        paper: '#111822'
      },
      action: {
        active: '#ff79b0',
        activeOpacity: 1,
        hover: '#ff4081',
        hoverOpacity: 0.7,
        focus: '#c60055',
        focusOpacity: 1,
        selected: '#5c67a3',
        selectedOpacity: 1
      }
    },
  })

  export default theme