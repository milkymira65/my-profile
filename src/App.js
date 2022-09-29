import Navbar from './component/Navbar';
import Introduction from './component/Introduction';
import Aboutme from './component/Aboutme';
import Contactme from './component/Contactme';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Introduction />
        <Aboutme />
        <Contactme />
    </div>
  );
}

export default App;
