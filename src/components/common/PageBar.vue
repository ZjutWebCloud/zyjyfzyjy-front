<template>
  <div class="pager">
    <button class="btn btn-pager" :disabled="this.current == 1" @click="prePage">上一页</button>
    <span
      v-if="pageNo !== 1"
      class="page-index"
      :class="{active:1 == current }"
      @click="goPage(1)"
    >1</span>
    <span v-if="preClipped" class="page-index">...</span>
    <span
      v-for="index in pages"
      :key="index"
      class="page-index"
      :class="{active:index == current }"
      @click="goPage(index)"
    >{{index}}</span>
    <span v-if="backClipped" class="page-index">...</span>
    <span class="page-index" :class="{active:pageNo == current }" @click="goPage(pageNo)">{{pageNo}}</span>
    <button class="btn btn-pager" :disabled="this.current == pageNo" @click="nextPage">下一页</button>
  </div>
</template>


<script>
export default {
  props: {
    // 用于记录总页码，可由父组件传过来
    pageNo: {
      type: Number,
      default: 1,
    },
    // 用于记录当前页数，这个与父组件进行数据交互来完成每一页的数据更新，所以我们只要改变current的值来控制整个页面的数据即可
    current: {
      type: Number,
      default: 1,
    },
  },
  data: function() {
    return {
      // 用于判断省略号是否显示
      backClipped: true,
      preClipped: false,
    };
  },
  methods: {
    prePage() {
      this.current--;
      this.$emit('change', this.current);
    },
    nextPage() {
      this.current++;
      this.$emit('change', this.current);
    },
    goPage(index) {
      if (index !== this.current) {
        this.current = index;
        this.$emit('change', this.current);
      }
    },
  },
  computed: {
    pages: function() {
      let ret = [];
      if (this.current > 3) {
        ret.push(this.current - 2);
        ret.push(this.current - 1);
        if (this.current > 4) {
          this.preClipped = true;
        }
      } else {
        this.preClipped = false;
        for (let i = 2; i < this.current; i++) {
          ret.push(i);
        }
      }
      if (this.current !== this.pageNo && this.current !== 1) {
        ret.push(this.current);
      }
      if (this.current < this.pageNo - 2) {
        ret.push(this.current + 1);
        ret.push(this.current + 2);
        if (this.current <= this.pageNo - 3) {
          this.backClipped = true;
        }
      } else {
        this.backClipped = false;
        for (let i = this.current + 1; i < this.pageNo; i++) {
          ret.push(i);
        }
      }
      return ret;
    },
  },
};
</script>

<style lang="scss" >
@import '@/assets/styles/variable.scss';
.pager {
  text-align: center;
}
.btn-pager {
  cursor: pointer;
  margin-left: 10px;
  padding: 0px;
  width: 60px;
  height: 30px;
  text-align: center;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #fff;
  outline: 0;
  border-radius: 0px;
}
.btn-pager:hover {
  background-color: #f2f2f2;
}
.page-index {
  display: inline-block;
  margin-left: 10px;
  width: 35px;
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
  cursor: pointer;
  color: #000000;
}
.active {
  color: #ffffff;
  background-color: $theme_color;
}
</style>
