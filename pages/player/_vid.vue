<template>
    <div>
        <!-- 阿里云视频播放器样式 -->
        <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css">
        <!-- 定义播放器dom -->
        <div id="J_prismPlayer" class="prism-player" />
    </div>
</template>
<script>
import vod from '../../api/index/vod'
export default {
    layout: 'video',
    mounted() {
        this.getplayer()
    },
    methods: {
        getplayer() {
            vod.getPlayAuth(this.$route.params.vid).then(res => {
                this.playAuth = res.data.playAuth
                this.vid = this.$route.params.vid
                new Aliplayer({
                    id: 'J_prismPlayer',
                    vid: this.$route.params.vid,
                    playauth: res.data.playAuth,
                    encryptType: '1',
                    width: '100%',
                    height: '500px'
                }, function (player) {
                    console.log('播放器创建成功')
                })
            })
        }
    }

}
</script>
