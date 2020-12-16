<template>
  <div>
    <div class="index_top">
        <div>{{name}}</div>
        <div>
            <img class="index_top_img" :src="head">
        </div>
    </div> 
    <div class="index_huodongname">
        {{huodong}}
    </div> 
    
  </div>
</template>

<script>
export default {
data() {
    return {
        name:'公司名',
        huodong:'2020·年会抽奖',
        head:'https://thirdwx.qlogo.cn/mmopen/vi_32/eQtsurOibMS9N3icyia6samefGX7TJH0WibportRppCSxWZ5rRVniay0KDV7LWjLAyJTsFzyMXaKq8mSK8SiayQRO5iag/132',
    }
},
}
</script>

<style lang="less" scoped>
    .index_top{
        width: 90%;
        margin: 2rem auto 0rem;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        font-size: 100px;
        color: #FF0000;
    }
    .index_huodongname{
        width: 90%;
        margin: 0 auto;
        font-size: 80px;
        color: #FFF;

    }
    .index_top_img{
        width: 6rem;
        height: 6rem;
    }
   
</style>