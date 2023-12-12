<template>
  <div class="app-footer">
    <p>版权所有©浙江工业大学</p>
    <p>地址:杭州市西湖区留和路288号</p>
    <p>邮编: 310023 </p>
    <p>zjyjy@zjut.edu.cn</p>
    <p>浙ICP备06055204号-1 </p>
    <p>浙公网安备 33010302002621号</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.app-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: $footer_color;
  color: #fff;
  justify-content: center;
  align-items: center;
  // padding: 12px;
  height: 50px;
  p{
    font-size: 12px;
    padding:0 20px;
    border-right: 1px solid #3e3738;
  }
  p:last-child{
    border-right: none;
  }
}
</style>
