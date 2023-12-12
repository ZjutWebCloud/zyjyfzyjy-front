<template>
  <div class="pic-list">
    <tab :title="title" :menu="menu"></tab>
    <div class="pic-inner clearfix">
      <div class="pic-list-inner">
        <a
          v-for="(item, index) in listData"
          :key="index"
          :href="item.titleurl ? item.titleurl : `/frontend/showNews.html?hashcode=${item.hashcode}`"
          target="_blank"
        >
          <div class="list-li">
            <img class="list-li-image" :src="item.picture" :alt="item.title" />
            <div class="list-li-content">
              <div class="list-li-title">{{item.title}}</div>
              <p>{{item.content|newsContent}}</p>
              <div class="list-li-time"><i class="iconfont icon-time"></i>{{item.publishTime}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './tab';
import { getHref } from '@/utils';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  props: ['title', 'listData', 'menu'],
  components: {
    Tab,
    swiper,
    swiperSlide,
  },
  filters: {
    newsContent: function(value) {
      let div = document.createElement('div');
      div.innerHTML = value;
      return div.innerText.trim();
    },
  },
  data() {
    return {
    };
  },
  methods: {
    getHref,
  },
};
</script>

<style lang="scss" scope>
@import '@/assets/styles/variable.scss';
.pic-list {
  .list-li{
    width: 100%;
    height: 146px;
    display: flex;
    background-color: #fff;
    flex-direction: row;
    margin-top: 18px;
    .list-li-image{
      width: 246px;
      height: 145px;
    }
    .list-li-content{
      padding: 20px;
      .list-li-title {
        width: 100%;
        font-size:16px;
        color:#333;
        @include overLine(1);
      }
      p{
        margin-top: 12px;
        font-size:12px;
        color:#999;
        word-break:break-all; 
        @include overLine(2);
      }
      .list-li-time{
          margin-top: 12px;
          font-size:12px;
          color:#999;
          .icon-time{
            font-size:12px;
            margin-right:5px;
          }
      }
    }
  }
}
</style>
