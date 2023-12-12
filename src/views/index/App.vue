<template>
  <div id="app">
    <app-header :menuList="menuList"></app-header>
    <app-slider :sliders="mainData.frontSlide"></app-slider>
    <div >
      <div class="list-inner">
          <pic-list
              class="leftWidth" 
              :listData="mainData.collegeNews"
              title="院情动态"
              :menu="getLink('157')"
            ></pic-list>
            <tab-list
              class="rightWidth"
              :notice="mainData.notification"
              title="通知公告"
              :menu="getLink('158')"
            >
          </tab-list>
       </div>
       <div class="bg">
          <div class="list-inner">
            <normal-list
              :listData="mainData.educationNews"
              title="产教动态"
              :menu="getLink('152')"
            ></normal-list>
          </div>
       </div>
       <div class="bg-color">
          <div class="list-inner">
            <list
              :listData="mainData.expert"
              :menu="getLink('160')"
            ></list>
          </div>
       </div>
    </div>
    <app-link :friendLink="mainData.friendLink" :menu="getLink('162')"></app-link>
    <app-footer></app-footer>
    <bay-window v-if="mainData.bayWindow && Array.isArray(mainData.bayWindow) && mainData.bayWindow[0]" :data="mainData.bayWindow[0]"></bay-window>
  </div>
</template>

<script>
import menus from '@/mixins/menus';
import AppHeader from '@/components/common/Header';
import AppLink from '@/components/link/Index';
import AppFooter from '@/components/common/Footer';
import AppMenu from '@/components/common/Menu';
import List from '@/components/normalList/List'
import PicList from '@/components/normalList/picList';
import TabList from '@/components/normalList/tabList';
import NormalList from '@/components/normalList/normalList';
import AppSlider from '@/components/slider/Index';
import BayWindow from '@/components/bayWindow/Index';
import { getMainData } from '@/api';
export default {
  name: 'App',
  mixins: [menus],
  components: {
    AppHeader,
    AppFooter,
    AppLink,
    AppMenu,
    List,
    PicList,
    TabList,
    AppSlider,
    BayWindow,
    NormalList
  },
  data() {
    return {
      mainData: {
        frontSlide: [], //大图新闻
        collegeNews: [], //院情动态
        notification: [], //通知公告
        educationNews:[],//产教动态
        expert:[], //专家风采
        friendLink: [],//友情链接
        bayWindow: null
      },
    };
  },
  methods: {
    async getMainData() {
      let {
        frontSlide = [],
        collegeNews =[],
        notification = [],
        educationNews = [],
        expert= [],
        bayWindow = null,
        friendLink=[]
      } = await getMainData();
      this.mainData = {
        frontSlide,
        collegeNews,
        notification,
        educationNews,
        friendLink,
        expert,
        bayWindow
      };
    },
    getLink(id) {
      return this.allSubTreeList.find(o => o.id == id) || {};
    },
  },
  mounted() {
    this.getMainData();
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
</style>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';

#app {
  background: #f8f8f8;
  background-repeat: no-repeat;
  background-size: 100% auto;
  min-height: 1600px;
  background-image: url(../../assets/images/bg.jpg);
}
.bg-grey {
  background: #fafafa;
  padding: 10px 0;
}
.bg{
  background-image: url(../../assets/images/bg1.png);
  background-size: cover;
  background-position: center;
}
.bg-color{
  padding:48px 0;
  background: #fff url(../../assets/images/color.png) no-repeat;
  background-size: cover;
  background-position: bottom;
}
.list-inner {
  width: $container_width;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.leftWidth {
  box-sizing: border-box;
  width: 926px
}
.rightWidth{
  box-sizing: border-box;
  width: 454px;
}
</style>