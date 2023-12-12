<template>
  <div class="people-list">
    <div class="title-images-content">
      <img class="title-images" src="@/assets/images/title.png" alt /> 
      <div class="title-lines"/>
    </div>
    <div class="people-list-scroll">
      <img class="swiper-pagination-pre" src="@/assets/images/prev.png"/>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in listData" :key="index">
          <div class="people-list-item">
            <a 
            :href="item.titleurl?item.titleurl:`/frontend/showNews.html?hashcode=${item.hashcode}`"
            target="_blank"
            >
              <div class="people-list-image-box">
                <img class="people-list-image" :src="item.picture" :alt="item.title" /> 
                <div :class="{'people-list-bg-blue':index%2,'people-list-bg-red':index%2===0}"></div>
              </div>
              <p class="people-list-name">{{item.title}}</p>
            </a>
          </div>
        </swiper-slide>
      </swiper>
      <img class="swiper-pagination-next" src="@/assets/images/next.png"/>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';

import Tab from './tab';
import { getHref } from '@/utils';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  props: ['title', 'listData', 'icon', 'menu'],
  data() {
    return {
      swiperOption: {
        slidesPerView:5,
        freeMode:true,
        navigation: {
          nextEl: '.swiper-pagination-pre',
          prevEl: '.swiper-pagination-next',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    };
  },
  components: {
    Tab,
    swiper,
    swiperSlide,
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
.people-list {
  position: relative;
  overflow: hidden;
  width: $container_width;
  height: 488px;
  .people-list-scroll{
    position: relative;
    width: $container_width;
    display: flex;
    flex-direction: row;
    height: 316px;
    .people-list-item{
      position: relative;
      width: 200px;
      height: 316px;
    }
  }
  .title-images-content{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
    .title-images{
      width: 127px;
      height: 28px;
      z-index: 10;
    }
    .title-lines{
      position: absolute;
      width: 130px;  
      height: 6px;
      background-color: #53aae9;
      left: 636px;
      top: 25px;
      z-index: 9;
    }
  }
  .people-list-image-box{
    position: relative;
    width: 200px;
    height: 276px;
    border-radius: 20px;
    overflow: hidden;
    .people-list-image{
      width: 200px;
      height: 276px;
    }
    .people-list-bg-blue{
      top:0;
      left:0;
      position: absolute;
      z-index: 9;
      width: 200px;
      height: 276px;
      background-image: linear-gradient(to bottom ,transparent 50%,#439cd4);
    }
    .people-list-bg-red{
      top:0;
      left:0;
      position: absolute;
      z-index: 9;
      width: 200px;
      height: 276px;
      background-image: linear-gradient(to bottom ,transparent 50%,#d44343);
    }
  }
  .people-list-name{
    position: relative;
    width: 200px;
    font-size: 20px;
    color:#333;
    margin-top:12px;
    text-align: center;
    font-weight: bold;
  }
  .swiper-pagination-pre,.swiper-pagination-next{
    width: 27px;
    height: 27px;
    margin: 120px 30px;
  }
}
</style>
