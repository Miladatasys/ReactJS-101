import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './/components/FirstComponent.js';
import {SecondComponent} from './/components/SecondComponent.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mila's first React app. </p>

        <FirstComponent />
        <SecondComponent />

      </header>
    </div>
  );
}

export default App;
