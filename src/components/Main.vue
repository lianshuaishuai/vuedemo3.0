<template>
  <router-view v-slot="{ Component}">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <van-tabbar
    v-model="active"
    active-color="#333A4A"
    inactive-color="#7A8499"
    route
  >
    <van-tabbar-item to="/home">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? home_select : home_normal" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/serve">
      <span>服务</span>
      <template #icon="props">
        <img :src="props.active ? serve_select : serve_normal" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/appstore">
      <span>商城</span>
      <template #icon="props">
        <img :src="props.active ? store_select : store_normal" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/my">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? my_select : my_normal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
// import {useRouter } from "vue-router";
import mainSetting from "../hook/mainsetting";
import { onMounted } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
  },
  setup() {
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      if (route.fullPath === "/") { router.replace({path:'/home'}) }
    })
    return {
      // 底部图标配置以及选中状态
      
      ...mainSetting,
    };
  },
};
</script>
<style lang="less" scoped>
</style>