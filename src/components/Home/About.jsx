import React from "react";

function About() {
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
        <div className="flex justify-center ">
          <ul className=" w-1/5">
            <li className="w-4/5 leading-7">Dinner Review (July 2023)</li>
            <li className="w-4/5 leading-7 mt-4">
              ”The 15 best new Los Angeles restaurants of 2019”
            </li>
          </ul>
          <ul className="w-1/5">
            <li className="w-4/5 leading-7">
              “L.A.’s 10 Best New Restaurants of 2019”
            </li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5  ">Restaurant Review (Feb 2023)</li>
            <li className="w-4/5 mt-4">“LA’s Best New Restaurants of 2019”</li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5 ">
              “Best New Restaurants in L.A. 2019 With ‘The Infatuation’”
            </li>
          </ul>
        </div>
        {/* SECTION 2  */}
        <div className="flex justify-center items-center w-4/5 gap-20 ml-20   ">
          <img className="w-40" src="images/about5.png" alt="" />
          <img className="w-40" src="images/about6.png" alt="" />
          <img className="w-40" src="images/about7.png" alt="" />
          <img className="w-40" src="images/about8.jpeg" alt="" />
        </div>
        <div className="flex justify-center  ">
          <ul className=" w-1/5">
            <li className="w-4/5 leading-7">"101 Best LA Restaurants 2023"</li>
            <li className="w-4/5 leading-7 mt-4">Tasting Notes (April 2023)</li>
            <li className="w-4/5 leading-7 mt-4">
              “101 Best LA Restaurants 2022”
            </li>
            <li className="w-4/5 leading-7 mt-4">
              “101 Best LA Restaurants 2021”
            </li>
            <li className="w-4/5 leading-7 mt-4">
              “101 Best LA Restaurants 2020”
            </li>
            <li className="w-4/5 leading-7 mt-4">
              Restaurant Review (Oct 2019)
            </li>
            <li className="w-4/5 leading-7 mt-4">
              “L.A.’s 15 best dishes of 2019”
            </li>
          </ul>
          <ul className="w-1/5 ">
            <li className="w-4/5 leading-7 ">
              “SGV Darling Yang’s Kitchen Cleverly Riffs on Iconic Chinese
              Dishes With New Dinner Service”
            </li>
            <li className="w-4/5 leading-8 mt-4 ">
              "Celebrated Alhambra Restaurant Yang’s Kitchen Is Back In Action
              After a Long Hiatus"
            </li>
            <li className="w-4/5 leading-7 mt-4">
              “Yang’s Kitchen Is Redefining Chinese Cooking in the San Gabriel
              Valley”
            </li>
            <li className="w-4/5 leading-7 mt-4">Eater Awards 2019</li>
            <li className="w-4/5 leading-7 mt-4">
              “16 Most Important Los Angeles Restaurant Openings in 2019”
            </li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5 ">Restaurant Review (Feb 2023)</li>
            <li className="w-4/5 mt-4">“LA’s Best New Restaurants of 2019”</li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5 ">
              “Best New Restaurants in L.A. 2019 With ‘The Infatuation’”
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
