<template>
  <!--  -->
  <div class="new-square" ref="elment" >
    <!-- 标签 -->
    <ym-tags class="tag" :tags="tags" @changeTag="changeTag"/>
    <div class="square-list" ref="squareListElemt" @scroll="scrollF">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <vant-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="全部数据"
          @load="onLoad"
        >
          <!-- 论坛 -->
          <forum-view :forums="forums" />
          <!-- 精华帖子 -->
          <featured-topic />
          <!-- 帖子列表 -->
          <posts-cell
            v-for="item in postDic.list"
            :key="item.id"
            :posts-item="item"
          />
        </vant-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { List, PullRefresh } from "vant";
// import { useRect, useWindowSize } from "@vant/use";
import getElmentHeight from "../hook/getElmentHeight";

// 论坛
import YMForumView from "./YMForumView.vue";
import forumRequest from "../hook/forumRequest";

//精华帖子
import FeaturedTopic from "./FeaturedTopic.vue";

import PostsCell from "./PostsCell.vue";
import postsListHook from "../hook/postsListHook";

import recordScroll from "../hook/recordScroll"

import YMTags from './YMTags.vue'

import tagsRequest from '../hook/tagsRequest'
export default {
  name: "ym-new-square",

  components: {
    "vant-list": List,
   
    "van-pull-refresh": PullRefresh,
    "posts-cell": PostsCell,
    "forum-view": YMForumView,
    "featured-topic": FeaturedTopic,
    'ym-tags': YMTags
  },

  setup() {
    // 获取根节点高度 以及设置根节点的ref
    const { elmentHeight, elment } = getElmentHeight(50);
    // 论坛
    const forums = forumRequest();
    // 帖子列表
    const config = postsListHook();

    // 帖子下拉刷新的方法
    const { onRefresh } = config;

      // 记录滚动条距离  setUpScroll设置位置
    const squareListElemt = ref(null)
    const {scrollF} = recordScroll(squareListElemt)

    //获取标签 (如果内部是字典套着数组 就把里面的数组转成ref)
    // const tags = toRef(tagsRequest(), 'tags')
    const tags = tagsRequest()
    // 切换标签
    const  changeTag = (value)=>{
      console.log('我接收到了');
        console.log(value);
    }

    return {
      squareListElemt,
      ...config,
      tags,
      elment,
      elmentHeight,
      onRefresh,
      scrollF,
      changeTag,
      forums,
    };
  },
};
</script>
<style lang="less" scoped>
.new-square {
  .square-list {
    margin-top:34px;
  }
  .tag {
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    height: 34px;
    z-index: 99;
}
}
</style>