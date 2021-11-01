import Nav from './components/Nav';
import Todo from './components/todo/Todo';
import PhoneBook from './components/phone-book/PhoneBook'
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Nav />
      <Route path='/login' component={Login} />
      <Route path='/Register' component={Register} />
      <Route path='/Todo' component={Todo} />
      <Route path='/PhoneBook' component={PhoneBook} />
    </Router>
  );
}

export default App;
