<template>
  <div class="detail-pic-list">
    <tab :title="title" :icon="icon" :menu="menu"></tab>
    <div class="pic-inner clearfix">
    
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
.detail-pic-list{
  .pic-inner{
    .picture-box{
      width:260px;
      height: 360px;
      border:1px solid #efefef;
      float: left;
      img{
        height: 210px;
        width: 100%;
      }
      h3{
        font-size: 16px;
        color: #746553;
        font-weight: bold;
        margin:5px 10px;
        @include overLine(2);
      }
      p{
         margin:5px 10px;
         font-size: 14px;
         color: #afafaf;
         @include overLine(3);
      }
      .detail{
         font-size: 14px;
         color:#448aca;
         border:1px solid #448aca;
         float: right;
         margin:0px 10px;
         padding:3px 5px;
         cursor: pointer;
         .icon-detail{
           font-size: 14px;
           margin-left:3px;
         }
      }
    }
    .pic-list-inner{
      margin-top:15px;
      .list-li{
        border-bottom: 1px solid #efefef;
        height:27px;
        line-height: 27px;
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
