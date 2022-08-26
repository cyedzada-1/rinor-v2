import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Container/About/About";
import Destinations from "./Container/Destinations/Destinations";
import Home from "./Container/Home/Home";
import Tours from "./Container/Tours/Tours";
import Contact from "./Components/Contact/Contact.jsx";

import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";

import TourList from "./Components/Tour/TourList.jsx";
import TourDetails from "./Components/Tour/TourDetail.jsx";
import TourType from "./Components/Tour/TourType.jsx";


import ForgotPassword from "./Components/PopUp/ForgotPassword.jsx";
import ProfileSetting from "./Components/PopUp/ProfileSetting.jsx";
import Registration from "./Components/PopUp/Registration.jsx";
import Login from "./Components/PopUp/Login.jsx";
import Success from "./Components/PopUp/Success.jsx";
import ContactUs from "./Components/PopUp/ContactUs.jsx";
import BookPopUp from "./Components/PopUp/BookPopUp";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour-list" element={<TourList />} />
          <Route path="/tour-type" element={<TourType />} />
          <Route path="/tour-detail" element={<TourDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/success" element={<Success />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/book" element={<BookPopUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
