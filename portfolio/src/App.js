import './App.css';
import Me from './components/me';
import Projects from './components/projects';
import Technologies from './components/technologies';
import Links from './components/links';
import Education from './components/education';
import LanguageSwitcher from './components/languageswitcher';

function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <Me/>
      <Technologies />
      <Education />
      <Projects />
      <Links />
    </div>
  );
}

export default App;
