<template>
  <div class="app-header">
    <div class="app_header_inner">
      <img src="@/assets/images/logo.png" alt />
      <div class="menu-box">
        <AppMenu :menuList="menuList"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/common/Menu';
export default {
  components: {
    AppMenu,
  },
  props: {
    menuList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      searchValue: '',
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
.app-header {
  background:   url('../../assets/images/header-bg.png') no-repeat;
  background-size: 100% 100%;
  height: $header_height;
  position: relative;
  .app_header_inner {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    line-height: $header_height;
    img {
      vertical-align: middle;
      margin-left: 50px;
      // width: 350px;
    }
    .link-box {
      position: absolute;
      display: inline-block;
      width: 140px;
      right: 240px;
      box-sizing: border-box;
      font-size: 14px;
      a {
        color: #efefef;
        margin-right: 10px;
      }
    }
    .menu-box {
      position: absolute;
      display: inline-block;
      width: 50%;
      right: 0;
      box-sizing: border-box;
      // margin-top: 30px;
    }
  }
}
</style>
