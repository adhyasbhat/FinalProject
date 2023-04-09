
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 

function App() {
  return (
    <div className="App">
  <BrowserRouter>
<Routes>
 <Route path = "/" element = {<Login/>}/>  
  <Route path = "/Signup" element = {<Signup/>}/>
  <Route path = "/Home" element = {<Home/>}/>
  </Routes>
  </BrowserRouter>
 
  </div>
);
}

export default App;
