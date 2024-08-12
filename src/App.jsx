// App.js
import './App.css'
import Banner from './pages/Banner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App