<template>
  <div class="app-menu">
    <div class="app-menu-inner">
      <div class="menu-item" v-for="item in menuList" :key="item.id">
        <a class="menu-title" :href="getHref(item)">
          {{ item.classname }}
          <i class="iconfont icon-down" v-if="Array.isArray(item.subMenus) && item.subMenus.length"></i>
        </a>
        <div class="sub-menu-container" v-if="Array.isArray(item.subMenus) && item.subMenus.length">
          <a class="sub-menu-item" :href="getHref(subItem)" v-for="subItem in item.subMenus" :key="subItem.id">{{
            subItem.classname
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHref } from '@/utils';
export default {
  props: {
    menuList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  methods: {
    getHref,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
.app-menu {
  z-index: 999;
  height: $menu_height;
  position: relative;
  a {
    color: #fff;
  }
  .app-menu-inner {
    font: normal 16px/59px 'microsoft yahei';
    position: absolute;
    display: flex;
    width: 100%;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    .menu-item {
      height: 100%;
      flex: 1;
      text-align: center;
      // font-weight: bold;
      line-height: $menu_height;
      box-sizing: border-box;
      font-size: 20px;
      i {
        display: none;
        color: #aaa;
        font-size: 20px;
        margin-left: 5px;
      }
      .menu-title {
        display: block;
        color: #fff!important;
      }
      cursor: pointer;
      .sub-menu-container {
        width: 100%;
        display: none;
        background: #fff;
        font-size: 16px;
        a {
          color: $theme_color;
        }
      }
      &:hover {
        color: $theme_color;
        .sub-menu-container {
          display: block;
          background-color: rgba(68, 137, 202, 0.5);
          // margin-top: 30px;
          .sub-menu-item {
            display: block;
            color: #fff;
            line-height: 40px;
            &:hover {
              background: rgba(68, 137, 202, 1);
            }
          }
        }
      }
    }
  }
}
</style>
