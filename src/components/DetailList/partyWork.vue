<template>
  <div class="party-list">
    <tab :title="title" :icon="icon" :menu="menu"></tab>
    <div class="party-inner">
      <div class="party" v-for="(item,index) in listData" :key="index">
        <a 
        :href="item.titleurl?item.titleurl:`/frontend/showNews.html?hashcode=${item.hashcode}`"
         target="_blank"
        >
          <div class="party-left">
           <img :src="item.picture"/>
          </div>
          <div class="party-right">
            <p class="party-news">{{item.title}}</p>
            <a 
                :href="item.titleurl?item.titleurl:`/frontend/showNews.html?hashcode=${item.hashcode}`"
                target="_blank"
                class="detail"
            >详细了解<i class="iconfont icon-detail"></i></a>
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
    getDay:function(value){
      let time = value.split('-');
      return time[2];
    },
    getMoth:function(value){
      let time = value.split('-');
      return time[1];
    },
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
.party-list {
  .party-inner{
    .party{
      height:85px;
      margin:15px 0;
      .party-left{
        width: 80px;
        height: 80px;
        float:left;
        img{
            width: 85px;
            height: 85px;
        }
      }
      .party-right{
        margin-left:95px;
        height: 85px;
        border: 1px solid #efefef;
        padding: 7px 10px;
        box-sizing: border-box;
        color:#333;
        overflow: hidden;
        .party-news{
            font-size:14px;
            @include overLine(2);
            height: 40px;
        }
        .detail{
            font-size: 14px;
            color:#448aca;
            border:1px solid #448aca;
            float: right;
            padding:3px 5px;
            cursor: pointer;
            .icon-detail{
                font-size: 14px;
                margin-left:3px;
            }
        }
      }
      .party-right:hover{
            color:#448aca;
      }
    }
  }

}
</style>
