import React from "react";
import Social from "./Social";
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
            <li className="w-4/5 leading-7">
              <a href="https://www.latimes.com/food/list/101-best-los-angeles-restaurants-ranked-2023">
                "101 Best LA Restaurants 2023"
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://www.latimes.com/food/newsletter/2023-04-29/yangs-kitchen-alhambra-dinner-review-bill-addison-tasting-notes">
                Tasting Notes (April 2023)
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://www.latimes.com/food/list/101-best-los-angeles-restaurants-ranked-2022">
                “101 Best LA Restaurants 2022”
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://www.latimes.com/food/list/best-los-angeles-restaurants-2021">
                “101 Best LA Restaurants 2021”
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://www.latimes.com/projects/101-best-la-restaurants-2020/">
                “101 Best LA Restaurants 2020”
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://www.latimes.com/food/story/2019-10-31/yangs-kitchen-alhambra-chinese-taiwanese-review-bill-addison">
                Restaurant Review (Oct 2019)
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://www.latimes.com/food/story/2019-12-26/la-times-food-restaurant-critics-favorite-dishes">
                “L.A.’s 15 best dishes of 2019”
              </a>
            </li>
          </ul>
          <ul className="w-1/5 ">
            <li className="w-4/5 leading-7 ">
              <a href="https://la.eater.com/2022/11/9/23445976/yangs-kitchen-alhambra-sgv-dinner-menu-hainan-fish-rice-chinese-aromatic-ribs-new">
                “SGV Darling Yang’s Kitchen Cleverly Riffs on Iconic Chinese
                Dishes With New Dinner Service”
              </a>
            </li>
            <li className="w-4/5 leading-8 mt-4 ">
              <a href="https://la.eater.com/2021/4/14/22380728/yangs-kitchen-alhambra-restaurant-reopening-2021-patios-menu">
                "Celebrated Alhambra Restaurant Yang’s Kitchen Is Back In Action
                After a Long Hiatus"
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://la.eater.com/2019/9/30/20887415/yangs-kitchen-alhambra-restaurant-chinese-sgv-san-gabriel-valley-los-angeles">
                “Yang’s Kitchen Is Redefining Chinese Cooking in the San Gabriel
                Valley”
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://la.eater.com/2019/11/18/20970987/eater-awards-2019-los-angeles-finalists-best-design-surprise">
                Eater Awards 2019
              </a>
            </li>
            <li className="w-4/5 leading-7 mt-4">
              <a href="https://la.eater.com/maps/important-best-los-angeles-restaurant-openings-2019">
                “16 Most Important Los Angeles Restaurant Openings in 2019”
              </a>
            </li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5 ">
              <a href="https://www.bonappetit.com/story/favorite-restaurants-2019">
                Restaurant Review (Feb 2023)
              </a>
            </li>
            <li className="w-4/5 mt-4">
              <a href="https://theinfatuation.com/los-angeles/guides/best-new-restaurants-2019-los-angeles">
                “LA’s Best New Restaurants of 2019”
              </a>
            </li>
          </ul>
          <ul className=" w-1/5">
            <li className="w-4/5 ">
              <a href="https://www.tastingtable.com/1211662/best-restaurants-in-los-angeles-ranked/">
                “Best New Restaurants in L.A. 2019 With ‘The Infatuation’”
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Social/>
    </>
  );
}

export default About;
