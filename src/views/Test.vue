<template>
    <my-page title="测试" :page="page">
        {{ format }}
        <ul class="card-list">
            <li class="item" @click="input('?')">?</li>
            <li class="item" @click="input('A')">A</li>
            <li class="item" @click="input('B')">B</li>
            <li class="item" @click="input('C')">C</li>
            <li class="item" @click="input('D')">D</li>
        </ul>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                format: '',
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
            input(text) {
                this.format += text
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-list {
        .item {
            float: left;
            width: 64px;
            height: 64px;
            margin-right: 8px;
            text-align: center;
            line-height: 80px;
            border: 1px solid #ccc;
            font-size: 20px;
            cursor: pointer;
        }
    }
</style>
