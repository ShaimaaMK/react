import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./home.js";
import Form from "./form.js";
import Activities from "./Activities.js";
import WeddingDate from "./Date.js";
import Navbar from "./Navbar.js";

const Main = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <div className={`flex justify-center items-center ${location.pathname !== '/' ? 'pt-16' : 'h-screen'} font-cursive`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="Activities" element={<Activities />} />
          <Route path="/date" element={<WeddingDate />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
