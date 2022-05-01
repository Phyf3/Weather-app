import './App.css';
import Overview from './pages/overview';
import Details from './pages/details';

function App() {
  return (
    <div className="App">
      <div>
        <Overview/>
      </div>

      <div>
        <Details/>
      </div>
    </div>
  );
}

export default App;
