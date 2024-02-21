import React from "react";

function About() {
  const pDEcor = {
    lineHeight: 2,
    width:200
  };
  return (
    <>
      <div>
        <div className="ml-40">
          <p className="font-serif text-xl m-4  tracking-wider ">AS SEEN IN…</p>
        </div>
        <div className="flex justify-center items-center w-4/5 gap-20 ml-20   ">
          <img className="w-40" src="images/about1.png" alt="" />
          <img className="w-40" src="images/about2.png" alt="" />
          <img className="w-40" src="images/about3.png" alt="" />
          <img className="w-40" src="images/about4.png" alt="" />
        </div>
        <div className="flex justify-center items-center ">
          <ul className=" w-1/5">
            <li className="w-4/5 leading-7">Dinner Review (July 2023)</li>
            <li style={pDEcor}>
              ”The 15 best new Los Angeles restaurants of 2019”
            </li>
          </ul>
          <ul className=" ml w-1/5">
            <li className="w-4/5 leading-7">
              “L.A.’s 10 Best New Restaurants of 2019”
            </li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5">Restaurant Review (Feb 2023)</li>
            <li className="w-4/5">“LA’s Best New Restaurants of 2019”</li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5">
              “Best New Restaurants in L.A. 2019 With ‘The Infatuation’”
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
