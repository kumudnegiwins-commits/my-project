import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Reuseable Custom Arrows (positioned near heading)
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute -top-14 right-4 z-20 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow h-[40px] w-[40px] flex items-center justify-center"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute -top-14 right-16 z-20 bg-gray-100 hover:bg-gray-300 p-2 rounded-full shadow h-[40px] w-[40px] flex items-center justify-center"
  >
    <FaArrowLeft />
  </button>
);

const Categories = () => {
  const categories = [
    { img: "src/assets/images/Category-CellPhone.png", label: "Phones" },
    { img: "src/assets/images/Category-Computer.png", label: "Computers" },
    { img: "src/assets/images/Category-SmartWatch.png", label: "SmartWatch" },
    { img: "src/assets/images/Category-Camera.png", label: "Camera" },
    { img: "src/assets/images/Category-Headphone.png", label: "Headphones" },
    { img: "src/assets/images/Category-Gamepad.png", label: "Gamepad" },
    { img: "src/assets/images/Category-Gamepad.png", label: "Gamepad" },
    { img: "src/assets/images/Category-Gamepad.png", label: "Gamepad" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // ✅ Show 6 at once
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 relative">
      {/* ✅ Title + Buttons in same row */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-8 rounded-sm bg-[#DB4444] mr-2"></div>
            <h2 className="text-lg text-[#DB4444] font-semibold">Categories</h2>
          </div>
          <p className="text-black text-3xl font-semibold">
            Browse By Category
          </p>
        </div>
      </div>

      {/* ✅ Carousel Section */}
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="p-2">
            <div
              className={`group flex flex-col items-center justify-center min-w-[170px] min-h-[145px] rounded-md border p-3 transition-all duration-300 ${
                cat.label === "Camera"
                  ? "bg-[#DB4444] text-white"
                  : "bg-white text-gray-800 hover:bg-[#DB4444] hover:text-white"
              }`}
            >
              <img
                src={cat.img}
                alt={cat.label}
                className={`h-16 object-cover mb-2 transition-all duration-300 ${
                  cat.label === "Camera"
                    ? "filter brightness-0 invert"
                    : "group-hover:filter group-hover:brightness-0 group-hover:invert"
                }`}
              />
              <span>{cat.label}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
