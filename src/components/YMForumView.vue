<template>
  <div class="forum-container" @touchmove.stop>
    <div
      class="forum-container-item"
      v-for="item in forums"
      :key="item.id"
      @click="forumClick(item.id)"
    >
      <van-image :src="item.icon" round fit="cover" />
      <span class="title">
        {{ item.title }}
      </span>
    </div>
    <div class="forum-container-item" @click="addForum">
      <van-image :src="addForumIcon" fit="cover" />
    </div>

    <div class="bottom-view"></div>
  </div>
</template>
<script>
import { Image as VanImage } from "vant";
import addForumIcon from "../assets/topic/new_topic_forum@2x.png";
import { useRouter } from 'vue-router';
export default {
  name: "forum-view",

  props: ["forums"],

  components: {
    "van-image": VanImage,
  },

  setup() {
    const router = useRouter()
    //  点击添加论坛
    const addForum = () => {
        router.push({path:'/forumlist'})
    };
    // 进入论坛详情
    const forumClick = (id) => {
      console.log(id);
    };

    return {
      addForumIcon,
      forumClick,
      addForum,
    };
  },
};
</script>

<style lang="less" scoped>
.forum-container {
  width: 100%;
  display: flex;
  height: 134px;
  box-sizing: border-box;
  padding-top: 30px;
  position: relative;
  overflow: scroll;
  //隐藏滚动条
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none;
 
  .forum-container-item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(~"100vw" / 4.6);
    .van-image {
      width: 52px;
      height: 52px;
    }
  }
  //标题
  .title {
    margin: 8px 3px 0;
    color: #333a4a;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  //底部长条
  .bottom-view {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #f3f3f8;
  }
}
// 隐藏滚动条
 .forum-container::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
</style>