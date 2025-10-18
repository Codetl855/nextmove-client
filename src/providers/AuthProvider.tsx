import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { logout as apiLogout } from "@/services/authService";

interface User {
  last_name: string;
  first_name: string;
  email: string;
  mobile: string;
  address?: string;
  profile_image?: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
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
    } catch {}
    localStorage.clear();
    ctx.setUser(null);
  };

  return { ...ctx, logout };
};
