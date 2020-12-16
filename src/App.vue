<template>
<div>
    <index></index>
    <!-- <Choujiang></Choujiang> -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <Zhongjiangmingdan></Zhongjiangmingdan> -->
    <danmu ref="danmu"></danmu>
    <!-- 底部控制 -->
    <bottom></bottom>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import index from './components/index'
import bottom from './components/bottom'
import Choujiang from './components/Choujiang'
import Zhongjiangmingdan from './components/Zhongjiangmingdan'
import danmu from './components/danmu'

  export default {
    components:{
      HelloWorld,
      index,
      bottom,
      Choujiang,
      Zhongjiangmingdan,
      danmu
    },
    data () {
      return {
    }
    },
    onShow(){
      
    },
    onLoad() {
		},
    methods: {
      add(){
        this.$ref.danmu.add()
      }
	  },
    mounted () {
      
      //  this.$api.getXyb({
      //    openId:"oTz3u4r5fSNYDfms0InIXy07D-H8"
      //   }).then(res => {
      //       console.log(res);
      //   })
    }
  }
</script>
<style>
body{
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('../src/img/party-bg.21ac4a9f.png') ;
   background-size:100% 100%;
   background-attachment:fixed;
  }
</style>