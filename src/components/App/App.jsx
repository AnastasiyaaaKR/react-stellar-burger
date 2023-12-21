import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Authorisation from '../../pages/Authorisation/Authorisation';
import IngredientPage from '../../pages/IngredientPage/IngredientPage';
import ProfileUser from '../../pages/ProfileUser/ProfileUser';
import RecoveryPassword from '../../pages/RecoveryPassword/RecoveryPassword';
import Registration from '../../pages/Registration/Registration';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot-password" element={<RecoveryPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

