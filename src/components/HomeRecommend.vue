<template>
  <div
    class="recommend-container"
    ref="elment"
    @scroll="scrollF"
  >
    <van-pull-refresh v-model="refreshing" @refresh="refresh" ref="ttt">
      <vant-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="--全部数据--"
        @load="onLoad"
      >
        <!-- 轮播图 -->
        <swi-pe :images="images" />
        <!-- 公告 -->
        <no-tice :notice="notices" />
        <!-- 帖子列表 -->
        <posts-cell
          v-for="item in list"
          :key="item.id"
          :posts-item="item"
          @changeStatus="changeStatus"
        />
      </vant-list>
    </van-pull-refresh>
    <!-- <div class="backg" :style="{'background-image':`url(${image})`}"></div> -->
  </div>
</template>
<script>
import { List, PullRefresh } from "vant";
import PostsCell from "./PostsCell.vue";
import postsListHook from "../hook/postsListHook";
import swipe from "../hook/swipe";
import noticeRequest from "../hook/noticeRequest";
import Swipe from "./Swipe.vue";
import Notice from "./YMnotice.vue";

import getElmentHeight from "../hook/getElmentHeight";

import recordScroll from "../hook/recordScroll";
import { ref, toRefs } from "@vue/reactivity";
// import AnimatedScroll from "animated-scroll";


export default {
  name: "home-recommend",

  components: {
    "vant-list": List,
    "van-pull-refresh": PullRefresh,
    PostsCell,
    // "posts-cell": PostsCell,
    "swi-pe": Swipe,
    "no-tice": Notice,
  },

  props: ["active"],
  emits:["changeStatus"],
  setup() {
    console.log('我是模式');
    console.log(process.env.NODE_ENV);
    const value = ref('')
    const numberlist = ref(null);
    const image = ref("https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg");
    // 获取根节点高度 以及设置根节点的ref
    const { elmentHeight, elment } = getElmentHeight(50);
    //  轮播图
    const { images, getImages } = swipe();

    // 公告
    const { notices, getNotices } = noticeRequest();

    // 帖子列表
    const config = postsListHook();

    // 帖子下拉刷新的方法
    const { onRefresh,postDic } = config;
    // 记录滚动条距离  setUpScroll设置位置
    const { scrollF } = recordScroll(elment);
    // const didSelect = () => {
    //   const scroll = new AnimatedScroll(elment.value);

    //   scroll.top(200).then(function () {
    //     // newTop === 100
    //   });
    // };

    // 下拉刷新组件的方法
    function refresh() {
      // 请求列表接口
      onRefresh();

      // 请求轮播图接口
      getImages();

      //公告接口
      getNotices();
    }
    const changeStatus = (id) => {
       postDic.list.forEach(item => {if (item.id === id) item.status = !item.status});
    }
    return {
      value,
      numberlist,
      image,
      elmentHeight,
      elment,
      ...toRefs(postDic),
      ...config,
      images,
      notices,
      refresh,
      scrollF,
      changeStatus
    };
  },
};
</script>
<style lang="less" scoped>
.recommend-container {
  .test{
    display: flex;
    align-items: center;
    .test-filed{
      flex: 1;
      // height: 100px;
      // line-height: 100px;
      // padding: 0;
    }
  }
}
//  .backg{
//    height: 200px;
//    background-repeat: no-repeat;
//    background-position: center;
//   }
</style>
