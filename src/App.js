import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './Components/Common/Footer';
import Home from './Components/Common/Home';
import NavBar from './Components/Common/Navbar';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import OwnerForm from './Components/Owner/OwnerForm';
import About from './Components/Common/About';
import HousingMain from './Components/Owner/HousingMain'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route> 
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route> 
      <Route exact path='/owner'>
        <OwnerForm/>
      </Route> 
      <Route exact path='/about'>
        <About/>
      </Route> 
      <Route exact path='/housings'>
        <HousingMain/>
      </Route>
      </Switch>
      
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
