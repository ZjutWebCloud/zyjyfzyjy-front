<template>
  <div class="list-menu-box">
    <div class="list-menu-inner">
      <a class="menu-head" :href="getHref(subTree)">{{ subTree.classname }}</a>
      <template v-if="subTree.subMenus">
        <template v-for="item in subTree.subMenus">
          <a class="menu-second" :class="{ 'menu-on': item.id === id }" :href="getHref(item)" :key="item.id">
            <span>{{ item.classname }}</span>
          </a>
          <template v-if="item.subMenus">
            <a
              class="menu-third"
              :href="getHref(o)"
              :class="{ 'menu-on': o.id === id }"
              v-for="o in item.subMenus"
              :key="o.id"
              >{{ o.classname }}</a
            >
          </template>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import { getHref } from '@/utils';
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          menuList: [],
          orginMenuList: [],
        };
      },
    },
    id: String,
  },
  computed: {
    subTree: function() {
      let { menuList = [], orginMenuList = [] } = this.data;
      let item = orginMenuList.find(o => o.id === this.id) || {};
      let { classparent, classgrandparent } = item;
      let rootId = this.getRootId(this.id);
      return menuList.find(o => o.id === rootId) || item;
    },
  },
  methods: {
    getHref,
    getRootId(id) {
      let { orginMenuList = [] } = this.data;
      let item = orginMenuList.find(o => o.id === id);
      if (item) {
        if (item.classparent != 0) {
          return this.getRootId(item.classparent);
        }
        return item.id;
      }
      return undefined;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';

$hover_color: #448aca;
.list-menu-box {
  width: 100%;
  float: right;
  background: #f8f8f8;
  box-sizing: border-box;
  padding: 30px 0 20px 0;
  text-align: center;
}
.list-menu-inner {
  // border-left: 2px solid #a7a7a7;
  padding: 0 6px;
}
.list-menu-box a {
  display: block;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-menu-box a:hover {
  color: $theme_color;
}
.list-menu-box a.menu-head {
  height: 50px;
  line-height: 50px;
  color: $theme_color;
  border-bottom: 1px solid $theme_color;
  font-size: 22px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-weight: bold;
}
.list-menu-box .menu-second {
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  font-size: 16px;
}
.list-menu-box .menu-second span {
  display: inline-block;
  line-height: 50px;
  position: relative;
}
.list-menu-box .menu-second.menu-on {
  // background-color: rgba(27, 95, 81, 0.6);
}
.list-menu-box .menu-second.menu-on span {
  position: relative;
  color: $hover_color;
}
.list-menu-box .menu-third {
  height: 50px;
  line-height: 50px;
  // color: #333;
  box-sizing: border-box;
  font-size: 12px;
  border-bottom: 1px solid #dadada;
  border-top: none;
  padding-left: 20px;
}
.list-menu-box .menu-third.menu-on {
  color: $hover_color;
}
</style>
