import React from 'react'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 900,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  }
}))

export default function Home(){
  const classes = useStyles()
    return (
      <CssBaseline>
        <Paper elevation={2}> 
          <Typography variant="h2" className={classes.title}>
            Services
          </Typography>
          <Typography variant="body1">
            <h6>This is a test list of services:</h6>
            <ul>
              * Test 1
              * Test 2
              * Test 3
              * Test 4
            </ul>
          </Typography>
        </Paper>
      </CssBaseline>
        
    )
}

