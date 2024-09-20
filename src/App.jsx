import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PartnershipFramework from "./Components/PartnershipFramework";
import PartnershipSection from "./Components/PartnershipSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PartnershipFramework />
      <PartnershipSection />
      
      <Footer />
    </div>
  );
}

export default App;
