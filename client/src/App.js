import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
