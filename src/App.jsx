import logo from './logo.svg';
import './App.css';
import { contact } from './contact';
import { GetObjective } from "./Objective";
import {WorkExp} from "./WorkExperience"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <contact></contact>
        <GetObjective></GetObjective>
        <WorkExp></WorkExp>

      </header>
    </div>
  );
}

export default App;
