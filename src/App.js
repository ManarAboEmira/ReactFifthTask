import logo from './logo.svg';
import './App.css';
import GetWithSearchAPI from './Component/FirstTAsk/Search';
import GetUsingHooks from './Component/FirstTAsk/Post';

import MainComponent from './Component/SecondTask/SecondTask.jsx';

function App() {

  return (
    <div className="App">
      <MainComponent></MainComponent>
      <GetWithSearchAPI>

      </GetWithSearchAPI>
    </div>
  );
}

export default App;
