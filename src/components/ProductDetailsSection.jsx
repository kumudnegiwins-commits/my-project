import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FaTruck, FaUndoAlt } from "react-icons/fa";
import Button from "./Button";
import ProductCarousel from "./ProductCarousel";

const ProductDetailsSection = ({
  images = [],
  title,
  rating,
  reviews,
  price,
  inStock,
  description,
  colors = [],
  sizes = [],
}) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const thumbnailSettings = {
    dots: false,
    infinite: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
     <div className="pt-[80px] ps-[135px] space-x-[30px]"><span className="text-gray-400">Home /</span> 404 Error</div>
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row">
        {/* Left - Thumbnails */}
        <div className="w-[170px] mr-[30px] h-[600px]">
          <Slider {...thumbnailSettings} className="h-[600px] w-full">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="cursor-pointer h-[138px] w-full mb-2"
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Center - Main Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg h-[600px] w-[500px] mr-[70px]">
          <img
            src={mainImage}
            alt="main"
            className="object-contain max-h-[400px]"
          />
        </div>

        {/* Right - Details */}
        <div className="w-[430px]">
          <h2 className="text-2xl font-semibold">{title}</h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="text-gray-500 text-sm border-e pe-2">({reviews} Reviews)</span>
            <span className="text-[#00FF66] text-sm">
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl mt-6">${price}</div>

          {/* Description */}
          <p className="text-black text-sm mt-6 border-b pb-4">
            {description}
          </p>

          {/* Colours */}
          <div className="mt-6 flex gap-6">
            <span className="text-[20px]">Colours:</span>
            <div className="flex gap-2 mt-2">
              {colors.map((c, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedColor(c)}
                  className={`w-5 h-5 rounded-full cursor-pointer border ${
                    selectedColor === c ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: c }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-4 flex gap-6">
            <span className="text-[20px]">Size:</span>
            <div className="flex gap-2">
              {sizes.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === s
                      ? "bg-[#DB4444] text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Button */}
          <div className="flex items-center mt-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-2 border"
            >
              <FaMinus />
            </button>
            <button className="px-7 py-1 border">{quantity}</button>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-4 py-2 border border-[#DB4444] bg-[#DB4444] text-white"
            >
              <FaPlus />
            </button>
            <button className="bg-[#DB4444] text-white rounded p-2 w-40 ml-4">Buy Now</button>
            <button className="border p-2 rounded ml-5">
              <FontAwesomeIcon icon={faHeartRegular} />
            </button>
          </div>

          <div className="border border-gray-500 mt-[40px] rounded">
            {/* Top Section */}
            <div className="flex items-center gap-4 p-4 border-b border-gray-500 h-[78px]">
              <FaTruck className="text-xl" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm border-b">
                  Enter your postal code for Delivery availability.
                </p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center gap-4 p-4 h-[78px]">
              <FaUndoAlt className="text-xl" />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-sm">Free 30 Days Delivery Returns. <span className="border-b">Details</span></p> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductCarousel minimal />
      </div>
    </>
  );
};

export default ProductDetailsSection;
