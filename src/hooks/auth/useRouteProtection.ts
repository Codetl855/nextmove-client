import { useAuth } from '@/providers/AuthProvider';
import { useLocation } from 'react-router-dom';
import { APP_ROUTES } from '@/constants/appRoutes';

export const useRouteProtection = () => {
  const { user, isAuthenticated, isAdmin, isVerified, loading } = useAuth();
  const location = useLocation();

  const canAccess = (requireAuth: boolean = true, requireAdmin: boolean = false, requireVerified: boolean = false) => {
    if (loading) return { canAccess: false, reason: 'loading' };
    
    if (requireAuth && !isAuthenticated) {
      return { 
        canAccess: false, 
        reason: 'unauthenticated',
        redirectTo: APP_ROUTES.AUTH.SIGNIN
      };
    }

    if (requireAdmin && !isAdmin) {
      return { 
        canAccess: false, 
        reason: 'insufficient_permissions',
        redirectTo: APP_ROUTES.USER.DASHBOARD
      };
    }

    if (requireVerified && !isVerified) {
      return { 
        canAccess: false, 
        reason: 'unverified',
        redirectTo: APP_ROUTES.AUTH.VERIFY_EMAIL
      };
    }

    return { canAccess: true, reason: 'success' };
  };

  const getRedirectPath = (from: string) => {
    // Store the intended destination for after login
    if (from && from !== APP_ROUTES.AUTH.SIGNIN && from !== APP_ROUTES.AUTH.SIGNUP) {
      return from;
    }
    return APP_ROUTES.USER.DASHBOARD;
  };

  const shouldRedirectToAuth = () => {
    return !isAuthenticated && !loading;
  };

  const shouldRedirectFromAuth = () => {
    return isAuthenticated && !loading && (
      location.pathname === APP_ROUTES.AUTH.SIGNIN ||
      location.pathname === APP_ROUTES.AUTH.SIGNUP
    );
  };

  return {
    user,
    isAuthenticated,
    isAdmin,
    isVerified,
    loading,
    canAccess,
    getRedirectPath,
    shouldRedirectToAuth,
    shouldRedirectFromAuth,
    currentPath: location.pathname
  };
};
