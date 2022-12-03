import Home from "./pages/home/home.vue"
import About from "./pages/about/about.vue"
import Blog from "./pages/blog/blog.vue"
import CV from "./pages/cv/cv.vue"
import BlogView from "./pages/blogsView/blogView.vue"
import BlogContent from "./pages/blogsView/components/blogContent/blogContent.vue"
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: '/blog/blogview', component: BlogView, children: [
            { path: ':blogview', component: BlogContent },
        ]
    },
    { path: '/blog', component: Blog },
    { path: '/cv', component: CV },
]

export default routes