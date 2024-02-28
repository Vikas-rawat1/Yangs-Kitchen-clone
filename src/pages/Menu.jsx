import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
function Menu() {
  return (
    <>
      <Navigation />
      <div className="flex justify-center">
        <ul className="flex gap-10">
          <li>BRUNCH </li>
          <li>DINNER</li>
          <li>BEVERAGES</li>
          <li>COCKTAILS/BEER/SAKE/WINE</li>
        </ul>
      </div>
      <div className="text-center">
        <h1 className="mt-10 font-sans text-3xl">Small Bites & Specials</h1>
      </div>

      {/* FIRST SECTION  */}
      <div className="grid grid-cols-3  justify-center px-4  ml-20 mt-10 mr-20 gap-40">
        <div className="justify-center w-70 ">
          <div>
            <h1 className="font-bold ">Chicken Liver Mousse</h1>
            <p className="font-franklin text-gray-500">
              Jidori chicken liver mousse, grilled Bub & Grandma's sourdough
              sesame toast, house orange marmalade, Chavez Farms market pickles,
              seasonal herbs
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">Chilled Tofu w/ Avocado & Roe</h1>
            <p className="font-franklin text-gray-500">
              Meiji supreme tofu, avocado, wild salmon or trout roe, and house
              ponzu
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">Pickled Cucumber Salad [gf][ve]</h1>
            <p className="font-franklin text-gray-500">
              Farmers Market organic cucumber, garlic, ginger, gochugaru, herbs
            </p>
          </div>
        </div>

        {/* COl2 */}
        <div>
          <div>
            <h1 className="font-bold">Raw Oysters</h1>
            <p className="font-franklin text-gray-500">
              Fresh oysters of-the-moment, ponzu, fermented hot sauce, lemon
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">
              Seasonal Fruit & Kale Salad [gf][ve]
            </h1>
            <p className="font-franklin text-gray-500">
              Gonzaga Farms persimmons, Chavez Farms lacinato kale, herbs,
              organic multigrain rice, roasted pumpkin seeds, crispy rice, house
              miso lemon vinaigrette
              <p className="font-franklin text-gray-500">
                + Pastured chicken breast / avocado
              </p>
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">Smoked Fish Dip</h1>
            <p className="font-franklin text-gray-500">
              Smoked fish-of-the-moment dip, Bub & Grandma's sesame sourdough
              toast, herbs (contains dairy and shallots)
            </p>
          </div>
        </div>
        {/* COL3 */}
        <div>
          <div>
            <h1 className="font-bold">Smoked Salmon Hash</h1>
            <p className="font-franklin text-gray-500">
              Smoked salmon belly, preserved meyer lemon crème fraiche, wild
              salmon or trout roe, house made hash brown, dill, chives
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">Yang's Fried Chicken Wings [gf]</h1>
            <p className="font-franklin text-gray-500">
              Free range chicken wings, lemon, house salt & pepper seasoning
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">Zumi's Loco Moco</h1>
            <p className="font-franklin text-gray-500">
              Breaded and fried grass fed beef patty, napa kraut, cherry tomato
              confit, sunny side up egg, mushroom gravy, multigrain rice
            </p>
          </div>
        </div>
      </div>

      {/* SECOND SECTION  */}
      <div className="text-center">
        <h1 className="mt-20 font-sans text-3xl">'Shareables'</h1>
      </div>

      <div className="grid grid-cols-3  justify-center px-4  ml-20 mt-10 mr-20 gap-40">
        <div>
          <div>
            <h1 className="font-bold mt-10">Cold Sesame Noodles [ve][s]</h1>
            <p className="font-franklin text-gray-500">
              Semolina organic spaghetti, house sesame sauce, organic Persian
              cucumbers, pickled carrots, crushed peanuts, cilantro, scallion,
              house chili crisp *contains nuts*
              <p className="text-sm text-gray-500">
                + Pastured chicken breast / avocado
              </p>
            </p>
          </div>
        </div>

        {/* COL2 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">Cornmeal Mochi Pancake [gf][v]</h1>
            <p className="font-franklin text-gray-500">
              Grist & Toll cornmeal, Koda Farms mochiko rice flour, organic
              whipped cream, seasonal toppings
            </p>
          </div>
        </div>
        {/* COL3 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">Pickled Cucumber Salad [gf][ve]</h1>
            <p className=" font-franklin text-gray-500">
              Roasted Yao Cheng Farms organic kabocha squash, Chavez Farms
              lacinato kale, herbs, organic multigrain rice, roasted pumpkin
              seeds, crispy rice, house miso lemon vinaigrette
              <p className="text-sm text-gray-500">
                + Pastured chicken breast / avocado
              </p>
            </p>
          </div>
        </div>
      </div>
      {/* THIRD SECTION  */}
      <div className="text-center">
        <h1 className="mt-20 font-sans text-3xl"> 'Mains'</h1>
      </div>

      <div className="grid grid-cols-3  justify-center px-4  ml-20 mt-10 mr-20 gap-40">
        <div>
          <div>
            <h1 className="font-bold mt-10">Breakfast Plate [gf]</h1>
            <p className="font-franklin text-gray-500">
              Two farm fresh eggs, house made hash browns, seasonal Farmers
              Market greens, choice of protein, and house made scallion ranch
              sauce
            </p>
            <p>-</p>
            <p className="text-sm text-gray-500 list-none leading-5">
              PROTEIN CHOICES:
              <li>Braised Meiji tofu [v]</li>
              <li>Pastured chicken thigh</li>
              <li>Mushroom medley [v]</li>
              <li>Grass-fed hanger steak</li>
              <li>Dry-aged barramundi</li>
              <li>Dry-aged steelhead *marinated in yuzu miso!*</li>
              <li>
                + P&B pork sausage / P&B bacon / avocado / Bub's sesame toast
              </li>
            </p>
          </div>
        </div>

        {/* COL2 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">Yang's Set Meal [gf]</h1>
            <p className="font-franklin text-gray-500">
              Choice of protein, organic multigrain rice, Omiso's awase miso
              soup, seasonal Farmers Market vegetables, house pickles, soy egg
            </p>
            <p>-</p>
            <p className="text-sm text-gray-500 list-none leading-5">
              PROTEIN CHOICES:
              <li>Braised Meiji tofu [v]</li>
              <li>Pastured chicken thigh</li>
              <li>Mushroom medley [v]</li>
              <li>Grass-fed hanger steak</li>
              <li>Dry-aged barramundi</li>
              <li>Dry-aged steelhead *marinated in yuzu miso!*</li>
            </p>
          </div>
        </div>
        {/* COL3 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">Pickled Cucumber Salad [gf][ve]</h1>
            <p className="font-franklin text-gray-500 ">
              Choice of protein, grilled Farmers Market vegetables, house
              pickles, house green sauce
            </p>
            <p>-</p>
            <p className="text-sm text-gray-500 list-none leading-5">
              PROTEIN CHOICES:
              <li>Pastured chicken thigh</li>
              <li>Mushroom medley [v]</li>
              <li>Grass-fed hanger steak</li>
              <li>Dry-aged barramundi</li>
              <li>Dry-aged steelhead *marinated in yuzu miso!*</li>
              <li>+ Omiso soup / organic multigrain rice / avocado</li>
            </p>
          </div>
        </div>
      </div>
      {/* FOURTH   SECTION  */}
      <div className="text-center">
        <h1 className="mt-20 font-sans text-3xl text-gray-500"> Extra Sides</h1>
      </div>

      <div className="grid grid-cols-3  justify-center px-4  ml-20 mt-10 mr-20 gap-40">
        <div>
          <div>
            <h1 className="font-bold mt-10">Avocado [ve]</h1>
          </div>
          <div>
            <h1 className="font-bold mt-10">Braised Tofu [gf][ve]</h1>
            <p className="font-franklin text-gray-500">
              Braised Meiji firm tofu, radish sprouts, scallions
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">
              Bub & Grandma's Sesame Toast [ve]
            </h1>
            <p className="font-franklin text-gray-500">
              Two slices of sesame sourdough toast
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">Two Eggs [gf]</h1>
            <p className="font-franklin text-gray-500">
              scrambled, sunny-side up, or over-easy
            </p>
          </div>
        </div>

        {/* COL2 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">Omiso Soup [gf][ve]</h1>
            <p className="font-franklin text-gray-500">
              Bowl of awase miso soup
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">
              Organic Multigrain Rice [gf][ve]
            </h1>
            <p className="font-franklin text-gray-500">
              Bowl of organic multigrain rice
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-10">
              Peads & Barnetts Sausage Patty [gf]
            </h1>
            <p className="font-franklin text-gray-500">One sausage patty</p>
          </div>
          <div>
            <h1 className="font-bold mt-10">
              Peads & Barnetts Bacon Slice [gf]
            </h1>
            <p className="font-franklin text-gray-500">One bacon slice</p>
          </div>
          <div>
            <h1 className="font-bold mt-10">Soy Egg [gf]</h1>
          </div>
        </div>
        {/* COL3 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">Dry-aged Barramundi [gf]</h1>
          </div>
          <div>
            <h1 className="font-bold mt-10">
              Dry-aged Steelhead (w/ yuzu miso!) [gf]
            </h1>
          </div>
          <div>
            <h1 className="font-bold mt-10">
              Grilled Seasonal Farmers Market Vegetables [gf][ve]Dry-aged
              Barramundi [gf]
            </h1>
          </div>
          <div>
            <h1 className="font-bold mt-10">Grass-fed Hanger Steak [gf]</h1>
          </div>
          <div>
            <h1 className="font-bold mt-10">Mushroom Medley [gf][ve]</h1>
          </div>
          <div>
            <h1 className="font-bold mt-10">Pastured Chicken Thigh [gf]</h1>
          </div>
        </div>
      </div>
      {/* FIFTH   SECTION  */}
      <div className="text-center">
        <h1 className="mt-20 font-sans text-3xl text-gray-500"> Sweets</h1>
      </div>

      <div className="grid grid-cols-3  justify-center px-4  ml-20 mt-10 mr-20 gap-40">
        <div>
          <div>
            <h1 className="font-bold mt-10">Elaine's 'Purin'</h1>
          </div>
        </div>

        {/* COL2 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">
              Organic Vanilla Soft Serve and/or House Sorbet (except Mondays)
            </h1>
            <p className="text-sm font-franklin text-gray-500">
              Optional Toppings:
            </p>
            <p className=" text-sm font-franklin text-gray-500">
              + Housemade Red Bean Paste
            </p>
            <p className="text-sm font-franklin text-gray-500">
              + Sweet Cornflakes
            </p>
            <p className="text-sm font-franklin text-gray-500">
              + Rooted Fare's Black Sesame Crunchy Butter
            </p>
          </div>
        </div>
      </div>
      {/* SIXTH   SECTION  */}
      <div className="text-center">
        <h1 className="mt-20 font-sans text-3xl text-gray-500">Extra Sauces</h1>
      </div>

      <div className="grid grid-cols-3  justify-center px-4  ml-20 mt-10 mr-20 gap-40">
        <div>
          <div>
            <h1 className="font-bold mt-10">Chili Crisp [gf][ve]</h1>
          </div>
          <div>
            <h1 className="font-bold mt-10">Green Sauce [gf][ve]</h1>
          </div>
        </div>

        {/* COL2 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">
              Lacto-Fermented Chili Garlic Sauce [gf][ve]
            </h1>
          </div>
        </div>
        {/* COL3 */}
        <div>
          <div>
            <h1 className="font-bold mt-10">Scallion Ranch Dressing [gf]</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Menu;
