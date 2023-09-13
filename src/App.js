import Navbar from './Navbar';
import Home from './Home';
import Home2 from './Home2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Home2 />
      </div>
    </div>
  );
}

export default App;
