import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { logout as apiLogout } from "@/services/authService";

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

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Computed values
  const isAuthenticated = !!user;
  const isAdmin = user?.isAdmin || user?.role === 'admin' || user?.role === 'super_admin' || false;
  const isVerified = user?.isVerified || false;

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsedUser = JSON.parse(stored);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser, 
      loading, 
      isAuthenticated, 
      isAdmin, 
      isVerified 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");

  const logout = async () => {
    try {
      await apiLogout();
    } catch (error) {
      console.error('Logout error:', error);
    }
    localStorage.clear();
    ctx.setUser(null);
  };

  return { 
    ...ctx, 
    logout 
  };
};
