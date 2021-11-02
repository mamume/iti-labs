import Nav from './components/Nav';
import Todo from './components/todo/Todo';
import PhoneBook from './components/phone-book/PhoneBook'
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path='/Register' component={Register} />
        <Route path='/Todo' component={Todo} />
        <Route path='/PhoneBook' component={PhoneBook} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
