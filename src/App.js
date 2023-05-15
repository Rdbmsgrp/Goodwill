import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Landing}/>
          <Route path="/login" Component={Login}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
