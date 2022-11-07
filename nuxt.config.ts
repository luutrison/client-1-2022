// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    sourcemap: false,
    router: {
        routes: [
            {
                name: "hoatdong",
                path: "/hoatdong",
                component: "pages/activities/hoatdong.vue"
            }
        ]
    }
});
