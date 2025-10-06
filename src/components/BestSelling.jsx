import React from "react";
import ProductCard from "./ProductCard";
import S2_img1 from "../assets/images/S2_img1.png";
import S2_img2 from "../assets/images/S2_img2.png";
import S2_img3 from "../assets/images/S2_img3.png";
import S2_img4 from "../assets/images/S2_img4.png";
import Button from "./Button";

// Example 8 product data
const products = [
  { id: 1, title: "The north coat", image: S2_img1, price: 260, discount: 360, rating: 3, reviews: 45 },
  { id: 2, title: "Gucci duffle bag", image: S2_img2, price: 960, discount: 1160, rating: 4, reviews: 88 },
  { id: 3, title: "RGB liquid CPU Cooler", image: S2_img3, price: 160, discount: 170, rating: 5, reviews: 99 },
  { id: 4, title: "Small BookSelf", image: S2_img4, price: 360, rating: 4, reviews: 70 },
];

const BestSellingSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
    <div className="flex justify-between mb-[60px]">
      {/* Section Heading */}
      <h2 className="text-4xl font-semibold text-left">Best Selling Products</h2>
        <Button text="View All" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            {...product}
            showDiscountBadge={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellingSection;
