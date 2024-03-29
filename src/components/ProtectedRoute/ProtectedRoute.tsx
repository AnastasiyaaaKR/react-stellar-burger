import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import { useAppSelector } from "../../services/storage";

interface IProtectedRouteProps {
  onlyUnAuth: boolean, 
  component: JSX.Element;
}

const ProtectedRoute = ({ onlyUnAuth = false, component }: IProtectedRouteProps) => {
  const isAuthChecked = useAppSelector((store) => store.user.isAuthChecked);
  const user = useAppSelector((store) => store.user.user);
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
