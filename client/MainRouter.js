import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Services from './core/services/Services'
import Menu from './core/Menu'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/services" component={Services}/>
      </Switch>
    </div>)
}

export default MainRouter
