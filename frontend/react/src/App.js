import React from 'react';
import './App.css';
import Signup from './pages/Signup'
import Test from './pages/Test'
import Blog from './pages/home/Blog'
import Signin from './pages/Signin'
import ChatRoom from './pages/ChatRoom';
import { Route, Routes } from 'react-router-dom';


 function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/home" element={<Blog/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Test" element={<Test/>} />
          <Route  path="/Chat" element={<ChatRoom/>} />
        </Routes>
    </div>
  );
}

export default App;

