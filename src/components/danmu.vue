<template>
 <div class="barrages-drop">
  <vue-baberrage
   :isShow="barrageIsShow"
   :barrageList="barrageList"
   :maxWordCount="maxWordCount"
   :throttleGap="throttleGap"
   :loop="barrageLoop"
   :boxHeight="boxHeight"
   :messageHeight="messageHeight"
  >
  </vue-baberrage>
  <!-- <div @click="add" style="background-color:#fff; margin-top:500px;">增加弹幕</div> -->

 </div>
</template>
<script>
import Vue from 'vue';
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage';
Vue.use(vueBaberrage);
export default {
 name: 'Barrages',
 data() {
 return {
  msg: '马优晨就是个辣鸡~',
  barrageIsShow: true,
  messageHeight: 3,
  boxHeight: 1550,
  barrageLoop: false,
  maxWordCount: 3,
  throttleGap: 1000,
  barrageList: [],
  currentId:0,
  posRender:3,
  avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
  list:[
    {
   id: 1,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg: '马优晨就是个辣鸡~',
  },
  {
   id: 2,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg: '马优晨就是个辣鸡~',
  },
  {
   id: 3,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg: '马优晨就是个辣鸡~',
  },
  {
   id: 4,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg:'马优晨就是个辣鸡~',
  },
  {
   id: 5,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg:'马优晨就是个辣鸡~',
  },
  {
   id: 6,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg:'马优晨就是个辣鸡~',
  },
  {
   id: 7,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg:'马优晨就是个辣鸡~',
  },
  {
   id: 8,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg: '马优晨就是个辣鸡~',
  },
  {
   id: 9,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg: '马优晨就是个辣鸡~',
  },
  {
   id: 10,
   avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
   msg: '马优晨就是个辣鸡~',
//    barrageStyle: 'yellow'
  }
  ]
 };
 },
 onshow(){
   
 },
 mounted() {
 this.addToList();
 },
 methods: {
 addToList() {
  this.list.forEach((v) => {
  this.barrageList.push({
   avatar: v.avatar,
   msg: v.msg,
   time: v.time,
   type: MESSAGE_TYPE.NORMAL,
   barrageStyle: v.barrageStyle
  });
  });
 },
 add(){
   console.log('add');
      this.barrageList.push({
        id: ++this.currentId,
        avatar: this.avatar,
        msg: this.msg,
        time: Math.floor(Math.random() * 10 + 5),
        type: MESSAGE_TYPE.NORMAL,

      });
 }
 }
};
</script>
<style lang="less">
.barrages-drop {
 .blue {
 border-radius: 100px;
 background: #e6ff75;
 color: #fff;
 }
 .green {
 border-radius: 100px;
 background: #75ffcd;
 color: #fff;
 }
 .red {
 border-radius: 100px;
 background: #e68fba;
 color: #fff;
 }
 .yellow {
 border-radius: 100px;
 background: #dfc795;
 color: #fff;
 }
 .baberrage-stage {
 position: absolute;
 width: 100%;
 height: 212px;
 overflow: hidden;
 top: 0;
 margin-top: 130px;
 }
}
</style>