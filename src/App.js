import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Common/Footer';
import Home from './Components/Common/Home';
import NavBar from './Components/Common/Navbar';

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
