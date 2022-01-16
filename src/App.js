import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './Components/Common/Footer';
import Home from './Components/Common/Home';
import NavBar from './Components/Common/Navbar';
import StudentForm from './Components/Student/StudentForm';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route> 
      <Route exact path='/student/form'>
        <StudentForm/>
      </Route> 
      </Switch>
      
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
