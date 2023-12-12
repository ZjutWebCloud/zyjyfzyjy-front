<template>
  <div class="tab-list">
   <tab :title="title" :menu="menu"></tab>
    <div class="normal-inner clearfix">
      <div class="normal-list-inner">
        <a 
          v-for="(item,index) in notice" :key="index"
          :href="item.titleurl?item.titleurl:`/frontend/showNews.html?hashcode=${item.hashcode}`"
          target="_blank"
          :title="item.title"
          class="list-li"
        >
        <div class="list-li-inner" >
          <div class="list-time">
            <div class="list-time-day">{{item.publishTime|getDay}}</div>
            <div class="list-time-moth">{{item.publishTime|getMoth}}</div>
          </div>
          <div class="list-news-title">{{item.title}}</div>
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
  props: ['title', 'menu', 'notice'],
  data() {
    return {
      type:'1'
    };
  },
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
    getHref
  },
};
</script>

<style lang="scss" scope>
@import '@/assets/styles/variable.scss';
.tab-list{
  .normal-list-inner{
    margin-top:18px;
  }
  .list-li{
    display: block;
    background-color: #fff;
    height: 118.5px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    padding: 20px;
    box-sizing: border-box;
    .list-li-inner{
      display: flex;
      flex-direction: row;
    }
    .list-time{
      width:80px;
      height: 80px;
      background-color: #f2f2f2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .list-time-day{
        font-size:30px;
        color:#2b98e5;
        width:60px;
        border-bottom:1px solid #ccc;
        text-align: center;
      }
      .list-time-moth{
        margin-top:12px;
        width:80px;
        color:#2b98e5;
        text-align: center;
        font-size: 12px;
        opacity: 0.8;
      }
    }
    .list-news-title{
      margin-left:20px;
      width: 100%;
      font-size: 16px;
      color:#333;
      @include overLine(2);
    }
  }
  .list-li:last-child{
    border-bottom: 1px solid #ffffff;
  }
}
</style>
