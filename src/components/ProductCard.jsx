import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartRegular,
  faEye as faEyeRegular,
} from "@fortawesome/free-regular-svg-icons";
import { FaStar } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  price,
  discount,
  rating,
  reviews,
  showButtonDefault,
  showDiscountBadge = true,
  isNew = false,
  colors = [],
  showInlineInfo = false,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0] || null);

  // Render 5 stars dynamically
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={
            i <= rating ? "text-yellow-500 w-4 h-4" : "text-gray-300 w-4 h-4"
          }
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg relative min-h-[380px] min-w-[270px] flex flex-col group">
      <div className="bg-gray-100 h-60 relative flex flex-col items-center">
        {/* Discount Badge */}
        {showDiscountBadge && discount && (
          <div className="absolute top-2 left-2 bg-[#DB4444] text-white text-sm px-2 py-1 rounded h-[26px] w-[55px] flex items-center justify-center">
            -{Math.round(((discount - price) / discount) * 100)}%
          </div>
        )}

        {/* NEW Badge */}
        {isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded h-[26px] w-[55px] flex items-center justify-center">
            NEW
          </div>
        )}

        {/* Icons on top-right */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          <button className="bg-white p-1 rounded-full h-8 w-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faHeartRegular} />
          </button>
          <button className="bg-white p-1 rounded-full h-8 w-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faEyeRegular} />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="max-h-[152px] max-w-[172px] object-contain rounded-sm mt-4"
        />

        {/* Add to Cart Button */}
        <button
          className={`mt-auto w-full bg-black text-white py-2 rounded-b transition-opacity duration-300
            ${
              showButtonDefault
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-semibold mt-2 mb-1">{title}</h3>

      {/* Price + Rating + Reviews */}
      {showInlineInfo ? (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#DB4444]">${price}</span>
          <div className="flex items-center gap-1">
            {renderStars(rating)}
            {reviews && (
              <span className="text-gray-500 text-sm font-semibold">
                ({reviews})
              </span>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#DB4444]">${price}</span>
            {discount && (
              <span className="text-gray-400 line-through">${discount}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {renderStars(rating)}
            {reviews && (
              <span className="text-gray-500 text-sm font-semibold">
                ({reviews})
              </span>
            )}
          </div>
        </>
      )}

      {/* Color Selection */}
      {colors.length > 0 && (
        <div className="flex gap-2 mt-2">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor === color ? "border-black" : "border-white"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
