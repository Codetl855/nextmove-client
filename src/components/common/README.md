# Protected Routes Implementation

This directory contains a comprehensive protected routes system for the NextMove client application. The implementation provides multiple ways to protect routes based on authentication status, user roles, and verification status.

## Components

### 1. ProtectedRoute.tsx
Main component for route protection with three variants:
- `ProtectedRoute` - Requires authentication
- `PublicRoute` - Only accessible when not authenticated
- `AdminRoute` - Requires admin privileges

### 2. RouteGuard.tsx
Advanced route protection with role-based access control:
- `RouteGuard` - Flexible route protection
- `UserRouteGuard` - User-only routes
- `AdminRouteGuard` - Admin-only routes
- `PublicRouteGuard` - Public routes

### 3. withAuth.tsx
Higher-order components for easy route protection:
- `withAuth` - Generic HOC with options
- `withUserAuth` - User authentication HOC
- `withAdminAuth` - Admin authentication HOC
- `withVerifiedAuth` - Verified user authentication HOC
- `withPublicAuth` - Public route HOC

## Hooks

### useRouteProtection.ts
Custom hook providing authentication utilities:
- `canAccess()` - Check access permissions
- `getRedirectPath()` - Get appropriate redirect path
- `shouldRedirectToAuth()` - Check if redirect to auth is needed
- `shouldRedirectFromAuth()` - Check if redirect from auth is needed

## Usage Examples

### Method 1: Using ProtectedRoute Components
```tsx
import { ProtectedRoute, AdminRoute, PublicRoute } from '@/components/common/ProtectedRoute';

// User-only route
<ProtectedRoute>
  <UserDashboard />
</ProtectedRoute>

// Admin-only route
<AdminRoute>
  <AdminPanel />
</AdminRoute>

// Public route (redirects if authenticated)
<PublicRoute>
  <SigninPage />
</PublicRoute>
```

### Method 2: Using RouteGuard Components
```tsx
import { RouteGuard, AdminRouteGuard } from '@/components/common/RouteGuard';

// User route with role checking
<RouteGuard requireAuth={true} allowedRoles={['user', 'premium']}>
  <UserContent />
</RouteGuard>

// Admin route
<AdminRouteGuard>
  <AdminContent />
</AdminRouteGuard>
```

### Method 3: Using HOCs
```tsx
import { withUserAuth, withAdminAuth } from '@/components/common/withAuth';

const ProtectedUserPage = withUserAuth(UserPage);
const ProtectedAdminPage = withAdminAuth(AdminPage);

// Use in JSX
<ProtectedUserPage />
<ProtectedAdminPage />
```

### Method 4: Using Hooks
```tsx
import { useRouteProtection } from '@/hooks/auth/useRouteProtection';

const MyComponent = () => {
  const { isAuthenticated, isAdmin, canAccess } = useRouteProtection();
  
  const accessCheck = canAccess(true, false, false); // requireAuth, requireAdmin, requireVerified
  
  if (!accessCheck.canAccess) {
    return <div>Access denied</div>;
  }
  
  return <div>Protected content</div>;
};
```

## Route Configuration in App.tsx

The main App.tsx file demonstrates how to implement protected routes:

```tsx
// Public routes
<Route path="/" element={<Home />} />
<Route path="/list" element={<List />} />

// Auth routes (redirect if authenticated)
<Route path="/sign-in" element={
  <PublicRoute>
    <SigninPage />
  </PublicRoute>
} />

// Protected user routes
<Route path="/user-dashboard" element={
  <ProtectedRoute>
    <UserDashboard />
  </ProtectedRoute>
} />

// Admin routes
<Route path="/dashboard" element={
  <AdminRoute>
    <DashboardHome />
  </AdminRoute>
} />
```

## Features

### Authentication States
- **Unauthenticated**: User not logged in
- **Authenticated**: User logged in
- **Admin**: User with admin privileges
- **Verified**: User with verified email

### Redirect Behavior
- Unauthenticated users → Sign-in page
- Authenticated users accessing auth pages → User dashboard
- Non-admin users accessing admin pages → User dashboard
- Unverified users → Email verification page

### Role-Based Access Control
- Support for multiple user roles
- Flexible role checking
- Custom redirect paths based on access level

### Loading States
- Shows loader while authentication state is being determined
- Prevents flash of incorrect content

## Configuration

### User Interface
The User interface in AuthProvider supports:
```tsx
interface User {
  last_name: string;
  first_name: string;
  email: string;
  mobile: string;
  address?: string;
  profile_image?: string;
  role?: 'user' | 'admin' | 'super_admin';
  isAdmin?: boolean;
  isVerified?: boolean;
}
```

### Route Options
```tsx
interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;        // Default: true
  requireAdmin?: boolean;       // Default: false
  redirectTo?: string;          // Custom redirect path
}
```

## Best Practices

1. **Use appropriate protection level**: Choose the right component/HOC for your needs
2. **Handle loading states**: Always show loading indicators while auth state is being determined
3. **Provide fallbacks**: Use fallback components for better UX
4. **Test edge cases**: Test with different user states and roles
5. **Keep redirects simple**: Use clear, predictable redirect paths

## Security Notes

- All route protection is client-side and should be backed by server-side validation
- Sensitive operations should always verify permissions on the server
- Token validation should be handled by the authentication service
- Consider implementing route-level caching for better performance
