<template>
     <div class="normal-title">  
      <a :href="getHref(menu)">
        <span class="font-title"><i :class="`iconfont ${icon} icon-size`"></i>{{title}}</span>
        <span class="more">MORE</span>
      </a>
    </div>
</template>

<script>
import { getHref } from '@/utils';
export default {
  data() {
    return {
    };
  },
  props: ['title', 'icon', 'menu'],
  methods: {
    getHref,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
.normal-title{
    color:$title_color;
    font-size: 24px;
    line-height: 26px;
    border-bottom:2px solid #abb6a6;
    a{
        color:$title_color;
        .font-title{
          border-bottom:2px solid $title_color;
          padding-bottom: 2px;
          padding-right:15px;
          .icon-size{
              font-size: 24px;
              margin-right:5px;
          }
        }
        .more{
          float:right;
          color:#999;
          font-size:14px;
        }
    }
}
</style>
