<template>
  <div class="student-list">
    <tab :title="title" :icon="icon" :menu="menu"></tab>
    <div class="student-inner clearfix">
      <div class="student-box" v-if="listData[0]">
          <img :src="listData[0].picture"/>
      </div>
      <div class="student-list-inner">
        <a 
          v-for="(item,index) in listData" :key="index"
          :href="item.titleurl?item.titleurl:`/frontend/showNews.html?hashcode=${item.hashcode}`"
          target="_blank"
        >
        <div class="list-li">
           <div class="list-news"><i class="iconfont icon-jiantou"></i>{{item.title}}</div>
           <div class="list-time">{{item.publishTime}}</div>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './tab';
import { getHref } from '@/utils';
export default {
  props: ['title', 'listData', 'icon', 'menu'],
  components: {
    Tab
  },
  filters: {
    newsContent: function(value) {
      let div = document.createElement('div');
      div.innerHTML = value;
      return div.innerText.trim();
    },
  },
  methods: {
    getHref,
  },
};
</script>

<style lang="scss" scope>
@import '@/assets/styles/variable.scss';
.student-list{
  .student-inner{
    .student-box{
      width:260px;
      height: 280px;
      border:1px solid #efefef;
      float: left;
      img{
        height: 280px;
        width: 100%;
      }
    }
    .student-list-inner{
      margin-top:15px;
      margin-left:275px;
      height: 280px;
      .list-li{
        border-bottom: 1px solid #efefef;
        height:46px;
        line-height: 46px;
        .list-news{
          font-size:14px;
          width:80%;
          float: left;
          @include overLine(1);
          .icon-jiantou{
            font-size:14px;
            margin-right:3px;
            color:#999;
          }
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
