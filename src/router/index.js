import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const MimeType = resolve => require(['@/views/MimeType'], resolve)
const FileSignature = resolve => require(['@/views/FileSignature'], resolve)
const Utf8 = resolve => require(['@/views/Utf8'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/mimeType',
        component: MimeType
    },
    {
        path: '/fileSignature',
        component: FileSignature
    },
    {
        path: '/utf8',
        component: Utf8
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
