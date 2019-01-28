<template>
    <my-page :title="extension.name || title" backable>
        <div v-if="extension">
            <!-- <div>格式：{{ extension.name }}</div> -->
            <div>类型：{{ extension.type | type }}</div>
            <div>Mime Type：{{ extension.mimeType }}</div>
            <div>标题：{{ extension.title }}</div>
            <div>介绍：{{ extension.description }}</div>
            <div>url：{{ extension.url }}</div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    import {apiDomain2} from '../config'

    export default {
        data () {
            return {
                title: '格式详情',
                keyword: 'png',
                loadingState: '',
                extension: null
            }
        },
        mounted() {
            this.init()

            window.addEventListener('keydown', this.keyDown = e => {
                console.log(e.keyCode)
                if (e.keyCode === 69) {
                    this.$router.push(`/extensions/${this.extensionId}/edit`)
                }
            })
        },
        destroyed() {
            window.removeEventListener('keydown', this.keyDown)
        },
        methods: {
            init() {
                this.loadingState = 'loading'
                this.extensionId = this.$route.params.id
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
            },
            doSearch() {

            }
        },
        filters: {
            type(value) {
                return {
                    image: '图片',
                    text: '文本',
                    video: '视频图片',
                    audio: '音频',
                    archive: '压缩',
                    audio: '音频',
                    app: '应用',
                    font: '字体',
                    ebook: '电子书',
                    doc: '文档',
                    config: '配置',
                    data: '数据',
                    code: '代码',
                    dev: '开发',
                }[value] || '其他'
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
