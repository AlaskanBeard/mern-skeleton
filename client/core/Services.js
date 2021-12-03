import React from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
// import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'

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
  },
  servicelist: {
  },
  mailtellinks: {
    color: '#fff',
    textDecoration: 'underline',
    selected: '#5c67a3'
  }
}))

export default function Services(){
  const classes = useStyles()
    return (
      <div>
        <Card className={classes.card}>          
          <Typography variant="h4" className={classes.title}>
            Service List
          </Typography>
          <Typography variant="body1">
            <p>
              Here's a mostly full list of services. For more details, click on the service you're interested in!
              <br />
              <br />
              <strong>Featured Services:</strong>
              <ul className={classes.servicelist}>
                <li>Cloud Services like Office 365 and Google Workspaces</li>
                <li>Website hosting and design</li>
                <li>VoIP Setup and Maintenance</li>
                <li>Computer and Server Backups</li>
                <li>Server and Desktop support</li>
                <li>Environment backups</li>
              </ul>
              
              <strong>All Services</strong>
              <ul className={classes.servicelist}>
                <li>Antivirus and Antimalware</li>
                <li>Backups - Desktops, servers, and everything in between</li>
                <li>Cloud Email and Collaboration - Google Workspaces and Office 365</li>
                <li>Desktop and Server Support</li>
                <li>Monitoring - Web and environment</li>
                <li>Networking</li>
                <li>Remote Work Support</li>
                <li>Website and Application Hosting</li>
                <li>VoIP</li>
                <li>VPN - Site-to-Site and Workstation</li>
              </ul>
            </p>
          </Typography>
        </Card>
      </div>
    )
}

