import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Common/Home';
import NavBar from './Components/Common/Navbar';

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
