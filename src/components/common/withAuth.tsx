import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRouteProtection } from '@/hooks/auth/useRouteProtection';
import { Loader } from '@/components/ui/Loader';

interface WithAuthOptions {
  requireAuth?: boolean;
  requireAdmin?: boolean;
  requireVerified?: boolean;
  redirectTo?: string;
  fallback?: React.ComponentType;
}

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithAuthOptions = {}
) => {
  const {
    requireAuth = true,
    requireAdmin = false,
    requireVerified = false,
    redirectTo,
    fallback: FallbackComponent
  } = options;

  return (props: P) => {
    const { canAccess, loading } = useRouteProtection();

    if (loading) {
      return <Loader active={true} />;
    }

    const accessCheck = canAccess(requireAuth, requireAdmin, requireVerified);

    if (!accessCheck.canAccess) {
      if (FallbackComponent) {
        return <FallbackComponent />;
      }

      const redirectPath = redirectTo || accessCheck.redirectTo || '/';
      return <Navigate to={redirectPath} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

// Convenience HOCs
export const withUserAuth = <P extends object>(Component: React.ComponentType<P>) =>
  withAuth(Component, { requireAuth: true });

export const withAdminAuth = <P extends object>(Component: React.ComponentType<P>) =>
  withAuth(Component, { requireAuth: true, requireAdmin: true });

export const withVerifiedAuth = <P extends object>(Component: React.ComponentType<P>) =>
  withAuth(Component, { requireAuth: true, requireVerified: true });

export const withPublicAuth = <P extends object>(Component: React.ComponentType<P>) =>
  withAuth(Component, { requireAuth: false });
