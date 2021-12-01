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
    columns: 2
  },
  mailtellinks: {
    color: '#fff',
    textDecoration: 'underline',
    selected: '#5c67a3'
  }
}))

export default function Home(){
  const classes = useStyles()
    return (
      <div>
        <Card className={classes.card}>          
          <Typography variant="h4" className={classes.title}>
            About
          </Typography>
          <Typography variant="body1">
            <p>
              muskITeers is a Valley based MSP (Managed Service Provider) with decades of industry experience. We specialize in helping small and medium sized businesses build and maintain their environments. 
            </p>
          </Typography>
        </Card>
        <Card className={classes.card}>          
          <Typography variant="h4" className={classes.title}>
            Services
          </Typography>
          <Typography variant="body1">
            <p>
              muskITeers offers a full range of business IT solutions and services. For a full list please <Link className={classes.mailtellinks} href="/services">{'click here'}</Link>.
              <ul className={classes.servicelist}>
                <li>Cloud Services like Office 365 and Google Workspaces</li>
                <li>Website hosting and design</li>
                <li>VoIP Setup and Maintenance</li>
                <li>Computer and Server Backups</li>
                <li>Server and Desktop support</li>
                <li>Environment backups</li>
              </ul>
            </p>
          </Typography>
        </Card>
        <Card className={classes.card}>          
          <Typography variant="h4" className={classes.title}>
            Contact
          </Typography>
          <Typography variant="body1">
            <p>
              You can emails us directly at <a className={classes.mailtellinks} href="mailto:contact@muskiteers.com" data-rel="external">contact@muskiteers.com</a>, call us at <a className={classes.mailtellinks} href="tel:1231231234" data-rel="external">123-123-1234</a>, or use the contact form below.
            </p>
          </Typography>
        </Card>
      </div>
    )
}

