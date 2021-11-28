import React from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'

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
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Test Update
          </Typography>
          <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/>
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo by <a href="https://unsplash.com/@boudewijn_huysmans" target="_blank" rel="noopener noreferrer">Boudewijn Huysmans</a> on Unsplash</Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              Welcome to the MERN Skeleton home page.
            </Typography>
          </CardContent>
        </Card>
    )
}

