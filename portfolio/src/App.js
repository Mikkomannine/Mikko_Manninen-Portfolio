import './App.css';
import Me from './components/me';
import Projects from './components/projects';
import Technologies from './components/technologies';

function App() {
  return (
    <div className="App">
      <Me/>
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
