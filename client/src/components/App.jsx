import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { loadWebFonts } from 'styles/webFonts';
import { refreshThunk } from 'store/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';

import Toast from 'components/common/Toast/Toast';
import OvalLoader from 'components/common/Loader/OvalLoader';
import PublicRoutes from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

import Home from 'pages/Home';
import Google from 'pages/Google';
const Signup = lazy(() => import('pages/Signup'));
const Signin = lazy(() => import('pages/Signin'));
const SharedLayuot = lazy(() => import('layouts/SharedLayuot/SharedLayuot'));
const Contacts = lazy(() => import('pages/Contacts'));
const Profile = lazy(() => import('pages/Profile'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    loadWebFonts();
  }, []);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/google" element={<Google />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<SharedLayuot />}>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}

      {isRefreshing && <OvalLoader />}

      <Toast />
    </>
  );
};