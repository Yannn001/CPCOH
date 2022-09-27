import React from 'react';
import './App.css';
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/Signin'
import ChatRoom from './pages/chatroom/ChatRoom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Calender from './pages/home/components/Calender'


 function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Chat" element={<ChatRoom/>} />
          <Route path="/Test" element={<Calender/>} />
        </Routes>
    </div>
  );
}

export default App;

