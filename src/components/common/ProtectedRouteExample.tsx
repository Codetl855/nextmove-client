import React from 'react';
import { ProtectedRoute, PublicRoute, AdminRoute } from './ProtectedRoute';
import { RouteGuard, UserRouteGuard, AdminRouteGuard, PublicRouteGuard } from './RouteGuard';
import { withAuth, withUserAuth, withAdminAuth, withPublicAuth } from './withAuth';
import { useRouteProtection } from '@/hooks/auth/useRouteProtection';

// Example components
const PublicComponent = () => <div>This is a public component</div>;
const UserComponent = () => <div>This is a user-only component</div>;
const AdminComponent = () => <div>This is an admin-only component</div>;

// Example using HOCs
const ProtectedUserComponent = withUserAuth(UserComponent);
const ProtectedAdminComponent = withAdminAuth(AdminComponent);
const PublicOnlyComponent = withPublicAuth(PublicComponent);

// Example using hooks
const HookBasedComponent = () => {
  const { isAuthenticated, isAdmin, canAccess } = useRouteProtection();

  if (!isAuthenticated) {
    return <div>Please log in to access this content</div>;
  }

  if (!isAdmin) {
    return <div>Admin access required</div>;
  }

  return <div>Welcome, admin!</div>;
};

// Example route configurations
export const ExampleRoutes = () => {
  return (
    <>
      {/* Method 1: Using ProtectedRoute components */}
      <ProtectedRoute>
        <UserComponent />
      </ProtectedRoute>

      <AdminRoute>
        <AdminComponent />
      </AdminRoute>

      <PublicRoute>
        <PublicComponent />
      </PublicRoute>

      {/* Method 2: Using RouteGuard components */}
      <RouteGuard requireAuth={true}>
        <UserComponent />
      </RouteGuard>

      <AdminRouteGuard>
        <AdminComponent />
      </AdminRouteGuard>

      <PublicRouteGuard>
        <PublicComponent />
      </PublicRouteGuard>

      {/* Method 3: Using HOCs */}
      <ProtectedUserComponent />
      <ProtectedAdminComponent />
      <PublicOnlyComponent />

      {/* Method 4: Using hooks */}
      <HookBasedComponent />
    </>
  );
};

export default ExampleRoutes;
