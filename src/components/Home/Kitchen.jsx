import React from "react";
import Location from "./Location";
function Kitchen() {
  return (
    <>
    <div>
      <div className="grid grid-cols-2 gap-20 justify-center mt-20 ml-20 mr-20">
        <div>
          <img className="w-55" src="images/food-tray.png" alt="Food Tray" />
          <p className="mt-2 text-xs hover:text-gray-500">
            Images shot on location at Yang's Kitchen
          </p>
        </div>
        <img className="w-50" src="images/flower-vase.png" alt="Flower Vase" />
      </div>
      <div className="grid grid-cols-2">
        <img
          className="w-40 ml-40"
          src="images/yangs-kitchen.png"
          alt="Yang's Kitchen"
        />
        <p className="flex justify-center items-center mt-20 mr-60 text-gray-500">
          Yang’s Kitchen strives to source local, sustainable and organic when
          possible. We work hard to source premium ingredients and we cook
          everything from scratch with love. We also do our best to pay our
          employees living wages (tips are shared with all employees, including
          kitchen staff) and to reduce our environmental footprint wherever we
          can. Overall, these factors translate to higher menu prices, but we
          hope that you find value and feel a sense of comfort in knowing that
          we aim to get better everyday at doing what is important to us.
        </p>
      </div>
      <div className="flex items-center justify-center h-screen mt-40">
        <img
          className="m-20 w-full max-h-full "
          src="images/food-flex.jpeg"
          alt="Food-flex"
        />
      </div>
    </div>
    <Location/>
    </>
  );
}

export default Kitchen;
