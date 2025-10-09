import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import CountdownTimer from "./CountdownTimer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import S1_img1 from "../assets/images/S1_img1.png";
import S1_img2 from "../assets/images/S1_img2.png";
import S1_img3 from "../assets/images/S1_img3.png";
import S1_img4 from "../assets/images/S1_img4.png";
import Button from "./Button";

// Example product data
const products = [
  { id: 1, title: "HAVIT HV-G92 Gamepad", image: S1_img1, price: 120, discount: 160, rating: 4, reviews: 88 },
  { id: 2, title: "AK-900 Wired Keyboard", image: S1_img2, price: 960, discount: 1160, rating: 4, reviews: 75 },
  { id: 3, title: "IPS LCD Gaming Monitor", image: S1_img3, price: 370, discount: 400, rating: 5, reviews: 99 },
  { id: 4, title: "S-Series Comfort Chair", image: S1_img4, price: 375, discount: 400, rating: 3, reviews: 99 },
  { id: 5, title: "HAVIT HV-G92 Gamepad", image: S1_img1, price: 120, discount: 160, rating: 4, reviews: 88 },
  { id: 6, title: "AK-900 Wired Keyboard", image: S1_img2, price: 960, discount: 1160, rating: 4, reviews: 75 },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden absolute -top-18 right-4 z-20 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow h-[46px] w-[46px] md:flex md:items-center md:justify-center"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden absolute -top-18 right-20 z-20 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow h-[46px] w-[46px] md:flex md:items-center md:justify-center"
  >
    <FaArrowLeft />
  </button>
);

const ProductCarousel = ({ minimal = false }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const targetDate = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);

  return (
    <div className={`max-w-[1200px] mx-auto px-4 ${minimal ? "py-4" : "py-10"} relative`}>

     
      {!minimal && <CountdownTimer targetDate={targetDate} />}

      
      {minimal ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {products.slice(0, 4).map((product, idx) => (
            <ProductCard key={product.id} {...product} showButtonDefault={false} />
          ))}
        </div>
      ) : (
        /* Normal Carousel Mode */
        <div className="mt-6 relative">
          <Slider {...settings} className="gap-4">
            {products.map((product, idx) => (
              <div key={product.id} className="p-2">
                <ProductCard {...product} showButtonDefault={idx === 1} />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* ✅ Show Button only if not minimal */}
      {!minimal && (
        <div className="flex justify-center mt-6">
          <Button text="View All Products" />
        </div>
      )}
    </div>
  );
};


export default ProductCarousel;
