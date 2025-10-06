import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from "./components/ProductCarousel";
import AllProductsSection from './components/AllProductsSection';
import BestSellingSection from './components/BestSelling';
import ImageCarouselSection from './components/ImageCarouselSection';
import NotFound from './components/NotFound';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <ProductCarousel />
      <AllProductsSection/>
      <BestSellingSection/>
      <ImageCarouselSection/>
      <NotFound/>
      <ProductPage/>

    </div>
  );
}

export default App;