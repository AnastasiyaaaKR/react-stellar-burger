import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../services/storage";

interface IProtectedRouteProps {
  onlyUnAuth: boolean, 
  component: JSX.Element;
}

const ProtectedRoute = ({ onlyUnAuth = false, component }: IProtectedRouteProps) => {
  const isAuthChecked = useSelector((store: RootState) => store.user.isAuthChecked);
  const user = useSelector((store: RootState) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = (props: Omit<IProtectedRouteProps, 'onlyUnAuth'>) => <ProtectedRoute onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props: Omit<IProtectedRouteProps, 'onlyUnAuth'>) => <ProtectedRoute onlyUnAuth={true} {...props} />;
