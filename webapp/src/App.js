import './App.css';
import Nav from './components/Nav';
import Todo from './components/todo/Todo';
import PhoneBook from './components/phone-book/PhoneBook'
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Todo />
      <PhoneBook /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
