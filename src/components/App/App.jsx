import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Authorisation from "../../pages/Authorisation/Authorisation";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";
import ProfileUser from "../../pages/ProfileUser/ProfileUser";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Registration from "../../pages/Registration/Registration";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import NotFound from "../../pages/NotFound/NotFound";
import AppHeader from "../AppHeader/AppHeader";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Authorisation />} />
          <Route path="register" element={<Registration />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="profile" element={<ProfileUser />} />
          <Route path="ingredients/:id" element={<IngredientPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
