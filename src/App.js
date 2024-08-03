

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