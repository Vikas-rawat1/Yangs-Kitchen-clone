import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Kitchen from "./components/Home/Kitchen";
import Member from "./components/Home/Member";
import Location from "./components/Home/Location";
import React, { useState } from "react";

function App() {
  return (
    <>
      <Navigation />
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
      <Kitchen/>
     <Location />
      </>
  );
}

export default App;
