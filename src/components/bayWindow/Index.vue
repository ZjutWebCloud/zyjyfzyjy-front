<template>
  <a class="bay-window" ref="window" :href="getHref()">
    <img :src="data.picture" alt />
    <p>{{data.title}}</p>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.fly();
  },
  methods: {
    getHref() {
      const { titleurl, hashcode } = this.data;
      return titleurl ? titleurl : `${context}/frontend/showNews.html?hashcode=${hashcode}`;
    },
    fly() {
      let img = this.$refs.window;
      let xPos = document.body.clientWidth - 20;
      let yPos = document.body.clientHeight / 2;
      let step = 1;
      let delay = 20;
      let height = 0;
      let width = 0;
      let Hoffset = 0;
      let Woffset = 0;
      let yon = 0;
      let xon = 0;
      let pause = true;
      let interval;
      img.style.top = yPos;
      function changePos() {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
        Hoffset = img.offsetHeight;
        Woffset = img.offsetWidth;
        img.style.left = xPos + document.body.scrollLeft + 'px';
        img.style.top = yPos + document.body.scrollTop + 'px';
        if (yon) {
          yPos = yPos + step;
        } else {
          yPos = yPos - step;
        }
        if (yPos < 0) {
          yon = 1;
          yPos = 0;
        }
        if (yPos >= height - Hoffset) {
          yon = 0;
          yPos = height - Hoffset;
        }
        if (xon) {
          xPos = xPos + step;
        } else {
          xPos = xPos - step;
        }
        if (xPos < 0) {
          xon = 1;
          xPos = 0;
        }
        if (xPos >= width - Woffset) {
          xon = 0;
          xPos = width - Woffset;
        }
      }
      function start() {
        img.visibility = 'visible';
        interval = setInterval(changePos, delay);
      }
      function pause_resume() {
        if (pause) {
          clearInterval(interval);
          pause = false;
        } else {
          interval = setInterval(changePos, delay);
          pause = true;
        }
      }
      start();
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';
.bay-window {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid $theme_color;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  p{
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
