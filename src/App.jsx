import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
