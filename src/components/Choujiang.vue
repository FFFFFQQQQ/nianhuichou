<template>
  <div class="center">
      <div class="jieshao">奖品介绍</div>
      <div class="jiangxiang">奖项{{number}}</div>
      <div class="red">{{jiangpinname}}X{{jiangpinnumber}}</div>
      <div class="imgimg">

      </div>
  </div>
</template>

<script>
// import countDown from 'vue-canvas-countdown'

export default {
data() {
    return {
        number:'',
        jiangpinname:'测试',
        jiangpinnumber:2
    }
},
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.center{
    color:#fff;

    margin: 0 auto;
    text-align: center;
}
.jieshao{
    color:#fff;

    width: 100%;
    margin-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    font-size: 30px;
    border-bottom: 1px solid #aaaaaa;
}
.jiangxiang{
    width: 100%;
    margin-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    font-size: 50px;

}
.red{
    color: red;
    font-size: 30px;

}
.imgimg{
    margin: 140px auto;
    width: 900px;
    height: 350px;
    border: 3px solid #fff;
}
</style>