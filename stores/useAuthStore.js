import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const appConfig = useAppConfig()
    const user = ref(null);

    async function login(userForm) {
        const { data: ans } = await useFetch(appConfig.api.baseUrl + '/auth/login', {
            method: "POST",
            body: userForm
        });

        // const fo = useCookie('token');
        setCookie('token', ans.value.token, {
            path: '/',
            maxAge: 60 * 60 * 24,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
        });
        // const { data: userData } = await useApiFetch('/user/profile');
        // user.value = await userData.value[0];
    }
    return { user, login }
})
