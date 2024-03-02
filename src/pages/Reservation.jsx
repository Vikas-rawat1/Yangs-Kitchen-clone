import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
function Reservation() {

  return (
    <>
      <div className="relative">
        <div className="">
          <img
            className="w-full h-72 object-cover"
            src="reservationImage/background.jpeg"
            alt="Background"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 flex justify-center mt-10">
          <img
            className="h-8 object-cover"
            src="reservationImage/topbackground.png"
            alt="Foreground"
          />
          <p className="text-white font-bold items-center flex">Reservation</p>
        </div>
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   w-4/5 h-72  rounded-md bg-white border-2">
          <h1 className="text-center font-semibold text-2xl mt-4">
            Yang’s Kitchen
          </h1>
          <div className=" justify-center items-center flex">
            <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
            <p className="text-gray-500 text-sm">902 reviews</p>
          </div>
          <p className="text-center  text-sm">
            $$ Asian Fusion, New American, Breakfast & Brunch
          </p>
          <div>
            <input type="text" />
            <p>{DatePicker}</p>
            {/* <p>You typed: {inputValue}</p> */}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Reservation;
