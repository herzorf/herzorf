import Home from "./pages/home/home.vue"
import About from "./pages/about/about.vue"
import Blog from "./pages/blog/blog.vue"
import CV from "./pages/cv/cv.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/cv', component: CV },
]

export default routes