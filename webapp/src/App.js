import Nav from './components/Nav';
import Todo from './components/todo/Todo';
import PhoneBook from './components/phone-book/PhoneBook'
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [authedUser, setAuthedUser] = useState(false)

  return (
    <Router>
      <Nav authedUser={authedUser} setAuthedUser={setAuthedUser} />

      <Switch>
        <Route path='/Register'>
          <Register authedUser={authedUser} setAuthedUser={setAuthedUser} />
        </Route>
        <Route path='/Todo'>
          <Todo authedUser={authedUser} setAuthedUser={setAuthedUser} />
        </Route>
        <Route path='/PhoneBook'>
          <PhoneBook authedUser={authedUser} />
        </Route>
        <Route path='/'>
          <Login authedUser={authedUser} setAuthedUser={setAuthedUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
