import React from "react";
import Kitchen from "./Kitchen";

function Member({ divStyle, pStyle }) {
  const pDesign = {
    color: "grey",
    lineHeight: 2,
  };
  return (
    <>
      <div>
        <div className="flex justify-center ">
          <img
            className="mt-10"
            src="images/zero-foodprint.png"
            alt="Zero-foodprint"
          />
        </div>
        <div style={divStyle}>
          <p style={pStyle}>WE ARE A PROUD MEMBER OF ZERO FOODPRINT </p>
        </div>
        <div style={divStyle}>
          <p style={pStyle}>
            A 1% ZFP Restore the Planet fee is added to your bill to help
            restore the planet and combat climate change. You can opt out of
            this fee if you’d like - just let us know when you place your order.{" "}
          </p>
        </div>
        {/* BOXES  */}
        <div className="grid grid-cols-3 w-30 h-full mt-20 ">
          <div className=" justify-center items-center text-center">
            <h1 className="text-xl font-serif">LOCATION </h1>
            <div className="mt-5">
              <p style={pDesign}>112 W Main St.</p>
              <p style={pDesign}>Alhambra, CA 91801</p>
            </div>
          </div>

          <div className=" justify-center items-center text-center ">
            <h1 className=" text-xl font-serif">HOURS</h1>
            <div className="mt-5">
              <p style={pDesign}>Brunch: Thursday - Monday, 9am to 2:30pm</p>
              <p style={pDesign}>Dinner: Thursday - Sunday, 5pm to 9pm</p>
              <p style={pDesign}>Closed Tuesdays & Wednesdays</p>
            </div>
          </div>

          <div className=" justify-center items-center text-center">
            <h1 className="text-xl font-serif">CONTACT </h1>
            <div className="mt-5 ">
              <p style={pDesign}>(626) 281-1035.</p>
              <p style={pDesign}>hello@yangskitchenla.com</p>
            </div>
          </div>
        </div>
      </div>
      <Kitchen />
    </>
  );
}

export default Member;
