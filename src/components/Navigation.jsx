import React from "react";
import Home from "../pages/Home";
function Navigation() {
  return (
    <>
      <nav className="container flex justify-end mt-5 mb-10">
        <div className="flex items-center  ">
          <img
            className="w-64 h-34 mr-4 "
            src="images/YangsKitchen_Logo.png"
            alt="LOGO"
          />
        </div>
        <ul className="leading-6  mr-20 text-right space-x-3 tracking-wider ">
          <li>1 VIEW OUR MENU</li>
          <li>2 MAKE A RESERVATION (DINNER)</li>
          <li> 3 JOIN THE WAITLIST (BRUNCH/LUNCH)</li>
          <li> 4 ORDER TAKEOUT 5 ORDER DELIVERY</li>
          <li> 6 PURCHASE A GIFT CARD</li>
          <li> 7 WINE LIST </li>
          <li> 8 CONTACT US</li>
        </ul>
      </nav>
      <Home
        divStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        pStyle={{
          width: "54%",
          textAlign: "center",
          marginTop: "2vw",
        }}
      />
    </>
  );
}

export default Navigation;
