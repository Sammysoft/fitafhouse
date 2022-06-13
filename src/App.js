/* eslint-disable */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import DashboardPage from "./Pages/DashboardPage";
import ErrorPage from "./Pages/ErrorPage";
import Onboarding from "./Pages/Onboarding";
import SignInPage from "./Pages/SignInPage";
import PasswordAuthPage from "./Pages/PasswordAuthPage";
import InvestmentPage from "./Pages/InvestmentPage";
import Users from "./Components/Dashboard/Admin/users";
import Investors from "./Components/Dashboard/Admin/investors";
import ProfilePage from "./Pages/ProfilePage";
import AdminSupport from './Components/Dashboard/Admin/support'
import Developing from "./Pages/Developing";

import AOS from "aos";
import "aos/dist/aos.css";
import SupportPage from "./Pages/SupportPage";
import ResetPassword from "./Pages/ResetPasswordPage";

const App = () => {
  AOS.init();
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/ourcompany" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard/investments" element={<InvestmentPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
        <Route path="/dashboard/support" element={<SupportPage />} />
        <Route path="/support" element={<AdminSupport />}/>
        <Route path="/auth" element={<SignInPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/forgot-password" element={<PasswordAuthPage />} />
        <Route path="/password-reset/*" element={<ResetPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
