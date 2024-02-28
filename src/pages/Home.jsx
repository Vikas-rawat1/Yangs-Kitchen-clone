import React from "react";
import Member from "../components/Home/Member";
import Footer from "../components/Footer";
function Home({ divStyle, pStyle }) {
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <img
          className="m-20 w-full max-h-full"
          src="images/hero.jpeg"
          alt="HeroImage"
        />
      </div>
      {/* ABOUT  */}
      <div>
        <div>
          <p style={{ textAlign: "center", fontWeight: "bold", marginTop: 50 }}>
            DINNER RESERVATIONS!
          </p>
          <div style={divStyle}>
            <p style={pStyle}>
              We are now open for dinner service Thursday through Sunday! We’ll
              be accepting limited walk-ins and reservations on Yelp.
            </p>
          </div>

          <div style={divStyle}>
            <p style={pStyle}>
              For brunch, we still do not take reservations as we seat guests on
              a first come first serve basis. However, you can join our Yelp!
              Waitlist to save your spot ahead of time (same day only)!
            </p>
          </div>
        </div>
        {/* About  */}
        <div>
          <p style={{ textAlign: "center", fontWeight: "bold", marginTop: 50 }}>
            BUSINESS HOURS
          </p>
          <p style={{ textAlign: "center", lineHeight: 3 }}>
            BRUNCH: Thursday through Monday 9:00am - 2:30pm
          </p>
          <p style={{ textAlign: "center", lineHeight: 3 }}>
            DINNER: Thursday through Sunday 5:00pm - 9:00pm
          </p>
          <p style={{ textAlign: "center", lineHeight: 3 }}>
            CLOSED Tuesdays & Wednesdays{" "}
          </p>
          <p style={{ textAlign: "center", lineHeight: 3 }}>
            Dine-in, takeout, and delivery (via DoorDash & UberEats) available
          </p>
        </div>
        {/* About  */}

        <div className="flex justify-center">
          <button className="bg-transparent border-solid border-black border-2 py-3 px-9 hover:bg-gray-800 hover:text-white">
            ORDER NOW
          </button>
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <button className="bg-transparent border-solid border-black border-2 py-7 px-12 hover:bg-gray-800 hover:text-white">
            CARRERS - SEND US A RESUME/SHORT MESSAGE!
          </button>
        </div>
      </div>
      <Member
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
    <Footer/>

    </>
  );
}
export default Home;
