<template>
    <my-page title="UTF-8 编码解码" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="要转换的内容"></textarea>
        <div class="btns">
            <ui-raised-button class="btn" primary label="中文 转换 UTF-8" @click="encode" />
            <ui-raised-button class="btn" secondary label="UTF-8 还原 中文" @click="decode" />
        </div>
        <textarea class="form-control" v-model="result" rows="6" placeholder="转换结果"></textarea>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                code: '请将您要转换的汉字内容粘贴在这里。',
                result: '',
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
        methods: {
            encode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要转换的内容'
                    })
                    return
                }
                this.result = this.code.replace(/[^\u0000-\u00FF]/g, function ($0) {
                    return escape($0).replace(/(%u)(\w{4})/gi, '&#x$2;')
                })
            },
            decode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要转换的内容'
                    })
                    return
                }
                this.result = unescape(this.code.replace(/&#x/g, '%u').replace(/;/g, ''))
            }
        }
    }
</script>

<style lang="scss" scoped>
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
    .btns {
        margin-top: 16px;
        margin-bottom: 16px;
        .btn {
            margin-right: 8px;
        }
    }
</style>
