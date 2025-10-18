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
import { useEffect } from "react";
import { setLoaderHandlers } from "@/lib/api";
import UserProfile from "@/pages/UserProfile";
import EditProfile from "@/pages/EditProfile";
import AddProperty from "@/pages/user/AddProperty";
import EditProperty from "@/pages/user/EditProperty";
import UserDashboard from "@/pages/user/UserDashboard";
import BookingRequest from "@/components/detailsPage/BookingRequest";


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
        {/* Routes with header */}
        <Route element={<DefaultLayout />}>
          <Route path={APP_ROUTES.ROOT} element={<Home />} />
          <Route path={APP_ROUTES.USER.USER_PROFILE} element={<UserProfile />} />
          <Route path={APP_ROUTES.USER.EDIT_PROFILE} element={<EditProfile />} />
          <Route path={APP_ROUTES.USER.DASHBOARD} element={<UserDashboard />} />


          {/* Property routes with navbar and sidebar */}
          <Route path={APP_ROUTES.USER.PROPERTY.LIST} element={<List />} />
          <Route path={APP_ROUTES.USER.PROPERTY.PROPERTY_DETAIL} element={<DetailsPage />} />
          <Route path={APP_ROUTES.USER.PROPERTY.BOOKNG_REQUEST} element={<BookingRequest />} />
          <Route path={APP_ROUTES.USER.PROPERTY.ADD_PROPERTY} element={<AddProperty />} />
          <Route path={`${APP_ROUTES.USER.PROPERTY.EDIT_PROPERTY}/:id`} element={<EditProperty />} />

        </Route>

        {/* Dashboard routes with navbar and sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path={APP_ROUTES.DASHBOARD.ROOT} element={<DashboardHome />} />
          <Route path={APP_ROUTES.DASHBOARD.USER_MANAGEMENT} element={<UserManagement />} />
          <Route path={APP_ROUTES.DASHBOARD.PROPERTIES} element={<PropertyListing />} />
          <Route path={APP_ROUTES.DASHBOARD.TRANSACTIONS} element={<Transactions />} />
          <Route path={APP_ROUTES.DASHBOARD.MESSAGES} element={<Messages />} />
          <Route path={APP_ROUTES.DASHBOARD.INBOX} element={<Inbox />} />
          <Route path={APP_ROUTES.DASHBOARD.REVIEWS} element={<Reviews />} />
          <Route path={APP_ROUTES.DASHBOARD.PACKAGES} element={<Packages />} />
          <Route path={APP_ROUTES.DASHBOARD.POSTS} element={<Posts />} />
        </Route>

        {/* Routes without header */}
        <Route path={APP_ROUTES.AUTH.SIGNIN} element={<SigninPage />} />
        <Route path={APP_ROUTES.AUTH.SIGNUP} element={<SignupPage />} />
        <Route path={APP_ROUTES.AUTH.VERIFY_EMAIL} element={<EmailVerificationPage />} />
        <Route path={APP_ROUTES.AUTH.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={APP_ROUTES.AUTH.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Routes>
      {/* Toast globally available */}
      <ToastProvider />
    </>
  );
}

function App() {
  return (
    <LoaderProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LoaderProvider>
  );
}

export default App;