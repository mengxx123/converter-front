<template>
    <my-page title="文件格式搜索">
        <div class="container">
            <div class="total">共收录 {{ total }} 种文件格式</div>
            <div class="search-box">
                <input class="input" v-model="keyword" placeholder="输入文件格式">
                <ui-icon-button icon="search" title="搜索" primary @click="doSearch" />
            </div>
            <div v-if="extensions.length">
                <div class="search-count">共搜到 {{ extensions.length }} 个结果</div>
                <ul class="extension-list">
                    <li class="item" v-for="item in extensions">
                        <router-link :to="`/extensions/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="empty" v-if="loadingState === 'loaded' && !extensions.length">搜索不到格式，已自动反馈，我们将尽快收录该格式</div>
        </div>
    </my-page>
</template>

<script>
    import {apiDomain2} from '../config'

    export default {
        data () {
            return {
                keyword: '',
                loadingState: '',
                extensions: [],
                total: 0
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get(apiDomain2 + '/extensions?page_size=1').then(
                    response => {
                        // let data = response.data
                        // console.log('分页', )
                        this.total = response.headers['x-total']
                        // this.extensions = data
                        // this.loadingState = 'loaded'
                    },
                    response => {
                        console.log(response)
                    })
            },
            doSearch() {
                if (!this.keyword) {
                    this.$message({
                        type: 'danger',
                        text: '添加成功'
                    })
                    return
                }
                this.loadingState = 'loading'
                this.$http.get(apiDomain2 + '/extensions?keyword=' + this.keyword).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.extensions = data
                        this.loadingState = 'loaded'
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 560px;
        max-width: 100%;
        margin: 0 auto 16px auto;
    }
    .search-box {
        display: flex;
        width: 100%;
        margin-bottom: 16px;
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
    .total {
        font-size: 24px;
        margin: 40px;
        text-align: center;
    }
    .extensions {
        // margin-top: 16px;
        margin-bottom: 16px;
    }
    .empty {
        margin: 80px;
        text-align: center;
    }
    .search-count {
        margin-bottom: 8px;
    }
    .extension-list {
        .item {
            margin-bottom: 16px;
        }
    } 
</style>
