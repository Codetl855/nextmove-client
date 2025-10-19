import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';
import { APP_ROUTES } from '@/constants/appRoutes';
import { Loader } from '@/components/ui/Loader';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
  requireAdmin = false,
  redirectTo
}) => {
  const { user, loading, isAuthenticated, isAdmin: userIsAdmin } = useAuth();
  const location = useLocation();

  // Show loader while authentication state is being determined
  if (loading) {
    return <Loader active={true} />;
  }

  // If authentication is required but user is not logged in
  if (requireAuth && !isAuthenticated) {
    const redirectPath = redirectTo || APP_ROUTES.AUTH.SIGNIN;
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // If user is logged in but trying to access auth pages, redirect to dashboard
  if (!requireAuth && isAuthenticated) {
    const redirectPath = redirectTo || APP_ROUTES.USER.DASHBOARD;
    return <Navigate to={redirectPath} replace />;
  }

  // If admin access is required but user is not admin
  if (requireAdmin && isAuthenticated && !userIsAdmin) {
    return <Navigate to={APP_ROUTES.USER.DASHBOARD} replace />;
  }

  return <>{children}</>;
};

// Helper function to check if user is admin
// This is now handled by the AuthProvider, but keeping for backward compatibility
const isAdmin = (user: any): boolean => {
  return user?.isAdmin || user?.role === 'admin' || user?.role === 'super_admin' || false;
};

// Public Route Component - redirects authenticated users
export const PublicRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo
}) => {
  return (
    <ProtectedRoute requireAuth={false} redirectTo={redirectTo}>
      {children}
    </ProtectedRoute>
  );
};

// Admin Route Component - requires admin access
export const AdminRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo
}) => {
  return (
    <ProtectedRoute requireAuth={true} requireAdmin={true} redirectTo={redirectTo}>
      {children}
    </ProtectedRoute>
  );
};
