import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import {Link, withRouter} from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#922B24'}
  else
    return {color: '#ffffff'}
}

const useStyles = makeStyles(theme => ({
  mailtellinks: {
    color: '#fff',
    selected: '#5c67a3'
  }
}))
const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
    <Link to="/">
      <img src="../assets/images/logo.png"/>
    </Link>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="/services">
        <Button style={isActive(history, "/services")}>Services</Button>
      </Link>
    </Toolbar>
  </AppBar>
))

export default Menu
