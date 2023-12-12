<template>
  <div id="newsbody">
      <div id="newsbox">
        <div id="news1">
          <div id="nav-box"></div>
          <div id="title" class="news1title">{{newData.title}}</div>
          <div class="second-title" v-if="newData.secondtitle">{{newData.secondtitle}}</div>
          <div class="news1info" v-html="publishInfo"></div>
          <div style="width:200px; text-align:right; float:right;">
            <div class="jiathis_style">
              <a class="jiathis_button_qzone"></a>
              <a class="jiathis_button_tsina"></a>
              <a class="jiathis_button_tqq"></a>
              <a class="jiathis_button_weixin"></a>
              <a class="jiathis_button_renren"></a>
              <a class="jiathis_button_xiaoyou"></a>
              <a
                href="http://www.jiathis.com/share"
                class="jiathis jiathis_txt jtico jtico_jiathis"
                target="_blank"
              ></a>
              <a class="jiathis_counter_style"></a>
            </div>
          </div>
          <br />
          <div id="content" class="news1content" v-html="newData.content"></div>
        </div>
      </div>
    </div>
</template>

<script>
import { getNewsDetail } from '@/api';
export default {
  props: {
    hashcode: String
  },
  computed: {
    publishInfo() {
      var str = '';
      const { author, department, publishTime } = this.newData;
      if (author) {
        str += ' 作者：' + author;
      }
      if (department) {
        str += '  &nbsp;&nbsp;来源：' + department;
      }
      if (publishTime) {
        str += ' &nbsp;&nbsp;发布日期：' + publishTime;
      }
      return str;
    },
  },
  data() {
    return {
      newData: {},
    };
  },
  methods: {
    async getData() {
      console.log(this.hashcode)
      this.newData = await getNewsDetail(this.hashcode);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
#newsbody {
  width: 100%;
  overflow: hidden;
  padding: 40px 120px;
  box-sizing: border-box;
  .second-title{
    color: #777;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
}
#news1 .news1title {
    color: #333;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
}
#news1 .news1info {
    color: #999;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    margin: 10px;
    border-top: solid 1px #1b5f51;
}
</style>
