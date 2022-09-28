import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/components/Main";
import AboutPage from "@/components/AboutPage";
import BlogPage from "@/components/BlogPage";
import WorkPage from "@/components/WorkPage";
import MySkillsPage from "@/components/MySkillsPage";


Vue.use(VueRouter)

const routes = [
    { name:'Home', path: '/', component: Main,meta: { transition: 'slide-right' }, },
    { name:'About', path: '/about', component: AboutPage,meta: { transition: 'slide-right' }, },
    { name:'Blog', path: '/blog', component: BlogPage,meta: { transition: 'slide-right' }, },
    { name:'Work', path: '/work', component: WorkPage,meta: { transition: 'slide-right' }, },
    { name:'Skills', path: '/skills', component: MySkillsPage,meta: { transition: 'slide-right' }, },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;