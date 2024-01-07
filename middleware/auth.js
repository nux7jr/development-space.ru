import { useAuthStore } from "#imports";
export default function ({ app, redirect, route }) {
    const auth = useAuthStore();
    if (!auth.isLogin) {
        return navigateTo('/login');
    }
}
