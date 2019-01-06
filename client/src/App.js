import React from 'react'
import {BrowserRouter as Router, Route , Link} from 'react-router-dom'
import { Home , Join} from '../src/component'


const App = () => {
 return (
    <Router>
        <div className ="container" >
        <Link to ="/join"> join </Link>
        <Route path="/" Component={Home}/>
        <Route path="/join" Component={Join}/>
        </div>
    </Router>
 )
}

/*

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>
*/


export default App;