<template>
    <my-page title="图片压缩">
        <div class="common-container container">
            <form>
                <div class="form-group">
                    <input id="file" type="file" name="logo" class="from-control" @change="fileChange($event)">
                </div>
                <div class="btns">
                    <ui-raised-button class="btn" label="压缩" primary @click="upload" />
                </div>
                <div class="ui-loading" v-if="loading">
                    <ui-circular-progress :size="24"/>
                </div>
                <div class="result-box" v-if="result">
                    {{ result }}
                    <br>
                    <!-- <a :href="result" download>下载</a> -->
                    <a href="#" @click.prevent="download">点击下载</a>
                </div>
            </form>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    import {apiDomain} from '../config'

    export default {
        data () {
            return {
                loading: false,
                toFormat: 'mp3',
                text: '',
                volume: 5,
                pitch: 5,
                speed: 5,
                person: 0,
                result: '',
                allFormats: ['mp3', 'wav', 'amr'],
                fromFormat: 'gif',
                fromFormats: ['mp3', 'wav', 'amr', 'pcm'],
                toFormat: 'gif',
                toFormats: [],
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
            fileChange(e) {
                let file = e.target.files[0]
                if (!file) {
                    return
                }

                let arr = file.name.split('.')
                let ext = arr[arr.length - 1]

                if (this.fromFormats.includes(ext)) {
                    this.fromFormat = ext
                }
                // if (ext !== 'mp3' && ext !== 'wav' && ext !== 'amr') {
                //     this.$message({
                //         type: 'danger',
                //         text: '请选择正确的文件格式（mp3、wav、amr）'
                //     })
                //     return
                // }

            },
            upload() {
                let file = document.getElementById('file').files[0];
                if (!file) {
                    this.$message({
                        type: 'danger',
                        text: '请选择文件'
                    })
                    return
                }

                let extArr = file.name.split('.')
                let ext = extArr[extArr.length - 1]
                // if (ext !== this.fromFormat) {
                //     this.$message({
                //         type: 'danger',
                //         text: `文件格式必须是 ${this.fromFormat}`
                //     })
                //     return
                // }

                this.loading = true
                this.result = null
                let param = new FormData(); //创建form对象
                param.append('logo',file,file.name);//通过append向form对象添加数据
                param.append('chunk','0');//添加form表单中其他数据
                console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去

                let arr = file.name.split('.')
                // let ext = arr[arr.length - 1]
                // console.log('格式' + ext, this.toFormat)
                // if (ext === this.toFormat) {
                //     this.$message({
                //         type: 'danger',
                //         text: '转换格式不能和原格式相同'
                //     })
                //     return
                // }
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };  //添加请求头
                this.$http.post(apiDomain + '/net/files',param,config)
                    .then(response=>{
                        console.log(response.data);
                        let result = response.data.data.path.replace('public', '').replace(/\\/g, '/').replace(/^\//, '')
                        console.log('结果')
                        console.log(result)
                        this.$http.get(`/image/compress?path=${result}&from=${ext}&to=${ext}`).then(
                            response => {
                                let data = response.data
                                console.log('结果2')
                                console.log(data)
                                this.result2 = data.path
                                this.result = data.path
                                this.loading = false
                            },
                            response => {
                                console.log(response)
                                this.loading = false
                            })
                    },
                    response => {
                        console.log(response)
                        this.loading = false
                    })        
            }
        },
        watch: {
            fromFormat() {
                this.updateToFormat()
            }
        }
    }
</script>

<style scoped>
.select {
    width: 80px;
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
