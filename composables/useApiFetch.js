export function useApiFetch(path, options) {
    const appConfig = useAppConfig()
    let headers = {}
    const token = useCookie('token');
    if (token.value) {
        headers['authorization'] = token;
    }
    return useFetch(appConfig.api.baseUrl + path, {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            ...headers,
            // ...options.headers
        }
    });
}
