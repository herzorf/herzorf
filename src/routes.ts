import Home from "./pages/home/home.vue"
import About from "./pages/about/about.vue"
import Blog from "./pages/blog/blog.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
]

export default routes