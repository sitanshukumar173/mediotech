import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import axiosInstance from '../../api/axios';

interface AdminData {
  AdminName: string;
  email: string;
}

interface AuthContextType {
  admin: AdminData | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{
    admin: AdminData | null;
    token: string | null;
    loading: boolean;
  }>({
    admin: null,
    token: null,
    loading: true,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    const storedAdmin = localStorage.getItem('adminData');

    if (storedToken && storedAdmin) {
      try {
        const adminData = JSON.parse(storedAdmin);
        setState({
          admin: adminData,
          token: storedToken,
          loading: false,
        });
      } catch {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminData');
        setState({ admin: null, token: null, loading: false });
      }
    } else {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/admin/login', { email, password });
      const { token: newToken } = response.data;

      const adminResponse = await axiosInstance.get('/admin/me', {
        headers: { Authorization: `Bearer ${newToken}` },
      });

      setState({
        token: newToken,
        admin: adminResponse.data,
        loading: false,
      });

      localStorage.setItem('adminToken', newToken);
      localStorage.setItem('adminData', JSON.stringify(adminResponse.data));
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setState({ token: null, admin: null, loading: false });
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
  };

  const value = {
    admin: state.admin,
    token: state.token,
    isAuthenticated: !!state.token,
    loading: state.loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
