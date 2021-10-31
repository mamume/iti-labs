import './App.css';
import Nav from './components/Nav';
import Todo from './components/todo/Todo';
import PhoneBook from './components/phone-book/PhoneBook'

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Todo /> */}
      <PhoneBook />
    </div>
  );
}

export default App;
