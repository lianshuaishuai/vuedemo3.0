<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar ref="navBar" title="首页" fixed :border="false" />
  </van-config-provider>
  <van-tabs
    v-model:active="active"
    ref="elment1"
  >
  <!-- 假如那个标签点击时候不切换 也需要有内容 可以随意写 -->
    <van-tab title="游戏" :key="0"><ym-game/></van-tab>
    <van-tab title="推荐" :key="1"><home-recommend/></van-tab>
    <van-tab title="广场" :key="2"><ym-new-square/></van-tab>
    <van-tab title="活动" :key="3"><ym-activity/></van-tab>

  </van-tabs>
</template>
<script>
// import { useRouter } from "vue-router";
import { Tab, Tabs, NavBar} from "vant";
import { ref, onMounted } from "vue";
import HomeRecommend from "./HomeRecommend.vue";
import YMGame from "./YMGame.vue"
import YMNewSquare from './YMNewSquare.vue'
import YMActivityList from './YMActivityList.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    "van-nav-bar": NavBar,
    "van-tabs": Tabs,
    "van-tab": Tab,
    "home-recommend": HomeRecommend,
    "ym-game":YMGame,
    'ym-new-square': YMNewSquare,
    'ym-activity': YMActivityList
  },
  setup() {
   
    const elment1 = ref(null);
    const active = ref(1);
    const offsetTop = ref(0);
    const themeVars = {
      navBarBackgroundColor: "#07c160",
    };
   
    
    onMounted(() => {
      offsetTop.value = 46 ;
    });
    
    const beforeChange = (index) => {
        if (index === 0) {
          return false
        }
        return new Promise((resolve) => {
        // 在 resolve 函数中返回 true 或 false
        resolve(index !== 0);
      });
    }
    return {
      elment1,
      active,
      themeVars,
      offsetTop,
      beforeChange
    };
  },
};
</script>
<style lang="less" scoped>
.van-sticky {
  width: 100vw !important;
}
.van-tabs {
  padding-top: 46px;
}
:deep(.van-tabs__wrap) {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 99;
}
:deep(.van-tabs__content) {
  padding-top: 44px;
  padding-bottom: 48px;
}

</style>