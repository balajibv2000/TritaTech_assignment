import './App.css';
import Main from './components/Main';
import MidContainer from './components/MidContainer';
import Slides from './components/Slides';
import LowerContainer from './components/LowerContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Main />
      <MidContainer />
      <Slides />
      <LowerContainer />
      <Footer />
    </div>
  );
}

export default App;
