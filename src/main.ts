import { createApp } from 'vue'
import App from './App.vue'
import "./reset.css"
import routes from "./routes"
import { createRouter, createWebHashHistory } from "vue-router"
import "./assets/font/fontcss"
import { createPinia } from 'pinia'

const pinia = createPinia()
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(App)
app.use(pinia)

app.use(router)
app.mount('#app')
