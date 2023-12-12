<template>
  <div class="banner">
    <!-- <img src="@/assets/images/banner.png" alt /> -->
    <!-- <div class="title-box" v-if="title">
      <span class="title">{{ title }}</span>
      <p class="guides" v-if="Array.isArray(guides) && guides.length">
        <template v-for="(menu, index) in guides">
          <span :key="menu.id">
            <a :href="getHref(menu)">{{ menu.classname }}</a>
          </span>
          <span :key="menu.id + 'after'" class="line" v-if="index !== guides.length - 1">|</span>
        </template>
      </p>
    </div>
    <slot></slot> -->
  </div>
</template>
<script>
import { getHref } from '@/utils';
export default {
  props: {
    title: String,
    guides: Array,
  },
  methods: {
    getHref,
  },
};
</script>
<style lang="scss">
@import '@/assets/styles/variable.scss';
.banner {
  position: relative;
  img {
    width: $container_width + 200px;
    margin-left: -100px;
    height: 300px;
  }
  .title-box {
    position: absolute;
    width: 600px;
    height: 100px;
    background: rgba($color: #ffffff, $alpha: 0.7);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    overflow: hidden;
    .title {
      color: $theme_color;
      font-size: 40px;
      line-height: 70px;
      white-space: nowrap;
    }
    .guides {
      color: $theme_color;
      line-height: 20px;
      font-size: 0;
      span {
        font-size: 12px;
        a {
          color: $theme_color;
        }
      }
      .line {
        color: #333;
        padding: 0 5px;
      }
    }
  }
}
</style>
