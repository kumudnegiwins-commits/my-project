import React from "react";
import Button from "./Button";
const NotFound = () => {
  return (
    <>
    <div className="pt-[80px] ps-[135px] space-x-[30px]"><span className="text-gray-400">Home /</span> 404 Error</div>
    <div className="h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-[110px] font-semibold text-black mb-4 text-center">404 Not Found</h1>
      <p className="text-sm text-black mb-6 text-center font-semibold">
        Your visited page not found. You may go home page.
      </p>
      <div className="w-full flex justify-center mt-[76px]">
        <Button text="Back To Home Page" />
      </div>
    </div>
    </>
  );
};

export default NotFound;
