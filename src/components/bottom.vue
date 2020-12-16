<template>
  <div class="index_bottom">
        <div class="index_bottom_1">
            <div>此服务由微信小程序[抽奖迎好礼]提供技术支持</div>
            <div class="buju">
                <div class="button" @click="dianji(0)">
                    {{A}}
                </div>
                <div class="button" @click="dianji(1)">
                    {{B}}
                </div>
                <div class="button" @click="dianji(2)">
                    {{C}}
                </div>
                <div class="button" @click="dianji(3)">
                    {{D}}
                </div>
            </div>
        </div>
        <audio ref="audio" src="https://win-web-ri01-sycdn.kuwo.cn/36dc61eafee33ccf33a77c473881e16f/5fd9667c/resource/n1/98/53/2972424467.mp3"  loop preload="none"></audio>
    </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
data() {
    return {
        A:'扫码参与',
        B:'开启控制',
        C:'音效开启',
        D:'全屏',
        clickMusicBtn: false,
    }
},
methods: {
    dianji(index){
        console.log(index);
        switch (index) {
            case 0:
                
                break;
            case 1:
                
                break;
            case 2:
                if(this.C == '音效关闭'){
                    this.C = '音效开启'
                    this.audioPause()

                }else{
                    this.C = '音效关闭'
                    this.audioAutoPlay()
                }
                break;
            case 3:
                if(this.D == '全屏'){
                    this.D = '退出全屏'
                    screenfull.toggle()
                }else{
                    this.D = '全屏'
                    screenfull.toggle()
                }
                break;
        }
    },
    //  audioPlayOrPause() {
    //     this.clickMusicBtn = !this.clickMusicBtn;
    //     if (this.playFlag) {
    //       this.audioPause();
    //     } else {
    //       this.audioAutoPlay();
    //     }
    //   },
      audioPause() {
        let audio = this.$refs.audio
        audio.pause();
        document.addEventListener("WeixinJSBridgeReady", function () {
          audio.pause();
        }, false);
      },
      audioAutoPlay() {
        let audio = this.$refs.audio
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          audio.play();
        }, false);
      },
    },
}
</script>

<style lang="less" scoped>
.index_bottom{
        color:#fff;
        position:fixed; 
        bottom:50px; 
        width: 100% ;
        .index_bottom_1{
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        .buju{
            display: flex;
            justify-content: space-between;
            align-content: center;
            .button{
            border-radius: 50%;
            margin-left: 20px;

            width: 60px;
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            background-color: rgba(156, 156, 156,0.6);
            color: #fff;
            text-align: center;
        }
        }
        }
    }
</style>