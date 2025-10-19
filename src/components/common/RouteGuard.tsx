import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRouteProtection } from '@/hooks/auth/useRouteProtection';
import { APP_ROUTES } from '@/constants/appRoutes';

interface RouteGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  requireVerified?: boolean;
  allowedRoles?: string[];
  redirectTo?: string;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  requireAuth = true,
  requireAdmin = false,
  requireVerified = false,
  allowedRoles = [],
  redirectTo
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { canAccess, user, loading } = useRouteProtection();

  useEffect(() => {
    if (loading) return;

    const accessCheck = canAccess(requireAuth, requireAdmin, requireVerified);

    // Check role-based access if roles are specified
    if (allowedRoles.length > 0 && user) {
      const userRole = user.role || 'user';
      if (!allowedRoles.includes(userRole)) {
        navigate(redirectTo || APP_ROUTES.USER.DASHBOARD, { replace: true });
        return;
      }
    }

    if (!accessCheck.canAccess) {
      const redirectPath = redirectTo || accessCheck.redirectTo || APP_ROUTES.AUTH.SIGNIN;
      navigate(redirectPath, { 
        replace: true,
        state: { from: location.pathname }
      });
    }
  }, [loading, requireAuth, requireAdmin, requireVerified, allowedRoles, redirectTo, navigate, location.pathname, canAccess, user]);

  if (loading) {
    return null; // Let the parent handle loading state
  }

  const accessCheck = canAccess(requireAuth, requireAdmin, requireVerified);
  
  if (!accessCheck.canAccess) {
    return null; // Will redirect in useEffect
  }

  // Check role-based access
  if (allowedRoles.length > 0 && user) {
    const userRole = user.role || 'user';
    if (!allowedRoles.includes(userRole)) {
      return null; // Will redirect in useEffect
    }
  }

  return <>{children}</>;
};

// Convenience components
export const UserRouteGuard: React.FC<Omit<RouteGuardProps, 'requireAuth'>> = (props) => (
  <RouteGuard {...props} requireAuth={true} />
);

export const AdminRouteGuard: React.FC<Omit<RouteGuardProps, 'requireAuth' | 'requireAdmin'>> = (props) => (
  <RouteGuard {...props} requireAuth={true} requireAdmin={true} />
);

export const PublicRouteGuard: React.FC<Omit<RouteGuardProps, 'requireAuth'>> = (props) => (
  <RouteGuard {...props} requireAuth={false} />
);
