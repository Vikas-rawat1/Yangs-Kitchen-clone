import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";
import Waitlist from "./pages/Waitlist";
import Wine from "./pages/Wine";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
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
              </>
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Waitlist" element={<Waitlist />} />
          <Route path="/Wine" element={<Wine />} />


          <Route path="/" element={<Footer />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
