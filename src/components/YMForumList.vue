<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar
      ref="navBar"
      title="论坛列表"
      fixed
      placeholder
      :border="false"
    />
  </van-config-provider>
  <van-pull-refresh v-model="refreshing">
    <vant-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="--全部数据--"
    >
      <div class="list-container-cell" v-for="(item, index) in list" :key="index">
        <van-image
          src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          round
          fit="cover"
        />
        <div class="cell-center">
          <h5>X7</h5>
          <span>成员875人</span>
        </div>
        <button class="peopel-apply">关注</button>
      </div>
    </vant-list>
  </van-pull-refresh>
</template>
<script>
import { List, PullRefresh, NavBar, Image as VanImage } from "vant";
import { reactive, ref, toRefs } from '@vue/reactivity';
export default {
  components: {
    "vant-list": List,
    "van-pull-refresh": PullRefresh,
    "van-nav-bar": NavBar,
    "van-image": VanImage,
  },
  setup() {
    const themeVars = {
      navBarBackgroundColor: "#07c160",
    };
    const refreshing = ref(false)
    const loading = ref(false)
    const finished = ref(true)
    const data = reactive({list:[1,2,3,4,5,6,7,8,9,90,12,21,312,3123]})
    return {
      ...toRefs(data),
      themeVars,
      refreshing,
      loading,
      finished
    };
  },
};
</script>
<style lang="less" scoped>
  .list-container-cell {
    display: flex;
    align-items: center;
    height: 80px;

    // 头像
    .van-image {
      margin: 0 12px;
      width: 36px;
      height: 36px;
    }

    // 标题以及成员数量
    .cell-center {
      flex: 1;
      text-align: left;
      // 标题
      h5 {
        margin: 0;
      }
    }

    // 关注按钮
    .peopel-apply {
      margin: 0 12px;
      padding: 0;
      width: 52px;
      height: 28px;
      border-radius: 4px;
      font-size: 13px;
      color: #3faae4;
      background-color: white;
      border: 1px solid #3faae4;
    }
  }
</style>