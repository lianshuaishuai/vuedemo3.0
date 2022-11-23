<template>
  <router-view v-slot="{ Component,  route}">
      <keep-alive include="Main" exclude="personalcenter">
        <component :is="Component" :key="route.path"/>
      </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: "App",
  setup() {},
};
</script>

<style lang="less">
// 引入公共样式
@import url('./less/base.less');


</style>
