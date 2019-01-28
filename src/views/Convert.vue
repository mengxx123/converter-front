<template>
    <my-page title="格式转换">
        <h2>
            <span class="title">文档</span>
            <!-- <span class="sub-title">Document</span> -->
        </h2>
        <ul>
            <li><a href="http://tool2.yunser.com/markdown/md2html" target="_blank">Markdown ⇆ HTML</a></li>
        </ul>

        <h2>
            <span class="title">HTML</span>
            <!-- <span class="sub-title">Document</span> -->
        </h2>
        <ul>
            <li><a href="https://text.yunser.com/rich" target="_blank">HTML 转 图片</a></li>
        </ul>

        <h2>
            <span class="title">图片</span>
            <!-- <span class="sub-title">Image</span> -->
        </h2>
        <ul>
            <li><a href="http://img.tool.yunser.com/format" target="_blank">图片格式转换</a>（png、jpg、gif、svg 和 webp）</li>
            <li><a href="http://favicon.yunser.com/" target="_blank">图片 ⇆ .ico</a></li>
        </ul>

        <h2>
            <span class="title">视频</span>
            <!-- <span class="sub-title">Video</span> -->
        </h2>
        <ul>
            <li><a href="https://video.yunser.com/formatConvert" target="_blank">视频格式转换</a>（mp4、flv、ogg）</li>
        </ul>

        <h2>
            <span class="title">音频</span>
            <!-- <span class="sub-title">Audio</span> -->
        </h2>
        <ul>
            <li><a href="https://audio.yunser.com/formatConvert" target="_blank">音频格式转换</a>(mp3、wav、amr、pcm)</li>
            <li><a href="https://video.yunser.com/formatConvert" target="_blank">视频转音频</a></li>
            <li><a href="https://audio.yunser.com/text2audio" target="_blank">文本转语音</a></li>
            <li>语音转文字（开发中）</li>
        </ul>

        <h2>
            <span class="title">电子书</span>
            <!-- <span class="sub-title">eBook</span> -->
        </h2>
        <ul>
            <li>开发中</li>
        </ul>

        <h2>
            <span class="title">压缩</span>
            <!-- <span class="sub-title">Archives</span> -->
        </h2>
        <ul>
            <li>开发中</li>
        </ul>

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
