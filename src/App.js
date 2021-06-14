import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import User from './components/User'
import Home from './components/Home'
import Menu from './components/Menu'
import './App.css';



function App() {
  return(
    <Router>
      <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/user'>User</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
          </ul>
          <hr />
      <div>
        <Switch>
          <Route path='/User'>
            <User />
          </Route>
          <Route path='/Menu'>
            <Menu />
          </Route>
          <Route  path='/'>
              <Home />
          </Route>
        </Switch>
      </div>
    </div>
   </Router>

  )
}
 

export default App;