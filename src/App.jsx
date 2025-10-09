import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from "./components/ProductCarousel";
import AllProductsSection from './components/AllProductsSection';
import BestSellingSection from './components/BestSelling';
import NotFound from './components/NotFound';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/First';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/NotFound' element={<NotFound/>}></Route>
      <Route path='/AllProductsSection' element={<AllProductsSection/>}></Route>
      <Route path='/BestSelling' element={<BestSellingSection/>}></Route>
      <Route path='/ProductDetails' element={<ProductPage/>}></Route>
      <Route path='/' element={<FirstPage/>}></Route>

    </Routes>
      </BrowserRouter>
      
  );
}

export default App;