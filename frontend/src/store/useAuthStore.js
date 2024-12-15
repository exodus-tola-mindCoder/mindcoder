import { create } from 'zustand'

import { axiosInstance } from '../lib/axios'
export const useAuthStore = create((set) => ({
    authUser: null,

    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    chechAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/auth')
            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in checkAuth controller", error.message);
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },
}));