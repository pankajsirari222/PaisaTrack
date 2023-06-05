import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
