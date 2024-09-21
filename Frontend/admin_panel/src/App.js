import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './App.css';
import Home from "./components/Home";
import Teacher from "./components/Teacher"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Manage from "./components/Manage";
import Student from './components/Student';
import ManageStudents from './components/ManageStudent';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/teachers" element={<Teacher/>} />
      <Route path="/students" element={<Student/>} />
      <Route path="/manage" element={<Manage/>} />
      <Route path="/manageStudents" element={<ManageStudents/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


