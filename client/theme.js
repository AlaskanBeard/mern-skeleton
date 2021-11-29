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
        default: '#121212',
        paper: '#111822'
      }
    }
  })

  export default theme