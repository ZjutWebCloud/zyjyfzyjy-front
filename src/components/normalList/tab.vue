<template>
    <div class="normal-title">  
      <div class="font-title">
        {{title}}
      </div>
      <a :href="getHref(menu)">
        <div class="title-more-button">
          <span class="more">更多 -></span> 
        </div>
      </a>
    </div>
</template>

<script>
import { getHref } from '@/utils';
export default {
  data() {
    return {
      type:1
    };
  },
  props: ['title', 'menu'],
  methods: {
    getHref
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
.normal-title{
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .font-title{
      color: #333;
      font-size: 30px;
      line-height: 50px;
    }
    .font-title::after{
      content: '';
      display: block; 
      width: 120px;  
      height: 6px;
      background-color: #53aae9;
      margin-top:-16px;
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
</style>
