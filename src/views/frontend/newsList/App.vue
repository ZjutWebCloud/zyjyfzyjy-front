<template>
  <div id="app">
    <app-header :menuList="menuList"></app-header>
    <div class="container">
      <banner :title="title" :guides="getGuides(GetQueryString('id')).reverse()"></banner>
      <div class="main_box">
        <div class="left-nav">
          <sider-bar
            :data="{
              menuList,
              orginMenuList,
            }"
            :id="GetQueryString('id')"
          ></sider-bar>
        </div>
        <div class="right">
          <component
            :is="componentType"
            :hashcode="GetQueryString('hashcode')"
            :listData="list"
            noBorder="true"
            class="minHeightStyle"
          ></component>
          <page-bar
            class="mb20"
            v-if="!(componentType == 'single-page')"
            :pageNo="pager.pageNum"
            :current="pager.page"
            @change="fetchNormalInfo"
          ></page-bar>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import menus from '@/mixins/menus';
import AppHeader from '@/components/common/Header';
import AppFooter from '@/components/common/Footer';
import AppMenu from '@/components/common/Menu';
import PageBar from '@/components/common/PageBar';
import SiderBar from '@/components/siderBar/Index';
import SinglePage from '@/components/newsDetail/Index';
import ArticleList from '@/components/DetailList/List';
import PictureNewsList from '@/components/DetailList/picNewsList';
import PictureList from '@/components/DetailList/picList';
import Banner from '@/components/common/Banner';
import { GetQueryString } from '@/utils';
import { getNormalList, getBasicData } from '@/api';

export default {
  name: 'App',
  mixins: [menus],
  components: {
    AppHeader,
    AppFooter,
    AppMenu,
    SiderBar,
    SinglePage,
    ArticleList,
    PictureNewsList,
    PictureList,
    PageBar,
    Banner,
  },
  computed: {
    title() {
      let menu = this.orginMenuList.find(o => o.id == this.GetQueryString('id'));
      return menu ? menu.classname : null;
    },
  },
  data() {
    return {
      componentType: '',
      list: [],
      pager: {
        pageNum: 1,
        page: 1,
      },
    };
  },
  methods: {
    GetQueryString,
    async setTypeAndGetData() {
      let componentType;
      let classpicview = this.GetQueryString('classpicview'),
        hashcode = this.GetQueryString('hashcode'),
        classtype = this.GetQueryString('classtype'),
        id = this.GetQueryString('id');

      if ((classpicview != 'flag' && hashcode == 'flag') || classtype == '0') {
        this.setNormalTypeAndInfo({ classpicview });
      } else if (hashcode != 'flag') {
        //单页面栏目
        this.componentType = 'single-page';
      } else {
        let output = await getBasicData({
          flag: 'class',
          checkedInfo: id,
        });
        let { classtype, classpicview } = output;
        if (classtype == '0') {
          this.setNormalTypeAndInfo({ classpicview });
        } else if (classtype == '2') {
          windows.location.href = ob.classurl;
        } else {
          this.componentType = 'single-page';
        }
      }
    },
    async setNormalTypeAndInfo({ classpicview }) {
      const typeMap = new Map([
        //列表
        ['0', 'article-list'],
        // 图文
        ['1', 'picture-news-list'],
        //图
        ['2', 'picture-list'],
      ]);
      this.componentType = typeMap.get(classpicview);
      await this.fetchNormalInfo(1);
    },
    async fetchNormalInfo(page) {
      let classpicview = this.GetQueryString('classpicview');
      let id = this.GetQueryString('id');
      let thisFlag = classpicview == '1' || classpicview == '2' ? 'showNews2' : 'showNews';
      let params = {
        flag: thisFlag,
        pageInt: page,
        classid: id,
        parent: id,
        grandparent: id,
      };
      let data = await getNormalList(params);
      this.list = data.output;
      this.pager = {
        page,
        pageNum: data.pageNum,
      };
    },
    getGuides(id) {
      let { allSubTreeList = [] } = this;
      let result = [];
      let item = allSubTreeList.find(o => o.id === id);
      if (item) {
        result.push(item);
        if (item.classparent != 0) {
          return [].concat(result, this.getGuides(item.classparent));
        } 
        return result;
      }
      return result;
    },
  },
  mounted() {
    this.setTypeAndGetData();
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
@import '@/assets/styles/variable.scss';
.mb20 {
  margin: 20px 0;
}
.minHeightStyle {
  min-height: 400px;
}
#app {
  position: absolute;
  width: 100%;
  // min-height: 100%;
  // background: url(../../../assets/images/paper.jpg) repeat;
  // background: #fff !important;
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

.main_box {
  display: flex;
  min-height: 400px;
  margin-top: 20px;
  .left-nav {
    width: 250px;
  }
  .right {
    flex: 1;
    border-left: 1px solid #ddd;
    min-height: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
