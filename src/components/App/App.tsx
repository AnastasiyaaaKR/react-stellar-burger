import React from "react";
import {Routes, Route, useLocation } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Authorisation from "../../pages/Authorisation/Authorisation";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";
import ProfileUser from "../../pages/ProfileUser/ProfileUser";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Registration from "../../pages/Registration/Registration";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import NotFound from "../../pages/NotFound/NotFound";
import AppHeader from "../AppHeader/AppHeader";
import OrderFeed from "../../pages/OrderFeed/OrderFeed";
import OrdersHistory from "../../pages/OrdersHistory/OrdersHistory";
import FeedId from "../../pages/FeedId/FeedId";
import HistoryId from "../../pages/HistoryId/HistoryId";
import { OnlyAuth, OnlyUnAuth } from "../ProtectedRoute/ProtectedRoute";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const background = location.state?.background;
  
  React.useEffect(() => {
    dispatch(getUser());
  }, []);
  
  return (
      <Routes location={background || location}>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<Main />} />
          <Route path="login" element={<OnlyUnAuth component={<Authorisation />} />}/>
          <Route path="register" element={<OnlyUnAuth component={<Registration />}/>}/>
          <Route path="forgot-password" element={<OnlyUnAuth component={<ForgotPassword />}/>} />
          <Route path="reset-password" element={<OnlyUnAuth component={<ResetPassword />}/>} />
          <Route path="profile" element={<OnlyAuth component={<ProfileUser />}/>}/>
          <Route path="/profile/orders" element={<OrdersHistory />} />
          <Route path="feed" element={<OrderFeed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ingredients/:id" element={<IngredientPage />} />
          <Route path="/feed/:id" element={<FeedId />} />
          <Route path="/profile/orders/:id" element={<HistoryId />} />
        </Route>
      </Routes>
  );
};

export default App;
