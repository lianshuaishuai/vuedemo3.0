
<template>
  <div class="game-container" ref="elment"  @scroll="scrollF">
    <van-pull-refresh v-model="refreshing" @refresh="refresh">
      <vant-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="全部数据"
        @load="onLoad"
      >
        <!-- 轮播图 -->
        <swi-pe :images="images" />
        <!-- 论坛 -->
        <forum-view :forums="forums"/>
        <!-- 帖子列表 -->
        <posts-cell
          v-for="item in postDic.list"
          :key="item.id"
          :posts-item="item"/>
      </vant-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { List, PullRefresh } from "vant";
// 帖子
import PostsCell from "./PostsCell.vue";
import postsListHook from "../hook/postsListHook";
// 轮播图
import swipe from "../hook/swipe";
import Swipe from './Swipe.vue';
// 论坛
import YMForumView from './YMForumView.vue'
import forumRequest from '../hook/forumRequest'

import getElmentHeight from "../hook/getElmentHeight";

import recordScroll from "../hook/recordScroll"

export default {
  name: "ym-game",

   components: {
    "vant-list": List,
    "van-pull-refresh": PullRefresh,
    "posts-cell": PostsCell,
    'swi-pe':Swipe,
    'forum-view':YMForumView
  },

   setup() {
       // 获取根节点高度 以及设置根节点的ref
    const { elmentHeight, elment } = getElmentHeight(50);
    //  轮播图
    const {images, getImages} = swipe()
    // 论坛
    const forums = forumRequest()
    // 帖子列表
    const config = postsListHook()

    // 帖子下拉刷新的方法
    const {onRefresh} = config

     // 记录滚动条距离
    const {scrollF} = recordScroll(elment)

    // 下拉刷新组件的方法
    function refresh(){
      // 请求列表接口
      onRefresh()

      // 请求轮播图接口
      getImages()

    }

    return {
      refresh,
      ...config,
      images,
      forums,
      elmentHeight,
      elment,
      scrollF
    };
  },
};
</script>
<style lang="less" scoped>
.game-container{
  overflow: scroll;
}
</style>