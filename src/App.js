import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import { Home, Contact } from "./pages";
//components
import { Header, Footer } from "./components";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
