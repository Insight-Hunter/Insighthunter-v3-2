import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import CompanyInfoPage from "./pages/CompanyInfoPage";
import UserInfoPage from "./pages/UserInfoPage";
import ReviewPage from "./pages/ReviewPage";
import ThankYouPage from "./pages/ThankYouPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/company" element={<CompanyInfoPage />} />
      <Route path="/user" element={<UserInfoPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  </Router>
);

export default App;
