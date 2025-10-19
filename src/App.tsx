import "@/App.css";
import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "@/providers/ToastProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import '@/App.css';
import Home from "@/pages/Home";
import List from "@/pages/List";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHome from "@/pages/adminPanel/DashboardHome";
import UserManagement from "@/pages/adminPanel/UserManagement";
import SigninPage from "@/pages/auth/SigninPage";
import DefaultLayout from "@/layouts/DefaultLayout";
import PropertyListing from "@/pages/adminPanel/PropertyListing";
import Transactions from "@/pages/adminPanel/Transactions";
import Messages from "@/pages/adminPanel/Messages";
import Inbox from "@/pages/adminPanel/Inbox";
import Reviews from "@/pages/adminPanel/Reviews";
import Packages from "@/pages/adminPanel/Packages";
import Posts from "@/pages/adminPanel/Posts";
import SignupPage from "@/pages/auth/SignupPage";
import DetailsPage from '@/pages/DetailsPage';
import { APP_ROUTES } from "@/constants/appRoutes";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import EmailVerificationPage from "@/pages/auth/EmailVerificationPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";
import { LoaderProvider } from "@/components/ui/LoaderContext";
import { Loader } from "@/components/ui/Loader";
import { useLoader } from "@/components/ui/LoaderContext";
import React, { useEffect } from "react";
import { setLoaderHandlers } from "@/lib/api";
import UserProfile from "@/pages/UserProfile";
import EditProfile from "@/pages/EditProfile";
import AddProperty from "@/pages/user/AddProperty";
import EditProperty from "@/pages/user/EditProperty";
import UserDashboard from "@/pages/user/UserDashboard";
import BookingRequest from "@/components/detailsPage/BookingRequest";
import { ProtectedRoute, PublicRoute, AdminRoute } from "@/components/common/ProtectedRoute";
import ComingSoon from "./pages/common/comingSoon";


function AppContent() {
  const { active, show, hide } = useLoader();
  useEffect(() => {
    setLoaderHandlers(show, hide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Loader active={active} />
      <Routes>
        {/* Public Routes - accessible to everyone */}
        <Route element={<DefaultLayout />}>
          <Route path={APP_ROUTES.ROOT} element={<Home />} />
          <Route path={APP_ROUTES.USER.PROPERTY.LIST} element={<List />} />
          <Route path={APP_ROUTES.USER.PROPERTY.PROPERTY_DETAIL} element={<DetailsPage />} />
        </Route>

        {/* Auth Routes - only accessible when not logged in */}
        <Route path={APP_ROUTES.AUTH.SIGNIN} element={
          <PublicRoute>
            <SigninPage />
          </PublicRoute>
        } />

        <Route path="/rent" element={<ComingSoon/>}/>
        <Route path={APP_ROUTES.AUTH.SIGNUP} element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        } />
        <Route path={APP_ROUTES.AUTH.VERIFY_EMAIL} element={
          <PublicRoute>
            <EmailVerificationPage />
          </PublicRoute>
        } />
        <Route path={APP_ROUTES.AUTH.FORGOT_PASSWORD} element={
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        } />
        <Route path={APP_ROUTES.AUTH.RESET_PASSWORD} element={
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        } />

        {/* Protected User Routes - require authentication */}
        <Route element={<DefaultLayout />}>
          <Route path={APP_ROUTES.USER.USER_PROFILE} element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } />
          <Route path={APP_ROUTES.USER.EDIT_PROFILE} element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } />
          <Route path={APP_ROUTES.USER.DASHBOARD} element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } />
          <Route path={APP_ROUTES.USER.PROPERTY.BOOKNG_REQUEST} element={
            <ProtectedRoute>
              <BookingRequest />
            </ProtectedRoute>
          } />
          <Route path={APP_ROUTES.USER.PROPERTY.ADD_PROPERTY} element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          } />
          <Route path={`${APP_ROUTES.USER.PROPERTY.EDIT_PROPERTY}/:id`} element={
            <ProtectedRoute>
              <EditProperty />
            </ProtectedRoute>
          } />
        </Route>

        {/* Admin Dashboard Routes - require admin authentication */}
        <Route element={<DashboardLayout />}>
          <Route path={APP_ROUTES.DASHBOARD.ROOT} element={
            <AdminRoute>
              <DashboardHome />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.USER_MANAGEMENT} element={
            <AdminRoute>
              <UserManagement />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.PROPERTIES} element={
            <AdminRoute>
              <PropertyListing />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.TRANSACTIONS} element={
            <AdminRoute>
              <Transactions />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.MESSAGES} element={
            <AdminRoute>
              <Messages />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.INBOX} element={
            <AdminRoute>
              <Inbox />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.REVIEWS} element={
            <AdminRoute>
              <Reviews />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.PACKAGES} element={
            <AdminRoute>
              <Packages />
            </AdminRoute>
          } />
          <Route path={APP_ROUTES.DASHBOARD.POSTS} element={
            <AdminRoute>
              <Posts />
            </AdminRoute>
          } />
        </Route>
      </Routes>
      {/* Toast globally available */}
      <ToastProvider />
    </>
  );
}

function App() {
  return (
    <React.StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LoaderProvider>
    </React.StrictMode>
  );
}

export default App;