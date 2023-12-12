<template>
  <div class="pic-list">
    <tab :title="title" :icon="icon" :menu="menu"></tab>
    <div class="pic-inner clearfix">
      <div class="tab-box clearfix">
        <div class="tab-left box" @click="choseTab(0)">
          <img src="@/assets/images/1.png" alt />
          <p>全部</p>
        </div>
        <div class="tab-right box" @click="choseTab(1)">
          <img src="@/assets/images/2.png" alt />
          <p>本科生</p>
        </div>
        <div class="tab-left box" @click="choseTab(2)">
          <img src="@/assets/images/3.png" alt />
          <p>研究生</p>
        </div>
        <div class="tab-right box" @click="choseTab(3)">
          <img src="@/assets/images/4.png" alt />
          <p>学生</p>
        </div>
        <div class="tab-left box" @click="choseTab(4)">
          <img src="@/assets/images/5.png" alt />
          <p>科研</p>
        </div>
        <div class="tab-right box" @click="choseTab(5)">
          <img src="@/assets/images/6.png" alt />
          <p>党建</p>
        </div>
        <div class="tab-last-left box" @click="choseTab(6)">
          <img src="@/assets/images/7.png" alt />
          <p>实验室</p>
        </div>
        <div class="tab-last-right box" @click="choseTab(7)">
          <img src="@/assets/images/8.png" alt />
          <p>行政</p>
        </div>
      </div>
      <div class="pic-list-inner">
        <a 
          v-for="(item,index) in listData" :key="index"
          :href="item.titleurl?item.titleurl:`/frontend/showNews.html?hashcode=${item.hashcode}`"
          target="_blank"
        >
        <div class="list-li">
           <div class="list-news">{{item.title}}</div>
           <div class="list-time"><i class="iconfont  icon-time"></i>{{item.publishTime}}</div>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './tab';
import { getHref } from '@/utils';
const typeArray=['allNotice','undergraduateNotice','postgraduateNotice','studentNotice','labNotice','scientificNotice','partyNotice','administrationNotice'];
export default {
  props: ['title', 'icon', 'menu','allNotice','undergraduateNotice','postgraduateNotice','studentNotice','labNotice','scientificNotice','partyNotice','administrationNotice'],
  data() {
    return {
      listData:[]
    };
  },
  components: {
    Tab
  },
  watch: {
    allNotice: function (val) {
      this.listData=val
    },
  },
  methods: {
    getHref,
    choseTab(type){
      this.listData=this[typeArray[type]]
    }
  },
};
</script>

<style lang="scss" scope>
@import '@/assets/styles/variable.scss';
.pic-list{
  .pic-inner{
    .tab-box{
      margin-top:5px;
      width:260px;
      height: 355px;
      border:1px solid #efefef;
      float: left;
      box-sizing: border-box;
      padding:10px;
      .tab-left{
        box-sizing: border-box;
        width: 50%;
        float: left;
        height:83px;
        border-bottom:1px solid #efefef;
        border-right:1px solid #efefef;
      }
      .tab-right{
        box-sizing: border-box;
        width: 50%;
        float: right;
        height:83px;
        border-bottom:1px solid #efefef;
      }
      .tab-last-left{
        box-sizing: border-box;
        width: 50%;
        float: left;
        height:83px;
        border-right:1px solid #efefef;
      }
      .tab-last-right{
        box-sizing: border-box;
        width: 50%;
        float: right;
        height:83px;
      }
      .box{
        text-align: center;
        cursor: pointer;
        img{
          width: 45px;
          height:45px;
          margin:10px auto 5px ;
        }
        p{
          color:#999;
          font-size: 14px;
        }
      }
    }
    .pic-list-inner{
      margin-top:15px;
      margin-left:275px;
      height: 350px;
      .list-li{
        border-bottom: 1px solid #efefef;
        height:44px;
        line-height: 44px;
        .list-news{
          font-size:14px;
          width:80%;
          float: left;
          @include overLine(1);
        }
        .list-time{
          font-size:12px;
          width: 20%;
          float: right;
          color:#adb3a7;
          .icon-time{
            font-size:12px;
            margin-right:5px;
          }
        }
      }
      .list-li:hover{
        color:#448aca;
      }
    }
  }

}
</style>
