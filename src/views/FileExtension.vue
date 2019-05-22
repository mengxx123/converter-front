<template>
    <my-page title="格式转换">
        <div class="common-container container">
            <h2>
                <span class="title">文档</span>
                <span class="sub-title">Document</span>
            </h2>
            <ul>
                <li><a href="http://tool2.yunser.com/markdown/md2html" target="_blank">Markdown ⇆ HTML</a></li>
            </ul>

            <h2>
                <span class="title">图片</span>
                <span class="sub-title">Image</span>
            </h2>
            <ul>
                <li><a href="http://img.tool.yunser.com/format" target="_blank">图片格式转换</a></li>
                <li><a href="http://favicon.yunser.com/" target="_blank">图片 ⇆ .ico</a></li>
            </ul>

            <h2>
                <span class="title">视频</span>
                <span class="sub-title">Video</span>
            </h2>
            <div>开发中</div>

            <!-- <h2>
                <span class="title">音频</span>
                <span class="sub-title">Audio</span>
            </h2>
            <div>开发中</div>

            <h2>
                <span class="title">电子书</span>
                <span class="sub-title">eBook</span>
            </h2>
            <div>开发中</div>

            <h2>
                <span class="title">压缩</span>
                <span class="sub-title">Archives</span>
            </h2>
            <div>开发中</div> -->

        </div>

    </my-page>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>
