<template>
      <div style="position: relative;">
        <div class="jieshao">奖项：
          <span class="red">{{jiangpinname}}X{{jiangpinnumber}}</span>
        </div>     
        <div style="margin-top: 100px;">
            <el-carousel :interval="300" height="500px" arrow="never" style="width: 90%;margin:0 auto;"    indicator-position="none">
            <el-carousel-item v-for="item in 40" :key="item">
                <img  class="imgimga" :src="head">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
        head:'https://thirdwx.qlogo.cn/mmopen/vi_32/eQtsurOibMS9N3icyia6samefGX7TJH0WibportRppCSxWZ5rRVniay0KDV7LWjLAyJTsFzyMXaKq8mSK8SiayQRO5iag/132',
            jiangpinname:'测试',
        jiangpinnumber:2
    }
  },
}
</script>
<style>
.imgimga{
  margin: 0 auto;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
  .el-carousel-item  {
    margin: 0 auto;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    opacity: 1;
    margin: 0 auto;
    height: 200px;
    text-align: center;

  }
  
  .el-carousel__item:nth-child(2n+1) {
    opacity: 1;
    margin: 0 auto;
    height: 200px;
    text-align: center;

  }
</style>