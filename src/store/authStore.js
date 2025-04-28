import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user, isAuthenticated: true }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  logout: () => set({ user: null, isAuthenticated: false, error: null }),

  initializeAuth: async () => {
    try {
      set({ isLoading: true, error: null });

      // Make API call to get user details
      const response = await axios.get('/api/auth/basic-user-info', {
        withCredentials: true
      });


      if (response.status === 401) {
        set({ isAuthenticated: false, isLoading: false, user: null});
        return;
      }

      set({
        user: response.data,
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Authentication failed',
        isLoading: false,
        isAuthenticated: false
      });
    }
  }
}));

export default useAuthStore; 