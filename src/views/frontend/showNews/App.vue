<template>
  <div id="app">
    <app-header :menuList="menuList"></app-header>
    <div class="new-body">
      <news-detail :hashcode="GetQueryString('hashcode')"></news-detail>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import menus from '@/mixins/menus';
import AppHeader from '@/components/common/Header';
import AppMenu from '@/components/common/Menu';
import AppFooter from '@/components/common/Footer';
import { GetQueryString } from '@/utils';
import NewsDetail from '@/components/newsDetail/Index';
export default {
  name: 'App',
  mixins: [menus],
  components: {
    AppHeader,
    AppMenu,
    NewsDetail,
    AppFooter,
  },
  data() {
    return {};
  },
  methods: {
    GetQueryString,
  },
  mounted() {},
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
@import '@/assets/styles/variable.scss';
#app {
  position: absolute;
  width: 100%;
  min-height: 100%;
  // background: url(../../../assets/images/paper.jpg) repeat;
}
.new-body {
  width: $container_width;
  margin: 0 auto;
  background: #fff;
}
</style>
