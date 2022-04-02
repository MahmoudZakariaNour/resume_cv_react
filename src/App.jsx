import logo from './logo.svg';
import './App.css';
import { GetObjective } from "./Objective";
import { Contact } from "./contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact></Contact>
        <GetObjective></GetObjective>

      </header>
    </div>
  );
}

export default App;
