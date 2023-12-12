<template>
  <div id="app">
    <app-header :menuList="menuList"></app-header>
  </div>
</template>

<script>
import menus from '@/mixins/menus';
import AppHeader from '@/components/common/Header';
import AppMenu from '@/components/common/Menu';
export default {
  name: 'App',
  mixins: [menus],
  components: {
    AppHeader,
    AppMenu,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
</style>
