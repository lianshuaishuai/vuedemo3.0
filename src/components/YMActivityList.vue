<template>
  <div class="activity-container" ref="elment">
    <!-- 标签 -->
    <ym-tags class="tags" :tags="tags" @changeTag="changeTag" />
    <div class="activity-list">
      <vant-list :finished="true" finished-text="">
        <ym-activity-cell />
        <ym-activity-cell />
        <ym-activity-cell />
        <ym-activity-cell />
        <ym-activity-cell />
      </vant-list>
    </div>
  </div>
</template>
<script>
import getElmentHeight from "../hook/getElmentHeight";
import YMTags from "./YMTags.vue";
import YMActivityCell from "./YMActivityCell.vue";
import tagsRequest from "../hook/tagsRequest";

// import { ref } from "vue";
import { List } from "vant";
export default {
  name: "ym-activity",

  components: {
    "vant-list": List,
    "ym-tags": YMTags,
    "ym-activity-cell": YMActivityCell,
  },

  setup() {
    // 获取根节点高度 以及设置根节点的ref
    const { elmentHeight, elment } = getElmentHeight(50);
    //     onMounted(()=>{
    //         getImgSize()
    //     })
    //     const getImgSize = ()=>{
    //         const url =  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654313923&t=a9d035e25427771100cb98d50be79f5d"
    //         const image = new Image()
    //         image.src = url
    //         image.onload = ()=>{
    //             console.log(image.width);
    //             console.log(image.height);
    //         }
    //     }
    const tags = tagsRequest(2);
    // 切换标签
    const changeTag = (value) => {
      console.log("我接收到了");
      console.log(value);
    };
    return {
      elmentHeight,
      elment,
      tags,
      changeTag,
    };
  },
};
</script>
<style lang="less" scoped>
.activity-container {

  .activity-list {
    margin-top:34px;
  }
  .tags {
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    height: 34px;
    z-index: 99;
  }
}
</style>