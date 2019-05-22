<template>
    <my-page title="MineType">
        <div class="common-container container">
            <div class="search-bar">
                <input class="input" v-model="keyword" placeholder="输入关键词搜索" />
                <ui-icon-button icon="close" color="#999" v-if="keyword.length" @click="keyword = ''" />
            </div>
            <ui-article class="article">
                <p>共 <span v-if="keyword">{{ filtedMimes.length }} / </span> {{ mimes.length }} 条数据</p>
                <table>
                    <tr>
                        <th>Mime Type（Content-Type）</th>
                        <th>文件扩展名</th>
                    </tr>
                    <tr v-for="mime in filtedMimes">
                        <td>{{ mime.mime }}</td>
                        <td>
                            <span class="extension" v-for="extension in mime.extensions">
                                <ui-badge :content="extension" color="#999" />
                                <!--{{ extension }}-->
                            </span>
                        </td>
                    </tr>

                    <p v-if="!filtedMimes.length">搜索不到数据~</p>
                </table>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    import data from '../data/mime-extensions.json'
    console.log(data)

    export default {
        data () {
            return {
                keyword: '',
                mimes: data
            }
        },
        computed: {
            filtedMimes() {
                if (!this.keyword) {
                    return this.mimes
                }
                return this.mimes.filter(mime => {
                    if (mime.mime.includes(this.keyword)) {
                        return true
                    }
                    for (let extension of mime.extensions) {
                        if (extension.includes(this.keyword)) {
                            return true
                        }
                    }
                    return false
                })
            }
        },
        mounted() {
//            this.$http.get('/version').then(
//                response => {
//                    let data = response.data
//                    if (data.code === 200) {
//                        console.log(data)
//                        this.version = data.data
//                    }
//                },
//                response => {
//                    console.log(response)
//                })
        }
    }
</script>

<style lang="scss" scoped>
    $divider: rgba(0,0,0,.12);

    .search-bar {
        // position: absolute;
        // top: 0;
        // left: 2px;
        // right: 0;
        z-index: 10000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        background-color: #fff;
        border-bottom: 1px solid $divider;
        .input {
            flex-grow: 1;
            height: 100%;
            padding: 0 16px;
            line-height: 64px;
            border: none;
            outline: none;
        }
    }
    .article {
        // position: absolute;
        // top: 0;
        // left: 2px;
        // right: 0;
        // bottom: 0;
        padding: 16px;
        z-index: 10000;
        margin-top: 64px;
        overflow: auto;
    }
    .title {
        margin-right: 4px;
        font-size: 20px;
    }
    .sub-title {
        font-size: 16px;
    }
    ul {
        margin-bottom: 24px;
        list-style: disc;
        li {
            margin-left: 24px;
            list-style: disc;
        }
    }
    .extension {
        margin-right: 8px;
    }
</style>
