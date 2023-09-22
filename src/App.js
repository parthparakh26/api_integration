import React from 'react'
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
