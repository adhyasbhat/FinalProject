
import Login from './Login/Login'
import Signup from './Signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 

function App() {
  return (
    <div className="App">
  <BrowserRouter>
<Routes>
 <Route path = "/" element = {<Login/>}/>
   {/* <Route path ="/about" element = {<div>About Page</div>}/>
  <Route path ="/contact" element = {<div>Contact Page</div>}/> */}
  <Route path = "/Signup" element = {<Signup/>}/>
  </Routes>
  </BrowserRouter>
  {/* <Navigation/>
  <Login/> */}
  </div>
);
}

export default App;
