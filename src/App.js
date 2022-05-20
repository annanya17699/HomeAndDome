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
import { AuthContext } from './Components/Context/context';
import { useState, useCallback } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState()
  const login = useCallback((user) => {
    setUser(user);
   setIsLoggedIn(true)
  }, []);

  const logout = useCallback(() => {
    setUser(null)
    setIsLoggedIn(false)
  }, []);
  return (
    <AuthContext.Provider
    value={{ isLoggedIn:isLoggedIn, user:user, login:login ,logout:logout }}>
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
    </AuthContext.Provider>
  );
}

export default App;
