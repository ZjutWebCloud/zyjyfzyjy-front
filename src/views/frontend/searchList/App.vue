<template>
  <div id="app">
    <app-header :menuList="menuList"></app-header>
    <div class="container">
      <banner></banner>
      <list
        class="normalWidth"
        :listData="listData"
        noBorder="true"
      ></list>
      <page-bar :pageNo="total" :current="current" class="pb20" @change="changePage"></page-bar>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import menus from '@/mixins/menus';
import AppHeader from '@/components/common/Header';
import AppMenu from '@/components/common/Menu';
import PageBar from '@/components/common/PageBar';
import AppFooter from '@/components/common/Footer';
import List from '@/components/DetailList/List';
import Banner from '@/components/common/Banner';
import { searchList } from '@/api';
import { GetQueryString } from '@/utils';
export default {
  name: 'App',
  mixins: [menus],
  components: {
    AppHeader,
    AppMenu,
    PageBar,
    List,
    AppFooter,
    Banner
  },
  computed: {},
  data() {
    return {
      listData: [],
      total: 1,
      current: 1,
      searchValue: GetQueryString('title') || '',
    };
  },
  methods: {
    async getData() {
      const data = {
        flag: 'showNews1',
        pageInt: this.current,
        title: GetQueryString('title'),
      };
      const search = await searchList(data);
      this.listData = search.output;
      this.total = search.pageNum;
    },
    changePage(current) {
      this.current = current;
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
@import '@/assets/styles/variable.scss';
#app{
  // background: url(../../../assets/images/paper.jpg) repeat;
}
.container {
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  width: $container_width;
  background: #fff;
  min-height: 600px;
}
.normalWidth {
  margin: auto;
  min-height: 432px;
  padding: 20px;
}
.pb20 {
  padding-bottom: 20px;
}
</style>
