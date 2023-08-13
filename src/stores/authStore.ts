import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',

    state: (): { token: string | null, user: any , charges: any} => ({
        token: null,
        user: null,
        charges: null
    }),

    getters: {
        isAuthenticated(): boolean {
            return !!this.token;
        }
    },

    actions: {
        setToken(jwtToken: string) {
            this.token = jwtToken;
        },
        setUser(userInfo: any) {
            this.user = userInfo
        },
        setCharges(charges: any) {
            this.charges = charges;
        },
        clearToken() {
            this.token = null;
        },
        clearUser() {
            this.user = null;
        },
        clearCharges() {
            this.charges = null;
        }
    },

    persist: true,
});