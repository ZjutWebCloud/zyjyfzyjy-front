<template>
  <div id="app">
    <app-header :menuList="menuList"></app-header>
    <div class="new-body">
      <iframe
        id="frame"
        :src="`http://www.cba.zjut.edu.cn/EMTI/personalPageBrowsePublic.html?teacher_id=${GetQueryString('teacher_id')}`"
      />
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
    resize() {
      var iframe = document.getElementById('frame');
        try {
          var bHeight = iframe.contentWindow.document.body.scrollHeight;
          var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
          var height = Math.min(bHeight, dHeight);
          iframe.height = height + 50;
          debugger
          // console.log(iframe.height);
        } catch (ex) {}
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
@import '@/assets/styles/variable.scss';

#app {
  // background: url(../../../assets/images/paper.jpg) repeat;
  position: absolute;
  width: 100%;
  min-height: 100%;
}
.new-body {
  width: $container_width;
  margin: 0 auto;
  iframe {
    width: 100%;
    height: 2000px;
  }
}
</style>
