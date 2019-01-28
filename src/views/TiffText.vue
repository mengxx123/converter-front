<template>
    <my-page title="文本格式转换">
        <form>
            <textarea class="form-control" v-model="text" rows="6" placeholder="文本"></textarea>

            <ui-select-field class="select" v-model="fromFormat" :maxHeight="300" label="从">
                <ui-menu-item :title="item.text" :value="item.value" 
                    v-for="item, index in fromFormats" :key="index"/>
            </ui-select-field>
            <br>
            <ui-select-field class="select" v-model="toFormat" :maxHeight="300" label="转换为">
                <ui-menu-item :title="item.text" :value="item.value" v-for="item, index in toFormats" :key="index"/>
            </ui-select-field>
            <div class="btns">
                <ui-raised-button class="btn" label="转换" primary @click="upload" />
            </div>
            <div class="ui-loading" v-if="loading">
                <ui-circular-progress :size="24"/>
            </div>
            <div class="result-box" v-if="result">
                <textarea class="form-control" v-model="result" rows="6" placeholder="结果"></textarea>
                <!-- <pre v-html="result"></pre> -->
                <!-- <a href="#" @click.prevent="download">点击下载</a> -->
            </div>
        </form>
    </my-page>
</template>

<script>
    /* eslint-disable */
    import {apiDomain} from '../config'

    export default {
        data () {
            return {
                loading: false,
                text: `<h2>二级标题</h2>
<p>第一行</p>
<p>第二行</p>
<ul>
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
</ul>`,
                volume: 5,
                pitch: 5,
                speed: 5,
                person: 0,
                result: '',
                allFormats: ['mp3', 'wav', 'amr'],
                fromFormat: '',
                fromFormats: [
                    {
                        text: 'CommonMark',
                        value: 'commonmark'
                    },
                    {
                        text: 'Creole',
                        value: 'creole'
                    },
                    {
                        text: 'DocBook',
                        value: 'docbook'
                    },
                    {
                        text: 'Haddock markup',
                        value: 'haddock'
                    },
                    {
                        text: 'HTML',
                        value: 'html'
                    },
                    {
                        text: 'LaTeX',
                        value: 'latex'
                    },
                    {
                        text: 'Man',
                        value: 'man'
                    },
                    {
                        text: 'Markdown (pandoc)',
                        value: 'markdown'
                    },
                    {
                        text: 'Markdown (GitHub-flavored)',
                        value: 'gfm'
                    },
                    {
                        text: 'Markdown (PHP Markdown Extra)',
                        value: 'markdown_phpextra'
                    },
                    {
                        text: 'Markdown (strict)',
                        value: 'markdown_strict'
                    },
                    {
                        text: 'MediaWiki',
                        value: 'mediawiki'
                    },
                    {
                        text: 'MultiMarkdown',
                        value: 'markdown_mmd'
                    },
                    {
                        text: 'Muse',
                        value: 'muse'
                    },
                    {
                        text: 'Native (Pandoc AST)',
                        value: 'native'
                    },
                    {
                        text: 'OPML',
                        value: 'opml'
                    },
                    {
                        text: 'Org Mode',
                        value: 'org'
                    },
                    {
                        text: 'reStructuredText',
                        value: 'rst'
                    },
                    {
                        text: 'Txt2Tags',
                        value: 't2t'
                    },
                    {
                        text: 'Textile',
                        value: 'textile'
                    },
                    {
                        text: 'TikiWiki',
                        value: 'tikiwiki'
                    },
                    {
                        text: 'TWiki',
                        value: 'twiki'
                    },
                    {
                        text: 'Vimwiki',
                        value: 'vimwiki'
                    },
                ],
                toFormat: '',
                toFormats: [
                    {
                        text: 'S5',
                        value: 'S5'
                    },
                    {
                        text: 'AsciiDoc',
                        value: 'asciidoc'
                    },
                    {
                        text: 'LaTeX Beamer',
                        value: 'beamer'
                    },
                    {
                        text: 'CommonMark',
                        value: 'commonmark'
                    },
                    {
                        text: 'ConTeXt',
                        value: 'context'
                    },
                    {
                        text: 'DocBook v5',
                        value: 'docbook5'
                    },
                    {
                        text: 'DokuWiki',
                        value: 'dokuwiki'
                    },
                    {
                        text: 'DZSlides',
                        value: 'dzslides'
                    },
                    {
                        text: 'dzslides',
                        value: 'dzslides'
                    },
                    {
                        text: 'Haddock markup',
                        value: 'haddock'
                    },
                    {
                        text: 'HTML 4',
                        value: 'html4'
                    },
                    {
                        text: 'HTML 5',
                        value: 'html5'
                    },
                    {
                        text: 'ICML',
                        value: 'icml'
                    },
                    {
                        text: 'JSON',
                        value: 'json'
                    },
                    {
                        text: 'LaTeX',
                        value: 'latex'
                    },
                    {
                        text: 'Man',
                        value: 'man'
                    },
                    {
                        text: 'Ms',
                        value: 'ms'
                    },
                    {
                        text: 'Markdown (pandoc)',
                        value: 'markdown'
                    },
                    {
                        text: 'Markdown (GitHub-flavored)',
                        value: 'gfm'
                    },
                    {
                        text: 'Markdown (PHP Markdown Extra)',
                        value: 'markdown_phpextra'
                    },
                    {
                        text: 'Markdown (strict)',
                        value: 'markdown_strict'
                    },
                    {
                        text: 'MediaWiki',
                        value: 'mediawiki'
                    },
                    {
                        text: 'MultiMarkdown',
                        value: 'markdown_mmd'
                    },
                    {
                        text: 'DocBook v4',
                        value: 'docbook4'
                    },
                    {
                        text: 'Muse',
                        value: 'muse'
                    },
                    {
                        text: 'Native (Pandoc AST)',
                        value: 'native'
                    },
                    {
                        text: 'OpenDocument',
                        value: 'opendocument'
                    },
                    {
                        text: 'OPML',
                        value: 'opml'
                    },
                    {
                        text: 'Org Mode',
                        value: 'org'
                    },
                    {
                        text: 'Plain text',
                        value: 'plain'
                    },
                    {
                        text: 'reveal.js',
                        value: 'revealjs'
                    },
                    {
                        text: 'reStructuredText',
                        value: 'rst'
                    },
                    {
                        text: 'RTF',
                        value: 'rtf'
                    },
                    {
                        text: 'Slideous',
                        value: 'slideous'
                    },
                    {
                        text: 'Slidy',
                        value: 'slidy'
                    },
                    {
                        text: 'Texinfo',
                        value: 'texinfo'
                    },
                    {
                        text: 'Textile',
                        value: 'textile'
                    },
                    {
                        text: 'ZimWiki',
                        value: 'zimwiki'
                    },
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
            // this.toFormat = 'mp3'
        },
        methods: {
            init() {
                this.fromFormat = 'html'
                this.toFormat = 'markdown'
                // this.$http.get(`/convert/support`).then(
                //     response => {
                //         let data = response.data
                //         this.list = data
                //         this.fromFormats = []
                //         for (let item of this.list) {
                //             if (!this.fromFormats.includes(item.from)) {
                //                 this.fromFormats.push(item.from)
                //             }
                //         }
                //         this.fromFormats = this.fromFormats.sort()
                //         this.fromFormat = this.fromFormats[0]
                //         this.updateToFormat()
                //     },
                //     response => {
                //         console.log(response)
                //         this.loading = false
                //     })
            },
            updateToFormat() {
                this.toFormats = []
                for (let item of this.list) {
                    if (item.from === this.fromFormat && !this.toFormats.includes(item.to)) {
                        this.toFormats.push(item.to)
                    }
                }
                this.toFormats = this.toFormats.sort()
                this.toFormat = this.toFormats[0]
            },
            download() {
                window.open(apiDomain + '/download?fileType=2&fileName=' + this.result2.replace(/^\/img\//, ''))
            },
            upload() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入文件'
                    })
                    return
                }
                this.$http.post(`/convert/text`, {
                    text: this.text,
                    from: this.fromFormat,
                    to: this.toFormat
                }).then(
                    response => {
                        let data = response.data
                        console.log('结果2')
                        console.log(data)
                        this.result = data
                    },
                    response => {
                        console.log(response)
                        this.loading = false
                    })
            }
        },
        watch: {
            fromFormat() {
                // this.updateToFormat()
            }
        }
    }
</script>

<style scoped>
textarea.form-control {
    height: auto;
}
.form-control {
    display: block;
    width: 100%;
    max-width: 400px;
    height: 33px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    outline: none;
}

.select {
    width: 320px;
    margin-right: 16px;
}
.form-group {
    margin-bottom: 16px;
}
.btns {
    margin-top: 16px;
}
.label {
    display: block;
    margin-bottom: 8px;
    color: rgba(0,0,0,.54);
    font-size: 14px;
}
.slider {
    margin-bottom: 0;
    width: 256px;
}
.result-box {
    margin-top: 16px;
}
.btn {
    margin-bottom: 16px;
}
</style>
