import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Convert = resolve => require(['@/views/Convert'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const MimeType = resolve => require(['@/views/MimeType'], resolve)
const FileSignature = resolve => require(['@/views/FileSignature'], resolve)
const FileSignatureDetect = resolve => require(['@/views/FileSignatureDetect'], resolve)
const Test = resolve => require(['@/views/Test'], resolve)
const Tiff = resolve => require(['@/views/Tiff'], resolve)
const TiffText = resolve => require(['@/views/TiffText'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)
const PdfCompress = resolve => require(['@/views/PdfCompress'], resolve)
const GifCompress = resolve => require(['@/views/GifCompress'], resolve)
// 格式
const Extension = resolve => require(['@/views/Extension'], resolve)
const ExtensionDetail = resolve => require(['@/views/ExtensionDetail'], resolve)
const ExtensionEdit = resolve => require(['@/views/ExtensionEdit'], resolve)
// 兼容原因，弃用
const CharsetConvert = resolve => require(['@/views/CharsetConvert'], resolve)
const Utf8 = resolve => require(['@/views/Utf8'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/convert2',
        component: Convert
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/convert',
        component: Tiff
    },
    {
        path: '/extensions',
        component: Extension
    },
    {
        path: '/extensions/add',
        component: ExtensionEdit
    },
    {
        path: '/extensions/:id',
        component: ExtensionDetail
    },
    {
        path: '/extensions/:id/edit',
        component: ExtensionEdit
    },
    {
        path: '/convert/text',
        component: TiffText
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
        path: '/fileSignatureDetect',
        component: FileSignatureDetect
    },
    {
        path: '/utf8',
        component: Utf8
    },
    {
        path: '/charset/convert',
        component: CharsetConvert
    },
    {
        path: '/test',
        component: Test
    },
    {
        path: '/pdf/compress',
        component: PdfCompress
    },
    {
        path: '/gif/compress',
        component: GifCompress
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
