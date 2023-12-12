<template>
  <div class="mormal-list">
    <tab :title="title" :icon="icon" :menu="menu"></tab>
    <div class="pic-list-inner">
        <a 
          v-for="(item,index) in listData" :key="index"
          :href="item.titleurl?item.titleurl:`/frontend/showNews.html?hashcode=${item.hashcode}`"
          target="_blank"
          class="list-li"
        >
        <div class="list-li-inner">
          <div class="list-time">
            <div class="list-time-day">{{item.publishTime|getDay}}</div>
            <div class="list-time-moth">{{item.publishTime|getMoth}}</div>
          </div>
          <div class="list-news-content">
            <div class="list-news-title">{{item.title}}</div>
            <div class="list-news-origin">来源：{{item.department}}</div>
          </div>
        </div>
        </a>
    </div>
  </div>
</template>

<script>
import Tab from './tab';
import { getHref } from '@/utils';
export default {
  props: ['title', 'listData', 'menu'],
  components: {
    Tab
  },
  filters: {
    getDay:function(value){
      let time = value.split('-');
      return time[2];
    },
    getMoth:function(value){
      let time = value.split('-');
      return `${time[0]}-${time[1]}`;
    }
  },
  methods: {
    getHref,
  },
};
</script>

<style lang="scss" scope>
@import '@/assets/styles/variable.scss';
.mormal-list{
  width: 100%;
  padding-top: 40px;
  padding-bottom: 18px;
  .pic-list-inner{
    margin-top:6px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
    .list-li{
      margin-top:18px;
      width: 454px;
      height: 102px;
      margin-right: 18px;
      display: flex;
      flex-direction: row;
      background-color: #fff;
      .list-li-inner{
        display: flex;
        flex-direction: row;
        padding:11px;
      }
      .list-time{
        width: 75px;
        height: 80px;
        background-color: #2b98e5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        .list-time-day{
          font-size: 30px;
          color:#fff;
          width: 75px;
          text-align: center;
        }
        .list-time-moth{
          text-align: center;
          font-size: 16px;
          color:#fff
        }
      }
      .list-news-content{
        margin-left:20px;
        width: 100%;
       .list-news-title{
          font-size: 16px;
          color:#333;
          @include overLine(2);
       }
       .list-news-origin{
          margin-top: 12px;;
          font-size: 12px;
          color: #999;
       }
      }
    }
    .list-li:nth-child(3n){
      margin-right: 0;
    }
}
</style>