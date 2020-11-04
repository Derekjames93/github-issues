import {  Link, Redirect, Route, Switch, useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';
import IssueList from './components/IssueList/IssueList';
import IssuesByLabel from './components/IssuesByLabel/IssuesByLabel'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();


  useEffect(() => {
    
    if(!loggedIn){
      history.push('/')
    }
  },[loggedIn,history])

  return (
    <>
    <ul>
      <li><Link to="/">Home</Link> </li>
      {loggedIn && (
        <li><Link to="/issues">Issues</Link> </li>

      )}
      { loggedIn 
        ?(<li><button onClick={() => {setLoggedIn(false)}}>Log Out</button></li>)
        :(<li><button onClick={() => {setLoggedIn(true)}}>Log In</button></li>)  
    }

    </ul>
    
    
    <div>
      <Switch> 

      <Route exact path="/">
      <h1>Home</h1>
      </Route>
      <Route exact path="/issues" component={IssueList}>

      </Route>
      <Route path="/issues/label/:name" component={IssuesByLabel}>

      </Route>

      <Route>
        <Redirect to='/'/>
      </Route>
      </Switch>
    

    </div>
    </>
    );
}

export default App;
