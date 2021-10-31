import './App.css';
import Nav from './components/Nav';
import Todo from './components/todo/Todo';
import PhoneBook from './components/phone-book/PhoneBook'
import Login from './components/login-register/Login';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Todo />
      <PhoneBook /> */}
      <Login />
    </div>
  );
}

export default App;
