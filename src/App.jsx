import logo from './logo.svg';
import './App.css';
import { contact } from './contact';
import { GetObjective } from "./Objective";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <contact></contact>
        <GetObjective></GetObjective>

      </header>
    </div>
  );
}

export default App;
