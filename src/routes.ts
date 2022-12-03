import Home from "./pages/home/home.vue"
import About from "./pages/about/about.vue"
import Blog from "./pages/blog/blog.vue"
import CV from "./pages/cv/cv.vue"
import Demo from "./pages/blog/blogsComponents/demo.vue"
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: '/blog', component: Blog,
        children: [
            {
                path: 'demo',
                component: Demo,
            },
        ]
    },
    { path: '/cv', component: CV },
]

export default routes