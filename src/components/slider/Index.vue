<template>
  <div class="app-slider">
    <div class="app-slider-inner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in sliders" :key="index">
          <a class="img-box" :href="item.titleurl">
            <img :src="item.picture" alt class="slider-img" />
          </a>
        </swiper-slide>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  props: {
    sliders: {
      type: Array,
      default: [],
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`;
          },
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    };
  },
  mounted() {},
};
</script>
<style lang="scss">
@use "sass:math" as math;
@import '@/assets/styles/variable.scss';

.app-slider {
  position: relative;
  height: $slider_height;
  margin-top: 80px;
  margin-bottom: 40px;
  // background: url(../../assets/images/paper.jpg) repeat;
  .app-slider-inner {
    position: absolute;
    width: $container_width;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .img-box {
      display: block;
      width: 100%;
      height: $slider_height;
      position: relative;
      .slider-img {
        width: 100%;
        height: 100%;
      }
      .title {
        position: absolute;
        font-size: 16px;
        color: #fff;
        bottom: 0;
        line-height: 50px;
        text-align: left;
        width: 100%;
        text-shadow: 1px 1px 1px $theme_color;
        background: rgba(27, 95, 81, 0.6);
        padding: 0 20px;
        box-sizing: border-box;
      }
      .more {
        position: absolute;
        top: math.div($slider_height, 2);
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        width: 100px;
        height: 36px;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        line-height: 36px;
        cursor: pointer;
        border-radius: 2px;
        &:hover {
          background: #db3b23;
          color: #fff;
        }
      }
    }
  }
  .swiper-pagination {
    position: absolute;
    bottom: 20px;
    text-align: right;
    padding-right: 40px;
    box-sizing: border-box;
  }
  .swiper-pagination-bullet-active {
    background: rgba(0, 0, 0, 40%) !important;
    color: #fff;
  }
  .swiper-pagination-bullet-custom {
    width: 20px;
    height: 20px;
    border-radius: 0;
    text-align: center;
    background: #fff;
    line-height: 20px;
    opacity: 1;
    font-size: 12px;
  }
}
</style>
