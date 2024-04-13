import React, { useState } from 'react';
import './App.css';
import Navbar from './layout/header_foot/Navbar';
import Hompage from './layout/hompage/Hompage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gioithieusach from './layout/about/Gioithieusach';
import Dangkikhachhang from './layout/util/Dangkikhachhang';


function App() {

  const [tukhoatimkiem , settukhoatimkiem] = useState ('') ; 


  return (
    
  <div>
    <BrowserRouter>
    <Navbar tukhoatimkiem = {tukhoatimkiem} settukhoatimkiem = {settukhoatimkiem} />
    <Routes>
      <Route path='/' element = { <Hompage tukhoatimkiem = {tukhoatimkiem}/>}>  </Route>
      <Route path='/theloai/:matheloai' element = { <Hompage tukhoatimkiem ={tukhoatimkiem}/>}>  </Route>
      <Route path='/sach/:masach' element ={<Gioithieusach />}></Route>
      <Route path='/dangki' element ={<Dangkikhachhang />}></Route>
    </Routes>
    
    </BrowserRouter>
  </div>
   
  );
}

export default App;
