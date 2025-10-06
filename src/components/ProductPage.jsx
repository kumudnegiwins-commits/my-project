// ProductPage.jsx
import React from "react";
import ProductDetailsSection from "./ProductDetailsSection";
import P1 from "../assets/images/P1.png";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.png";
import P4 from "../assets/images/P4.png";
import P5 from "../assets/images/P5.png";

const ProductPage = () => {
  return (
    <ProductDetailsSection
      images={[P1, P3, P4, P5]}
      title="Havic HV G-92 Gamepad"
      rating={4}
      reviews={150}
      price={192}
      inStock={true}
      description="PlayStation 5 Controller Skin High quality vinyl with air
       channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
      colors={["#000000", "#C74954"]}
      sizes={["XS", "S", "M", "L", "XL"]}
    />
  );
};

export default ProductPage;
