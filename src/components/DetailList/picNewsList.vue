<template>
  <div class="picnews-list">
    <ol class="ol-news clearfix">
      <li v-for="(item,index) in listData " :key="index">
        <a
         :href="item.titleurl?item.titleurl:`${context}/frontend/showNews.html?hashcode=${item.hashcode}`"
          target="_blank"
          class="imgbox"
        >
          <img :src="item.picture" :alt="item.title" />
        </a>
        <div class="pic-content">
          <div class="listTitle">
            <a
              :href="item.titleurl?item.titleurl:`${context}/frontend/showNews.html?hashcode=${item.hashcode}`"
              target="_blank"
            >{{item.title}}</a>
          </div>
          <p>{{item.content|newsContent}}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['listData'],
  filters: {
    newsContent: function(value) {
      let div = document.createElement('div');
      div.innerHTML = value;
      return div.innerText.trim();
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
.picnews-list {
  .ol-news {
    li {
      float: left;
      padding: 15px;
      width: 50%;
      height: 260px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      .imgbox {
        display: block;
        height: 140px;
        background: #eee;
        img {
          height: 140px;
        }
      }
      .pic-content {
        .listTitle {
          padding: 10px 0;
          a {
            color: $theme_color;
            font-size: 16px;
            font-weight: bold;
            line-height: 20px;
            display: inline-block;
            @include overLine(1);
          }
        }
        p {
          font-size: 12px;
          color: #303030;
          line-height: 20px;
          @include overLine(3);
        }
      }
    }
    li:nth-child(2n) {
       border-left: 1px solid #eee;
    }
  }
}
</style>
