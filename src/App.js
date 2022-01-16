import logo from './logo.svg';
import './App.css';

function App() {

  setCount(count +1);
  setCount(count+1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count is :{count}
        </p>
        <button onClick={onClick}>Add</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
