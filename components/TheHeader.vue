<template>
    <div class="fixed top-4 inset-x-0 z-50">
        <div class="max-w-2xl mx-auto px-8">
            <div class="w-full mx-auto">
                <div
                    class="dark:ring-white/10 dark:bg-secondary relative flex flex-col w-full p-3 mx-auto bg-gray-50 ring-1 uppercase ring-zinc-200 backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row">
                    <div class="flex flex-row items-center justify-between md:justify-start">
                        <NuxtLink
                            class="text-black hover:text-zinc-400 text-zinc-500 dark:text-zinc-400 gap-4 items-center tracking-tighter inline-flex font-medium ml-1 text-xs"
                            to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 47 47">
                                <circle cx="23.5" cy="23.5" r="23" stroke="white" />
                                <path
                                    d="M24.64 29.14V30H8.78V29.14H10.72V16.02H15.66C18.1533 16.02 20.0667 16.6333 21.4 17.86C22.7333 19.0733 23.4 20.7867 23.4 23C23.4 25.9867 22.24 28.0333 19.92 29.14H24.64ZM15.82 27.24C17.2467 27.24 18.34 26.88 19.1 26.16C19.8733 25.44 20.26 24.3933 20.26 23.02C20.26 21.6467 19.8733 20.5933 19.1 19.86C18.34 19.1133 17.1667 18.74 15.58 18.74H13.84V27.24H15.82ZM36.3069 29.14V30H23.5469V29.14H26.2669C25.5335 28.7667 24.8669 28.2867 24.2669 27.7L26.1269 25.42C27.6335 26.74 29.0269 27.4 30.3069 27.4C30.8802 27.4 31.3269 27.28 31.6469 27.04C31.9802 26.7867 32.1469 26.4533 32.1469 26.04C32.1469 25.6133 31.9735 25.28 31.6269 25.04C31.2802 24.7867 30.5935 24.5333 29.5669 24.28C27.9402 23.8933 26.7469 23.3933 25.9869 22.78C25.2402 22.1533 24.8669 21.18 24.8669 19.86C24.8669 18.5267 25.3402 17.5 26.2869 16.78C27.2469 16.06 28.4402 15.7 29.8669 15.7C30.8002 15.7 31.7335 15.86 32.6669 16.18C33.6002 16.5 34.4135 16.9533 35.1069 17.54L33.5269 19.82C32.3135 18.9 31.0602 18.44 29.7669 18.44C29.2469 18.44 28.8335 18.5667 28.5269 18.82C28.2335 19.06 28.0869 19.3867 28.0869 19.8C28.0869 20.2 28.2669 20.52 28.6269 20.76C29.0002 21 29.8469 21.2867 31.1669 21.62C32.5002 21.94 33.5335 22.4267 34.2669 23.08C35.0002 23.7333 35.3669 24.64 35.3669 25.8C35.3669 27.24 34.8269 28.3533 33.7469 29.14H36.3069Z"
                                    fill="white" />
                            </svg>

                        </NuxtLink>
                        <button @click="open = !open"
                            class="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-cyan-300 focus:outline-none focus:text-black md:hidden">
                            <svg class="w-6 h-6 stroke-black" stroke="black" fill="none" viewBox="0 0 24 24">
                                <path :class="{ 'hidden': open, 'inline-flex': !open }" class="inline-flex"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                                <path :class="{ 'hidden': !open, 'inline-flex': open }" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <nav :class="{ 'flex': open, 'hidden': !open }"
                        class="flex-col flex-grow py-12 md:py-0 md:flex md:items-end justify-center md:flex-row">
                        <ul
                            class="space-y-2 list-none text-xs text-primary dark:text-white md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3">
                            <li>
                                <NuxtLink to="/" class="hover:opacity-75 shrink-0 transition ease-in-out duration-300">
                                    Главная
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog" class="hover:opacity-75 shrink-0 transition ease-in-out duration-300">
                                    Блог
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/work" class="hover:opacity-75 shrink-0 transition ease-in-out duration-300">
                                    Работа
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/faq" class="hover:opacity-75 shrink-0 transition ease-in-out duration-300">
                                    Faq
                                </NuxtLink>
                            </li>
                            <li v-if="auth.user" class="shrink-0">
                                <NuxtLink to="/profile"
                                    class="py-2 w-auto px-4 border-2 h-8 rounded-full border-text-primary duration-200 focus:ring-offset-2 inline-flex items-center justify-center ring-2 focus:ring-black ring-transparent">
                                    {{ auth.user.name }}
                                </NuxtLink>
                            </li>
                            <li v-else class="shrink-0">
                                <NuxtLink to="/login"
                                    class="py-2 w-auto px-4 border-2 h-8 rounded-full border-text-primary duration-200 focus:ring-offset-2 inline-flex items-center justify-center ring-2 focus:ring-black ring-transparent">
                                    Вход
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const open = ref(false);
const auth = useAuthStore();
</script>
<style scoped>
.router-link-active {
    text-decoration: underline;
    text-underline-offset: 4px;
}
</style>
