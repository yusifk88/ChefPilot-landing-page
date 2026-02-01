// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: false},
    postcss:{
        plugins: {
            '@tailwindcss/postcss': {},
            autoprefixer: {},
        }
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/tailwindcss@3/dist/tailwind.min.css',
                },
            ],
            script:[
                {
                    src:"https://cdn.tailwindcss.com",
                    defer:false
                }
            ]
        },
    },

})