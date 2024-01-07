import { useAuthStore } from "#imports";

export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore();
    const token = useCookie('token');
    if (token.value) {
        await auth.refresh();
    }
    if (!auth.isLogin && token.value) {
        await auth.fetchUser();
    }
})
