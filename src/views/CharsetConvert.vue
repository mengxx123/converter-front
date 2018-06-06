<template>
    <my-page title="编码转换" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="要转换的内容"></textarea>
        <div class="option">
            <ui-select-field class="select" v-model="from" :maxHeight="300">
                <ui-menu-item :value="option.value"
                    :title="option.text"
                    v-for="option in options" :key="option.value"/>
            </ui-select-field>
            <!-- <select v-model="from">
                <option :value="option.value" v-for="option in options">{{ option.text }}</option>
            </select> -->
            <div class="convert">转</div>
            <ui-select-field class="select" v-model="to" :maxHeight="300">
                <ui-menu-item :value="option.value"
                    :title="option.text"
                    v-for="option in options2" :key="option.value"/>
            </ui-select-field>
        </div>
        <ui-select label="Normal" v-model="from" full-width>
            <ui-option v-for="option,index in options" :key="option" :label="option" :value="option"></ui-option>
        </ui-select>
        <div class="btns">
            <ui-raised-button class="btn" primary label="转换" @click="convert" />
            <!--<ui-raised-button class="btn" secondary label="UTF-8 还原 中文" @click="decode" />-->
        </div>
        <textarea class="form-control" v-model="result" rows="6" placeholder="转换结果"></textarea>
    </my-page>
</template>

<script>
    const iconv = require('iconv-lite')

    export default {
        data () {
            return {
                code: '请将您要转换的汉字内容粘贴在这里。',
                to: '',
                from: '',
                options: [
//                    {
//                        value: 'utf-8',
//                        text: 'utf-8'
//                    },
                    {
                        value: 'ucs2',
                        text: 'ucs2'
                    },
                    {
                        value: 'utf16-le',
                        text: 'utf16-le'
                    },
                    {
                        value: 'ascii',
                        text: 'ascii'
                    },
                    {
                        value: 'binary',
                        text: 'binary'
                    },
                    {
                        value: 'base64',
                        text: 'base64'
                    },
                    {
                        value: 'hex',
                        text: 'hex'
                    },
                    {
                        value: 'utf16',
                        text: 'utf16'
                    },
                    {
                        value: 'utf16-be',
                        text: 'utf16-be'
                    },
                    {
                        value: 'utf-7',
                        text: 'utf-7'
                    },
                    {
                        value: 'utf-7-imap',
                        text: 'utf-7-imap'
                    },
                    {
                        value: 'utf-7-imap',
                        text: 'utf-7-imap'
                    },
                    {
                        value: 'gbk',
                        text: 'GBK'
                    },
                    {
                        value: 'gb2312',
                        text: 'GB2312'
                    },
                    {
                        value: 'gb18030',
                        text: 'GB18030'
                    },
                    {
                        value: 'cp932',
                        text: 'CP932'
                    },
                    {
                        value: 'cp936',
                        text: 'CP936'
                    },
                    {
                        value: 'cp949',
                        text: 'CP949'
                    },
                    {
                        value: 'cp950',
                        text: 'CP950'
                    },
                    {
                        value: 'big5',
                        text: 'Big5'
                    },
                    {
                        value: 'latin1',
                        text: 'latin1'
                    },
                    {
                        value: 'us-ascii',
                        text: 'us-ascii'
                    }
//            Windows 125x family, ISO-8859 family, IBM/DOS codepages, Macintosh family, KOI8 family
//                            Shift_JIS,
//                            EUC-JP.
                ],
                options2: [
                    {
                        value: 'utf-8',
                        text: 'utf-8'
                    }
                ],
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
        mounted() {
            this.from = 'gbk'
            this.to = 'utf-8'
            console.log('debug')
            console.log(iconv.decode('ÄãºÃ', 'gbk') === '你好')
            console.log(iconv.decode('ÄãºÃ', 'gb2312') === '你好')
        },
        methods: {
            convert() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要转换的内容'
                    })
                    return
                }
                this.result = iconv.decode(this.code, 'gbk')
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
    .option {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        margin-top: 16px;
        .select {
            width: 40%;
            max-width: 180px;
        }
        .convert {
            line-height: 48px;
        }
    }
    .btns {
        margin-top: 16px;
        margin-bottom: 16px;
        .btn {
            margin-right: 8px;
        }
    }
</style>
