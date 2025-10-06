import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import your product images (same as carousel)
import S3_img1 from "../assets/images/S3_img1.png";
import S3_img2 from "../assets/images/S3_img2.png";
import S3_img3 from "../assets/images/S3_img3.png";
import S3_img4 from "../assets/images/S3_img4.png";
import S3_img5 from "../assets/images/S3_img5.png";
import S3_img6 from "../assets/images/S3_img6.png";
import S3_img7 from "../assets/images/S3_img7.png";

const products = [
  { id: 1, title: "Breed Dry Dog Food", image: S3_img1, price: 100, rating: 4, reviews: 88 },
  { id: 2, title: "ASUS FHD Gaming Laptop", image: S3_img3, price: 700, rating: 4, reviews: 75 },
  { id: 3, title: "CANON EOS DSLR Camera", image: S3_img2, price: 360, rating: 5, reviews: 99 },
  { id: 4, title: "Breed Dry Dog Food", image: S3_img1, price: 375, rating: 3, reviews: 99 },
  { id: 5, title: "HAVIT HV-G92 Gamepad", image: S3_img1, price: 120, rating: 4, reviews: 88 },
  { id: 6, title: "AK-900 Wired Keyboard", image: S3_img2, price: 960, rating: 4, reviews: 75 },
  { id: 7, title: "IPS LCD Gaming Monitor", image: S3_img3, price: 370, rating: 5, reviews: 99 },
  { id: 8, title: "S-Series Comfort Chair", image: S3_img3, price: 375, rating: 3, reviews: 99 },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute -top-25 right-4 z-20 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow ml-2 h-[46px] w-[46px] flex items-center justify-center"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute -top-25 right-18 z-20 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow h-[46px] w-[46px] flex items-center justify-center"
  >
    <FaArrowLeft />
  </button>
);

const AllProductsSection = () => {
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

  // 4 Static Cards below carousel
  const staticCards = [
    { id: 101, title: "Kids Electric Car", image: S3_img4, price: 120, rating: 4, reviews: 20, isNew: true, colors: ["#FB1314", "#DB4444"] },
    { id: 102, title: "Jr. Zoom Soccer Cleats", image: S3_img5, price: 200, rating: 5, reviews: 35, isNew: false, colors: ["#EEFF61", "#DB4444"] },
    { id: 103, title: "GP11 Shooter USB Gamepad", image: S3_img6, price: 150, rating: 4, reviews: 18, isNew: true, colors: ["#000000", "#DB4444"] },
    { id: 104, title: "Quilted Satin Jacket", image: S3_img7, price: 80, rating: 3, reviews: 10, isNew: false, colors: ["#184A48", "#DB4444"] },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 relative">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-left mb-[60px]">Explore Our Products</h2>

      {/* Carousel */}
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={product.id} className="p-2">
            <ProductCard {...product} showDiscountBadge={false} showButtonDefault={idx === 1}
            showInlineInfo={true} />
          </div>
        ))}
      </Slider>

      {/* 4 Static Cards Below Carousel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {staticCards.map((card) => (
          <ProductCard key={card.id} {...card} showButtonDefault={false} 
          showInlineInfo={true}/>
        ))}
      </div>
      <div className="w-full flex justify-center mt-[76px]">
        <Button text="View All Products" />
      </div>
    </div>
  );
};

export default AllProductsSection;
