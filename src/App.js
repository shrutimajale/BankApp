
import './App.css';
import Login from './components/login';
import Navbar from './components/navbar';
import Register from './components/register'
import Home from './components/home'
import About from './components/about'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

   <div>
     <Navbar/>

   
 <div className="App">
    
 <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    </div>
   </div>
   
  );
}

export default App;
