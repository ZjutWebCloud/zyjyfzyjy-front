<template>
  <div class="link-list">
    <div class="link-list-content">
      <div class="link-list-title-content">
        <div class="link-list-title">友情链接</div>
        <a :href="getHref(menu)">
          <div class="title-more-button">
            <span class="more">更多 -></span> 
          </div>
        </a>
      </div>
      <div class="list-item-row">
        <div :class="{
        'link-list-item':true,
        'link-list-item-middle':true
      }"
        v-for="(item,index) in friendLink" :key="index " v-if="index<8">
        <a :href="item.titleurl">
          <p> {{item.title}}</p>
        </a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHref } from '@/utils';
export default {
  props: ['friendLink','menu'],
  mounted() {
  },
  methods: {
    getHref
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
.link-list {
    // height: 170px;
    background:#ffffff;
    padding:30px 0;
    box-sizing: border-box;
    .link-list-content{
      width: $container_width;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      p{
        margin-top:34px;
        margin-left:80px;
        font-size: 16px;
        font-weight: bold;
        color:#365e7d;
        @include overLine(1);
      }
      .link-list-title-content{
        padding: 0 60px 0 10px;
        height: 192px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex:0;
      }
      .link-list-title{
        margin-top: 30px;
        font-size: 24px;
        white-space: nowrap;
      }
      .list-item-row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        // justify-content: space-between;
      }
      .link-list-item{
        margin-top: 18px;
        margin-right: 24px;
      }
      .link-list-item-middle{
        width: 280px;
        height: 78px;
        background-repeat:no-repeat;
        background-image: url(../../assets/images/pdf_2.png);
      }
      .link-list-item-big{
        width: 377px;
        height: 78px;
        background-repeat:no-repeat;
        background-image: url(../../assets/images/pdf_2.png);
      }
      .link-list-item-small{
        width: 201px;
        height: 78px;
        background-repeat:no-repeat;
        background-image: url(../../assets/images/pdf_3.png);
      }
      .title-more-button{
        width: 70px;
        height: 30px;
        border-radius: 15px;
        border:1px solid #666;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .more{
          font-size:12px;
          color:#333;
        }
      }
    }
}
</style>
