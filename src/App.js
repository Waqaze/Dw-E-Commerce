
// import React from 'react'
// import Shop from './components/Shop'
// import Navbar from './components/Navbar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Contact from './components/Contact'
// import Home from './components/Home'

// const App =()=>{
//   return(
//     <>

// <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Shop />} />
       
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//    <hr />
//    <Shop />
//    <Contact />
//    </>
   
//   )
// }
// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shop from './components/Shop';


const App = () => {
  return (
    <Router>
     
      <Routes>
      
        <Route path="/products" element={<Shop />} />
     
      </Routes>
    </Router>
  );
};

export default App;