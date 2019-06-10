<template>
    <my-page title="格式" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '基本',
                        apps: [
                            {
                                name: '文件格式大全',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/extensions'
                            },
                            {
                                name: '格式转化',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/convert'
                            },
                            {
                                name: '文本格式转化',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/convert/text'
                            },
                            {
                                name: '格式转化（导航）',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/convert2'
                            },
                            {
                                name: 'MimeType',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/mimeType'
                            },
                            {
                                name: '文件头信息',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/fileSignature'
                            },
                            {
                                name: '文件头信息检测',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/fileSignatureDetect'
                            }
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                name: 'PDF 压缩',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/pdf/compress'
                            },
                            {
                                name: 'GIF 压缩',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/gif/compress'
                            },
                            {
                                name: '图片压缩',
                                desc: '',
                                icon: '/static/img/file.svg',
                                to: '/image/compress'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=converter',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=converter',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
</style>
