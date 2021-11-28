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
          <Typography variant="h4" className={classes.title}>
            Services
          </Typography>
          <Typography variant="body1">
            <h6>This is a test list of services:</h6>
            <ul>
              <li>* Test 1</li>
              <li>* Test 2</li>
              <li>* Test 3</li>
              <li>* Test 4</li>
            </ul>
          </Typography>
        </Paper>
      </CssBaseline>
        
    )
}

