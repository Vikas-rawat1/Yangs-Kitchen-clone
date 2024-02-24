import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="container flex justify-end mt-5 mb-10">
        <div className="flex items-center">
          <img
            className="w-64 h-34 mr-4"
            src="images/YangsKitchen_Logo.png"
            alt="LOGO"
          />
        </div>
        <ul className="leading-12  mr-20 text-right space-x-3 tracking-wider">
          <li className="mt-2">
            <Link to="/menu">1 VIEW OUR MENU</Link>
          </li>
          <li className="mt-2">
            <Link to="/reservation">2 MAKE A RESERVATION (DINNER)</Link>
          </li>
          <li className="mt-2">
            <Link to="/waitlist">3 JOIN THE WAITLIST (BRUNCH/LUNCH)</Link>
          </li>
          <li className=" flex justify-between mt-2">
            <Link to="/ordertakeout">4 ORDER TAKEOUT</Link>
            <Link to="/orderdelivery">5 ORDER DELIVERY</Link>
          </li>
          <li className="flex justify-between mt-2">
            <Link to="/gift">6 PURCHASE A GIFT CARD</Link>
            <Link to="/wine">7 WINE LIST</Link>
          </li>
          <li className="mt-2">
            <Link to="/contactus">8 CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
