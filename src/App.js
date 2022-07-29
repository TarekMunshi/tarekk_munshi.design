import './App.css';
import About from './components/About/About';
import Career from './components/Career/Career';
import Case from './components/Case Studies/Case';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Project from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Project></Project>
      <Career></Career>
      <About></About>
      <Case></Case>
      <Footer></Footer>
    </div>
  );
}

export default App;
