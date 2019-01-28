<template>
    <my-page title="格式编辑" :page="page" backable>
        <ui-text-field v-model="extension.name" label="格式名" />
        <br>
        <ui-text-field v-model="extension.title" label="标题" />
        <br>
        <ui-text-field v-model="extension.description" label="简介" />
        <br>
        <ui-text-field v-model="extension.mimeType" label="Mime Type" />
        <br>
        <ui-text-field v-model="extension.url" label="URL" />
        <br>
        <ui-select-field v-model="extension.type" label="类型">
            <ui-menu-item :value="item.value" :title="item.title" v-for="item, index in types" :key="index" />
        </ui-select-field>
        <br>
        <div @click="viewData">查看资料</div>
    </my-page>
</template>

<script>
    import {apiDomain2} from '../config'

    export default {
        data () {
            return {
                keyword: 'png',
                loadingState: '',
                extension: {
                    name: '',
                    title: '',
                    description: '',
                    type: '',
                    mimeType: '',
                    url: ''
                },
                types: [
                    {
                        title: '图片',
                        value: 'image'
                    },
                    {
                        title: '文本',
                        value: 'text'
                    },
                    {
                        title: '视频',
                        value: 'video'
                    },
                    {
                        title: '音频',
                        value: 'audio'
                    },
                    {
                        title: '压缩',
                        value: 'archive'
                    },
                    {
                        title: '应用',
                        value: 'app'
                    },
                    {
                        title: '字体',
                        value: 'font'
                    },
                    {
                        title: '电子书',
                        value: 'ebook'
                    },
                    {
                        title: '文档',
                        value: 'doc'
                    },
                    {
                        title: '配置',
                        value: 'config'
                    },
                    {
                        title: '数据',
                        value: 'data'
                    },
                    {
                        title: '代码',
                        value: 'code'
                    },
                    {
                        title: '开发',
                        value: 'dev'
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'check',
                            click: this.finish,
                            title: '保存'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.loadingState = 'loading'
                this.extensionId = this.$route.params.id
                if (this.extensionId) {
                    this.$http.get(apiDomain2 + '/extensions/' + this.extensionId).then(
                        response => {
                            let data = response.data
                            console.log(data)
                            this.extension = data
                            this.loadingState = 'loaded'
                        },
                        response => {
                            console.log(response)
                        })
                }
            },
            finish() {
                if (this.extensionId) {
                    this.$http.put(apiDomain2 + '/extensions/' + this.extensionId, this.extension).then(
                        response => {
                            let data = response.data
                            console.log(data)
                            this.$message({
                                type: 'success',
                                text: '保存成功'
                            })
                            // this.extension = {
                            //     name: '',
                            //     description: ''
                            // }
                        },
                        response => {
                            console.log(response)
                        })
                } else {
                    this.$http.post(apiDomain2 + '/extensions', this.extension).then(
                        response => {
                            let data = response.data
                            console.log(data)
                            this.$message({
                                type: 'success',
                                text: '添加成功'
                            })
                            this.extension = {
                                name: '',
                                description: ''
                            }
                            this.loadingState = 'loaded'
                        },
                        response => {
                            console.log(response)
                        })
                }
            },
            viewData() {
                window.open('https://www.filesuffix.com/en/extension/' + this.extension.name.toLowerCase())
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-box {
        display: flex;
        width: 560px;
        max-width: 100%;
        // border: 1px solid #eee;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        background-color: #fff;
        &:hover {
            box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
        }
        .input {
            flex-grow: 1;
            display: block;
            height: 48px;
            padding: 0 16px;
            line-height: 48px;
            border: none;
            outline: none;
        }
    }
</style>
