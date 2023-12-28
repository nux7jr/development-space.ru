<template>
    <section>
        <div class="p-4 h-screen">
            <div
                class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8 h-full">
                <div class="w-full max-w-xs mx-auto ">
                    <form class="" @submit.prevent="handeleLogin($event)">

                        <div class="mb-4">
                            <label class="block text-sm text-zinc-500 dark:text-zinc-400 mb-2" for="email">
                                Email
                            </label>
                            <input
                                class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="text" placeholder="Email" required name="email">
                        </div>
                        <div class="mb-6">
                            <label class="block text-sm text-zinc-500 dark:text-zinc-400 mb-2" for="password">
                                Password
                            </label>
                            <input
                                class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="******************" required name="password">

                        </div>
                        <div class="flex items-center justify-between">

                            <button type="submit"
                                class="cursor-pointer text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between">
                                Вход </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    </section>
</template>
<script setup>
definePageMeta({
    layout: 'simple'
})
useHead({ title: 'Авторизация' });

const auth = useAuthStore();

async function handeleLogin(evt) {
    evt.preventDefault();
    const userData = new FormData(evt.target);
    const jsonData = JSON.stringify(Object.fromEntries(userData))
    await auth.login(jsonData);
    navigateTo('/blog');
}
</script>
