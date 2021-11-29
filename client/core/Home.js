import React from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'

const useStyles = makeStyles(theme => ({
  card: {
    width: '75%',
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    padding: '8px'
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
        <Card className={classes.card}>          
          <Typography variant="h4" className={classes.title}>
            About
          </Typography>
          <Typography variant="body1">
            <h2>This is a test list of services:</h2>
            <p>
              Hi, I'm bob. I do bob things, all day, every day, because I'm bob.
            </p>
          </Typography>
        </Card>
        <Card className={classes.card}>          
          <Typography variant="h4" className={classes.title}>
            Services
          </Typography>
          <Typography variant="body1">
            <h6>This is a test list of services:</h6>
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
              <li>Test 4</li>
            </ul>
          </Typography>
        </Card>
      </CssBaseline>
    )
}

