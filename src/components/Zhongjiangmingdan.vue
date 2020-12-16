<template>
    <div>
        <let-it-snow
      v-bind="snowConf"
      :show="show"    
    ></let-it-snow>
        <div class="jieshao">奖项：
            <span class="red">{{jiangpinname}}X{{jiangpinnumber}}</span>
        </div> 
        <div>
            <div class="zhongjiang">
                <div class="zhongjiang_text">恭喜以下中奖者</div>  
                <div class="zhongjiang_mingdan">
                    <div class="ming" v-for="(item,index) in listmingdan" :key="index">
                        {{item}}
                    </div>    
                </div>  
            </div>   
        </div>
    </div>    

</template>

<script>
export default {
 data() {
    return {
        listmingdan:["23212343","1234","王12341234123421342134123412341234五","nihao","23","1234","王五","nihao",
        "223","121234134","王23五","n2ihao",
        "21233","12323414","王234五","ni2hao",
        "212343","12324","王五","n23ihao",
        "2123","1234","2王五","ni1123412341234134123423412341234234hao",
        "232","1234","王五","nihao",
        "223","1234","王五123","nihao",
        "23","1234",],
        head:'https://thirdwx.qlogo.cn/mmopen/vi_32/eQtsurOibMS9N3icyia6samefGX7TJH0WibportRppCSxWZ5rRVniay0KDV7LWjLAyJTsFzyMXaKq8mSK8SiayQRO5iag/132',
        jiangpinname:'测试',
        jiangpinnumber:2,
        snowConf: {
            windPower : 10,  
            speed : 10,
            count : 100,
            size : 20,
            opacity : 1,
            images: ['https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png',
                    'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/sock.png',
                    'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/tree.png'
                    ]
        },
        show: false      
    }
  },
   mounted () {
      this.show = true
      setTimeout( () => {
          this.show = false
      }, 2000)

      
  }  
}
  

</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.ming{
    width: 7%;
    text-align: center;
    margin: 10px;
    white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}
.zhongjiang_mingdan{
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.zhongjiang{
    width: 90%;
    height: 700px;
    margin: 50px auto;
    background-color: #D24C47;
    border-radius: 10px;
}
.zhongjiang_text{
    text-align: center;
    font-size: 50px;
    padding-top: 40px;
    color: #fff;
}
</style>